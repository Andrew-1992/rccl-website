import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import RammedEarthLayers from "./RammedEarthLayers";

/**
 * Full-bleed background media, text overlaid on top — the split-screen
 * layout has been removed per direction. Video wins automatically if
 * present.
 *  - Video: drop an .mp4 at public/hero-bg.mp4 (compressed, ~15-20s loop,
 *    muted, under ~8MB — this is a bandwidth-constrained market).
 *  - Image: public/hero-bg.jpg is always used as the <video> poster and as
 *    the fallback for prefers-reduced-motion or if no video file exists.
 * The two overlay layers below hold contrast for the white text regardless
 * of what the video/photo actually looks like.
 */
export default function Hero() {
  const hasVideo = fs.existsSync(path.join(process.cwd(), "public", "hero-bg.mp4"));

  return (
    <section className="relative bg-ink text-white overflow-hidden min-h-[560px] lg:min-h-[640px] flex items-center justify-start">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {hasVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        )}
        {/* Uniform wash — a contrast floor that holds no matter what the media is */}
        <div className="absolute inset-0 bg-ink/60" />
        {/* Directional gradient — deepens toward the copy so text stays sharp */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      </div>

      <div className="container-rccl pt-28 pb-16 md:py-24 relative z-10 text-left w-full">
        <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[9vw] sm:text-[6vw] md:text-[3.6vw] lg:text-5xl max-w-2xl fade-rise" style={{ animationDelay: "80ms" }}>
          We Design and Build
          <br />
          Using the Earth
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-white/80 leading-relaxed fade-rise" style={{ animationDelay: "160ms" }}>
          Rammed Earth Construction Co. Ltd partners with clients to build rammed earth structures that are environmentally sustainable.
        </p>
      </div>

      <RammedEarthLayers bandCount={18} height={90} redBandIndex={2} className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}
