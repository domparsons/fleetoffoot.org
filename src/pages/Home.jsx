import Article from "../components/Article.jsx";
import AudioPlayer from "../components/AudioPlayer.jsx";
import Carousel from "../components/Carousel.jsx";
import PageSection from "../components/PageSection.jsx";
import { carouselImages, homeArticles } from "../data/siteContent.js";

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div className="order-2 md:order-1">
          <img
            src="/images/championshipGroup/championshipGroup.jpg"
            className="w-full rounded-2xl border border-border object-cover shadow-soft"
            alt="Fleet of Foot members at the club championship"
          />
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl">
            Welcome to Fleet of Foot Walking Football Club
          </h1>
          <div className="section-prose mt-4">
            <p>We aim to show you who we are, what we are up to and our plans for the future.</p>
            <p>
              Hopefully, you will find something here that you like and that you will want
              to join in with.
            </p>
          </div>
        </div>
      </section>

      <PageSection title="A Club In Harmony">
        <AudioPlayer src="/files/song.mp3" title="A Club In Harmony" />
      </PageSection>

      <div className="mt-10 border-t border-border pt-10">
        <Carousel images={carouselImages} />
      </div>

      <div className="mt-12">
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
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </Article>
        ))}
      </div>
    </>
  );
}
