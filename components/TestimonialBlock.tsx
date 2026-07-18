import { Section } from "./UI";
import { Testimonial } from "@/content/testimonials";

export default function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Section className="border-y border-line">
      <blockquote className="max-w-3xl mx-auto text-center">
        <span className="block font-display text-6xl md:text-7xl text-signal leading-none mb-2" aria-hidden="true">
          &ldquo;
        </span>
        <p className="font-display text-2xl md:text-4xl font-normal leading-[1.3] text-ink">
          {testimonial.quote}
        </p>
        <footer className="mt-8 text-sm uppercase tracking-[0.1em] text-ink/55">
          {testimonial.attribution}
          {testimonial.org ? ` — ${testimonial.org}` : ""}
        </footer>
      </blockquote>
    </Section>
  );
}
