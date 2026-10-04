"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export type GalleryPhase = {
  /** Folder name, also used as a unique key */
  slug: string;
  /** Short label above the title, e.g. "Phase 01" */
  label: string;
  title: string;
  images: string[];
  /** "contain" shows the whole image on white (drawings); "cover" fills the tile (photos) */
  fit?: "cover" | "contain";
};

/**
 * Photo gallery for the project phases. Mirrors the homepage
 * FeaturedProjects cards: fade-rise reveal on scroll, a rotateY flip
 * between a phase's photos on hover, and a fullscreen lightbox on click.
 */
export default function PhaseGallery({ phases }: { phases: GalleryPhase[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [flipIndex, setFlipIndex] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ phase: GalleryPhase; index: number } | null>(null);

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
      const imgs = current.phase.images;
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
    <>
      <div ref={sectionRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
        {phases.map((p, i) => {
          const images = p.images;
          const current = flipIndex[p.slug] ?? 0;
          const hasImages = images.length > 0;
          const hasMultiple = images.length > 1;
          const contain = p.fit === "contain";

          return (
            <div key={p.slug} className="group block">
              <div
                suppressHydrationWarning
                className={`transition-transform duration-300 ease-out ${hasImages ? "group-hover:-translate-y-1" : ""} ${revealed ? "fade-rise" : "opacity-0"}`}
                style={revealed ? { animationDelay: `${i * 40}ms` } : undefined}
              >
                {hasImages ? (
                  /* Card image — rotateY flip transition between photos, advances on hover */
                  <button
                    type="button"
                    onClick={() => setLightbox({ phase: p, index: current })}
                    onMouseEnter={() => {
                      if (hasMultiple) {
                        setFlipIndex((prev) => ({ ...prev, [p.slug]: (current + 1) % images.length }));
                      }
                    }}
                    className={`relative block aspect-square w-full overflow-hidden [perspective:1200px] ${contain ? "bg-white" : "bg-ink/5"}`}
                    aria-label={`Open ${p.title} gallery`}
                  >
                    {images.map((image, index) => {
                      const isActive = index === current;
                      return (
                        <div
                          key={`${image}-${index}`}
                          className={`absolute inset-0 [backface-visibility:hidden] transition-transform duration-500 ease-in-out ${contain ? "bg-white" : ""}`}
                          style={{
                            transform: isActive ? "rotateY(0deg)" : "rotateY(180deg)",
                            transitionDelay: isActive ? "250ms" : "0ms",
                            zIndex: isActive ? 1 : 0,
                          }}
                        >
                          <Image
                            src={image}
                            alt={`${p.title} — photo ${index + 1}`}
                            fill
                            sizes="(min-width: 640px) 33vw, 50vw"
                            className={contain ? "object-contain p-3" : "object-cover"}
                          />
                        </div>
                      );
                    })}

                    <span className="absolute bottom-2 right-2 z-10 bg-ink/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                      {images.length} {images.length === 1 ? "photo" : "photos"}
                    </span>
                  </button>
                ) : (
                  <div className="flex aspect-square w-full flex-col items-center justify-center border border-dashed border-ink/15 bg-white/60 text-center">
                    <span className="font-display text-3xl font-bold text-ink/15">{p.label.replace(/\D/g, "") || "—"}</span>
                    <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                      Photos coming soon
                    </span>
                  </div>
                )}

                <div className="mt-2.5">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-signal">
                    {p.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-snug transition-colors duration-300 group-hover:text-signal">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen lightbox — scale + fade zoom transition, separate from the card's flip */}
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

          {lightbox.phase.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}
                aria-label="Previous image"
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 bg-ink/60 text-white flex items-center justify-center hover:border-signal hover:text-signal transition-colors z-10"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}
                aria-label="Next image"
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 bg-ink/60 text-white flex items-center justify-center hover:border-signal hover:text-signal transition-colors z-10"
              >
                &rarr;
              </button>
            </>
          )}

          <div
            className={`relative w-full max-w-4xl aspect-[4/3] animate-[lightboxZoom_350ms_cubic-bezier(0.16,1,0.3,1)] ${lightbox.phase.fit === "contain" ? "bg-white" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightbox.index}
              src={lightbox.phase.images[lightbox.index]}
              alt={`${lightbox.phase.title} — photo ${lightbox.index + 1}`}
              fill
              sizes="90vw"
              className={`object-contain animate-[lightboxImageFade_300ms_ease-out] ${lightbox.phase.fit === "contain" ? "p-3" : ""}`}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="font-display text-lg font-bold">{lightbox.phase.title}</p>
            <p className="text-sm text-white/60 mt-1">
              {lightbox.index + 1} / {lightbox.phase.images.length}
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
    </>
  );
}
