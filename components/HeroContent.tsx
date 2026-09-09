"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Matches the Brentor reference's layout: one full-bleed background, dark
 * overlay for contrast, left-aligned bold headline, subtext, and two
 * buttons side by side — no secondary accent box, no scroll cue. The
 * background is the video when present (hero-bg.mp4), with the photo
 * (hero-bg-content — actually melut photo below) as its poster and as
 * the fallback if no video file exists or prefers-reduced-motion is set.
 */
export default function HeroContent({ hasVideo }: { hasVideo: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setRevealed(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-ink text-white overflow-hidden min-h-[640px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/melut-county-community-hospital.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover ${hasVideo ? "" : "animate-[kenburns_18s_ease-in-out_infinite_alternate]"}`}
        />
        {hasVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/melut-county-community-hospital.jpg"
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      </div>

      <div className="container-rccl relative z-10 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          <h1
            suppressHydrationWarning
            className={`font-display font-bold leading-[1.05] tracking-tight text-[10vw] sm:text-[7vw] md:text-[4vw] lg:text-6xl transition-all duration-700 ease-out ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            We Build to Make a Difference
          </h1>
          <p
            suppressHydrationWarning
            className={`mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-lg transition-all duration-700 ease-out delay-150 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <strong className="font-semibold text-white">Rammed Earth Construction Ltd</strong> partners with clients to build rammed earth structures that are environmentally sustainable.
          </p>

          <div
            suppressHydrationWarning
            className={`mt-10 flex flex-wrap items-center gap-8 transition-all duration-700 ease-out delay-300 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-3.5 text-sm font-semibold hover:bg-signal hover:text-white transition-colors duration-300"
            >
              Request a Quote
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors duration-300"
            >
              Learn more about us
              <span aria-hidden="true">&darr;</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
