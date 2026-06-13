import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
      <img
        src="/images/championshipGroup/championshipGroup.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/95"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 pb-28 pt-20 md:px-8 md:pb-40 md:pt-32">
        <p className="eyebrow eyebrow-on-dark mb-5">
          Walking football in Fleet, Hampshire
        </p>
        <h1 className="max-w-4xl text-4xl text-white md:text-6xl">
          Welcome to Fleet of Foot{" "}
          <span className="italic text-hero-accent">Walking Football Club</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-on-navy-muted md:text-xl">
          We aim to show you who we are, what we are up to and our plans for the
          future.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/information" className="btn btn-primary">
            Information
          </Link>
          <Link to="/annual-tournament" className="btn btn-ghost-dark">
            Annual Tournament
          </Link>
        </div>
      </div>
    </section>
  );
}
