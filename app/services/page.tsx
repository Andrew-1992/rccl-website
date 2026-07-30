import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, GhostLink } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Image from "next/image";
import { services } from "@/content/services";
import CTABand from "@/components/CTABand";

// Photos: public/<filename> — mapped by service slug.
const photoBySlug: Record<string, string> = {
  "rammed-earth-construction": "rammed-earth-texture.jpg",
  "general-construction": "service-general-construction.jpg",
  "architectural-design": "service-architectural-design.jpg",
  "project-management-consultation": "service-project-management.jpg",
};


export const metadata: Metadata = {
  title: "Services | Rammed Earth Construction Ltd",
  description:
    "Rammed earth construction, general construction, architectural design, and project management from RCCL — Juba, South Sudan.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="From Soil To Structures" />

      <Section className="pb-0 md:pb-0">
        <p className="max-w-2xl text-lg md:text-xl text-ink/75 leading-relaxed">
          Rammed Earth Construction Ltd offers four integrated capabilities, from a sustainable building
          method to full project delivery. Rammed earth construction is our
          flagship — the technique we built the company on. General construction,
          architectural design, and project management round it out, so a client
          can bring us a site and a budget and leave with a finished building,
          under one contract and one point of accountability.
        </p>
      </Section>

      <Section>
        <div className="flex flex-col gap-px bg-line">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className={`grid md:grid-cols-2 bg-white ${s.flagship ? "md:min-h-[440px]" : "md:min-h-[380px]"}`}
            >
              <div className={`order-2 ${i % 2 === 1 ? "md:order-2" : "md:order-1"} relative`}>
                <Image
    src={`/${photoBySlug[s.slug]}`}
    alt={s.name}
    fill
    sizes="(min-width: 768px) 50vw, 100vw"
    className="object-cover"
  />
              </div>
              <div
                className={`order-1 ${i % 2 === 1 ? "md:order-1" : "md:order-2"} p-8 md:p-14 flex flex-col justify-center`}
              >
                <span className="text-xs font-semibold text-signal tracking-[0.14em] mb-3">
                  {s.flagship ? "FLAGSHIP SERVICE" : `0${i + 1} / 04`}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.05] mb-4">
                  {s.name}
                </h2>
                <p className="text-ink/70 leading-relaxed mb-6 max-w-md">
                  {s.definition.split(". ").slice(0, 2).join(". ") + "."}
                </p>
                <GhostLink href={`/services/${s.slug}`}>Learn more</GhostLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <span className="block text-xs uppercase tracking-[0.14em] font-semibold text-signal mb-4">
              Core services
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">The full capability list</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {coreServices.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-ink/75">
                  <span className="text-signal shrink-0">&#9632;</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.14em] font-semibold text-signal mb-4">
              Project types
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Where we work</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {projectTypes.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-ink/75">
                  <span className="text-signal shrink-0">&#9632;</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTABand heading="Not sure which service fits your project? Talk to us." buttonLabel="Talk to Us" />
    </>
  );
}

// From RCCL's company profile.
const coreServices = [
  "General Construction",
  "Architectural Design Services",
  "Rammed Earth Construction",
  "Villa and Home Construction",
  "Road Construction",
  "Bridge Construction",
  "Renovation Works",
  "Civil & MEP Engineering",
  "Construction Materials Supply",
];

const projectTypes = [
  "Green and Blue Infrastructure",
  "Landscape Architecture",
  "Commercial Developments",
  "Education, Recreation & Parks",
  "Tourism Infrastructure",
  "Public Infrastructure Development",
  "Community Urban Spaces & Space Regeneration",
  "Urban Studies & Research",
];
