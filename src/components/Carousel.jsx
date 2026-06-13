import { useEffect, useId, useState } from "react";

// Position of each slide relative to the active one, wrapped to the nearest
// direction so the cover-flow loops smoothly (e.g. last → first).
function relativeOffset(index, current, total) {
  let diff = index - current;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

// 3D transform / depth for each slide based on its offset from centre.
function slideLayout(offset) {
  switch (offset) {
    case 0:
      return {
        transform: "translateX(0) rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
      };
    case -1:
      return {
        transform: "translateX(-70%) rotateY(38deg) scale(0.85)",
        opacity: 0.55,
        zIndex: 20,
      };
    case 1:
      return {
        transform: "translateX(70%) rotateY(-38deg) scale(0.85)",
        opacity: 0.55,
        zIndex: 20,
      };
    case -2:
      return {
        transform: "translateX(-118%) rotateY(45deg) scale(0.72)",
        opacity: 0,
        zIndex: 10,
      };
    case 2:
      return {
        transform: "translateX(118%) rotateY(-45deg) scale(0.72)",
        opacity: 0,
        zIndex: 10,
      };
    default:
      return { transform: "translateX(0) scale(0.6)", opacity: 0, zIndex: 0 };
  }
}

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselId = useId();
  const total = images.length;

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % total);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPlaying, total]);

  const goTo = (index) => {
    setCurrent((index + total) % total);
  };

  return (
    <section className="on-dark" aria-label="Club photo carousel">
      <div
        id={carouselId}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:aspect-[16/8]"
        style={{ perspective: "1400px" }}
        aria-live="polite"
      >
        {images.map((image, index) => {
          const offset = relativeOffset(index, current, total);
          const { transform, opacity, zIndex } = slideLayout(offset);
          const isCenter = offset === 0;
          const isNeighbour = offset === -1 || offset === 1;

          return (
            <div
              key={image.src}
              className={`absolute left-1/2 top-0 -ml-[29%] h-full w-[58%] overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
                isCenter ? "shadow-soft ring-1 ring-white/10" : ""
              } ${isNeighbour ? "cursor-pointer" : ""}`}
              style={{ transform, opacity, zIndex }}
              onClick={isNeighbour ? () => goTo(index) : undefined}
              aria-hidden={!isCenter}
            >
              <img
                src={image.src}
                className="h-full w-full object-cover"
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                draggable="false"
              />
              {!isCenter ? (
                <div
                  className="absolute inset-0 bg-navy/30"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          );
        })}

        <button
          className="absolute left-2 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-2xl leading-none text-white transition-colors hover:bg-black/70 sm:left-4"
          type="button"
          aria-label="Previous slide"
          aria-controls={carouselId}
          onClick={() => goTo(current - 1)}
        >
          &#8249;
        </button>
        <button
          className="absolute right-2 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-2xl leading-none text-white transition-colors hover:bg-black/70 sm:right-4"
          type="button"
          aria-label="Next slide"
          aria-controls={carouselId}
          onClick={() => goTo(current + 1)}
        >
          &#8250;
        </button>

        <div
          className="absolute right-3 top-3 z-40 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium tabular-nums text-white"
          aria-hidden="true"
        >
          {current + 1} / {total}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-surface-tint"
          type="button"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          onClick={() => setIsPlaying((playing) => !playing)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div
          className="carousel-dots flex items-center gap-1.5 overflow-x-auto rounded-full px-1 py-1"
          aria-label="Choose carousel slide"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                index === current ? "bg-brand" : "bg-border hover:bg-muted"
              }`}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === current}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
