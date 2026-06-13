export default function Article({
  title,
  paragraphs = [],
  images = [],
  children,
}) {
  return (
    <article className="card p-6 md:p-8">
      {title ? <h3 className="text-2xl text-ink">{title}</h3> : null}
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
              className="w-full rounded-xl border border-border object-cover"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
