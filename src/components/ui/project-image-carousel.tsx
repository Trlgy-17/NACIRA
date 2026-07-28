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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const prevSlide = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Event Handlers for Mobile Devices
  const minSwipeDistance = 35;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentImg = images[currentIndex] || images[0];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative overflow-hidden ${aspectClass} bg-[#e6ded1] rounded-xl md:rounded-2xl border border-[#222220]/10 group img-scale-container select-none touch-pan-y ${className}`}
    >
      <Image
        src={currentImg.url}
        alt={currentImg.alt || title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        className="object-cover img-scale-target transition-all duration-500 ease-out pointer-events-none"
        priority={currentIndex === 0}
      />

      {/* Navigation Arrow Controls - Visible on mobile touch & on hover on desktop */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Foto Sebelumnya"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-250 shadow-md cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Foto Selanjutnya"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-250 shadow-md cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex space-x-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full">
            {images.slice(0, 8).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Lihat foto ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-5 bg-white shadow-xs" : "w-1.5 bg-white/50 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
