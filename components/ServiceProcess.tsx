import { Eyebrow, Section } from "./UI";
import { ServiceStep } from "@/content/services";

export default function ServiceProcess({
  steps,
  heading,
  dark = false,
}: {
  steps: ServiceStep[];
  heading: string;
  dark?: boolean;
}) {
  return (
    <Section className={dark ? "bg-ink text-white" : "bg-[#F7F6F3]"}>
      <Eyebrow>Our process</Eyebrow>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 max-w-xl">{heading}</h2>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
        {steps.map((step, i) => (
          <div key={step.title}>
            <span className="text-signal font-display text-2xl font-bold">{`0${i + 1}`}</span>
            <h3 className="font-display text-lg font-bold mt-3 mb-2">{step.title}</h3>
            <p className={`text-sm leading-relaxed ${dark ? "text-white/65" : "text-ink/65"}`}>{step.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
