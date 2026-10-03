"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "./UI";

/**
 * Split layout, matching the Brentor reference: solid-color panel with
 * headline + button on the left, full-bleed project photo with a stat
 * overlay on the right. Years-operating stat is calculated the same way
 * TrustStrip does elsewhere on the site, not invented.
 */
export default function CTABand({
  heading,
  headingLine1 = "Ready to Build Your",
  headingLine2 = "Dream Project?",
  buttonLabel = "Contact Us",
  href = "/contact",
}: {
  heading?: string;
  headingLine1?: string;
  headingLine2?: string;
  buttonLabel?: string;
  href?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const yearsOperating = new Date().getFullYear() - 2022;

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
    <section ref={sectionRef} className="grid md:grid-cols-2">
      <div
        suppressHydrationWarning
        className={`bg-signal text-white flex flex-col justify-center px-8 md:px-14 py-20 md:py-28 transition-all duration-700 ease-out ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {heading ? (
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] max-w-md">
            {heading}
          </h2>
        ) : (
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] max-w-md">
            {headingLine1}
            <br />
            {headingLine2}
          </h2>
        )}
        <p className="mt-5 text-white/85 max-w-sm leading-relaxed">
          We bring your vision to life with rammed earth craftsmanship and coordinated project delivery, start to handover.
        </p>
        <PrimaryButton
          href={href}
          className="mt-10 w-fit !bg-white !text-ink hover:!bg-ink hover:!text-white transition-transform duration-300 hover:scale-105"
        >
          {buttonLabel}
        </PrimaryButton>
      </div>

      <div
        suppressHydrationWarning
        className={`relative min-h-[320px] md:min-h-0 overflow-hidden transition-all duration-700 ease-out delay-200 ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/projects/ayendit-medical-center.jpg"
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-white">
          <p className="text-sm font-medium mb-1">Years of trusted expertise.</p>
          <p className="font-display text-6xl md:text-7xl font-bold leading-none">{yearsOperating}+</p>
        </div>
      </div>
    </section>
  );
}
