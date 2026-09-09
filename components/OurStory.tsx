"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Section, GhostLink } from "./UI";

export default function OurStory() {
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
    <Section className="bg-[#F7F6F3]">
      <div ref={sectionRef} className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
        <div suppressHydrationWarning className={`transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] mb-6">
            Our Story
          </h2>
          <p className="text-ink/75 leading-relaxed mb-5">
            Rammed Earth Construction Limited: Founded in 2022 with the commitment to deliver unparalleled innovative and
            sustainable construction techniques, with a core focus on the rammed
            earth construction technique.
          </p>
          <p className="text-ink/75 leading-relaxed mb-8">
            We&rsquo;re a multidisciplinary firm dedicated to addressing diverse
            design and construction requirements across various regions of South
            Sudan — offering a spectrum of architecture rooted in research, with
            the vision to create a sustainable urban fabric in the residential,
            commercial, and public realms.
          </p>
          <GhostLink href="/about">Read our full story</GhostLink>
        </div>

        <div
          suppressHydrationWarning
          className={`relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden transition-all duration-700 ease-out delay-150 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Image
            src="/about.jpg"
            alt="RCCL team on site"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div
        suppressHydrationWarning
        className={`grid sm:grid-cols-2 gap-8 md:gap-12 mt-14 pt-10 border-t border-ink/10 transition-all duration-700 ease-out delay-300 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="border-l-2 border-signal pl-5">
          <h3 className="text-xs uppercase tracking-[0.14em] font-bold text-ink/60 mb-2">Mission</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            To innovate construction methods for better living, working, and
            travel environments, fostering positive impact on both
            communities and the environment.
          </p>
        </div>
        <div className="border-l-2 border-signal pl-5">
          <h3 className="text-xs uppercase tracking-[0.14em] font-bold text-ink/60 mb-2">Vision</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            To provide cost-effective solutions that meet the requirements of
            our clients, the engineering community, environmental standards,
            and local regulatory specifications.
          </p>
        </div>
      </div>
    </Section>
  );
}
