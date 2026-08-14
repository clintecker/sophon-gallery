import type { Study } from "./works";

export function GalleryPlaylist({ studies }: { studies: readonly Study[] }) {
  return (
    <section className="playlist" id="all-studies" aria-label="All 26 video studies">
      <div className="catalog-heading">
        <p>Tap play on any study</p>
        <strong>26 / 26 playable videos</strong>
      </div>
      <ol className="catalog-grid">
        {studies.map((study) => (
          <li key={study.slug}>
            <div className="frame">
              <video
                controls
                loop
                muted
                playsInline
                poster={`/posters/${study.slug}.png`}
                preload="none"
                aria-label={`${study.title} rendered video`}
                data-study-video={study.slug}
              >
                <source src={`/videos/${study.slug}.mp4`} type="video/mp4" />
                H.264 video playback is unavailable in this browser.
              </video>
              <span className="index">S/{study.slug.slice(0, 2)}</span>
            </div>
            <div className="study-copy">
              <h2>{study.title}</h2>
              <p>{study.description}</p>
              <ul aria-label={`${study.title} primitives`}>
                {study.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <div className="catalog-actions">
              <a href={`/videos/${study.slug}.mp4`} download>Download MP4 ↘</a>
              <a href={`/patches/${study.slug}.kdl`}>View patch ↗</a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
