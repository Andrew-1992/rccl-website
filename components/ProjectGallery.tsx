"use client";

import Image from "next/image";
import { useState } from "react";

import { Eyebrow, Section } from "./UI";

/**
 * Project gallery.
 *
 * Clicking the gallery image cycles through the project's images.
 * Image paths should start with /projects/...
 */
export default function ProjectGallery({
  images = [],
}: {
  images?: string[];
}) {
  const [activeImage, setActiveImage] = useState(0);

  if (images.length === 0) return null;

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <Section className="!pt-0">
      <Eyebrow>Gallery</Eyebrow>

      <h2 className="mb-8 font-display text-3xl font-bold md:text-4xl">
        On site
      </h2>

      <button
        type="button"
        onClick={nextImage}
        className="relative block aspect-[16/10] w-full overflow-hidden"
        aria-label="View next project image"
      >
        {images.map((image, index) => (
          <Image
            key={`${image}-${index}`}
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            priority={index === 0}
            className={`object-cover transition-opacity duration-700 ${
              index === activeImage
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          />
        ))}

        {images.length > 1 && (
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeImage
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </button>
    </Section>
  );
}