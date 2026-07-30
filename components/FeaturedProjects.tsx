"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { Section, GhostLink, SectionKicker } from "./UI";

const photoBySlug: Record<string, string> = {
  "peace-garden-arts-center": "peace-garden.jpg",
  "thongpiny-apartments": "thongpiny.jpg",
  "entrepreneurship-innovation-hub": "ent-center.jpg",
  "mr-box-container-offices-retail": "box-container.jpg",
};

/**
 * Grid is 2-across on tablet, 4-across on large screens (lg:grid-cols-4) —
 * all 4 cards sit in a single row on desktop instead of two stacked rows,
 * so the whole section fits in less vertical scroll. Card internals
 * (padding, text, gaps) tightened slightly to match the smaller footprint.
 */
export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div suppressHydrationWarning className={revealed ? "fade-rise" : "opacity-0"}>
            <SectionKicker index="03" label="Our Work" />
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">View Our Recent Projects</h2>
            <p className="mt-4 max-w-xl text-ink/65 leading-relaxed">
              Explore our completed projects to see the quality and craftsmanship we bring to every build.
            </p>
          </div>
          <GhostLink href="/portfolio" className="shrink-0">View All Projects</GhostLink>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {featured.map((p, i) => {
            const photo = photoBySlug[p.slug];
            return (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
                <div
                  suppressHydrationWarning
                  className={revealed ? "fade-rise" : "opacity-0"}
                  style={revealed ? { animationDelay: `${i * 80}ms` } : undefined}
                >
                  <div className="relative aspect-square overflow-hidden bg-ink/5">
                    {photo && (
                      <Image
                        src={`/projects/${photo}`}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-300 flex items-end p-4">
                      <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <div className="text-white font-display text-sm font-bold leading-snug">{p.name}</div>
                        <div className="text-white/80 text-xs mt-1">{p.resultLine}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="font-display text-base font-bold block leading-snug">{p.name}</span>
                    <span className="text-sm text-ink/55 block mt-0.5">{p.location}</span>
                    <span className="text-sm text-ink/55 block">{p.year}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
