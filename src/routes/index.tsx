import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-landscape.jpg";
import foodImg from "@/assets/food-malaysia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HalalTravelScout — Halal Family Travel, Verified" },
      {
        name: "description",
        content:
          "Warm, practical halal travel notes from an insider scout. Verified food, prayer facilities, and family-friendly stops.",
      },
      { property: "og:image", content: "https://halaltravelscout.com/og-hero.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Skyline at golden hour with mosque domes framed by tropical greenery"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.03_175/0.55)] via-[oklch(0.22_0.03_175/0.4)] to-background" />
        </div>
        <div className="relative container-prose py-24 md:py-36 text-center">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[color:var(--cream)]/90 mb-6">
            Travel · Discover · Verify
          </p>
          <h1 className="wordmark text-5xl md:text-7xl text-[color:var(--cream)]">
            HalalTravelScout
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[color:var(--cream)]/95 italic">
            1 country a week, 1 tip a day — follow the journey.
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-[color:var(--cream)]/90 text-base md:text-lg">
            An insider scout for halal family travel. Verified food, prayer facilities, and
            family-friendly stops — written honestly, checked carefully.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/itineraries"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
            >
              Sample itineraries
            </Link>
            <a
              href="https://instagram.com/halaltravelscout"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[color:var(--cream)]/70 text-[color:var(--cream)] px-6 py-3 text-sm font-medium hover:bg-[color:var(--cream)]/10 transition"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-prose py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-xs text-accent font-medium">Hello, salaam</p>
          <h2 className="mt-3 text-3xl md:text-4xl">A quiet, careful travel companion for Muslim families.</h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            HalalTravelScout is a long-term personal project — one traveler, one notebook,
            one country at a time. The goal is simple: skip the vague "halal-friendly"
            labels and share what's actually verified on the ground, so your family can
            plan with confidence.
          </p>
        </div>
      </section>

      {/* What halal travel means */}
      <section className="bg-secondary/50 border-y border-border/60">
        <div className="container-prose py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">What "halal travel" means in practice</h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              If you're new to the term, halal travel is simply travel planned so a Muslim
              family can move through the day with peace of mind. In practice, three things
              matter most:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-4">
                <span className="mt-1 inline-block w-8 h-8 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-serif">1</span>
                <div>
                  <p className="font-semibold">Certified halal food</p>
                  <p className="text-sm text-muted-foreground">
                    Restaurants and cafés with recognised halal certification — not just
                    "no pork on the menu."
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-block w-8 h-8 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-serif">2</span>
                <div>
                  <p className="font-semibold">Prayer facilities</p>
                  <p className="text-sm text-muted-foreground">
                    Nearby mosques, musallahs in malls and airports, or quiet rooms suitable
                    for salah on the go.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-block w-8 h-8 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-serif">3</span>
                <div>
                  <p className="font-semibold">Family-friendly, halal-verified stops</p>
                  <p className="text-sm text-muted-foreground">
                    Attractions and neighbourhoods that work for kids, elders, and modest
                    dress — checked, not assumed.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src={foodImg}
              alt="Overhead spread of halal dishes on a wooden table"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-2xl shadow-xl border border-border/60 object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Trust note */}
      <section className="container-prose py-20 md:py-24">
        <div className="max-w-3xl mx-auto rounded-2xl border border-accent/40 bg-card p-8 md:p-10 text-center">
          <p className="wordmark text-2xl text-accent">A note on trust</p>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            Everything shared here reflects personal research and firsthand scouting. For
            anything of religious significance, please verify with qualified scholars whose
            guidance you follow. This site is a starting point — not a fatwa.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl text-primary-foreground">Follow the journey</h2>
          <p className="mt-4 max-w-xl mx-auto opacity-90">
            One country a week. One tip a day. Real notes from real trips.
          </p>
          <a
            href="https://instagram.com/halaltravelscout"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
          >
            @halaltravelscout
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
