"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectImage } from "@/types";
import { motion, AnimatePresence } from "motion/react";

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
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  if (!images || images.length === 0) return null;

  const currentIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index: number) => {
    const dir = index > currentIndex ? 1 : -1;
    setPage([index, dir]);
  };

  // Variants for buttery-smooth horizontal slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0.9,
    }),
  };

  const currentImg = images[currentIndex] || images[0];

  return (
    <div
      className={`relative overflow-hidden ${aspectClass} bg-[#e6ded1] rounded-xl md:rounded-2xl border border-[#222220]/10 group img-scale-container select-none touch-pan-y ${className}`}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 320, damping: 32 },
            opacity: { duration: 0.25 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -200 || offset.x < -40) {
              paginate(1);
            } else if (swipe > 200 || offset.x > 40) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
        >
          <Image
            src={currentImg.url}
            alt={currentImg.alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover img-scale-target transition-transform duration-700 ease-out pointer-events-none"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrow Controls - Smooth Spring Hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              paginate(-1);
            }}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg cursor-pointer active:scale-90"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              paginate(1);
            }}
            aria-label="Foto Selanjutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg cursor-pointer active:scale-90"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicator Dots with Dynamic Spring Width & Glow */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
            {images.slice(0, 8).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                aria-label={`Lihat foto ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ease-out cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 bg-white shadow-xs"
                    : "w-1.5 bg-white/40 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
