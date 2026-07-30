import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/UI";
import CTABand from "@/components/CTABand";
import { events } from "@/content/events";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Events | Rammed Earth Construction Ltd",
  description: "Upcoming and past events from RCCL — site visits, apprenticeship open days, and industry expos in Juba, South Sudan.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Meet RCCL on site."
        intro="Site visits, apprenticeship open days, and industry expos — this is where we show the rammed earth technique in person, not just on a page."
      />

      <Section>
        <Eyebrow>Upcoming</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">What&rsquo;s next</h2>
        <div className="divide-y divide-line border-y border-line">
          {upcoming.map((e) => (
            <div key={e.slug} className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-6">
              <div>
                <span className="text-xs uppercase tracking-[0.1em] text-signal font-semibold">{e.date}</span>
                <h3 className="font-display text-lg md:text-xl font-bold mt-1">{e.title}</h3>
                <p className="text-sm text-ink/60 mt-1">{e.location}</p>
                <p className="text-sm text-ink/65 leading-relaxed mt-2 max-w-xl">{e.description}</p>
              </div>
              <a
                href={whatsappLink(`Hello RCCL, I'd like to RSVP for: ${e.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-ink hover:text-white transition-colors duration-200 shrink-0"
              >
                RSVP via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </Section>

      {past.length > 0 && (
        <Section className="bg-[#F7F6F3]">
          <Eyebrow>Past events</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Where we&rsquo;ve been</h2>
          <div className="divide-y divide-line border-y border-line">
            {past.map((e) => (
              <div key={e.slug} className="py-6">
                <span className="text-xs uppercase tracking-[0.1em] text-ink/45 font-semibold">{e.date}</span>
                <h3 className="font-display text-lg md:text-xl font-bold mt-1">{e.title}</h3>
                <p className="text-sm text-ink/60 mt-1">{e.location}</p>
                <p className="text-sm text-ink/65 leading-relaxed mt-2 max-w-xl">{e.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <CTABand heading="Want RCCL at your event or site visit?" />
    </>
  );
}
