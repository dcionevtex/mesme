'use client';

import {useEffect, useRef, useState} from 'react';

const mobile = '(max-width: 699px)';

function playFilm(video: HTMLVideoElement) {
  const source = matchMedia(mobile).matches ? '/media/hero-mobile.mp4' : '/media/hero-desktop.mp4';
  if (video.getAttribute('src') !== source) video.src = source;
  video.play().catch(() => {
    // The poster and explicit play control also work when the browser blocks autoplay.
  });
}

export function HeroFilm({play, pause}: {play: string; pause: string}) {
  const element = useRef<HTMLVideoElement>(null);
  const interacted = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);

  useEffect(() => {
    const video = element.current;
    if (!video) return;

    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & {connection?: {saveData?: boolean}}).connection;
    let timer: number | undefined;

    function schedule() {
      timer = window.setTimeout(() => {
        if (video && !interacted.current && !motion.matches && !connection?.saveData) {
          playFilm(video);
        }
      }, 650);
    }

    function pauseForReducedMotion(event: MediaQueryListEvent) {
      if (event.matches) video?.pause();
    }

    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, {once: true});
    motion.addEventListener('change', pauseForReducedMotion);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', schedule);
      motion.removeEventListener('change', pauseForReducedMotion);
    };
  }, []);

  return (
    <>
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source media={mobile} srcSet="/media/hero-mobile-480.webp 480w, /media/hero-mobile-800.webp 800w" sizes="100vw" />
          {/* A native picture selects separate portrait and landscape crops before hydration. */}
          <img src="/media/hero-desktop-1600.webp"
            srcSet="/media/hero-desktop-960.webp 960w, /media/hero-desktop-1600.webp 1600w"
            sizes="85vw" alt="" width={1600} height={900} fetchPriority="high" />
        </picture>
        <video
          ref={element}
          className={hasFrame ? 'has-frame' : undefined}
          muted loop playsInline preload="none" tabIndex={-1}
          onPlaying={() => {
            setHasFrame(true);
            setPlaying(true);
          }}
          onPause={() => setPlaying(false)}
          onError={() => {
            setHasFrame(false);
            setPlaying(false);
          }}
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <button
        className="film-control"
        type="button"
        onClick={() => {
          const video = element.current;
          if (!video) return;
          interacted.current = true;
          if (video.paused) playFilm(video);
          else video.pause();
        }}
      >
        <span className={playing ? 'film-icon pause-icon' : 'film-icon play-icon'} aria-hidden="true" />
        <span>{playing ? pause : play}</span>
      </button>
    </>
  );
}
