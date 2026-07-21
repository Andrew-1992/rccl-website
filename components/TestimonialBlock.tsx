import { Section, SectionKicker } from "./UI";
import { Testimonial } from "@/content/testimonials";

/**
 * Restyled to match the CitiRise reference: dark background, eyebrow +
 * heading on the left, quote on the right with a vertical divider between.
 * CitiRise's version also shows an avatar stack, a "138+ Clients Worldwide"
 * count, a client photo, and prev/next carousel arrows — none of those are
 * included here since RCCL has exactly one honest placeholder testimonial
 * and no real client photos or a verified client count to show. Once RCCL
 * has multiple real testimonials, the prev/next arrows become worth adding.
 */
export default function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Section className="bg-ink text-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <SectionKicker index="05" label="Testimonials" tone="dark" />
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
            Words From Client
            <br />
            Testimonials
          </h2>
        </div>

        <div className="lg:border-l lg:border-white/15 lg:pl-12">
          <blockquote>
            <p className="font-display text-2xl md:text-3xl font-normal leading-[1.35] text-white">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8 text-sm uppercase tracking-[0.1em] text-white/55">
              {testimonial.attribution}
              {testimonial.org ? ` — ${testimonial.org}` : ""}
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
