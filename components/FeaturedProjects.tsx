"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { Section, GhostLink, SectionKicker } from "./UI";

/**
 * Photos: public/projects/<filename> — filenames don't follow a fixed
 * convention, so each project's slug is mapped to its actual file here.
 * Add a new line to this map whenever a new featured project needs a
 * photo; if a slug has no entry, nothing renders for that spot (better
 * than a guaranteed-broken image request).
 */
const photoBySlug: Record<string, string> = {
  "peace-garden-arts-center": "peace-garden.jpg",
  "thongpiny-apartments": "thongpiny.jpg",
  "entrepreneurship-innovation-hub": "ent-center.jpg",
  "mr-box-container-offices-retail": "box-container.jpg",
};

/**
 * Scroll-triggered reveal, matching the same "animate once in view" pattern
 * used by RammedEarthLayers elsewhere on the site: everything renders
 * static (opacity-0, no transform applied yet) on first paint so SSR/CSR
 * match exactly, then an IntersectionObserver flips a single `revealed`
 * flag once the section enters the viewport, and each card's fade-rise
 * animation is staggered off that one flag.
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div
            suppressHydrationWarning
            className={revealed ? "fade-rise" : "opacity-0"}
          >
            <SectionKicker index="03" label="Our Work" />
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">View Our Recent Projects</h2>
            <p className="mt-4 max-w-xl text-ink/65 leading-relaxed">
              Explore our completed projects to see the quality and craftsmanship we bring to every build.
            </p>
          </div>
          <GhostLink href="/portfolio" className="shrink-0">View All Projects</GhostLink>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((p, i) => {
            const photo = photoBySlug[p.slug];
            return (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
                <div
                  suppressHydrationWarning
                  className={revealed ? "fade-rise" : "opacity-0"}
                  style={revealed ? { animationDelay: `${i * 100}ms` } : undefined}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.14em] text-ink/45 mb-1">Type</span>
                      <span className="text-sm font-semibold text-ink">{p.serviceLabel}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] uppercase tracking-[0.14em] text-ink/45 mb-1">Project Year</span>
                      <span className="text-sm font-semibold text-ink">{p.year}</span>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                    {photo && (
                      <Image
                        src={`/projects/${photo}`}
                        alt={p.name}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-300 flex items-end p-6">
                      <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <div className="text-white font-display text-xl font-bold">{p.name}</div>
                        <div className="text-white/80 text-sm mt-1">{p.resultLine}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className="font-medium">{p.name}</span>
                    <span className="text-xs uppercase tracking-[0.08em] text-ink/50">{p.location}</span>
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
