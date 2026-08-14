import Image from "next/image";
import type { Study } from "./works";

export function GalleryPlaylist({ active, studies }: { active: Study; studies: readonly Study[] }) {
  return (
    <section className="playlist" id="all-studies" aria-label="All 26 video studies">
      <div className="player-stage" id="player">
        <div className="player-heading">
          <p>Now playing</p>
          <strong>Study {active.slug.slice(0, 2)}</strong>
        </div>
        <div className="frame player-frame">
          <video
            src={`/videos/${active.slug}.mp4`}
            controls
            loop
            muted
            playsInline
            poster={`/posters/${active.slug}.png`}
            preload="metadata"
            aria-label={`${active.title} rendered video`}
          >
            H.264 video playback is unavailable in this browser.
          </video>
          <span className="index">S/{active.slug.slice(0, 2)}</span>
        </div>
        <div className="active-copy">
          <div>
            <h2>{active.title}</h2>
            <p>{active.description}</p>
          </div>
          <ul aria-label={`${active.title} primitives`}>
            {active.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </div>

      <div className="catalog-heading">
        <p>Tap any study to play it above</p>
        <strong>26 / 26 available</strong>
      </div>
      <ol className="catalog-grid">
        {studies.map((study) => (
          <li key={study.slug} className={active.slug === study.slug ? "selected" : undefined}>
            <a
              href={`/?study=${study.slug}#player`}
              data-study-select={study.slug}
              aria-current={active.slug === study.slug ? "true" : undefined}
            >
              <Image
                src={`/posters/${study.slug}.png`}
                alt=""
                loading="lazy"
                width={640}
                height={360}
              />
              <span>{study.slug.slice(0, 2)}</span>
              <strong>{study.title}</strong>
            </a>
            <div className="catalog-actions">
              <a href={`/videos/${study.slug}.mp4`} download>MP4 ↘</a>
              <a href={`/patches/${study.slug}.kdl`}>PATCH ↗</a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
