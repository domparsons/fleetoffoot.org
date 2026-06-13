import { homeStats } from "../data/siteContent.js";

export default function StatsBar() {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-5 md:-mt-20 md:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card md:grid-cols-4">
        {homeStats.map((stat, index) => (
          <div key={index} className="bg-surface p-6 text-center md:p-8">
            <div className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
