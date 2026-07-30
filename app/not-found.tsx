import { PrimaryButton } from "@/components/UI";

export default function NotFound() {
  return (
    <section className="bg-ink text-white min-h-[70vh] flex flex-col justify-center">
      <div className="container-rccl pt-28 pb-24 md:pt-36">
        <span className="block text-xs uppercase tracking-[0.2em] font-semibold text-white/60 mb-6">404</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
          This page wasn&rsquo;t built yet.
        </h1>
        <p className="text-white/70 max-w-lg mb-10 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved. Head back to
          the homepage, or get in touch directly.
        </p>
        <PrimaryButton href="/">Back to homepage</PrimaryButton>
      </div>
    </section>
  );
}
