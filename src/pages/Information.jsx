import Container from "../components/Container.jsx";
import CtaSection from "../components/CtaSection.jsx";
import PageHero from "../components/PageHero.jsx";
import PageSection from "../components/PageSection.jsx";
import { sessions, sponsors } from "../data/siteContent.js";

const costStats = [
  { value: "£4", label: "Per session" },
  { value: "£10", label: "Annual membership" },
  { value: "3", label: "Sessions to try" },
];

export default function Information() {
  return (
    <>
      <PageHero
        eyebrow="Club information"
        title="Everything you need to play"
        intro="Where we play, when we play, what it costs, and how the club is run."
        image="/images/carousel/016.JPG"
      />

      <Container>
        <PageSection
          eyebrow="Sessions"
          title="Where and when we play"
          prose={false}
        >
          <div className="section-prose">
            <p>We operate out of the Hart Leisure Centre in Hitches Lane.</p>
            <p>
              We play exclusively outdoors on 3G surfaces, using either the 5
              aside cages or areas of the full size pitch.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sessions.map((session) => (
              <div key={session.day} className="card p-6">
                <p className="eyebrow">{session.day}</p>
                <p className="mt-3 text-xl font-bold text-ink">
                  {session.time}
                </p>
                <p className="mt-1 text-body">{session.place}</p>
              </div>
            ))}
          </div>
          <div className="section-prose mt-6">
            <p>Sessions are mostly men, but ladies can play.</p>
          </div>
        </PageSection>

        <PageSection
          eyebrow="Membership"
          title="Cost of membership"
          prose={false}
        >
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {costStats.map((stat) => (
              <div key={stat.label} className="bg-surface p-5 text-center">
                <div className="text-2xl font-extrabold text-ink md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="section-prose mt-6">
            <p>
              Each session carries a £4 attendance fee. After 3 sessions, new
              members are required to pay a £10 membership fee if they wish to
              continue. Thereafter, there is a £10 annual renewal.
            </p>
            <p>
              The Club has its own bank account and all monies are paid
              electronically into it.
            </p>
            <p>Club account details: 40-21-27 / 71586602.</p>
          </div>
        </PageSection>

        <PageSection eyebrow="How we play" title="On the field" prose={false}>
          <div className="section-prose">
            <p>
              Playing is centred around the above sessions, which begin with a
              warm-up followed by typically 5 or 6 aside games in 10 minute
              sections with 2 minutes rest in between.
            </p>
            <p>
              We play in accordance with the rules of the Walking Football
              Association, modified only by adherence to Hampshire FA's adoption
              of a 3 touch rule.
            </p>
            <p>
              The WFA and our Club promote walking football as a predominately
              non-contact sport where players can exercise in a competitive but
              safe environment showing mutual respect.
            </p>
          </div>
          <a
            href="https://thewfa.co.uk/laws-of-the-game/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost mt-6"
          >
            WFA Laws of the Game →
          </a>
        </PageSection>

        <PageSection
          eyebrow="About the club"
          title="Club history and organisation"
        >
          <p>
            We first started playing in 2017, coinciding with the opening of
            Fleet's new leisure centre. With membership numbers growing at a
            steady rate, we were soon able to assume formal club status.
          </p>
          <p>
            The Club is affiliated to both the Walking Football Association and
            Hampshire FA.
          </p>
        </PageSection>

        <PageSection eyebrow="Support us" title="Our sponsors" prose={false}>
          <div className="section-prose">
            <p>
              We welcome financial sponsorship from supportive organisations and
              business. In return, we provide coverage in local newspapers and
              sometimes regional television.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {sponsors.map((sponsor) =>
              sponsor.href ? (
                <a
                  key={sponsor.label}
                  href={sponsor.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card flex items-center justify-between gap-3 p-4 no-underline transition-colors hover:border-muted"
                >
                  <span className="font-semibold text-ink">
                    {sponsor.label}
                  </span>
                  <span aria-hidden="true" className="text-brand">
                    →
                  </span>
                </a>
              ) : (
                <div
                  key={sponsor.label}
                  className="card p-4 font-semibold text-ink"
                >
                  {sponsor.label}
                </div>
              ),
            )}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Documents"
          title="Club constitution"
          prose={false}
        >
          <a
            href="/files/Club Constitution.pdf"
            className="card flex w-full max-w-xl items-center gap-4 p-4 no-underline transition-colors hover:border-muted"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-navy text-xs font-bold text-white"
              aria-hidden="true"
            >
              PDF
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="font-semibold text-ink">Club Constitution</span>
              <span className="text-sm text-muted">PDF document · 50 KB</span>
            </span>
            <span className="hidden flex-none text-sm font-medium text-brand sm:inline">
              Open
            </span>
          </a>
        </PageSection>
      </Container>

      <CtaSection />
    </>
  );
}
