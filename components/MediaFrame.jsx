"use client";

import { useRef, useState, useEffect } from "react";

/*
 * Poster-first media frame for the case study. Robust by design: the
 * <video> ships with the poster and native controls, so it works even
 * with no JS. Once mounted, a nicer play overlay takes over; clicking it
 * starts playback (with sound) and hands off to the native controls.
 * playsInline keeps iOS from forcing fullscreen.
 */
export default function MediaFrame({
  src,
  poster,
  label = "Play",
  hint,
  caption,
  accent = false,
  fit = "cover",
}) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => setMounted(true), []);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.play();
    setStarted(true);
  };

  const showOverlay = mounted && !started;

  // Image-only mode: no video source, just show the still.
  if (!src) {
    return (
      <figure className={`media-frame${accent ? " is-accent" : ""}`}>
        <div className="media-frame-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={caption || label || ""} style={{ objectFit: fit }} loading="lazy" />
        </div>
        {caption && <figcaption className="media-cap">{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className={`media-frame${accent ? " is-accent" : ""}`}>
      <div className="media-frame-inner">
        <video
          ref={ref}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          controls
          onPause={() => {}}
          aria-label={label}
          style={{ objectFit: fit }}
        />
        {showOverlay && (
          <button className="media-play" onClick={play} aria-label={label}>
            <span className="media-play-btn" aria-hidden>
              <svg viewBox="0 0 16 16">
                <path d="M4 2l10 6-10 6z" />
              </svg>
            </span>
            <span className="media-play-text">
              <span className="media-play-label">{label}</span>
              {hint && <span className="media-play-hint">{hint}</span>}
            </span>
          </button>
        )}
      </div>
      {caption && <figcaption className="media-cap">{caption}</figcaption>}
    </figure>
  );
}
