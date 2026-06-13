export default function PageHero({ eyebrow, title, intro, image }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/85 via-navy/80 to-navy/95"
            aria-hidden="true"
          />
        </>
      ) : (
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-navy to-navy-800"
          aria-hidden="true"
        />
      )}

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {eyebrow ? (
          <p className="eyebrow eyebrow-on-dark mb-4">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-4xl text-white md:text-5xl">{title}</h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg text-on-navy-muted">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
