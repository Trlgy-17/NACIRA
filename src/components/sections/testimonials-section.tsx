"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-36 bg-[#fcf9f2] text-[#222220]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16 border-b border-[#222220]/15 pb-6">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
            KEPERCAYAAN KLIEN
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] tracking-tight">
            Testimonial & Reputasi
          </h2>
          <p className="font-sans text-sm text-[#77746d] font-light leading-relaxed">
            Pengalaman nyata pemilik hunian dan ruang komersial yang mempercayakan perancangan serta pembangunan interior bersama NACIRA STUDIO.
          </p>
        </div>

        {/* 4 Double-Bezel Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              {/* Double-Bezel Outer Shell */}
              <div className="p-2.5 rounded-2xl md:rounded-3xl bg-[#222220]/5 border border-[#222220]/10 transition-all duration-300 group-hover:border-[#b68d40]/60 group-hover:shadow-xl h-full flex flex-col justify-between">
                {/* Inner Core Container */}
                <div className="p-8 rounded-[calc(1.5rem-0.375rem)] bg-[#f6f3ec] space-y-6 h-full flex flex-col justify-between border border-[#222220]/5">
                  <div className="space-y-4">
                    <Quote className="w-8 h-8 text-[#b68d40] stroke-[1.5]" />
                    <p className="font-sans text-sm sm:text-base text-[#222220] leading-relaxed font-light">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="border-t border-[#222220]/10 pt-4 flex justify-between items-center text-xs font-sans">
                    <div>
                      <span className="font-semibold text-[#222220] block">{t.clientName}</span>
                      <span className="text-[#77746d] font-light">{t.roleOrProject} • {t.location}</span>
                    </div>
                    <span className="text-[#b68d40] font-semibold tracking-wider">{t.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
