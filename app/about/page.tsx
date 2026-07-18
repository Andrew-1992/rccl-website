import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About",
  description: "The story, leadership, and values behind RCCL — Rammed Earth Construction Company Limited, Juba, South Sudan.",
};

const values = [
  {
    title: "Sustainability",
    detail: "We choose the material that performs over the building's life, not just at handover — measured in carbon, energy, and durability, not adjectives.",
  },
  {
    title: "Craftsmanship",
    detail: "A rammed earth wall shows every layer it was built in. There's nowhere to hide bad work, so we don't do any.",
  },
  {
    title: "Integrity",
    detail: "We quote what a project costs, report what it's actually costing as we go, and hand over on the date we agreed to.",
  },
  {
    title: "Local capacity-building",
    detail: "Every rammed earth project trains South Sudanese crew in a technique they can carry to the next site, on our team or someone else's.",
  },
];

const leaders = [
  { name: "[Name]", role: "Founder & Managing Director" },
  { name: "[Name]", role: "Head of Structural Engineering" },
  { name: "[Name]", role: "Head of Architectural Design" },
];

const certifications = [
  "[Certification / registration — X]",
  "[Professional affiliation — X]",
  "[Government contractor registration — X]",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RCCL"
        title="We build to make a difference."
        intro="A multidisciplinary firm dedicated to addressing diverse design and construction requirements across various regions of South Sudan — built around advanced rammed earth technology and a spectrum of architecture rooted in research."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Established 2022, Juba.</h2>
            <div className="space-y-5 text-ink/75 leading-relaxed">
              <p>
                Established in 2022, Rammed Earth Construction set out on a journey
                driven by the commitment to deliver unparalleled innovative and
                sustainable construction techniques, with a core focus on the rammed
                earth construction technique.
              </p>
              <p>
                We&rsquo;re a multidisciplinary firm dedicated to addressing diverse design
                and construction requirements across various regions of South Sudan. In
                addition to advanced rammed earth technology, we offer a spectrum of
                architecture rooted in research, with the vision to create a
                sustainable urban fabric in the residential, commercial, and public
                realms.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-signal pl-5">
                <h3 className="font-display text-lg font-bold mb-2">Mission</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  To innovate construction methods for better living, working, and
                  travel environments, fostering positive impact on both communities
                  and the environment. We prioritize our clients, fostering enduring
                  relationships within the private and public sectors.
                </p>
              </div>
              <div className="border-l-2 border-signal pl-5">
                <h3 className="font-display text-lg font-bold mb-2">Vision</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  To provide cost-effective solutions that meet the requirements of
                  our clients, the engineering community, environmental standards,
                  and local regulatory specifications across different regions in
                  South Sudan.
                </p>
              </div>
            </div>
          </div>
          <PhotoPlaceholder label="RCCL founding team on site" aspect="aspect-[4/5]" />
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">The people building it</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((l) => (
            <div key={l.name}>
              <PhotoPlaceholder label={l.name} aspect="aspect-[3/4]" className="mb-4" />
              <h3 className="font-display text-lg font-bold">{l.name}</h3>
              <p className="text-sm text-ink/60">{l.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Values</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Principles, not a buzzword list</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {values.map((v) => (
            <div key={v.title} className="border-l-2 border-signal pl-6">
              <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm md:text-base text-ink/70 leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <Eyebrow>Certifications &amp; affiliations</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Credentials</h2>
        <ul className="space-y-3 max-w-xl">
          {certifications.map((c) => (
            <li key={c} className="flex gap-3 text-sm md:text-base text-ink/75">
              <span className="text-signal mt-1 shrink-0">&#9632;</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="text-center border-t border-line">
        <Eyebrow>Join RCCL</Eyebrow>
        <h2 className="font-display text-2xl md:text-4xl font-bold max-w-2xl mx-auto mb-8">
          Want to help build it?
        </h2>
        <a
          href="/careers"
          className="inline-flex items-center justify-center rounded-full border border-ink text-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-ink hover:text-white transition-colors duration-200"
        >
          Work With Us
        </a>
      </Section>

      <CTABand heading="Want to see how we'd approach your site?" />
    </>
  );
}
