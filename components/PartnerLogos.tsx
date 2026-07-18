const partners = ["[Partner 1]", "[Partner 2]", "[Partner 3]", "[Partner 4]", "[Partner 5]"];

export default function PartnerLogos() {
  return (
    <div className="border-y border-line bg-white py-10 md:py-12">
      <div className="container-rccl">
        <p className="text-center text-xs uppercase tracking-[0.14em] text-ink/45 mb-8">
          Trusted by government bodies, NGOs, and developers across South Sudan
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <span key={p} className="font-display text-lg text-ink/35">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
