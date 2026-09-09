"use client";

import { useEffect, useRef, useState } from "react";
import { Section, GhostLink } from "./UI";

const coreServices = [
  "General Construction",
  "Architectural Design Services",
  "Rammed Earth Construction",
  "Road Construction",
  "Bridge Construction",
  "Villa and Home Construction",
  "Renovation Works",
  "Civil & MEP Engineering",
  "Construction Materials Supply",
];

const projectTypes = [
  "Green and Blue Infrastructure",
  "Landscape Architecture",
  "Commercial Developments",
  "Education, Recreation and Parks",
  "Tourism Infrastructure",
  "Public Infrastructure Development",
  "Community Urban Spaces & Space Regeneration",
  "Urban Studies and Research",
];

export default function ServicesGrid() {
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
    <Section>
      <div ref={sectionRef}>
        <div
          suppressHydrationWarning
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
          Our Services
          </h2>
          <GhostLink href="/services" className="shrink-0">View All Services</GhostLink>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div
            suppressHydrationWarning
            className={`transition-all duration-700 ease-out delay-150 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-signal mb-6">Core Services</h3>
            <ul className="space-y-4">
              {coreServices.map((item) => (
                <li key={item} className="border-l-2 border-signal pl-4 py-0.5">
                  <span className="text-sm md:text-base text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            suppressHydrationWarning
            className={`transition-all duration-700 ease-out delay-300 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-signal mb-6">Project Types</h3>
            <ul className="space-y-4">
              {projectTypes.map((item) => (
                <li key={item} className="border-l-2 border-signal pl-4 py-0.5">
                  <span className="text-sm md:text-base text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
