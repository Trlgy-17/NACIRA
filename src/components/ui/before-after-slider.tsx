"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = "Sebelum",
  afterLabel = "Sesudah",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let positionPercentage = (x / rect.width) * 100;
      if (positionPercentage < 0) positionPercentage = 0;
      if (positionPercentage > 100) positionPercentage = 100;
      setSliderPosition(positionPercentage);
    });
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 4));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 4));
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden select-none touch-none rounded-lg border border-[#222220]/15 cursor-ew-resize group"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label="Pembanding Sebelum dan Sesudah Interior"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After Image (Background layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-[#222220]/80 text-white text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped layer with fluid transition) */}
      <div
        className="absolute top-0 bottom-0 left-0 h-full overflow-hidden will-change-[width] transition-all duration-75 ease-out"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: containerWidth ? `${containerWidth}px` : "100vw" }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-[#b68d40]/90 text-white text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
          {beforeLabel}
        </span>
      </div>

      {/* Vertical Slider Handle Bar with Spring Scale */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#b68d40] z-20 transform -translate-x-1/2 will-change-[left]"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => {
          e.stopPropagation();
          setIsDragging(true);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          setIsDragging(true);
        }}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#b68d40] border-2 border-white shadow-2xl flex items-center justify-center text-white text-sm font-bold transition-transform duration-200 ${
            isDragging ? "scale-115 shadow-gold-400/50" : "group-hover:scale-105"
          }`}
        >
          ↔
        </div>
      </div>
    </div>
  );
}
