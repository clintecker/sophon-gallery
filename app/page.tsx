import { GalleryPlaylist } from "./gallery-playlist";
import { studies } from "./works";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ study?: string }>;
}) {
  const requested = (await searchParams).study;
  const active = studies.find((study) => study.slug === requested) ?? studies[0];

  return (
    <main>
      <header className="hero">
        <div className="eyebrow"><span /> PROJECT SOPHON · LIVE STUDIES</div>
        <h1>Signal becomes<br /><em>visible.</em></h1>
        <p>
          Twenty-six deterministic visual programs, rendered by Sophon. Tap any
          study to play it; download the video or inspect the authored patch.
        </p>
        <a className="catalog-link" href="#all-studies">See all 26 videos <span>↓</span></a>
        <div className="hero-rule"><span>26 AUTHORED STUDIES</span><span>AUG 2026</span></div>
      </header>

      <GalleryPlaylist active={active} studies={studies} />

      <footer>
        <strong>SOPHON</strong>
        <p>Professional real-time generative visuals, built from explicit signals.</p>
        <span>26 PATCHES · 26 VIDEOS</span>
      </footer>
    </main>
  );
}
