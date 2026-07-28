"use client";

import React from "react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { motion } from "motion/react";

export function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-36 bg-[#fcf9f2] text-[#222220]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
              TRANSFORMASI SPASIAL
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] leading-[1.05] tracking-tight">
              Studi Perubahan Ruang Realistis.
            </h2>
            <p className="font-sans text-base text-[#77746d] leading-relaxed font-light">
              Geser penanda untuk melihat bagaimana pengorganisasian ulang tata letak, pencahayaan arsitektural, dan pemilihan material alami mengubah potensi ruang eksisting secara dramatis.
            </p>
            <div className="pt-2 text-xs font-sans text-[#a99782] font-light italic">
              * Geser tombol di tengah untuk membandingkan foto sebelum & sesudah renovasi.
            </div>
          </motion.div>

          {/* Right Column Double-Bezel Hardware Slider Container */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-2.5 rounded-2xl md:rounded-3xl bg-[#222220]/5 border border-[#222220]/10 shadow-2xl overflow-hidden"
          >
            <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden">
              <BeforeAfterSlider
                beforeImage="/images/before-after/BEFORE_v3.png"
                afterImage="/images/before-after/AFTER_v3.png"
                beforeAlt="Kondisi awal ruangan sebelum renovasi oleh NACIRA STUDIO"
                afterAlt="Hasil pengerjaan renovasi interior arsitektural karya NACIRA STUDIO"
                beforeLabel="Sebelum Renovasi"
                afterLabel="Hasil NACIRA STUDIO"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
