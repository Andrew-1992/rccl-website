import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, PrimaryButton } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import RammedEarthLayers from "@/components/RammedEarthLayers";
import ServiceProcess from "@/components/ServiceProcess";
import RelatedProjects from "@/components/RelatedProjects";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("rammed-earth-construction")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
};

export default function RammedEarthConstructionPage() {
  return (
    <>
      <PageHero eyebrow="Flagship service" title={service.name} intro={service.definition}>
        <div className="mt-8">
          <PrimaryButton href="/contact">{service.ctaLabel}</PrimaryButton>
        </div>
      </PageHero>

      {/* The signature motif gets its most prominent placement on this page */}
      <RammedEarthLayers bandCount={26} height={140} redBandIndex={4} />

      <Section>
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Why it matters here — sustainability</Eyebrow>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Low embodied carbon, sourced from the site
            </h2>
            <p className="text-ink/75 leading-relaxed">{service.whyItMatters?.sustainability}</p>
          </div>
          <div>
            <Eyebrow>Why it matters here — performance</Eyebrow>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Built for South Sudan&rsquo;s heat
            </h2>
            <p className="text-ink/75 leading-relaxed">{service.whyItMatters?.performance}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Ideal project types</h2>
            <ul className="space-y-5">
              {service.whoForList?.map((item) => (
                <li key={item} className="flex gap-4 border-l-2 border-signal pl-5">
                  <span className="text-sm md:text-base text-ink/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder label="Rammed earth wall, close texture detail" aspect="aspect-[4/5]" />
        </div>
      </Section>

      <ServiceProcess steps={service.process} heading="How RCCL builds a rammed earth wall" dark />

      <Section>
        <Eyebrow>Materials &amp; method</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-2xl">
          The compaction technique, in plain terms
        </h2>
        <p className="text-ink/75 leading-relaxed max-w-2xl mb-10">
          Moist, engineered soil is placed in shallow layers inside rigid formwork and
          compacted — mechanically, under controlled pressure — until each layer
          reaches its design density before the next is added. That layer-by-layer
          compaction is what gives the finished wall its structural strength and its
          visible striated texture. Every layer is a load test the wall passes before
          the next one is poured.
        </p>
        <ul className="space-y-3 max-w-2xl">
          {service.materials.map((m) => (
            <li key={m} className="flex gap-3 text-sm md:text-base text-ink/75 leading-relaxed">
              <span className="text-signal mt-1.5 shrink-0">&#9632;</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </Section>

      <RammedEarthLayers bandCount={26} height={64} animate={false} />

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
