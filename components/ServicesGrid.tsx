import Link from "next/link";
import { services } from "@/content/services";
import { Section, SectionKicker, GhostLink } from "./UI";

// Shortened display name for this one card only — the full "Project
// Management & Consultation" name (used for the page title, SEO, and
// everywhere else it's referenced) lives untouched in content/services.ts.
const shortNameBySlug: Record<string, string> = {
  "project-management-consultation": "Project Management",
};

/**
 * Borderless line-list treatment, matching the Construct L reference: a
 * thin red line sits above each numbered item ("/01", "/02"...), no card
 * boxes at all. Header row unchanged: eyebrow + heading left, paragraph +
 * "View All Services" link right.
 */
export default function ServicesGrid() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-8 mb-14 items-end">
        <div>
          <SectionKicker index="02" label="Services" />
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            Discover Our Service Offerings
          </h2>
        </div>
        <div className="flex flex-col md:items-start gap-6">
          <p className="text-ink/65 leading-relaxed max-w-md">
            From rammed earth builds to full project management, we deliver
            excellence at every phase of the build.
          </p>
          <GhostLink href="/services">View All Services</GhostLink>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
        {services.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
            <div className="w-12 h-[3px] bg-signal mb-6 transition-all duration-300 group-hover:w-20" />
            <span className="font-display text-signal text-lg font-bold">{`/0${i + 1}`}</span>

            <div className="flex items-start justify-between gap-4 mt-3">
              <p className="font-display text-2xl md:text-3xl font-bold leading-snug text-ink group-hover:text-signal transition-colors duration-300">
                {shortNameBySlug[s.slug] ?? s.name}
              </p>
              {s.flagship && (
                <span className="shrink-0 inline-block text-[10px] font-semibold tracking-[0.14em] bg-signal text-white px-2.5 py-1 mt-1">
                  FLAGSHIP
                </span>
              )}
            </div>

            <p className="mt-4 text-sm md:text-base text-ink/65 leading-relaxed max-w-md">
              {s.oneLiner}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink/70 group-hover:text-signal transition-colors duration-300">
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
