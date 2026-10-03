"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed background, dark overlay for contrast, left-aligned bold
 * headline, subtext, and two buttons side by side. Background is the
 * video when hasVideo is true (see Hero.tsx for why that's currently
 * forced off), falling back to the static photo with a Ken Burns zoom
 * otherwise.
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
            <strong className="font-semibold text-white">Rammed Earth South Sudan</strong> is a leading innovator in design + build, providing durable environmentally sustainable rammed earth structures, working closely with clients to create high-quality spaces that are built to last.
          </p>
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
