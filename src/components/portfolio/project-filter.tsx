"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
import { motion } from "motion/react";

interface ProjectFilterProps {
  projects: Project[];
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Dynamically extract unique categories from projects data
  const dynamicCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["ALL", ...dynamicCategories];

  const filtered =
    selectedCategory === "ALL"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-[#222220]/15 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 cursor-pointer active:scale-[0.98] ${
              selectedCategory.toLowerCase() === cat.toLowerCase()
                ? "bg-[#222220] text-white shadow-md"
                : "bg-[#f6f3ec] text-[#4e4538] hover:bg-[#e6ded1] border border-[#222220]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group block"
          >
            <Link href={`/portfolio/${project.slug}`} className="block">
              {/* Double-Bezel Outer Shell */}
              <div className="p-2.5 rounded-2xl md:rounded-3xl bg-[#222220]/5 border border-[#222220]/10 transition-all duration-300 group-hover:border-[#b68d40]/60 group-hover:shadow-xl">
                <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden bg-[#f6f3ec]">
                  <ProjectImageCarousel
                    images={project.gallery}
                    title={project.title}
                    aspectClass="aspect-[4/3]"
                  />
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-[11px] font-sans font-semibold tracking-widest uppercase text-[#a99782]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f6f3ec] border border-[#222220]/10 text-[#4e4538]">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display text-2xl text-[#222220] group-hover:text-[#b68d40] transition-colors pt-1">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-[#77746d] line-clamp-2 font-light">
                  {project.summary}
                </p>
                <div className="pt-2 text-xs font-sans font-semibold text-[#b68d40] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Lihat Studi Kasus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
