import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, PrimaryButton } from "@/components/UI";
import CTABand from "@/components/CTABand";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SourceTag from "@/components/SourceTag";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "The environmental and performance case for rammed earth construction in South Sudan — embodied carbon, local sourcing, thermal comfort, and longevity data from RCCL.",
};

const carbonData = [
  { label: "Rammed earth", value: 22 },
  { label: "Fired-clay block", value: 58 },
  { label: "Concrete block", value: 74 },
  { label: "Poured concrete", value: 96 },
];
const maxCarbon = Math.max(...carbonData.map((d) => d.value));

const sourcingSteps = [
  { title: "Site soil test", detail: "Subsoil within [X] km of site is tested first for suitability, before any material is trucked in." },
  { title: "Local aggregate", detail: "Where soil doesn't meet spec on its own, aggregate is sourced from the nearest approved local supplier." },
  { title: "Minimal imported stabilizer", detail: "Only the cement or lime stabilizer fraction — typically 5–8% by volume — needs to travel any real distance." },
  { title: "Reduced haulage", detail: "Fewer truck movements than an equivalent block or concrete build, since the primary material is already on site." },
];

const longevityData = [
  { label: "Rammed earth (maintained)", value: "[X]+ years" },
  { label: "Fired-clay block", value: "[X]+ years" },
  { label: "Unreinforced mud block", value: "[X] years" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="The data behind the material."
        intro="Rammed earth is RCCL's core sustainability commitment, not a side initiative sitting next to how we actually build. It's the structural material we default to, engineered with measurable advantages in this climate — and this page lays out the numbers we use to make that case to engineers, funders, and clients."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Embodied carbon</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Carbon per m² of wall</h2>
            <p className="text-ink/70 leading-relaxed mb-8 max-w-lg">
              Embodied carbon is the emissions locked into a material before it&rsquo;s ever
              used to heat or cool a building — extraction, manufacture, and transport.
              Rammed earth uses the soil already on site, so most of that footprint
              never happens.
            </p>
            <div className="space-y-5">
              {carbonData.map((d) => (
                <div key={d.label}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-sm font-medium">{d.label}</span>
                    <span className="text-sm text-ink/60">{d.value} kg CO₂e/m²</span>
                  </div>
                  <div className="h-3.5 bg-[#F2F0EC] border border-line">
                    <div
                      className={d.label === "Rammed earth" ? "h-full bg-signal" : "h-full bg-ink/70"}
                      style={{ width: `${(d.value / maxCarbon) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <SourceTag />
              <p className="text-xs text-ink/45">
                Illustrative figures pending a formal lifecycle assessment (LCA) of RCCL&rsquo;s specific mix design.
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>Local sourcing</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Where the material comes from</h2>
            <PhotoPlaceholder label="Local soil sourcing map, Juba region" aspect="aspect-[4/3]" tone="bone" className="mb-6" />
            <div className="space-y-5">
              {sourcingSteps.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <span className="text-signal font-display text-lg font-bold shrink-0">{`0${i + 1}`}</span>
                  <div>
                    <h3 className="font-medium text-sm mb-1">{s.title}</h3>
                    <p className="text-sm text-ink/65 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink/70 leading-relaxed mt-6">
              Shorter haulage distances cut fuel costs as directly as they cut carbon —
              the two numbers move together on every rammed earth project we&rsquo;ve costed.
            </p>
            <div className="mt-4">
              <SourceTag />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Thermal performance</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Performance in Juba&rsquo;s climate</h2>
            <p className="text-ink/70 leading-relaxed mb-8 max-w-lg">
              A 600mm rammed earth wall has enough thermal mass to absorb daytime heat
              and release it slowly overnight, flattening the indoor temperature swing
              that a thin block or sheet-metal building tracks almost in real time with
              the outside air.
            </p>
            <div className="border border-line divide-y divide-line">
              <div className="grid grid-cols-3 p-4 text-xs uppercase tracking-[0.08em] text-ink/50 font-semibold">
                <span>Wall type</span>
                <span>Peak indoor swing</span>
                <span>Cooling load</span>
              </div>
              <div className="grid grid-cols-3 p-4 text-sm bg-white">
                <span className="font-medium">Rammed earth, 600mm</span>
                <span>&plusmn;[X]&deg;C</span>
                <span className="text-signal font-medium">Low</span>
              </div>
              <div className="grid grid-cols-3 p-4 text-sm bg-white">
                <span className="font-medium">Concrete block, 200mm</span>
                <span>&plusmn;[X]&deg;C</span>
                <span>Moderate</span>
              </div>
              <div className="grid grid-cols-3 p-4 text-sm bg-white">
                <span className="font-medium">Sheet metal / light frame</span>
                <span>&plusmn;[X]&deg;C</span>
                <span>High</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <SourceTag />
              <p className="text-xs text-ink/45">Measured data from completed RCCL buildings, to be confirmed.</p>
            </div>
          </div>

          <div>
            <Eyebrow>Longevity</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Built to outlast the building schedule</h2>
            <p className="text-ink/70 leading-relaxed mb-8 max-w-lg">
              Stabilized, engineered rammed earth is a different material from
              traditional unfired mud block. Properly detailed against rain and
              foundation moisture, it performs on a lifespan comparable to fired-clay
              masonry, with lower ongoing maintenance than a painted block facade.
            </p>
            <div className="space-y-4">
              {longevityData.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between border-b border-line pb-3">
                  <span className="text-sm font-medium">{d.label}</span>
                  <span className="font-display text-lg">{d.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <SourceTag />
              <p className="text-xs text-ink/45">Published rammed earth durability studies, to be confirmed.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Why this matters beyond the wall</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Sustainability, built on local capacity
          </h2>
          <p className="text-ink/75 leading-relaxed mb-4">
            The environmental case for rammed earth doesn&rsquo;t stand on its own — it&rsquo;s
            tied to who builds it. Every rammed earth project trains South Sudanese
            crew in soil testing, formwork, and compaction, a skill set that stays in
            the country whether or not that crew works with RCCL again.
          </p>
          <p className="text-ink/75 leading-relaxed">
            That&rsquo;s the version of sustainability RCCL is built around: a building
            method suited to South Sudan&rsquo;s climate and materials, built by people
            trained here to keep building it after we&rsquo;ve handed the keys over.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold max-w-2xl mx-auto mb-8">
          Want the full lifecycle assessment for your project?
        </h2>
        <PrimaryButton href="/contact">Ask about a rammed earth feasibility assessment</PrimaryButton>
      </Section>

      <CTABand heading="Build something that's still standing in thirty years." />
    </>
  );
}
