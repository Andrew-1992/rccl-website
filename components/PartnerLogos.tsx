const partners = ["[Partner 1]", "[Partner 2]", "[Partner 3]", "[Partner 4]", "[Partner 5]"];

export default function PartnerLogos() {
  return (
    <div className="border-y border-line bg-white py-14 md:py-16">
      <div className="container-rccl text-center">
        <span className="block text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-signal mb-3">
          Partners
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold max-w-xl mx-auto leading-[1.15]">
          Trusted by Government Bodies, NGOs, and Developers Across South Sudan
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <span key={p} className="font-display text-lg text-ink/35">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
