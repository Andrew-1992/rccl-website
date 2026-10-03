"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "@/content/projects";
import { Section, GhostLink } from "./UI";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 8);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [flipIndex, setFlipIndex] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

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

  // Esc closes the lightbox; arrow keys navigate within it
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const stepLightbox = useCallback((dir: 1 | -1) => {
    setLightbox((current) => {
      if (!current) return current;
      const imgs = current.project.images;
      const next = (current.index + dir + imgs.length) % imgs.length;
      return { ...current, index: next };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, stepLightbox]);

  return (
    <Section>
      <div ref={sectionRef}>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div suppressHydrationWarning className={revealed ? "fade-rise" : "opacity-0"}>
            <h4 className="font-display text-3xl font-bold leading-[1.05] md:text-5xl">Projects</h4>
          </div>
          <GhostLink href="/portfolio" className="shrink-0">View All Projects</GhostLink>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {featured.map((p, i) => {
            const images = p.images?.length ? p.images : p.heroPhoto ? [p.heroPhoto] : [];
            const current = flipIndex[p.slug] ?? 0;
            const hasMultiple = images.length > 1;

            return (
              <div key={p.slug} className="group block">
                <div
                  suppressHydrationWarning
                  className={`transition-transform duration-300 ease-out group-hover:-translate-y-1 ${revealed ? "fade-rise" : "opacity-0"}`}
                  style={revealed ? { animationDelay: `${i * 40}ms` } : undefined}
                >
                  {/* Card image — rotateY flip transition between photos, advances on hover */}
                  <button
                    type="button"
                    onClick={() => setLightbox({ project: p, index: current })}
                    onMouseEnter={() => {
                      if (hasMultiple) {
                        setFlipIndex((prev) => ({ ...prev, [p.slug]: (current + 1) % images.length }));
                      }
                    }}
                    className="relative block aspect-square w-full overflow-hidden bg-ink/5 [perspective:1200px]"
                    aria-label={`Open ${p.name} gallery`}
                  >
                    {images.map((image, index) => {
                      const isActive = index === current;
                      return (
                        <div
                          key={`${image}-${index}`}
                          className="absolute inset-0 [backface-visibility:hidden] transition-transform duration-500 ease-in-out"
                          style={{
                            transform: isActive ? "rotateY(0deg)" : "rotateY(180deg)",
                            transitionDelay: isActive ? "250ms" : "0ms",
                            zIndex: isActive ? 1 : 0,
                          }}
                        >
                          <Image
                            src={image}
                            alt={p.name}
                            fill
                            sizes="(min-width: 640px) 25vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      );
                    })}
                  </button>

                  <div className="mt-2.5">
                    <Link href={`/portfolio/${p.slug}`} className="block">
                      <span className="block truncate text-sm font-medium leading-snug transition-colors duration-300 group-hover:text-signal">
                        {p.name}
                      </span>
                      <span className="mt-1.5 block h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen lightbox — distinct scale + fade zoom transition, separate from the card's flip */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10 animate-[lightboxFade_300ms_ease-out]"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-5 right-5 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors text-3xl leading-none z-10"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-signal hover:text-signal transition-colors z-10"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-signal hover:text-signal transition-colors z-10"
          >
            &rarr;
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3] animate-[lightboxZoom_350ms_cubic-bezier(0.16,1,0.3,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightbox.index}
              src={lightbox.project.images[lightbox.index]}
              alt={lightbox.project.name}
              fill
              sizes="90vw"
              className="object-contain animate-[lightboxImageFade_300ms_ease-out]"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="font-display text-lg font-bold">{lightbox.project.name}</p>
            <p className="text-sm text-white/60 mt-1">
              {lightbox.index + 1} / {lightbox.project.images.length}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes lightboxFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lightboxZoom {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes lightboxImageFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </Section>
  );
}
