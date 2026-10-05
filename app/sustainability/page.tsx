import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, PrimaryButton } from "@/components/UI";
import CTABand from "@/components/CTABand";
import PhaseGallery, { type GalleryPhase } from "@/components/PhaseGallery";
import { getPhaseImages } from "@/lib/phaseGallery";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Project 1-Billion — Rammed Earth South Sudan's rammed-earth pilot house in South Sudan. Follow the build phase by phase, from demolition to finishing.",
};

const pilotRooms = [
  "One master bedroom",
  "Bathroom",
  "Open-plan living, dining & kitchen",
  "Laundry nook",
  "Outdoor rear terrace",
];

const completedPhases = [
  {
    number: "01",
    title: "Demolition",
    description:
      "Before construction could begin, the site had to be cleared of an existing structure. The old building, constructed from mud and teak, was carefully demolished to prepare the site for the Rammed Earth Pilot Project. This marked the first step in transforming the site and making way for a new approach to sustainable construction.",
  },
  {
    number: "02",
    title: "Foundation",
    description:
      "Rammed-earth buildings begin with foundations much like conventional buildings. In this phase, we completed the setting out, stone foundation, and reinforced concrete beam. We opted for a stone foundation to provide a stable and durable base capable of supporting the weight of the rammed-earth walls above.",
  },
  {
    number: "03",
    title: "Backfilling & Compaction",
    description:
      "This process prepares the ground for the floor slab, which will provide the finished base on which the rammed-earth walls will be constructed.",
  },
  {
    number: "04",
    title: "Floor Slab",
    description:
      "At this stage, a waterproofing membrane was laid over the compacted soil, followed by a layer of BRC reinforcement mesh. We then proceeded to cast a 100 mm (10 cm) thick concrete floor slab, creating a strong and level base for the rammed-earth walls.",
  },
  {
    number: "05",
    title: "Exterior Rammed Earth Walls",
    description:
      "The star of the project has undoubtedly been the rammed-earth walls. For the exterior walls, we constructed 300 mm-thick walls reaching 3 metres in height, showcasing the material at full scale. We chose rammed earth for its potential benefits in affordability, durability, energy efficiency, and reduced environmental impact. These walls also serve as our testing ground — allowing us to observe, document, and learn how rammed earth performs under South Sudan's conditions and gather valuable insights for future projects.",
  },
];

const upcomingPhases = [
  { number: "06", title: "Interior Walling, Plumbing & Electricals" },
  { number: "07", title: "Ring Beam & Cantilever" },
  { number: "08", title: "Roofing" },
  { number: "09", title: "Window & Door Fixtures" },
  { number: "10", title: "Back Terrace & Garden" },
  { number: "11", title: "Finishing (tile work, plumbing fixtures, etc.)" },
  { number: "12", title: "Furnishing" },
];

/**
 * Gallery cards, one per phase. Photos are read from
 * /public/sustainability/phases/<folder> — drop image files into a
 * phase's folder and they appear on its card automatically.
 */
const galleryFolders: { folder: string; label: string; title: string; fit?: "cover" | "contain" }[] = [
  { folder: "00-design-details", label: "Design", title: "Project Design Details", fit: "contain" },
  { folder: "01-demolition", label: "Phase 01", title: "Demolition" },
  { folder: "02-foundation", label: "Phase 02", title: "Foundation" },
  { folder: "03-backfilling-compaction", label: "Phase 03", title: "Backfilling & Compaction" },
  { folder: "04-floor-slab", label: "Phase 04", title: "Floor Slab" },
  { folder: "05-exterior-rammed-earth-walls", label: "Phase 05", title: "Exterior Rammed Earth Walls" },
];

export default function SustainabilityPage() {
  const galleryPhases: GalleryPhase[] = galleryFolders.map((g) => ({
    slug: g.folder,
    label: g.label,
    title: g.title,
    fit: g.fit,
    images: getPhaseImages(g.folder),
  }));

  return (
    <>
      <PageHero
        eyebrow="Sustainability — Project 1-Billion"
        title="A billion reasons to make a change."
        intro="At Rammed Earth South Sudan, we are committed to exploring more sustainable approaches to construction and contributing to a built environment that is affordable, resilient, and environmentally responsible. This column documents the progress, lessons, challenges, and milestones of our Rammed Earth Pilot Project — follow our journey as we test, learn, build, and explore what sustainable construction could look like in South Sudan."
      />

      <Section>
        <Eyebrow>Our focus</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
          Introducing, innovating, and experimenting with rammed earth
        </h2>
        <p className="text-ink/75 leading-relaxed max-w-2xl">
          Our work focuses on introducing, innovating, and experimenting with rammed earth as a
          building material for affordable, low-carbon housing in South Sudan. Rammed earth offers
          a range of potential benefits, including reduced environmental impact, energy efficiency,
          durability, and the opportunity to make better use of locally available materials.
        </p>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <Eyebrow>Pilot project details</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">A 68 m² demonstration home</h2>
        <p className="text-ink/75 leading-relaxed mb-10 max-w-2xl">
          The Rammed Earth Pilot Project is a compact 68 m² home designed to demonstrate how
          rammed earth can be used to create functional, comfortable, and sustainable housing.
          The design focuses on making efficient use of space while creating a simple and
          practical home that showcases the potential of rammed-earth construction in South Sudan.
        </p>

        <h3 className="font-display text-lg font-bold mb-4">Layout</h3>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
          {pilotRooms.map((room) => (
            <li key={room} className="flex gap-3 text-sm text-ink/75">
              <span className="text-signal shrink-0">&#9632;</span>
              <span>{room}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow>The team on site</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Rammed Earth Team</h2>
            <p className="text-ink/75 leading-relaxed">
              The crew behind Project 1-Billion — testing, building, and learning how rammed
              earth performs under South Sudan&rsquo;s conditions, one phase at a time.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/sustainability/project-1billion-team.jpg"
              alt="RCCL Rammed Earth Team on site at Project 1-Billion"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <Eyebrow>Progress</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Project phases</h2>

        <div className="space-y-10 mb-16">
          {completedPhases.map((phase) => (
            <div key={phase.number} className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 border-b border-white/10 pb-10 last:border-none">
              <div className="flex items-start gap-4 md:block">
                <span className="font-display text-3xl font-bold text-signal">{phase.number}</span>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.14em] bg-signal/20 text-signal px-2.5 py-1 md:mt-2">
                  Completed
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-white/50 mb-6">Still to come</h3>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {upcomingPhases.map((phase) => (
            <div key={phase.number} className="flex items-baseline gap-3 text-white/60">
              <span className="font-display text-sm font-bold text-white/40">{phase.number}</span>
              <span className="text-sm">{phase.title}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Project 1-Billion in pictures</h2>
        <p className="text-ink/75 leading-relaxed mb-10 max-w-2xl">
          A visual record of the pilot house, phase by phase. Hover a card to flip through its
          photos, or open it to view them full screen.
        </p>
        <PhaseGallery phases={galleryPhases} />
      </Section>

      <Section className="text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold max-w-2xl mx-auto mb-8">
          Want to follow Project 1-Billion as it&rsquo;s built?
        </h2>
        <PrimaryButton href="/events">See it on our Events page</PrimaryButton>
      </Section>

      <CTABand heading="A billion reasons to build differently." />
    </>
  );
}
