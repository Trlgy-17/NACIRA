import React from "react";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ProjectFilter } from "@/components/portfolio/project-filter";

export const metadata: Metadata = {
  title: "Portfolio Kategori & Studi Kasus Interior | NACIRA STUDIO",
  description:
    "Jelajahi dokumentasi proyek arsitektur interior residential, komersial, dan kustom garapan NACIRA STUDIO di Indonesia.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fcf9f2] text-[#222220]">
      <div className="container-custom space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
            ARSIP KARYA TERSTRUKTUR
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#222220] tracking-tight">
            Portfolio NACIRA STUDIO
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#77746d] leading-relaxed font-light">
            Setiap proyek mewakili perjalanan eksplorasi material, efisiensi alur spasial, dan kualitas eksekusi lapangan secara nyata.
          </p>
        </div>

        <ProjectFilter projects={PROJECTS} />
      </div>
    </div>
  );
}
