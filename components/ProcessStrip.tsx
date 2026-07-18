import { Section, SectionKicker } from "./UI";

const steps = [
  { label: "Consult", detail: "Brief, site, budget, and constraints confirmed in writing." },
  { label: "Design", detail: "Concept through coordinated construction drawings." },
  { label: "Build", detail: "Phased construction with weekly progress reporting." },
  { label: "Deliver", detail: "Inspection, documentation, and handover to a fixed date." },
];

export default function ProcessStrip() {
  return (
    <Section className="bg-ink text-white">
      <SectionKicker index="04" label="How we work" tone="dark" />
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] mb-14">
        Consult. Design. Build. Deliver.
      </h2>

      <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
        <div className="hidden md:block absolute top-[10px] left-0 right-0 h-px bg-white/20" />
        {steps.map((s) => (
          <div key={s.label} className="relative">
            <div className="w-[10px] h-[10px] bg-signal mb-6" />
            <p className="font-display text-xl font-bold mb-2">{s.label}</p>
            <p className="text-sm text-white/65 leading-relaxed">{s.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
