"use client";

import React from "react";
import Image from "next/image";
import { MATERIALS } from "@/data/materials";
import { motion } from "motion/react";

export function MaterialsShowcase() {
  return (
    <section id="materials" className="py-24 md:py-36 bg-[#f6f3ec] text-[#222220] border-t border-[#222220]/15">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16 border-b border-[#222220]/15 pb-6">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
            KUALITAS & TAKTILITAS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] tracking-tight">
            Palet Material Alami
          </h2>
          <p className="font-sans text-sm text-[#77746d] font-light leading-relaxed">
            Pilihan spesifikasi material kayu olahan berlapis veneer, PVC board tahan air, quartz stone, dan hardware soft-close untuk standar investasi ruang jangka panjang.
          </p>
        </div>

        {/* 4 Double-Bezel Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MATERIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Double-Bezel Outer Shell */}
              <div className="p-2.5 rounded-2xl md:rounded-3xl bg-[#222220]/5 border border-[#222220]/10 transition-all duration-300 group-hover:border-[#b68d40]/60 group-hover:shadow-xl">
                {/* Inner Core Container */}
                <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden bg-[#fcf9f2]">
                  <div className="relative aspect-square bg-[#e6ded1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#171614]/80 backdrop-blur-md text-[10.5px] font-sans font-semibold tracking-wider uppercase text-[#b68d40] border border-white/10">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-display text-2xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                      {item.description}
                    </p>
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
