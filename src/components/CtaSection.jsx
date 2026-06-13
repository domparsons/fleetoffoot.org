import { contactMethods } from "../data/siteContent.js";

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div className="on-dark relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-white md:px-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-on-dark mb-4">Come and play</p>
          <h2 className="text-3xl text-white md:text-4xl">
            Come along and give it a go
          </h2>
          <p className="mt-5 text-lg text-on-navy-muted">
            New players are always welcome. For more information, or if you
            would like to join us, get in touch with Robin.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <a
              key={method.value}
              href={method.href}
              className="group flex flex-col rounded-2xl bg-navy-800 p-6 transition-colors hover:bg-white/10"
            >
              <span className="eyebrow eyebrow-on-dark">{method.label}</span>
              <span className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-white">
                {method.value}
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
