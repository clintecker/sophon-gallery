import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function catalog() {
  const source = await readFile(new URL("showcase.tsv", root), "utf8");
  return source.trim().split("\n").slice(1).map((line) => line.split("\t"));
}

test("publishes every authored study with its media and patch", async () => {
  const studies = await catalog();
  assert.equal(studies.length, 26);

  await Promise.all(studies.flatMap(([slug]) => [
    access(new URL(`public/videos/${slug}.mp4`, root)),
    access(new URL(`public/posters/${slug}.png`, root)),
    access(new URL(`public/patches/${slug}.kdl`, root)),
  ]));
  await access(new URL("public/og.png", root));

  const source = await readFile(new URL("app/works.ts", root), "utf8");
  for (const [slug, title] of studies) {
    assert.match(source, new RegExp(`\\b${slug.replaceAll("-", "[-]")}\\b`));
    assert.match(source, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("server-renders the complete accessible gallery", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Sophon — 26 Live Visual Studies<\/title>/i);
  assert.match(html, /26 authored studies/i);
  assert.match(html, /property="og:image" content="http:\/\/localhost\/og\.png"/i);
  assert.match(html, /Rotating Crystal Mandala/);
  assert.match(html, /Scene Checker/);
  assert.equal((html.match(/<video\b/g) ?? []).length, 26);
  assert.equal((html.match(/<a href="\/videos\//g) ?? []).length, 26);
  assert.equal((html.match(/<a href="\/patches\//g) ?? []).length, 26);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|MORE STUDIES IN PROGRESS/i);
});
