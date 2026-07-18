import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import RammedEarthLayers from "./RammedEarthLayers";

/**
 * Background media: supports either a video or a static image — video wins
 * automatically if present.
 *  - Video: drop an .mp4 at public/hero-bg.mp4 (compressed, ~15-20s loop,
 *    no audio track needed since it renders muted — a slow drone pass over
 *    a rammed earth site or a compaction close-up both fit well). Keep the
 *    file under ~8MB; this is a bandwidth-constrained market.
 *  - Image: public/hero-bg.jpg is always used as the <video> poster and as
 *    the fallback for people on prefers-reduced-motion or if no video file
 *    is present. Replace the placeholder there with a real photo (2400px+
 *    wide landscape — a rammed earth wall or a completed project).
 * The two overlay layers hold contrast for the white headline/CTAs
 * regardless of which media type is showing.
 */

export default function Hero() {
  const hasVideo = fs.existsSync(path.join(process.cwd(), "public", "hero-bg.mp4"));

  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {/* Background media */}
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
        {/* Directional gradient — deepens toward the copy so text stays sharp,
            lightens toward the top-right so the media still reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      </div>

      <div className="container-rccl pt-32 pb-24 md:pt-44 md:pb-32 relative z-10">
        <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[9vw] sm:text-[6vw] md:text-[4vw] lg:text-[4rem] max-w-3xl fade-rise" style={{ animationDelay: "80ms" }}>
          We Design and Build
          <br />
          Using the Earth
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-white/80 leading-relaxed fade-rise" style={{ animationDelay: "160ms" }}>
          Rammed Earth Construction Co. Ltd partners with clients to build rammed earth structures that are environmentally sustainable.
        </p>
      </div>

      <RammedEarthLayers bandCount={18} height={90} redBandIndex={2} className="relative z-10" />
    </section>
  );
}