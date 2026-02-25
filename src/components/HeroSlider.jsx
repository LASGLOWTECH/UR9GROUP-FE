import { useState, useEffect } from "react";
import Slides from './Herolist';

/** Track is 1,2,3,1 so we can slide 3→1 seamlessly then reset */
const TRACK = [...Slides, Slides[0]];

const INTERVAL_MS = 5000;
const TRANSITION_MS = 700;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i < TRACK.length - 1 ? i + 1 : i));
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!noTransition) return;
    const raf = requestAnimationFrame(() => setNoTransition(false));
    return () => cancelAnimationFrame(raf);
  }, [noTransition]);

  return (
    <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }} aria-hidden>
      <div
        className="d-flex h-100"
        style={{
          width: `${TRACK.length * 100}%`,
          transform: `translateX(-${index * (100 / TRACK.length)}%)`,
          transition: noTransition ? "none" : `transform ${TRANSITION_MS}ms ease-in-out`,
        }}
        onTransitionEnd={() => {
          if (index === TRACK.length - 1) {
            setNoTransition(true);
            setIndex(0);
          }
        }}
      >
        {TRACK.map((slide, i) => (
          <div
            key={`${slide.imageUr}-${i}`}
            className="flex-shrink-0 h-100"
            style={{
              width: `${100 / TRACK.length}%`,
              backgroundImage: `url(${slide.imageUr})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}
