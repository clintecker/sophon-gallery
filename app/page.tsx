import { studies } from "./works";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="eyebrow"><span /> PROJECT SOPHON · LIVE STUDIES</div>
        <h1>Signal becomes<br /><em>visible.</em></h1>
        <p>
          Twenty-six deterministic visual programs, rendered by Sophon. Tap any
          study to play it; download the video or inspect the authored patch.
        </p>
        <a className="catalog-link" href="#catalog">Explore all 26 studies <span>↓</span></a>
        <div className="hero-rule"><span>26 AUTHORED STUDIES</span><span>AUG 2026</span></div>
      </header>

      <section className="gallery" id="catalog" aria-label="Sophon visual studies">
        {studies.map((work) => (
          <article className="study" key={work.slug}>
            <div className="frame">
              <video
                controls
                loop
                muted
                playsInline
                poster={`/posters/${work.slug}.png`}
                preload="none"
                aria-label={`${work.title} rendered video`}
              >
                <source src={`/videos/${work.slug}.mp4`} type="video/mp4" />
                H.264 video playback is unavailable in this browser.
              </video>
              <span className="index">S/{work.slug.slice(0, 2)}</span>
            </div>
            <div className="study-copy">
              <div>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>
              <div className="meta">
                <ul aria-label={`${work.title} primitives`}>
                  {work.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="links">
                  <a href={`/videos/${work.slug}.mp4`} download>Download MP4 <span>↘</span></a>
                  <a href={`/patches/${work.slug}.kdl`}>View patch <span>↗</span></a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <strong>SOPHON</strong>
        <p>Professional real-time generative visuals, built from explicit signals.</p>
        <span>26 PATCHES · 26 VIDEOS</span>
      </footer>
    </main>
  );
}
