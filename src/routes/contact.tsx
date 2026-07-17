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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
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

          <a
            href="tel:+971507710072"
            className="group rounded-2xl border border-border/70 bg-card p-8 hover:border-accent transition"
          >
            <p className="uppercase tracking-widest text-[10px] text-accent font-semibold">
              Phone
            </p>
            <p className="mt-3 wordmark text-2xl text-primary group-hover:text-accent transition">
              Mohamed Mohsen Al Amoodi
            </p>
            <p className="mt-1 wordmark text-xl text-primary/80 group-hover:text-accent transition">
              +971 50 771 0072
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Best for quick questions or urgent trip planning.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-al-amoodi-93a2a7422"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border/70 bg-card p-8 hover:border-accent transition"
          >
            <p className="uppercase tracking-widest text-[10px] text-accent font-semibold">
              LinkedIn
            </p>
            <p className="mt-3 wordmark text-2xl text-primary group-hover:text-accent transition">
              Mohamed Al Amoodi
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow our journey and connect professionally.
            </p>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
