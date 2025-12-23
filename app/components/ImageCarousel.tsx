"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
};

export default function ImageCarousel({
  images,
  className,
  imageClassName,
  width = 500,
  height = 820,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const current = useMemo(() => images[index], [images, index]);
  const aspectRatio = (height / width) * 100;

  if (total === 0) {
    return null;
  }

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <figure className={`flex flex-col items-center ${className ?? ""}`}>
      <div className="w-full">
        <div className="relative w-full" style={{ paddingTop: `${aspectRatio}%` }}>
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 240px, (min-width: 640px) 150px, 100vw"
            className={`object-contain ${imageClassName ?? ""}`}
          />
        </div>
      </div>
      {total > 1 ? (
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous image"
            onClick={goPrev}
            className="rounded-full border border-black/20 px-3 py-1 text-sm"
          >
            {"<"}
          </button>
          <span className="text-sm">
            {index + 1}/{total}
          </span>
          <button
            type="button"
            aria-label="Next image"
            onClick={goNext}
            className="rounded-full border border-black/20 px-3 py-1 text-sm"
          >
            {">"}
          </button>
        </div>
      ) : null}
    </figure>
  );
}
