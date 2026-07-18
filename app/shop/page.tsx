import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CTABand from "@/components/CTABand";
import { shopCategories } from "@/content/shop";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Shop",
  description: "Construction materials supply from RCCL — rammed earth stabilizer mix, aggregate, formwork, roofing, and finishing materials in Juba, South Sudan.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Construction materials, sourced and supplied."
        intro="Construction Materials Supply is one of RCCL's core services. We stock and source the materials behind our own builds — available to other contractors and clients directly. Enquire on any category for pricing and current stock."
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {shopCategories.map((c) => (
            <div key={c.slug} className="bg-white p-6 md:p-8 flex flex-col">
              <PhotoPlaceholder label={c.name} aspect="aspect-[4/3]" className="mb-5" />
              <h2 className="font-display text-lg md:text-xl font-bold mb-2">{c.name}</h2>
              <p className="text-sm text-ink/65 leading-relaxed mb-6 flex-1">{c.description}</p>
              <a
                href={whatsappLink(`Hello RCCL, I'd like to enquire about: ${c.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-ink hover:text-white transition-colors duration-200 self-start"
              >
                Enquire
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F6F3]">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 max-w-xl">
          Materials supply, without the guesswork
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="text-signal font-display text-2xl font-bold">01</span>
            <h3 className="font-display text-lg font-bold mt-3 mb-2">Enquire</h3>
            <p className="text-sm text-ink/65 leading-relaxed">Message us the category and quantity you need — by WhatsApp or the contact form.</p>
          </div>
          <div>
            <span className="text-signal font-display text-2xl font-bold">02</span>
            <h3 className="font-display text-lg font-bold mt-3 mb-2">Confirm pricing &amp; stock</h3>
            <p className="text-sm text-ink/65 leading-relaxed">We confirm current pricing, availability, and delivery timeline for your Juba-area site.</p>
          </div>
          <div>
            <span className="text-signal font-display text-2xl font-bold">03</span>
            <h3 className="font-display text-lg font-bold mt-3 mb-2">Delivery</h3>
            <p className="text-sm text-ink/65 leading-relaxed">Materials delivered directly to site, on the schedule agreed at order.</p>
          </div>
        </div>
      </Section>

      <CTABand heading="Need materials for an active site?" buttonLabel="Enquire Now" />
    </>
  );
}
