"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-[#fcf9f2] text-[#222220] overflow-hidden">
      <div className="container-custom">
        {/* Double-Bezel Outer Hardware Shell */}
        <div className="p-2 sm:p-3 rounded-[2.5rem] bg-[#222220]/5 border border-[#222220]/10 shadow-2xl">
          {/* Inner Core Hero Container */}
          <div className="relative min-h-[82dvh] md:min-h-[88dvh] w-full flex items-center justify-center p-6 sm:p-12 md:p-20 overflow-hidden rounded-[calc(2.5rem-0.75rem)] bg-[#171614] text-[#fcf9f2]">
            {/* Background Architectural Image with Radial Lighting Scrim */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/portfolio/backdrop-tv/2.JPG"
                alt="Interior & eksterior hunian arsitektural minimalis karya NACIRA STUDIO"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-[#171614]/65 to-[#171614]/30" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(182,141,64,0.15),transparent_60%)]" />
            </div>

            {/* Content Stack */}
            <div className="relative z-10 w-full max-w-5xl space-y-8 text-left">
              {/* Eyebrow Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#b68d40]/15 border border-[#b68d40]/30 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#b68d40] animate-pulse" />
                <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-[#b68d40]">
                  Interior Design & Build Studio
                </span>
              </motion.div>

              {/* Display Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#fcf9f2]"
              >
                Ruang yang Dirancang untuk Hidup Lebih{" "}
                <span className="italic font-normal text-[#b68d40]">Bermakna.</span>
              </motion.h1>

              {/* Subtitle Copy */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base sm:text-lg md:text-xl text-[#e5e2db]/85 max-w-2xl leading-relaxed font-light"
              >
                Mengintegrasikan kejujuran arsitektural dengan kehangatan material alami. Kami merancang dan membangun interior hunian serta komersial berkarakter timeless di Indonesia.
              </motion.p>

              {/* CTAs with Button-in-Button Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              >
                {/* Primary Button */}
                <Link
                  href="#consultation"
                  className="group inline-flex items-center justify-between font-sans text-xs font-semibold tracking-widest uppercase bg-[#b68d40] text-white pl-7 pr-2 py-2 rounded-full hover:bg-[#7b580d] transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#b68d40]/20"
                >
                  <span>Konsultasikan Ruangan Anda</span>
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center ml-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center font-sans text-xs font-semibold tracking-widest uppercase text-[#fcf9f2] bg-white/5 border border-white/20 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white/15 transition-all duration-300 text-center active:scale-[0.98]"
                >
                  Lihat Portofolio
                </Link>
              </motion.div>

              {/* Micro Trust Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-sans text-[#a99782]"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b68d40]" />
                  <span>Workshop Produksi Sendiri</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b68d40]" />
                  <span>Garansi 6 Bulan & After Sales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b68d40]" />
                  <span>Estimasi Biaya Transparan</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
