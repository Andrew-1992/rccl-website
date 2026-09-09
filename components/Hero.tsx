import fs from "node:fs";
import path from "node:path";
import HeroContent from "./HeroContent";

/**
 * Server component — only job is the file-system check (must stay
 * server-side, node:fs cannot run in a browser), passed down as a plain
 * prop. Everything else lives in HeroContent.
 */
export default function Hero() {
  const hasVideo = fs.existsSync(path.join(process.cwd(), "public", "hero-bg.mp4"));

  return <HeroContent hasVideo={hasVideo} />;
}
