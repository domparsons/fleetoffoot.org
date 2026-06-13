import { sessions } from "../data/siteContent.js";

export default function SessionsSection() {
  return (
    <section className="on-dark bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow eyebrow-on-dark mb-4">When we play</p>
            <h2 className="text-3xl text-white md:text-4xl">
              Weekly sessions at Hart Leisure Centre
            </h2>
          </div>
          <p className="text-lg text-on-navy-muted">
            We operate out of the Hart Leisure Centre in Hitches Lane. We play
            exclusively outdoors on 3G surfaces, using either the 5 aside cages
            or areas of the full size pitch.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
          {sessions.map((session) => (
            <div key={session.day} className="bg-navy p-7 md:p-8">
              <p className="eyebrow eyebrow-on-dark">{session.day}</p>
              <p className="mt-4 text-2xl font-bold text-white">
                {session.time}
              </p>
              <p className="mt-2 text-on-navy-muted">{session.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
