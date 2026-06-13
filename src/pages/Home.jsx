import AboutSection from "../components/AboutSection.jsx";
import Article from "../components/Article.jsx";
import Carousel from "../components/Carousel.jsx";
import Container from "../components/Container.jsx";
import CtaSection from "../components/CtaSection.jsx";
import Hero from "../components/Hero.jsx";
import SessionsSection from "../components/SessionsSection.jsx";
import StatsBar from "../components/StatsBar.jsx";
import { carouselImages, homeArticles } from "../data/siteContent.js";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <SessionsSection />

      <Container className="pb-16 md:pb-24">
        <Carousel images={carouselImages} />
      </Container>

      <section className="mx-auto max-w-6xl px-5 pb-4 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">From the club</p>
          <h2 className="text-3xl md:text-4xl">Club news and match reports</h2>
        </div>
        <div className="mt-10 space-y-6">
          {homeArticles.map((article) => (
            <Article
              key={article.title}
              title={article.title}
              paragraphs={article.paragraphs}
              images={article.images}
            >
              {article.links ? (
                <div className="mt-4 grid gap-1.5">
                  {article.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-link w-fit"
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </Article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
