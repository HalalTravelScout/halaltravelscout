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

type Day = { title: string; food: string; prayer: string; family: string };
type Itinerary = {
  id: string;
  city: string;
  country: string;
  title: string;
  intro: string;
  image: string;
  days: Day[];
};

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
        prayer: "Musallah inside Pavilion KL (Level 6 back-of-house corridor) for Zuhr & Asr.",
        family: "Evening walk along Jalan Alor's covered street for a gentle intro to the city.",
      },
      {
        title: "Day 2 — Old KL & National Mosque",
        food: "Lunch at a halal-certified Malay warung near Central Market.",
        prayer: "Zuhr at Masjid Negara (National Mosque) — visitor abayas provided at the entrance.",
        family: "Merdeka Square, Sultan Abdul Samad building, and the KL Forest Eco Park canopy walk.",
      },
      {
        title: "Day 3 — KLCC & Islamic Arts Museum",
        food: "Halal-certified Middle Eastern lunch in the KLCC area; dinner at Suria KLCC food court (all halal).",
        prayer: "Masjid As-Syakirin inside KLCC Park — a short walk from the Petronas Towers.",
        family: "Islamic Arts Museum Malaysia — one of the calmest, most beautiful museums in the region and very kid-friendly.",
      },
      {
        title: "Day 4 — Batu Caves day trip",
        food: "Pack halal snacks; sit-down lunch back in the city at a certified restaurant.",
        prayer: "Small musallah near the Batu Caves entrance; better facilities at KL Sentral on the way back.",
        family: "The colourful staircase and cave temple are a striking landscape; keep young children close on the climb.",
      },
      {
        title: "Day 5 — Slow morning & departure",
        food: "Breakfast roti canai at a certified mamak; last-minute kuih from the mall.",
        prayer: "KLIA has spacious surau facilities landside and airside — no need to rush salah before flying.",
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
        prayer: "Zuhr at the Blue Mosque (Sultan Ahmed); Asr at Hagia Sophia (now a working mosque again).",
        family: "Walk between the two mosques and rest in the gardens — great for tired little legs.",
      },
      {
        title: "Day 2 — Bosphorus & Üsküdar",
        food: "Grilled fish along the Bosphorus (confirm halal chicken/meat mains for kids at the same spot).",
        prayer: "Beautiful Ottoman mosques on both sides of the water — Mihrimah Sultan in Üsküdar is a favourite.",
        family: "Ferry ride across to the Asian side; the crossing itself is the highlight for children.",
      },
      {
        title: "Day 3 — Grand Bazaar & Süleymaniye",
        food: "Lokantas around the bazaar serve home-style Turkish food; sweets from a well-known baklava house nearby.",
        prayer: "Süleymaniye Mosque is a short uphill walk from the bazaar — spacious and calming.",
        family: "Book Nizamiye courtyard or a hammam session for older kids and adults (family-friendly hours).",
      },
      {
        title: "Day 4 — Slow morning & departure",
        food: "One last simit and çay by the water.",
        prayer: "IST Airport has a generously sized mosque post-security.",
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
        prayer: "Musallah at Bali Collection shopping area; larger mosque a short taxi ride away in Kuta.",
        family: "Calm beach at Nusa Dua — great for young children compared to the surfier west coast.",
      },
      {
        title: "Day 2 — Ubud & rice terraces",
        food: "Book ahead at a halal-certified Ubud restaurant; pack snacks for the drive.",
        prayer: "Bring a prayer mat — options in central Ubud are limited; ask hotel reception for the nearest musallah.",
        family: "Tegallalang rice terraces for the landscape and a gentle walk; skip the monkey forest with very young kids.",
      },
      {
        title: "Day 3 — Uluwatu cliffs & departure",
        food: "Grilled seafood lunch at a halal-certified spot in the Jimbaran area (confirm all mains, not just seafood).",
        prayer: "Ngurah Rai Airport has a musallah — usable but modest; pray before leaving your hotel if possible.",
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
                    <dl className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <dt className="uppercase tracking-wider text-[10px] text-accent font-semibold">Halal food</dt>
                        <dd className="mt-1 text-foreground/85 leading-relaxed">{d.food}</dd>
                      </div>
                      <div>
                        <dt className="uppercase tracking-wider text-[10px] text-accent font-semibold">Prayer</dt>
                        <dd className="mt-1 text-foreground/85 leading-relaxed">{d.prayer}</dd>
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
