import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, PrimaryButton } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles and rammed earth skills-training opportunities at RCCL — Juba, South Sudan.",
};

const roles = [
  { title: "Site Supervisor — Rammed Earth", location: "Juba", type: "Full-time" },
  { title: "Structural Design Engineer", location: "Juba", type: "Full-time" },
  { title: "Quantity Surveyor", location: "Juba", type: "Full-time" },
  { title: "Rammed Earth Apprentice (Skills Training Programme)", location: "Juba", type: "Apprenticeship" },
];

const whyWorkHere = [
  {
    title: "Hands-on training",
    detail: "You learn the trade on a live site, under a site engineer, not from a manual.",
  },
  {
    title: "Meaningful projects",
    detail: "Clinics, homes, and offices that stay in use for decades — work you can point to.",
  },
  {
    title: "Growth into skilled trades or design roles",
    detail: "Apprentices who prove out on site have a track into supervision, design, or engineering roles at RCCL.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build something you can point to for thirty years."
        intro="RCCL hires for two kinds of roles: experienced construction and design professionals, and apprentices we train from the ground up in a technique most contractors in South Sudan don't yet offer. Either way, you're building real skills in a growing industry, not just filling a shift."
      />

      <Section>
        <Eyebrow>Why work here</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Three things that are actually true</h2>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {whyWorkHere.map((w) => (
            <div key={w.title} className="border-l-2 border-signal pl-5">
              <h3 className="font-display text-lg font-bold mb-2">{w.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{w.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Apprenticeship &amp; training</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">A genuine skills-transfer story</h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              Rammed earth construction is a technique very few contractors in South
              Sudan currently offer. Every RCCL project trains local crew — soil
              testing, formwork, mechanical compaction, curing — in a discipline they
              carry forward, whether that&rsquo;s the next RCCL site or a role elsewhere.
            </p>
            <p className="text-ink/75 leading-relaxed mb-8">
              Structured apprenticeship programme: [X] months, paid, supervised by our
              site engineers from soil test to handover. [X] — confirm intake dates
              and eligibility criteria before publishing.
            </p>
            <PrimaryButton href="/contact">Ask about the apprenticeship</PrimaryButton>
          </div>
          <PhotoPlaceholder label="Apprentice crew compacting a rammed earth wall" aspect="aspect-[4/3]" />
        </div>
      </Section>

      <Section>
        <Eyebrow>Open roles</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Current openings</h2>
        <div className="divide-y divide-line border-y border-line">
          {roles.map((r) => (
            <div key={r.title} className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-6">
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold">{r.title}</h3>
                <p className="text-sm text-ink/55 mt-1">{r.location} &middot; {r.type}</p>
              </div>
              <a
                href={whatsappLink(`Hello RCCL, I'd like to apply for: ${r.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-ink hover:text-white transition-colors duration-200 shrink-0"
              >
                Apply via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-white text-center">
        <Eyebrow>Don&rsquo;t see a fit?</Eyebrow>
        <h2 className="font-display text-2xl md:text-4xl font-bold max-w-xl mx-auto mb-6">
          Email your CV to [X].
        </h2>
        <p className="text-white/65 max-w-md mx-auto mb-8 text-sm leading-relaxed">
          We keep a standing list for the next opening — tell us which role you&rsquo;re
          suited to and we&rsquo;ll reach out when it opens.
        </p>
        <a
          href="mailto:careers@rccl.co.ss"
          className="inline-flex items-center justify-center rounded-full bg-signal text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-white hover:text-ink transition-colors duration-200"
        >
          careers@rccl.co.ss
        </a>
      </Section>
    </>
  );
}
