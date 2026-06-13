import Container from "../components/Container.jsx";
import CtaSection from "../components/CtaSection.jsx";
import PageHero from "../components/PageHero.jsx";
import PageSection from "../components/PageSection.jsx";

const gallery = [
  {
    src: "/images/womens/WomensSept22-1.jpg",
    alt: "Fleet of Foot women's session photo",
  },
  {
    src: "/images/womens/WomensSept22-2.jpg",
    alt: "Fleet of Foot women's walking football group",
  },
  {
    src: "/images/womens/WomensSept22-3.jpg",
    alt: "Women's walking football players at Fleet of Foot",
  },
  {
    src: "/images/womens/WomensSept22-4.jpg",
    alt: "Fleet of Foot women's training session",
  },
  {
    src: "/images/womens/WomensSept22-5.jpg",
    alt: "Women's walking football match action",
  },
  {
    src: "/images/womens/WomensSept22-6.jpg",
    alt: "Fleet of Foot women's team photo",
  },
  {
    src: "/images/womens/WomensSept22-7.jpg",
    alt: "Fleet of Foot women players together",
  },
];

export default function Women() {
  return (
    <>
      <PageHero
        eyebrow="Women's walking football"
        title="Women at Fleet of Foot"
        intro="The Club is not currently running any women's teams. We do, however, welcome any women interested in playing in a mixed session environment."
        image="/images/womens/WomensSept22-2.jpg"
      />

      <Container>
        <PageSection
          eyebrow="Archive"
          title="Our women's section"
          prose={false}
        >
          <div className="section-prose">
            <p>
              Our women's section previously saw a boom in numbers and enjoyed
              sessions, tournaments, and away days, including a memorable visit
              to Portsmouth.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="aspect-square w-full rounded-2xl border border-border object-cover shadow-card transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            ))}
          </div>
        </PageSection>
      </Container>

      <CtaSection />
    </>
  );
}
