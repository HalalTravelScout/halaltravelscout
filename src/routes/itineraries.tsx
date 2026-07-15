import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import klImg from "@/assets/hero-landscape.jpg";
import istImg from "@/assets/istanbul-architecture.jpg";
import baliImg from "@/assets/bali-landscape.jpg";

export const Route = createFileRoute("/itineraries")({
  head: () => ({
    meta: [
      { title: "Sample Itineraries — HalalTravelScout" },
      {
        name: "description",
        content:
          "Three illustrative halal family itineraries — Kuala Lumpur, Istanbul, and Bali — to inspire your own planning.",
      },
      { property: "og:title", content: "Sample Itineraries — HalalTravelScout" },
      {
        property: "og:description",
        content: "Example halal family trips for Kuala Lumpur, Istanbul, and Bali.",
      },
    ],
  }),
  component: Itineraries,
});

type Day = { title: string; food: string; family: string };
type Itinerary = {
  id: string;
  city: string;
  country: string;
  title: string;
  intro: string;
  image: string;
  days: Day[];
};

const samplePrayerTimes = [
  {
    date: "Saturday, 15 March 2026",
    city: "Kuala Lumpur",
    times: [
      { name: "Fajr", time: "6:12 AM" },
      { name: "Zuhr", time: "1:18 PM" },
      { name: "Asr", time: "4:42 PM" },
      { name: "Maghrib", time: "7:28 PM" },
      { name: "Isha", time: "8:42 PM" },
    ],
  },
  {
    date: "Saturday, 15 March 2026",
    city: "Istanbul",
    times: [
      { name: "Fajr", time: "5:42 AM" },
      { name: "Zuhr", time: "1:08 PM" },
      { name: "Asr", time: "4:40 PM" },
      { name: "Maghrib", time: "7:45 PM" },
      { name: "Isha", time: "9:18 PM" },
    ],
  },
  {
    date: "Saturday, 15 March 2026",
    city: "Bali (Denpasar)",
    times: [
      { name: "Fajr", time: "5:48 AM" },
      { name: "Zuhr", time: "12:18 PM" },
      { name: "Asr", time: "3:36 PM" },
      { name: "Maghrib", time: "6:28 PM" },
      { name: "Isha", time: "7:42 PM" },
    ],
  },
];

const itineraries: Itinerary[] = [
  {
    id: "kl",
    city: "Kuala Lumpur",
    country: "Malaysia",
    title: "5-Day Family Itinerary: Kuala Lumpur",
    intro:
      "Kuala Lumpur is arguably the easiest big city in the world for a Muslim family. JAKIM-certified halal food is everywhere, mosques dot most neighbourhoods, and mall musallahs are common.",
    image: klImg,
    days: [
      {
        title: "Day 1 — Arrive & settle in Bukit Bintang",
        food: "Nasi lemak at a JAKIM-certified café near the hotel; teh tarik for the jet lag.",
        family: "Evening walk along Jalan Alor's covered street for a gentle intro to the city.",
      },
      {
        title: "Day 2 — Old KL & National Mosque",
        food: "Lunch at a halal-certified Malay warung near Central Market.",
        family: "Merdeka Square, Sultan Abdul Samad building, and the KL Forest Eco Park canopy walk.",
      },
      {
        title: "Day 3 — KLCC & Islamic Arts Museum",
        food: "Halal-certified Middle Eastern lunch in the KLCC area; dinner at Suria KLCC food court (all halal).",
        family: "Islamic Arts Museum Malaysia — one of the calmest, most beautiful museums in the region and very kid-friendly.",
      },
      {
        title: "Day 4 — Batu Caves day trip",
        food: "Pack halal snacks; sit-down lunch back in the city at a certified restaurant.",
        family: "The colourful staircase and cave temple are a striking landscape; keep young children close on the climb.",
      },
      {
        title: "Day 5 — Slow morning & departure",
        food: "Breakfast roti canai at a certified mamak; last-minute kuih from the mall.",
        family: "Souvenir shopping at Central Market or Publika before heading to the airport.",
      },
    ],
  },
  {
    id: "ist",
    city: "Istanbul",
    country: "Turkey",
    title: "4-Day Family Itinerary: Istanbul",
    intro:
      "Istanbul is layered, walkable, and quietly generous to Muslim families. Meat is generally halal by default in local restaurants, and prayer never feels far away.",
    image: istImg,
    days: [
      {
        title: "Day 1 — Sultanahmet on foot",
        food: "Traditional Turkish breakfast at a family-run café in Sultanahmet.",
        family: "Walk between the Blue Mosque and Hagia Sophia and rest in the gardens — great for tired little legs.",
      },
      {
        title: "Day 2 — Bosphorus & Üsküdar",
        food: "Grilled fish along the Bosphorus (confirm halal chicken/meat mains for kids at the same spot).",
        family: "Ferry ride across to the Asian side; the crossing itself is the highlight for children.",
      },
      {
        title: "Day 3 — Grand Bazaar & Süleymaniye",
        food: "Lokantas around the bazaar serve home-style Turkish food; sweets from a well-known baklava house nearby.",
        family: "Book a courtyard stop or a family-friendly hammam session for older kids and adults.",
      },
      {
        title: "Day 4 — Slow morning & departure",
        food: "One last simit and çay by the water.",
        family: "If time allows, a short stop at Miniatürk to see Turkey's monuments in miniature — a hit with kids.",
      },
    ],
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonesia",
    title: "3-Day Family Itinerary: Bali (halal-conscious)",
    intro:
      "Bali requires more planning than KL or Istanbul, but a halal-conscious trip is very doable — especially staying near Nusa Dua, Seminyak, or Sanur where certified halal restaurants and prayer rooms are easier to find.",
    image: baliImg,
    days: [
      {
        title: "Day 1 — Nusa Dua base & beach day",
        food: "Halal-certified Indonesian restaurant inside the Nusa Dua complex; nasi campur for the whole family.",
        family: "Calm beach at Nusa Dua — great for young children compared to the surfier west coast.",
      },
      {
        title: "Day 2 — Ubud & rice terraces",
        food: "Book ahead at a halal-certified Ubud restaurant; pack snacks for the drive.",
        family: "Tegallalang rice terraces for the landscape and a gentle walk; skip the monkey forest with very young kids.",
      },
      {
        title: "Day 3 — Uluwatu cliffs & departure",
        food: "Grilled seafood lunch at a halal-certified spot in the Jimbaran area (confirm all mains, not just seafood).",
        family: "Sunset at the Uluwatu cliffs is the postcard view; leave earlier than you think for the drive.",
      },
    ],
  },
];

function Itineraries() {
  return (
    <SiteLayout>
      <section className="container-prose pt-16 pb-10 md:pt-24">
        <p className="uppercase tracking-widest text-xs text-accent font-medium">Sample Itineraries</p>
        <h1 className="mt-3 text-4xl md:text-5xl max-w-3xl">
          Example trips to inspire your planning.
        </h1>
        <p className="mt-6 max-w-2xl text-foreground/80 text-lg">
          These aren't a growing blog archive — they're three fixed, illustrative itineraries.
          Use them as a shape for your own family trip. Verify current halal certifications
          and opening hours before you book.
        </p>
      </section>

      <section className="container-prose pb-24 space-y-20">
        <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="uppercase tracking-widest text-xs text-accent font-medium">Sample Prayer Times</p>
              <h2 className="mt-2 text-xl md:text-2xl">
                {samplePrayerTimes.city} — {samplePrayerTimes.date}
              </h2>
              <p className="mt-1 text-sm text-foreground/70">
                Times shift through the year; use a local prayer-time app to confirm.
              </p>
            </div>
            <dl className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {samplePrayerTimes.times.map((t) => (
                <div key={t.name} className="min-w-[4.5rem]">
                  <dt className="uppercase tracking-wider text-[10px] text-accent font-semibold">{t.name}</dt>
                  <dd className="mt-1 text-foreground/90 font-medium">{t.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {itineraries.map((it) => (
          <article key={it.id} id={it.id} className="scroll-mt-24">
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <img
                  src={it.image}
                  alt={`${it.city} landscape`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="rounded-2xl border border-border/60 shadow-lg object-cover aspect-[4/5] w-full"
                />
                <div className="mt-4">
                  <p className="text-sm uppercase tracking-widest text-accent">
                    {it.country}
                  </p>
                  <h2 className="mt-1 text-2xl md:text-3xl">{it.title}</h2>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{it.intro}</p>
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                {it.days.map((d, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/70 bg-card p-6 shadow-sm"
                  >
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
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
