"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";
import { motion } from "motion/react";

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.isFeatured);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#fcf9f2] text-[#222220]">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#222220]/15 pb-6 gap-6">
          <div className="space-y-2">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
              PORTFOLIO SELECTION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] tracking-tight">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center space-x-2 font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors border-b border-[#222220]/20 pb-1"
          >
            <span>Lihat Seluruh Portfolio</span>
            <ArrowUpRight className="w-4 h-4 text-[#b68d40] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Bento Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-8">
          {featured.map((project, idx) => {
            const colSpanClass =
              idx % 4 === 0
                ? "md:col-span-8"
                : idx % 4 === 1
                ? "md:col-span-4"
                : idx % 4 === 2
                ? "md:col-span-5"
                : "md:col-span-7";

            const aspectClass =
              idx % 4 === 0
                ? "aspect-[16/10]"
                : idx % 4 === 1
                ? "aspect-[4/5]"
                : idx % 4 === 2
                ? "aspect-[4/3]"
                : "aspect-[16/10]";

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group cursor-pointer ${colSpanClass}`}
              >
                <Link href={`/portfolio/${project.slug}`} className="block">
                  {/* Double-Bezel Hardware Shell */}
                  <div className="p-2 rounded-2xl md:rounded-3xl bg-[#222220]/5 border border-[#222220]/10 transition-all duration-300 group-hover:border-[#b68d40]/50 group-hover:shadow-xl">
                    <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden bg-[#f6f3ec]">
                      <ProjectImageCarousel
                        images={project.gallery}
                        title={project.title}
                        aspectClass={aspectClass}
                      />
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center text-[11px] font-sans font-semibold tracking-widest uppercase text-[#a99782]">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f6f3ec] border border-[#222220]/10 text-[#4e4538]">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-[#222220] group-hover:text-[#b68d40] transition-colors pt-1">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
