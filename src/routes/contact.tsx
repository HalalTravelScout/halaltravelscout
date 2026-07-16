import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HalalTravelScout — Email & Instagram" },
      {
        name: "description",
        content:
          "Get in touch with HalalTravelScout for partnership ideas, corrections, or scouting requests — by email or Instagram.",
      },
      { property: "og:title", content: "Contact HalalTravelScout — Email & Instagram" },
      {
        property: "og:description",
        content: "Email and Instagram — the two best ways to reach HalalTravelScout.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="container-prose pt-16 md:pt-24 pb-24">
        <p className="uppercase tracking-widest text-xs text-accent font-medium">Contact</p>
        <h1 className="mt-3 text-4xl md:text-5xl max-w-3xl">Al salamo Alaikom.</h1>
        <p className="mt-6 max-w-xl text-foreground/80 text-lg">
          Questions, corrections, partnership ideas, or a place you'd love scouted —
          the door is open.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl">
          <a
            href="mailto:halaltravelscout@hotmail.com"
            className="group rounded-2xl border border-border/70 bg-card p-8 hover:border-accent transition"
          >
            <p className="uppercase tracking-widest text-[10px] text-accent font-semibold">
              Email
            </p>
            <p className="mt-3 wordmark text-2xl text-primary group-hover:text-accent transition">
              halaltravelscout@hotmail.com
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Best for partnerships, corrections, and longer notes.
            </p>
          </a>

          <a
            href="https://instagram.com/halaltravelscout"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border/70 bg-card p-8 hover:border-accent transition"
          >
            <p className="uppercase tracking-widest text-[10px] text-accent font-semibold">
              Instagram
            </p>
            <p className="mt-3 wordmark text-2xl text-primary group-hover:text-accent transition">
              @halaltravelscout
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow the journey — 1 country a week, 1 tip a day.
            </p>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
