// Founded 2022 (per RCCL company profile) — years operating and projects
// delivered are derived from that document.
const stats = [
  { value: `${new Date().getFullYear() - 2022}+`, label: "Years operating" },
  { value: "12+", label: "Projects delivered" },
  { value: "8", label: "Sectors served" },
];

export default function TrustStrip() {
  return (
    <div className="border-b border-line bg-white">
      <div className="container-rccl py-10 md:py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-signal pl-4 md:pl-5">
            <div className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">{s.value}</div>
            <div className="mt-2.5 text-xs md:text-sm uppercase tracking-[0.1em] text-ink/55">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
