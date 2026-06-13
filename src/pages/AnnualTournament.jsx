import Container from "../components/Container.jsx";
import CtaSection from "../components/CtaSection.jsx";
import PageHero from "../components/PageHero.jsx";
import PageSection from "../components/PageSection.jsx";

const tournamentStats = [
  { value: "£330", label: "Raised for Piggles Trust" },
  { value: "40", label: "Players" },
  { value: "5", label: "Teams" },
  { value: "7", label: "A-side" },
];

export default function AnnualTournament() {
  return (
    <>
      <PageHero
        eyebrow="Annual tournament"
        title="Club Championship"
        intro="Fleet Of Foot walking football club members showed a kind Hart when they staged their club championship."
        image="/images/championshipGroup/championshipGroup.jpg"
      />

      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 md:-mt-16 md:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card md:grid-cols-4">
          {tournamentStats.map((stat) => (
            <div key={stat.label} className="bg-surface p-6 text-center">
              <div className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Container>
        <PageSection
          eyebrow="The day"
          title="How the day unfolded"
          prose={false}
        >
          <div className="section-prose">
            <p>
              Sponsored by the Exchequer pub, Crookham Village, and with Hart
              Leisure Centre providing free pitches, £330 was raised for
              children's charity, Piggles Trust.
            </p>
            <p>
              Long-standing club member Jim Hill organised the event and it
              proved to be a popular attraction for men and women.
            </p>
            <p>
              With about 40 players participating, the players were split into
              five teams, playing seven-side under Walking Football Association
              rules.
            </p>
          </div>
          <blockquote className="mt-8 border-l-4 border-brand pl-5 text-lg italic text-ink">
            This was the biggest and best tournament we have run so far, so a
            big thanks to Everyone Active, the Exchequer for prizes and all who
            played and donated including members of Fleet U3A.
            <footer className="mt-2 text-sm not-italic text-muted">
              — Club founder Robin Howard
            </footer>
          </blockquote>
        </PageSection>

        <PageSection eyebrow="Honours" title="On the day" prose={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <p className="eyebrow">Winners</p>
              <p className="mt-3 text-2xl font-bold text-ink">The Purples</p>
              <p className="mt-1 text-body">
                Top of the pile after four matches.
              </p>
            </div>
            <div className="card p-6">
              <p className="eyebrow">Player of the tournament</p>
              <p className="mt-3 text-2xl font-bold text-ink">Dave Porter</p>
            </div>
          </div>
        </PageSection>

        <PageSection eyebrow="Elsewhere" title="Cup progress">
          <p>
            Meanwhile FOF over 60s advanced to the second round of the WFA
            National Cup after beating Oxford 1-0 at home. Rob Rowley scored a
            late winner after being set up by Mark Pirie.
          </p>
        </PageSection>
      </Container>

      <CtaSection />
    </>
  );
}
