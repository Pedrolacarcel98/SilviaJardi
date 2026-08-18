"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  isNew?: boolean;
  hasSalePrice?: boolean;
}

export default function ProductGallery({ images, productName, isNew, hasSalePrice }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="aspect-square relative rounded-2xl overflow-hidden bg-surface-container-low ambient-glow border border-surface-container-low">
        <Image
          src={images[currentIndex]}
          alt={`${productName} - Vista ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />
        {isNew && !hasSalePrice && (
          <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full font-label-sm text-[12px] shadow-sm font-medium">
            Nuevo
          </div>
        )}
        {hasSalePrice && (
          <div className="absolute top-4 left-4 bg-error text-on-error px-4 py-1 rounded-full font-label-sm text-[12px] shadow-sm font-bold">
            Rebajado
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-24 h-24 relative rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                index === currentIndex
                  ? "border-primary"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt={`${productName} thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
