import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import baliDiorama from "@/assets/bali-diorama.png.asset.json";

export const Route = createFileRoute("/itineraries/bali")({
  head: () => ({
    meta: [
      { title: "Bali Halal Food & Family Travel Guide — HalalTravelScout" },
      {
        name: "description",
        content:
          "Verified halal food and family travel guide for Bali. Includes halal restaurants, prayer spaces, and a 3-day itinerary.",
      },
      {
        property: "og:title",
        content: "Bali Halal Food & Family Travel Guide — HalalTravelScout",
      },
      {
        property: "og:description",
        content:
          "Verified halal restaurants, prayer spaces, and family-friendly stops for a halal-conscious trip to Bali.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://halaltravelscout.lovable.app/itineraries/bali" },
    ],
    links: [{ rel: "canonical", href: "https://halaltravelscout.lovable.app/itineraries/bali" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Bali Halal Food & Family Travel Guide",
          about: "Halal-conscious family travel in Bali, Indonesia",
          url: "https://halaltravelscout.lovable.app/itineraries/bali",
          author: {
            "@type": "Person",
            name: "Mohamed Mohsen Al Amoodi",
          },
          publisher: {
            "@type": "Organization",
            name: "HalalTravelScout",
            url: "https://halaltravelscout.lovable.app",
          },
        }),
      },
    ],
  }),
  component: BaliGuide,
});

const prayerTimes = [
  { name: "Fajr", time: "5:48 AM" },
  { name: "Zuhr", time: "12:18 PM" },
  { name: "Asr", time: "3:36 PM" },
  { name: "Maghrib", time: "6:28 PM" },
  { name: "Isha", time: "7:42 PM" },
];

const halalRestaurants = [
  {
    name: "Warung Indonesia",
    area: "Kuta / Legian",
    note: "Long-standing Indonesian menu with clearly marked halal options; good for a casual family lunch.",
  },
  {
    name: "Malioboro",
    area: "Kuta",
    note: "Halal-certified Indonesian chain restaurant known for nasi campur and grilled chicken.",
  },
  {
    name: "The Halal Boys",
    area: "Seminyak",
    note: "Casual Middle Eastern street-food style; confirm current halal certification on arrival.",
  },
  {
    name: "Sari Ramana",
    area: "Ubud",
    note: "Indian restaurant with vegetarian and halal meat options; useful when exploring central Bali.",
  },
  {
    name: "Hotel resort restaurants",
    area: "Nusa Dua",
    note: "Many international resorts in Nusa Dua carry halal certification for select restaurants — ask at concierge.",
  },
];

const prayerSpaces = [
  {
    name: "Masjid Agung Palapa",
    area: "Nusa Dua",
    note: "A well-known mosque serving the Muslim community and visitors in the resort district.",
  },
  {
    name: "Islamic Centre Nikmatul Iman",
    area: "Jimbaran",
    note: "Mosque near the seafood restaurants; useful before or after a sunset dinner.",
  },
  {
    name: "Masjid Raya Kuta",
    area: "Kuta",
    note: "Central mosque with space for travellers; parking can be busy on Fridays.",
  },
  {
    name: "Mall prayer rooms",
    area: "Beachwalk, Discovery, Mall Bali Galeria",
    note: "Clean musallahs are available in major malls; good for Zuhr and Asr while sightseeing.",
  },
];

const familyStops = [
  {
    name: "Nusa Dua Beach",
    note: "Calm, sheltered water and soft sand make it the most family-friendly beach in southern Bali.",
  },
  {
    name: "Tegallalang Rice Terraces",
    note: "A gentle walk through iconic green terraces; go early to avoid heat and crowds.",
  },
  {
    name: "Uluwatu Cliff Walk",
    note: "Dramatic coastal views from paved paths; skip the monkey crowds if you have small children.",
  },
  {
    name: "Waterbom Bali",
    note: "Well-maintained water park near Kuta with halal food outlets inside.",
  },
];

const itineraryDays = [
  {
    title: "Day 1 — Nusa Dua base & calm beach",
    food: "Lunch at a halal-certified resort restaurant or Warung Indonesia; dinner at a certified spot in the Nusa Dua complex.",
    family: "Settle in at Nusa Dua Beach. The gentle slope and clean facilities make it ideal after a long flight.",
  },
  {
    title: "Day 2 — Ubud rice terraces & culture",
    food: "Book Sari Ramana or another halal-certified Ubud restaurant for lunch; pack snacks for the drive.",
    family: "Tegallalang rice terraces in the morning, then a relaxed afternoon back at the resort pool.",
  },
  {
    title: "Day 3 — Uluwatu cliffs & departure",
    food: "Grilled seafood lunch at a halal-certified Jimbaran restaurant; confirm all mains are halal, not just the seafood.",
    family: "Sunset cliff walk at Uluwatu; leave earlier than GPS suggests for the airport transfer.",
  },
];

function BaliGuide() {
  return (
    <SiteLayout>
      <section className="container-prose pt-16 pb-10 md:pt-24">
        <p className="uppercase tracking-widest text-xs text-accent font-medium">Destination Guide</p>
        <h1 className="mt-3 text-4xl md:text-5xl max-w-3xl">
          Bali Halal Food & Family Travel Guide
        </h1>
        <p className="mt-6 max-w-2xl text-foreground/80 text-lg">
          Indonesia is a Muslim-majority country, but Bali is Hindu-majority — so a halal-conscious trip
          takes a little more planning. This guide covers verified halal restaurants, prayer spaces,
          family-friendly stops, and a practical 3-day itinerary.
        </p>
      </section>

      <section className="container-prose pb-24 space-y-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-border/60 overflow-hidden shadow-lg">
            <img
              src={baliDiorama.url}
              alt="Bali floating island diorama showing Pura Ulun Danu Bratan temple and coastline"
              width={1024}
              height={1024}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl">Sample Prayer Times — Bali (Denpasar)</h2>
              <p className="mt-1 text-sm text-foreground/70">Saturday, 15 March 2026. Times shift through the year; confirm with a local app.</p>
              <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                {prayerTimes.map((t) => (
                  <div key={t.name} className="min-w-[4.5rem]">
                    <dt className="uppercase tracking-wider text-[10px] text-accent font-semibold">{t.name}</dt>
                    <dd className="mt-1 text-foreground/90 font-medium">{t.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl">Where to stay</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Nusa Dua, Seminyak, and Sanur are the most practical bases for Muslim families.
                Nusa Dua in particular has the highest concentration of halal-certified resort restaurants
                and the calmest beaches for young children.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="uppercase tracking-widest text-xs text-accent font-medium">Verified Halal Food</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {halalRestaurants.map((r) => (
              <div key={r.name} className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                <h3 className="text-lg md:text-xl">{r.name}</h3>
                <p className="mt-1 text-sm text-accent font-medium">{r.area}</p>
                <p className="mt-3 text-foreground/85 leading-relaxed text-sm">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/70">
            Always double-check current halal certification before ordering. Menus and certifications change,
            and "no pork" does not always mean fully halal.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="uppercase tracking-widest text-xs text-accent font-medium">Prayer Spaces</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {prayerSpaces.map((p) => (
              <div key={p.name} className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                <h3 className="text-lg md:text-xl">{p.name}</h3>
                <p className="mt-1 text-sm text-accent font-medium">{p.area}</p>
                <p className="mt-3 text-foreground/85 leading-relaxed text-sm">{p.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="uppercase tracking-widest text-xs text-accent font-medium">Family-Friendly Stops</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {familyStops.map((s) => (
              <div key={s.name} className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                <h3 className="text-lg md:text-xl">{s.name}</h3>
                <p className="mt-3 text-foreground/85 leading-relaxed text-sm">{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <p className="uppercase tracking-widest text-xs text-accent font-medium">3-Day Itinerary</p>
          <div className="space-y-4">
            {itineraryDays.map((d, i) => (
              <div key={i} className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                <h3 className="text-lg md:text-xl">{d.title}</h3>
                <dl className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="uppercase tracking-wider text-[10px] text-accent font-semibold">Halal food</dt>
                    <dd className="mt-1 text-foreground/85 leading-relaxed">{d.food}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wider text-[10px] text-accent font-semibold">Family</dt>
                    <dd className="mt-1 text-foreground/85 leading-relaxed">{d.family}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-sm text-center">
          <p className="uppercase tracking-widest text-xs text-accent font-medium">More itineraries</p>
          <h2 className="mt-3 text-2xl md:text-3xl">See all sample trips</h2>
          <p className="mt-3 text-foreground/80 max-w-xl mx-auto">
            Compare Bali with Kuala Lumpur and Istanbul in our fixed, evergreen sample itineraries page.
          </p>
          <Link
            to="/itineraries"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View all itineraries
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
