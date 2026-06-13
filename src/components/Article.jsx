export default function Article({ title, paragraphs = [], images = [], children }) {
  return (
    <article className="mt-10 border-t border-border pt-10 first:mt-0 first:border-0 first:pt-0">
      {title ? (
        <h2 className="text-2xl md:text-3xl">{title}</h2>
      ) : null}
      <div className="mt-3 space-y-4 text-base leading-relaxed text-body md:text-lg">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {children}
      {images.length > 0 ? (
        <div
          className={`mt-6 grid gap-4 ${
            images.length > 1 ? "sm:grid-cols-2" : "max-w-2xl"
          }`}
        >
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full rounded-2xl border border-border object-cover shadow-card"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
