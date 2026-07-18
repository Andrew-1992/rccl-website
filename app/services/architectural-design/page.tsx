import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, PrimaryButton } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import ServiceProcess from "@/components/ServiceProcess";
import RelatedProjects from "@/components/RelatedProjects";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("architectural-design")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
};

export default function ArchitecturalDesignPage() {
  return (
    <>
      <PageHero eyebrow="Service" title={service.name} intro={service.definition}>
        <div className="mt-8">
          <PrimaryButton href="/contact">{service.ctaLabel}</PrimaryButton>
        </div>
      </PageHero>

      {/* Editorial photo/rendering spread — this page can lean more visual than the others */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        <PhotoPlaceholder label="Concept sketch" aspect="aspect-square" className="col-span-1" />
        <PhotoPlaceholder label="Site section drawing" aspect="aspect-square" className="col-span-1" />
        <PhotoPlaceholder label="Massing render" aspect="aspect-square" className="col-span-2 md:col-span-1" />
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Design-only, or design as phase one
            </h2>
            <ul className="space-y-4">
              {service.whoForList?.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-ink/75 leading-relaxed">
                  <span className="text-signal mt-1.5 shrink-0">&#9632;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Design philosophy</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Material honesty, climate first
            </h2>
            <p className="text-ink/75 leading-relaxed font-display text-xl md:text-2xl leading-snug">
              {service.designPhilosophy}
            </p>
          </div>
        </div>
      </Section>

      <ServiceProcess steps={service.process} heading="From brief to construction-ready drawings" dark />

      <RelatedProjects slugs={service.relatedProjectSlugs} />

      <Section className="text-center bg-ink text-white">
        <h2 className="font-display text-2xl md:text-4xl font-bold max-w-2xl mx-auto mb-8">
          {service.ctaLabel}
        </h2>
        <PrimaryButton href="/contact">{service.ctaLabel}</PrimaryButton>
      </Section>
    </>
  );
}
