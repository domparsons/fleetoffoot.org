import { useEffect, useId, useState } from "react";

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
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy shadow-soft sm:aspect-[16/9]">
        <div
          id={carouselId}
          className="flex h-full transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${current * 100}%)` }}
          aria-live="polite"
        >
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              className="h-full w-full flex-[0_0_100%] object-cover"
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              aria-hidden={index !== current}
            />
          ))}
        </div>

        <button
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl leading-none text-white transition-colors hover:bg-black/65"
          type="button"
          aria-label="Previous slide"
          aria-controls={carouselId}
          onClick={() => goTo(current - 1)}
        >
          &#8249;
        </button>
        <button
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl leading-none text-white transition-colors hover:bg-black/65"
          type="button"
          aria-label="Next slide"
          aria-controls={carouselId}
          onClick={() => goTo(current + 1)}
        >
          &#8250;
        </button>

        <div
          className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium tabular-nums text-white"
          aria-hidden="true"
        >
          {current + 1} / {total}
        </div>

        <div className="absolute inset-x-3 bottom-3 flex items-center gap-3">
          <button
            className="shrink-0 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-black/75"
            type="button"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <div
            className="carousel-dots flex items-center gap-1.5 overflow-x-auto rounded-full bg-black/35 px-2.5 py-2"
            aria-label="Choose carousel slide"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                className={`h-2 w-2 shrink-0 rounded-full border border-white/85 transition-colors ${
                  index === current ? "bg-white" : "bg-transparent hover:bg-white/70"
                }`}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === current}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
