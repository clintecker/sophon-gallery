"use client";

import { useState } from "react";
import type { Study } from "./works";

export function GalleryPlaylist({ studies }: { studies: readonly Study[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = studies[selectedIndex];

  const select = (index: number) => {
    setSelectedIndex(index);
    document.getElementById("player")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="playlist" id="all-studies" aria-label="All 26 video studies">
      <div className="player-stage" id="player">
        <div className="player-heading">
          <p>Now playing</p>
          <strong>{selectedIndex + 1} of {studies.length}</strong>
        </div>
        <div className="frame player-frame">
          <video
            key={selected.slug}
            src={`/videos/${selected.slug}.mp4`}
            controls
            autoPlay
            loop
            muted
            playsInline
            poster={`/posters/${selected.slug}.png`}
            preload="auto"
            aria-label={`${selected.title} rendered video`}
          >
            H.264 video playback is unavailable in this browser.
          </video>
          <span className="index">S/{selected.slug.slice(0, 2)}</span>
        </div>
        <div className="active-copy">
          <div>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
          </div>
          <div className="player-actions">
            <button
              type="button"
              onClick={() => select((selectedIndex + studies.length - 1) % studies.length)}
              aria-label="Play previous study"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => select((selectedIndex + 1) % studies.length)}
              aria-label="Play next study"
            >
              Next
            </button>
            <a href={`/videos/${selected.slug}.mp4`} download>Download MP4</a>
            <a href={`/patches/${selected.slug}.kdl`}>View patch</a>
          </div>
        </div>
      </div>

      <div className="catalog-heading">
        <p>Complete video index · tap any title</p>
        <strong>{studies.length} videos</strong>
      </div>
      <ol className="catalog-index">
        {studies.map((study, index) => (
          <li key={study.slug}>
            <button
              type="button"
              className={index === selectedIndex ? "selected" : undefined}
              onClick={() => select(index)}
              aria-current={index === selectedIndex ? "true" : undefined}
              data-study-select={study.slug}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{study.title}</strong>
              <small>{study.tags.join(" · ")}</small>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
