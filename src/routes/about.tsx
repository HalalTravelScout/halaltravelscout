import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import mapImg from "@/assets/map-objects.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HalalTravelScout — Halal Family Travel" },
      {
        name: "description",
        content:
          "HalalTravelScout is a long-term personal project by one traveler — verified halal food, prayer facilities, and family-friendly stops, not fast-launch content.",
      },
      { property: "og:title", content: "About HalalTravelScout — Halal Family Travel" },
      {
        property: "og:description",
        content:
          "A long-term personal project built on verified, checkable information — one traveler, one honest voice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://halaltravelscout.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://halaltravelscout.lovable.app/about" }],

  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="container-prose pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-accent font-medium">About</p>
            <h1 className="mt-3 text-4xl md:text-5xl">A slow, careful travel project.</h1>
            <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
              HalalTravelScout was built as a long-term personal project — not a
              fast-launch business. One traveler, a notebook, and a habit of asking
              twice before recommending anywhere.
            </p>
          </div>
          <img
            src={mapImg}
            alt="Vintage world map with compass and passport"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-2xl border border-border/60 shadow-lg object-cover aspect-square"
          />
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border/60">
        <div className="container-prose py-20 md:py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl">What makes it different</h2>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Most "halal-friendly" content online repeats the same vague lists.
              HalalTravelScout takes the opposite approach: fewer places, more
              verification. If a restaurant is listed, its halal certification has
              been checked. If a prayer facility is mentioned, someone has actually
              prayed there.
            </p>
          </div>
          <div>
            <h2 className="text-3xl">How I write</h2>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Warm, practical, first-person — the voice of a friend who's just come
              back from the trip. No hype, no "top 100" lists, no filler. If
              something didn't work, that's mentioned too.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose py-20 md:py-24">
        <div className="max-w-3xl mx-auto rounded-2xl border border-accent/40 bg-card p-8 md:p-10">
          <p className="wordmark text-2xl text-accent">A quiet reminder</p>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            Halal guidance on this site reflects personal research. For anything of
            religious weight, please verify with qualified scholars whose guidance
            you follow.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
