export default function PageSection({
  title,
  eyebrow,
  children,
  prose = true,
  className = "",
}) {
  return (
    <section
      className={`mt-12 border-t border-border pt-12 first:mt-0 first:border-0 first:pt-0 ${className}`}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      {title ? <h2 className="text-2xl md:text-3xl">{title}</h2> : null}
      <div className={`mt-4 ${prose ? "section-prose" : ""}`}>{children}</div>
    </section>
  );
}
