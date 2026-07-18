export default function SourceTag({ children = "[X]" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] uppercase tracking-[0.08em] text-ink/45 border border-line px-2 py-1">
      Source: {children}
    </span>
  );
}
