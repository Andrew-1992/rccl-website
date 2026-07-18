import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, PrimaryButton } from "@/components/UI";
import ServiceProcess from "@/components/ServiceProcess";
import RelatedProjects from "@/components/RelatedProjects";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("project-management-consultation")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
};

export default function ProjectManagementConsultationPage() {
  return (
    <>
      <PageHero eyebrow="Service" title={service.name} intro={service.definition}>
        <div className="mt-8">
          <PrimaryButton href="/contact">{service.ctaLabel}</PrimaryButton>
        </div>
      </PageHero>

      <Section>
        <Eyebrow>Who it&rsquo;s for</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-2xl">
          Independent oversight, before or during a build
        </h2>
        <div className="border-t border-line">
          {service.whoForList?.map((item) => (
            <div key={item} className="border-b border-line py-5 flex gap-6 items-start">
              <span className="text-signal shrink-0 mt-0.5">&#9632;</span>
              <p className="text-sm md:text-base text-ink/75 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <ServiceProcess steps={service.process} heading="From feasibility to close-out" />

      <Section className="bg-ink text-white">
        <Eyebrow>What clients get</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 max-w-xl">
          Four things a client-side PM gives you
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {service.whatClientsGet?.map((item, i) => {
            const [title, ...rest] = item.split(" — ");
            return (
              <div key={item} className="border-l-2 border-signal pl-5">
                <span className="text-xs text-white/50 tracking-[0.1em]">{`0${i + 1}`}</span>
                <h3 className="font-display text-lg font-bold mt-1 mb-2">{title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{rest.join(" — ")}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <RelatedProjects slugs={service.relatedProjectSlugs} />

      <Section className="text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold max-w-2xl mx-auto mb-8">
          {service.ctaLabel}
        </h2>
        <PrimaryButton href="/contact">{service.ctaLabel}</PrimaryButton>
      </Section>
    </>
  );
}
