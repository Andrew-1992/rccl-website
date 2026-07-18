import PhotoPlaceholder from "./PhotoPlaceholder";
import { Eyebrow, Section } from "./UI";

/**
 * Renders one tile per caption in `images`. When real photography replaces
 * PhotoPlaceholder with next/image, images below the fold lazy-load
 * automatically (next/image defaults to loading="lazy" unless marked
 * priority) — no changes needed here beyond swapping the image component.
 */
export default function ProjectGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <Section className="!pt-0">
      <Eyebrow>Gallery</Eyebrow>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">On site</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {images.map((caption, i) => (
          <PhotoPlaceholder
            key={`${caption}-${i}`}
            label={caption}
            aspect={i % 5 === 0 ? "aspect-[4/3] md:col-span-2 md:aspect-[2.2/1]" : "aspect-[4/3]"}
          />
        ))}
      </div>
    </Section>
  );
}
