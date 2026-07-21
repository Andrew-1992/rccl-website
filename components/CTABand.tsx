import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PrimaryButton } from "./UI";

/**
 * Matches the CitiRise reference's closing CTA: full-bleed photo background
 * with a dark gradient anchoring the text, and a two-tone headline (white
 * first line, signal-red second line) — used on the homepage via
 * headingLine1/headingLine2.
 *
 * Every other page passes a single `heading` string (pre-existing,
 * page-specific copy) — that still renders exactly as before, as one
 * white line, so none of those pages needed to change.
 *
 * Background photo: drop an image at public/cta-bg.jpg (landscape,
 * 2000px+ wide) to activate the photo treatment; falls back to the
 * existing solid signal-red band if no file is present.
 */
export default function CTABand({
  heading,
  headingLine1 = "Ready to Build Your",
  headingLine2 = "Dream Project?",
  buttonLabel = "Contact Us",
  href = "/contact",
}: {
  heading?: string;
  headingLine1?: string;
  headingLine2?: string;
  buttonLabel?: string;
  href?: string;
}) {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "cta-bg.jpg"));

  return (
    <section className={`relative overflow-hidden ${hasPhoto ? "text-white" : "bg-signal text-white"}`}>
      {hasPhoto && (
        <div className="absolute inset-0">
          <Image src="/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>
      )}
      <div className="container-rccl py-20 md:py-28 relative z-10">
        {heading ? (
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] max-w-2xl text-white">
            {heading}
          </h2>
        ) : (
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] max-w-2xl">
            <span className="text-white">{headingLine1}</span>
            <br />
            <span className={hasPhoto ? "text-signal" : "text-ink"}>{headingLine2}</span>
          </h2>
        )}
        <PrimaryButton
          href={href}
          className={`mt-10 ${hasPhoto ? "" : "!bg-ink hover:!bg-white hover:!text-ink"}`}
        >
          {buttonLabel}
        </PrimaryButton>
      </div>
    </section>
  );
}
