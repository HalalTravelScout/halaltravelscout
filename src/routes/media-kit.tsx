import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/media-kit")({
  head: () => ({
    meta: [
      { title: "Media Kit & Partnerships — HalalTravelScout" },
      {
        name: "description",
        content:
          "Partnership overview for hotels, DMCs, and tourism boards working with Muslim family travellers.",
      },
      { property: "og:title", content: "Media Kit & Partnerships — HalalTravelScout" },
      {
        property: "og:description",
        content: "Niche, audience, content formats, and how to partner with HalalTravelScout.",
      },
    ],
  }),
  component: MediaKit,
});

function MediaKit() {
  return (
    <SiteLayout>
      <section className="container-prose pt-16 md:pt-24 pb-10">
        <p className="uppercase tracking-widest text-xs text-accent font-medium">Media Kit</p>
        <h1 className="mt-3 text-4xl md:text-5xl max-w-3xl">
          Partner with a trusted voice in halal family travel.
        </h1>
        <p className="mt-6 max-w-2xl text-foreground/80 text-lg">
          For hotels, destination management companies, and tourism boards serving
          Muslim family travellers — here's what HalalTravelScout offers.
        </p>
      </section>

      <section className="container-prose pb-16 grid md:grid-cols-2 gap-6">
        {[
          {
            h: "Niche",
            p: "Halal family travel — verified food, prayer facilities, and family-friendly stops. A calm, trustworthy voice in a noisy space.",
          },
          {
            h: "Target audience",
            p: "Muslim families planning meaningful trips: parents in their 30s–55s, multi-generational travellers, and modest-conscious solo scouts.",
          },
          {
            h: "Content format",
            p: "Long-form itineraries, short-form Instagram tips, and destination scouting notes. Static, evergreen web content — no algorithmic churn.",
          },
          {
            h: "What's offered",
            p: "Hosted scouting visits, verified feature coverage, Instagram collaborations, and honest partner reviews with clear disclosure.",
          },
        ].map((c) => (
          <div key={c.h} className="rounded-2xl border border-border/70 bg-card p-8">
            <h3 className="text-xl">{c.h}</h3>
            <p className="mt-3 text-foreground/85 leading-relaxed">{c.p}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary/50 border-y border-border/60">
        <div className="container-prose py-16">
          <h2 className="text-2xl md:text-3xl">Audience snapshot</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Live numbers — updated manually as the project grows.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Instagram followers", value: "Coming soon" },
              { label: "Average engagement rate", value: "Coming soon" },
              { label: "Primary markets", value: "Coming soon" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/70 bg-card p-6"
              >
                <p className="uppercase tracking-wider text-[10px] text-accent font-semibold">
                  {s.label}
                </p>
                <p className="mt-2 wordmark text-2xl">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl text-primary-foreground">Let's talk</h2>
          <p className="mt-4 max-w-xl mx-auto opacity-90">
            Partnership enquiries from hotels, DMCs, and tourism boards are always
            welcome. A short note about your destination and audience is the best
            starting point.
          </p>
          <a
            href="mailto:halaltravelscout@hotmail.com"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
          >
            halaltravelscout@hotmail.com
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
