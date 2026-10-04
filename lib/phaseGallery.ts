import fs from "node:fs";
import path from "node:path";

/**
 * Reads the photos for one project phase straight from its folder in
 * /public/sustainability/phases/<folder>. To add photos to a phase, drop
 * image files into that folder — no code changes needed. Files are shown
 * in name order, so number them: demolition-01.jpg, demolition-02.jpg ...
 *
 * Runs on the server at build time (the Sustainability page is static).
 */
const IMAGE_PATTERN = /\.(jpe?g|png|webp|avif)$/i;

export function getPhaseImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "sustainability", "phases", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_PATTERN.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/sustainability/phases/${folder}/${file}`);
  } catch {
    return [];
  }
}
