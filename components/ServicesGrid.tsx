import Link from "next/link";
import { services } from "@/content/services";
import { Section, SectionKicker } from "./UI";

/**
 * Four equal-weight cards — the flagship (Rammed Earth Construction) still
 * carries a small "FLAGSHIP SERVICE" badge so its priority isn't lost, but
 * the card itself is the same size as the other three, per the "make it
 * the same size" direction. No photography in this grid (removed) — this
 * is a clean, text-led index; the actual project photography lives on
 * each service's own detail page and in the Portfolio section.
 */
export default function ServicesGrid() {
  return (
    <Section>
      
      <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.05] mb-12">
        What We Do
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group relative bg-white border border-ink/12 p-8 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[300px] overflow-hidden transition-all duration-300 ease-out hover:border-ink hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,10,10,0.25)] hover:bg-ink"
          >
            {/* Subtle red edge that slides in from the left on hover — a
                quieter, more premium alternative to a full color flip */}
            <span
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-signal tracking-[0.1em] transition-colors duration-300">
                  {`0${i + 1}`}
                </span>
                {s.flagship && (
                  <span className="inline-block text-[10px] font-semibold tracking-[0.14em] bg-signal text-white px-2.5 py-1">
                    FLAGSHIP SERVICE
                  </span>
                )}
              </div>
              <p className="font-display text-xl md:text-2xl font-bold leading-snug text-ink group-hover:text-white transition-colors duration-300">
                {s.name}
              </p>
              <p className="mt-4 text-sm md:text-base text-ink/65 group-hover:text-white/70 transition-colors duration-300 leading-relaxed">
                {s.oneLiner}
              </p>
            </div>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-ink group-hover:text-white transition-colors duration-300 w-fit">
              Learn more
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}