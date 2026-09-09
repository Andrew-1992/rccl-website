"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Section } from "./UI";

const team = [
  { name: "Chatim Gai", role: "Founder & Engineer", photo: "team-chatim-gai.jpg" },
  { name: "Adhar Machar", role: "Architect", photo: "team-adhar-machar.jpg" },
  { name: "Aluong Thereza", role: "Admin & Finance", photo: "team-aluong-thereza.jpg" },
];

export default function TeamSection() {
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
        <h2
          suppressHydrationWarning
          className={`font-display text-3xl md:text-5xl font-bold leading-[1.05] mb-12 text-center transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              suppressHydrationWarning
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={revealed ? { transitionDelay: `${i * 120}ms` } : undefined}
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border border-ink/10 transition-transform duration-300 hover:scale-105">
                <Image
                  src={`/${member.photo}`}
                  alt={member.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-ink/60 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
