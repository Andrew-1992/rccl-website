import { Section, SectionKicker } from "./UI";

const steps = [
  { number: "01", label: "Consult", detail: "Brief, site, budget, and constraints confirmed in writing." },
  { number: "02", label: "Design", detail: "Concept through coordinated construction drawings." },
  { number: "03", label: "Build", detail: "Phased construction with weekly progress reporting." },
  { number: "04", label: "Deliver", detail: "Inspection, documentation, and handover to a fixed date." },
];

/**
 * Numbered circular markers (40px) connected by a horizontal line running
 * through their exact vertical center (top-[19px] = half the marker height
 * minus half the line thickness) — the previous version used a plain 10px
 * square with the line at top-[10px], which sat at the square's bottom
 * edge instead of its middle.
 */
export default function ProcessStrip() {
  return (
    <Section className="bg-ink text-white">
      <SectionKicker index="04" label="How we work" tone="dark" />
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] mb-16">
        Consult. Design. Build. Deliver.
      </h2>

      <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
        <div className="hidden md:block absolute top-[19px] left-0 right-0 h-px bg-white/20" aria-hidden="true" />
        {steps.map((s) => (
          <div key={s.label} className="relative">
            <div className="relative z-10 w-10 h-10 rounded-full bg-signal text-white flex items-center justify-center font-display text-sm font-bold mb-6">
              {s.number}
            </div>
            <p className="font-display text-xl font-bold mb-2">{s.label}</p>
            <p className="text-sm text-white/65 leading-relaxed">{s.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
