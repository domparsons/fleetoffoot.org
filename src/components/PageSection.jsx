export default function PageSection({ title, eyebrow, children, className = "" }) {
  return (
    <section
      className={`mt-10 border-t border-border pt-10 first:mt-0 first:border-0 first:pt-0 ${className}`}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      {title ? <h2 className="text-2xl md:text-3xl">{title}</h2> : null}
      <div className="section-prose mt-4">{children}</div>
    </section>
  );
}
