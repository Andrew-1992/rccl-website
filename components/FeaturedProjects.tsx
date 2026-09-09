"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { Section, GhostLink } from "./UI";

/**
 * Minimalist treatment: no kicker, no intro paragraph — just the heading
 * and the grid. Hover overlay caption removed (redundant with the name
 * already shown below each image); interactivity now lives in the image
 * itself (smooth scale + a subtle lift) and the project name (color
 * shift + animated underline), so the whole card feels responsive to
 * the cursor without extra on-image text competing with the photo.
 */
export default function FeaturedProjects() {
  const featured = projects.slice(0, 8);
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
            <h4 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">Projects</h4>
          </div>
          <GhostLink href="/portfolio" className="shrink-0">View All Projects</GhostLink>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
          {featured.map((p, i) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
              <div
                suppressHydrationWarning
                className={`transition-transform duration-300 ease-out group-hover:-translate-y-1 ${
                  revealed ? "fade-rise" : "opacity-0"
                }`}
                style={revealed ? { animationDelay: `${i * 40}ms` } : undefined}
              >
                <div className="relative aspect-square overflow-hidden bg-ink/5">
                  {p.heroPhoto ? (
                    <Image
                      src={`/${p.heroPhoto}`}
                      alt={p.name}
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-ink/10 flex items-center justify-center">
                      <span className="text-[10px] text-ink/40 uppercase tracking-wide px-2 text-center">{p.name}</span>
                    </div>
                  )}
                </div>
                <div className="mt-2.5">
                  <span className="text-sm font-medium block leading-snug truncate transition-colors duration-300 group-hover:text-signal">
                    {p.name}
                  </span>
                  <span className="block h-px w-0 bg-signal mt-1.5 transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
