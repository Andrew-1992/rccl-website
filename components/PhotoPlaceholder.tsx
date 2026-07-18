type PhotoPlaceholderProps = {
  label: string;
  aspect?: string; // tailwind aspect class e.g. "aspect-[4/3]"
  tone?: "ink" | "bone";
  className?: string;
};

/**
 * Every real image slot on the site renders through this component so it's
 * obvious to RCCL staff (and easy to grep) where photography needs to be
 * dropped in. Styled with the rammed-earth striation motif at low opacity,
 * corner registration ticks, and a small label chip so it reads as an
 * intentional, on-brand placeholder rather than a broken asset.
 */
export default function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  tone = "ink",
  className = "",
}: PhotoPlaceholderProps) {
  const bg = tone === "ink" ? "bg-ink" : "bg-[#EDEBE5]";
  const tickColor = tone === "ink" ? "border-white/30" : "border-ink/25";
  const chipBg = tone === "ink" ? "bg-white/10" : "bg-ink/8";
  const chipText = tone === "ink" ? "text-white/75" : "text-ink/60";
  const iconColor = tone === "ink" ? "text-white/20" : "text-ink/15";

  return (
    <div
      className={`relative w-full ${aspect} ${bg} overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            tone === "ink"
              ? "repeating-linear-gradient(0deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 2px, transparent 2px, transparent 14px)"
              : "repeating-linear-gradient(0deg, rgba(10,10,10,0.9) 0px, rgba(10,10,10,0.9) 2px, transparent 2px, transparent 14px)",
        }}
      />

      {/* Corner registration ticks — reads like a camera framing guide */}
      <span className={`absolute top-3 left-3 w-3 h-3 border-t border-l ${tickColor}`} aria-hidden="true" />
      <span className={`absolute top-3 right-3 w-3 h-3 border-t border-r ${tickColor}`} aria-hidden="true" />
      <span className={`absolute bottom-3 right-3 w-3 h-3 border-b border-r ${tickColor}`} aria-hidden="true" />

      {/* Centered camera glyph */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 ${iconColor}`}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="13.5" r="3.3" />
      </svg>

      <div className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 ${chipBg} px-2.5 py-1`}>
        <span className={`text-[10px] uppercase tracking-[0.1em] ${chipText} font-medium`}>{label}</span>
      </div>
    </div>
  );
}
