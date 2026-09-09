"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "./UI";

const steps = [
  { number: "01", label: "Consult", detail: "Brief, site, budget, and constraints confirmed in writing." },
  { number: "02", label: "Design", detail: "Concept through coordinated construction drawings." },
  { number: "03", label: "Build", detail: "Phased construction with weekly progress reporting." },
  { number: "04", label: "Deliver", detail: "Inspection, documentation, and handover to a fixed date." },
];

export default function ProcessStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-ink text-white">
      <div ref={sectionRef}>
        <h2
          suppressHydrationWarning
          className={`font-display text-3xl md:text-5xl font-bold leading-[1.05] mb-20 text-center md:text-left transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
          <div className="hidden md:block absolute top-[19px] left-0 right-0 h-px bg-white/10" aria-hidden="true" />
          {steps.map((s, i) => (
            <div
              key={s.label}
              suppressHydrationWarning
              className={`relative transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={revealed ? { transitionDelay: `${i * 120}ms` } : undefined}
            >
              <div className="relative z-10 w-10 h-10 rounded-full border border-white/30 bg-ink text-white/80 flex items-center justify-center font-display text-xs font-semibold mb-8 transition-colors duration-300">
                {s.number}
              </div>
              <p className="font-display text-xl font-bold mb-2.5 tracking-tight">{s.label}</p>
              <p className="text-sm text-white/55 leading-relaxed max-w-[220px]">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
