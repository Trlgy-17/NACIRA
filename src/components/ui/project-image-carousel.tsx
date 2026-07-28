"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectImage } from "@/types";

interface ProjectImageCarouselProps {
  images: ProjectImage[];
  title: string;
  aspectClass?: string;
  className?: string;
}

export function ProjectImageCarousel({
  images,
  title,
  aspectClass = "aspect-[4/3]",
  className = "",
}: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImg = images[currentIndex] || images[0];

  return (
    <div
      className={`relative overflow-hidden ${aspectClass} bg-[#e6ded1] rounded-xl md:rounded-2xl border border-[#222220]/10 group img-scale-container ${className}`}
    >
      <Image
        src={currentImg.url}
        alt={currentImg.alt || title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        className="object-cover img-scale-target transition-all duration-500 ease-out"
        priority={currentIndex === 0}
      />

      {/* Navigation Arrow Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Foto Selanjutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex space-x-1.5 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-full">
            {images.slice(0, 8).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Lihat foto ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
