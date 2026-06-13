import AudioPlayer from "./AudioPlayer.jsx";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow mb-4">About the club</p>
          <h2 className="text-3xl md:text-4xl">A Club In Harmony</h2>
          <div className="section-prose mt-5">
            <p>
              Hopefully, you will find something here that you like and that you
              will want to join in with.
            </p>
            <p>
              We first started playing in 2017, coinciding with the opening of
              Fleet's new leisure centre. With membership numbers growing at a
              steady rate, we were soon able to assume formal club status.
            </p>
          </div>
          <div className="mt-8">
            <AudioPlayer src="/files/song.mp3" title="A Club In Harmony" />
          </div>
        </div>
        <div>
          <img
            src="/images/homepage-gallery/image4.jpg"
            alt="Fleet of Foot members outdoors"
            className="w-full rounded-2xl border border-border object-cover shadow-soft"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
