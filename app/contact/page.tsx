import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/UI";
import ContactForm from "@/components/ContactForm";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact RCCL in Juba, South Sudan — request a quote by WhatsApp, form, phone, or email. We respond within 1 business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        intro="WhatsApp is the fastest way to reach us. If you'd rather send full project details in one go, use the form below — we respond within 1 business day either way."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Reach us</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Two ways to start a conversation</h2>

            <a
              href={whatsappLink("Hello RCCL, I'd like to ask about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-ink text-white px-6 py-5 mb-4 hover:bg-signal transition-colors duration-200 group"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.1em] text-white/60 mb-1">Fastest response</span>
                <span className="font-display text-xl font-bold">Chat on WhatsApp</span>
              </span>
              <span aria-hidden="true" className="text-2xl">&rarr;</span>
            </a>

            <div className="border border-line p-6 space-y-4 text-sm">
              <Row label="Office" value="[X] Street, Juba, South Sudan" />
              <Row label="Phone" value="+211 [X] [X]" />
              <Row label="Email" value="info@rccl.co.ss" href="mailto:info@rccl.co.ss" />
              <Row label="Response time" value="Within 1 business day" />
            </div>

            <div className="mt-8 aspect-[4/3] w-full border border-line overflow-hidden">
              <iframe
                title="RCCL office location, Juba"
                src="https://www.google.com/maps?q=Juba,South+Sudan&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-ink/45 mt-2">[X] — update the map query with RCCL&rsquo;s exact office coordinates.</p>
          </div>

          <div>
            <Eyebrow>Or send full details</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Project enquiry form</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line pb-3 last:border-none last:pb-0">
      <span className="text-ink/55">{label}</span>
      {href ? (
        <a href={href} className="font-medium hover:text-signal transition-colors">{value}</a>
      ) : (
        <span className="font-medium text-right">{value}</span>
      )}
    </div>
  );
}
