import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, PrimaryButton } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import ServiceProcess from "@/components/ServiceProcess";
import RelatedProjects from "@/components/RelatedProjects";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("general-construction")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
};

export default function GeneralConstructionPage() {
  return (
    <>
      <PageHero eyebrow="Service" title={service.name} intro={service.definition}>
        <div className="mt-8">
          <PrimaryButton href="/contact">{service.ctaLabel}</PrimaryButton>
        </div>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Conventional builds, hybrid projects
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
          <PhotoPlaceholder label="General construction site, structural frame" aspect="aspect-[4/5]" />
        </div>
      </Section>

      <ServiceProcess steps={service.process} heading="From planning through handover" />

      <Section>
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-xl">
          Building types and scales we handle
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
          {service.capabilities?.map((c) => (
            <div key={c} className="flex gap-3 border-b border-line pb-4 text-sm md:text-base text-ink/75">
              <span className="text-signal shrink-0">&#9632;</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </Section>

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
