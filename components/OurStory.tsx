import Image from "next/image";
import { Section, GhostLink } from "./UI";

/**
 * Replaces the earlier "Why Rammed Earth" explainer with RCCL's real
 * founding story, mission, and vision (from the company profile),
 * condensed for the homepage. Full detail lives on /about.
 * Heading hierarchy: "About Us" is the section's one h2; "Mission" and
 * "Vision" are h3s nested under it — correct hierarchy, not a second
 * competing h2.
 *
 * Photo: public/team-on-site.jpg — replace this file with any updated
 * team photo later; no code change needed as long as the filename matches.
 */
export default function OurStory() {
  return (
    <Section className="bg-[#F7F6F3]">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] mb-6">
            About Us
          </h2>
          <p className="text-ink/75 leading-relaxed mb-5">
            Rammed Earth Construction Company Limited: Founded in 2022 with the commitment to deliver unparalleled innovative and
            sustainable construction techniques, with a core focus on the rammed
            earth construction technique.
          </p>
          <p className="text-ink/75 leading-relaxed mb-8">
            We&rsquo;re a multidisciplinary firm dedicated to addressing diverse
            design and construction requirements across various regions of South
            Sudan — offering a spectrum of architecture rooted in research, with
            the vision to create a sustainable urban fabric in the residential,
            commercial, and public realms.
          </p>
          <GhostLink href="/about">Read our full story</GhostLink>
        </div>

        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
          <Image
            src="/about.jpg"
            alt="RCCL team on site"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 md:gap-12 mt-14 pt-10 border-t border-ink/10">
        <div className="border-l-2 border-signal pl-5">
          <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-ink/60 mb-2">Mission</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            To innovate construction methods for better living, working, and
            travel environments, fostering positive impact on both
            communities and the environment.
          </p>
        </div>
        <div className="border-l-2 border-signal pl-5">
          <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-ink/60 mb-2">Vision</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            To provide cost-effective solutions that meet the requirements of
            our clients, the engineering community, environmental standards,
            and local regulatory specifications.
          </p>
        </div>
      </div>
    </Section>
  );
}