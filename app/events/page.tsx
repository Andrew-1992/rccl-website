"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/UI";
import CTABand from "@/components/CTABand";
import { events } from "@/content/events";
import { whatsappLink } from "@/lib/whatsapp";

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <EventsHero />

      {upcoming.length > 0 && (
        <Section>
          <Eyebrow>Upcoming</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">What&rsquo;s next</h2>
          <div className="space-y-8">
            {upcoming.map((e) => (
              <UpcomingCard key={e.slug} event={e} />
            ))}
          </div>
        </Section>
      )}

      {past.length > 0 && (
        <Section className="bg-[#F7F6F3]">
          <Eyebrow>Past events</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Where we&rsquo;ve been</h2>
          <div className="space-y-6">
            {past.map((e, i) => (
              <PastEventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        </Section>
      )}

      <CTABand heading="Want Rammed Earth South Sudan at your event or site visit?" />
    </>
  );
}

/** Photo-backed hero, replacing the plain-text PageHero for this page
 * specifically — reuses an existing event photo rather than requiring
 * a new upload. */
function EventsHero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden min-h-[420px] md:min-h-[480px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/events/event-2025-vision-south-sudan-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>
      <div className="container-rccl relative z-10 py-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-signal mb-4">
          Events
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-2xl">
          Meet Rammed Earth South Sudan on site
        </h1>
        <p className="mt-5 text-white/80 leading-relaxed max-w-xl">
          From South Sudan&rsquo;s first architectural exhibition to a full-scale rammed-earth pilot house — this is where we show the technique in person, not just on a page.
        </p>
      </div>
    </section>
  );
}

function UpcomingCard({ event }: { event: (typeof events)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      suppressHydrationWarning
      className={`relative overflow-hidden bg-ink text-white p-8 md:p-12 transition-all duration-700 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-signal bg-white/10 px-3 py-1.5 mb-5">
        {event.date}
      </span>
      <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight max-w-2xl">{event.title}</h3>
      <p className="text-sm text-white/60 mt-2">{event.location}</p>
      <p className="text-white/80 leading-relaxed mt-5 max-w-2xl">{event.teaser}</p>
      {event.note && (
        <p className="text-sm text-signal mt-4 font-medium">{event.note}</p>
      )}
      <a
        href={whatsappLink(`Hello RCCL, I'd like to know more about: ${event.title}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-signal text-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-white hover:text-ink transition-colors duration-300"
      >
        Ask About This Project
      </a>
    </div>
  );
}

function PastEventCard({ event, index }: { event: (typeof events)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
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

  const images = event.images ?? [];
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const stepLightbox = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((current) => {
        if (current === null) return current;
        return (current + dir + images.length) % images.length;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
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
  }, [lightboxIndex, closeLightbox, stepLightbox]);

  return (
    <div
      ref={ref}
      suppressHydrationWarning
      className={`bg-white border border-line transition-all duration-700 ease-out hover:shadow-md ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={revealed ? { transitionDelay: `${index * 100}ms` } : undefined}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.1em] text-ink/45 font-semibold">{event.date}</span>
          <h3 className="font-display text-lg md:text-xl font-bold mt-1">{event.title}</h3>
          <p className="text-sm text-ink/60 mt-1">{event.location}</p>
          <p className="text-sm text-ink/65 leading-relaxed mt-2 max-w-xl">{event.teaser}</p>
        </div>
        <span
          className={`shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-signal transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          {open ? "Close" : "Read full story"} &darr;
        </span>
      </button>

      <div
        className="grid transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-8 pt-2 space-y-4 border-t border-line max-w-2xl">
            {event.story?.map((paragraph, i) => (
              <p key={i} className="text-sm md:text-base text-ink/75 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {images.length > 0 && (
            <div className="px-6 md:px-8 pb-8">
              <h4 className="text-xs uppercase tracking-[0.1em] font-semibold text-ink/50 mb-4">Photos</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
                {images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Open photo ${i + 1} of ${event.title}`}
                    className="relative aspect-square overflow-hidden group"
                  >
                    <Image
                      src={img}
                      alt={`${event.title} — photo ${i + 1}`}
                      fill
                      sizes="(min-width: 640px) 20vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {event.videos && event.videos.length > 0 && (
            <div className="px-6 md:px-8 pb-8">
              <h4 className="text-xs uppercase tracking-[0.1em] font-semibold text-ink/50 mb-4">Video</h4>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {event.videos.map((vid) => (
                  <video key={vid} controls preload="none" className="w-full bg-ink">
                    <source src={vid} type="video/quicktime" />
                    <source src={vid} type="video/mp4" />
                  </video>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && images.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10 animate-[lightboxFade_250ms_ease-out]"
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

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}
                aria-label="Previous photo"
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-signal hover:text-signal transition-colors z-10"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}
                aria-label="Next photo"
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-signal hover:text-signal transition-colors z-10"
              >
                &rarr;
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-3xl aspect-[4/3] animate-[lightboxZoom_300ms_cubic-bezier(0.16,1,0.3,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={event.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes lightboxFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lightboxZoom {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
