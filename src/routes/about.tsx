import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { VerificationBadge } from "@/components/VerificationBadge";
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
      { property: "og:url", content: "https://halaltravelscout.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://halaltravelscout.com/about" }],

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
            <p className="mt-6 text-lg text-foreground leading-relaxed">
              I'm Mohamed Mohsen Al Amoodi, and I've spent years traveling — most of
              it as part of a large Gulf family, the way most of us actually travel
              here. Multiple generations, different comfort needs, and a rhythm to the
              trip that most travel content simply doesn't understand.
            </p>
            <p className="mt-4 text-lg text-foreground leading-relaxed">
              That's really why HalalTravelScout exists. Most travel guidance online is
              written for a different kind of traveler entirely — a couple, a solo
              backpacker, a nuclear family of four. It doesn't account for how a GCC
              family actually moves through a trip: who needs rest when, what privacy
              looks like, how meals work when everyone's eating together, what
              "family-friendly" really means when the family is twelve people, not
              four.
            </p>
            <p className="mt-4 text-lg text-foreground leading-relaxed">
              I wanted to build something that starts from that understanding first —
              not as an afterthought, but as the actual starting point.
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
            <p className="mt-4 text-foreground leading-relaxed">
              Most "halal-friendly" content online repeats the same vague lists.
              HalalTravelScout takes the opposite approach: fewer places, more
              verification. If a restaurant is listed, its halal certification has
              been checked. If a prayer facility is mentioned, someone has actually
              prayed there.
            </p>
          </div>
          <div>
            <h2 className="text-3xl">How I write</h2>
            <p className="mt-4 text-foreground leading-relaxed">
              Warm, practical, first-person — the voice of a friend who's just come
              back from the trip. No hype, no "top 100" lists, no filler. If
              something didn't work, that's mentioned too.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">How things are checked</h2>
          <p className="mt-6 text-lg text-foreground leading-relaxed">
            Most of what you'll find here comes from places I've actually been — I've
            personally traveled to the majority of the destinations covered on
            HalalTravelScout, and halal status isn't something I take for granted. On
            the ground, I ask directly: at restaurants, at attractions, at hotels — is
            this halal, is this not, what should a Muslim family actually expect here.
          </p>
          <p className="mt-4 text-lg text-foreground leading-relaxed">
            For the small number of places I haven't personally visited yet, the
            content is built from careful research using reputable, official sources
            — and I review every single piece of content myself before it's
            published, checking it against what I know and can verify, rather than
            publishing anything on autopilot.
          </p>
          <p className="mt-4 text-lg text-foreground leading-relaxed">
            As I continue working with the Halal Travel Network, I'll also be able to
            draw on additional verified industry information — I'll note clearly when
            that becomes part of how something was checked.
          </p>

          <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <p className="text-sm uppercase tracking-widest text-accent font-medium">
              Verification Labels
            </p>
            <p className="mt-2 text-foreground leading-relaxed">
              Throughout HalalTravelScout, places and claims are marked with one of
              two labels, so you always know how the information was checked:
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <VerificationBadge kind="visited" />
                <p className="mt-3 text-sm text-foreground leading-relaxed">
                  I've been there myself — asked locals directly, checked halal
                  status on the ground, seen it firsthand.
                </p>
              </div>
              <div>
                <VerificationBadge kind="researched" />
                <p className="mt-3 text-sm text-foreground leading-relaxed">
                  Carefully compiled from reputable, official sources for places
                  not yet personally visited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container-prose py-20 md:py-24">
        <div className="max-w-3xl mx-auto rounded-2xl border border-accent/40 bg-card p-8 md:p-10">
          <p className="wordmark text-2xl text-accent">A quiet reminder</p>
          <p className="mt-4 text-foreground leading-relaxed">
            Halal guidance on this site reflects personal research. For anything of
            religious weight, please verify with qualified scholars whose guidance
            you follow.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
