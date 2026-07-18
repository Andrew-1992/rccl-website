import { PrimaryButton } from "./UI";

export default function CTABand({
  heading = "Tell us what you're building.",
  buttonLabel = "Request a Quote",
  href = "/contact",
}: {
  heading?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-signal text-white">
      <div className="container-rccl py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] max-w-2xl">
          {heading}
        </h2>
        <PrimaryButton href={href} className="!bg-ink hover:!bg-white hover:!text-ink shrink-0">
          {buttonLabel}
        </PrimaryButton>
      </div>
    </section>
  );
}
