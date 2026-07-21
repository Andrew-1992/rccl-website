"use client";

import { useEffect, useRef, useState } from "react";

type RammedEarthLayersProps = {
  /** Number of horizontal compaction bands */
  bandCount?: number;
  /** Overall height of the motif */
  height?: number;
  /** Where one band should render in signal red to act as the "stamp" moment */
  redBandIndex?: number;
  className?: string;
  /** If true, animates bands rising in sequence like compaction, once in view */
  animate?: boolean;
};

/**
 * Abstracts the literal construction technique — earth compacted in layers
 * inside formwork — into a horizontal striated graphic. Reused across the
 * site as a section divider, hero backdrop, and loading state so it becomes
 * recognizably "RCCL" independent of the logo.
 */
export default function RammedEarthLayers({
  bandCount = 14,
  height = 120,
  redBandIndex,
  className = "",
  animate = true,
}: RammedEarthLayersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(!animate);

  useEffect(() => {
    if (!animate || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  const bandHeight = height / bandCount;
  // Deterministic pseudo-random opacity per band so the texture reads as
  // compacted soil, not a flat gradient — seeded so SSR/CSR output matches.
  const opacities = Array.from({ length: bandCount }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    const frac = seed - Math.floor(seed);
    return 0.35 + frac * 0.55;
  });

  return (
    <div ref={ref} className={`w-full overflow-hidden ${className}`} style={{ height }} aria-hidden="true">
      {Array.from({ length: bandCount }).map((_, i) => {
        const isRed = redBandIndex !== undefined && i === bandCount - 1 - redBandIndex;
        return (
          <div
            key={i}
            suppressHydrationWarning
            className={inView ? "layer-band" : ""}
            style={{
              height: bandHeight,
              background: isRed ? "var(--color-signal)" : "var(--color-ink)",
              opacity: isRed ? 1 : opacities[i],
              animationDelay: inView ? `${(bandCount - i) * 28}ms` : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
