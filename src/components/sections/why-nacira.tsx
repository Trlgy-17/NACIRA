"use client";

import React from "react";
import { Compass, FileCheck2, Hammer, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function WhyNacira() {
  const points = [
    {
      icon: Compass,
      title: "Integritas Spasial & Arsitektural",
      description: "Desain tidak sekadar menempel hiasan, melainkan mengoptimalkan dimensi, ventilasi alami, dan alur sirkulasi ruang.",
    },
    {
      icon: FileCheck2,
      title: "Transparansi Anggaran & Material",
      description: "Seluruh Rencana Anggaran Biaya (RAB) dibuat rinci tanpa biaya tersembunyi, dengan spesifikasi sampel material transparan.",
    },
    {
      icon: Hammer,
      title: "Fabrikasi Pertukangan Presisi",
      description: "Kami memiliki workshop fabrikasi kustom sendiri untuk menjamin kerapihan sambungan built-in cabinetry dan finishing.",
    },
    {
      icon: ShieldCheck,
      title: "Pengawasan & Garansi Pemeliharaan",
      description: "Supervisi langsung oleh arsitek senior di lapangan serta pemberian garansi pemeliharaan pasca serah terima.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#fcf9f2] text-[#222220]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
              MENGAPA MEMILIH NACIRA STUDIO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] leading-[1.05] tracking-tight">
              Standar Tinggi Tanpa Kompromi Kualitas.
            </h2>
            <p className="font-sans text-base text-[#77746d] leading-relaxed font-light">
              Setiap proyek interior di NACIRA STUDIO ditangani dengan ketelitian arsitektural. Kami menggabungkan estetika editorial yang refined dengan fungsionalitas praktis untuk investasi jangka panjang Anda.
            </p>
          </div>

          {/* Right Column Hardware Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-2.5 rounded-2xl bg-[#222220]/5 border border-[#222220]/10 transition-all duration-300 hover:border-[#b68d40]/60 hover:shadow-xl"
                >
                  <div className="p-7 rounded-[calc(1rem-0.25rem)] bg-[#f6f3ec] space-y-5 h-full flex flex-col justify-between border border-[#222220]/5">
                    {/* Modern Architectural Icon Tray */}
                    <div className="w-12 h-12 rounded-full bg-[#b68d40]/10 border border-[#b68d40]/30 text-[#b68d40] flex items-center justify-center group-hover:bg-[#b68d40] group-hover:text-white group-hover:border-[#b68d40] transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5 stroke-[1.3]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-xl sm:text-2xl text-[#222220] group-hover:text-[#b68d40] transition-colors leading-snug">
                        {pt.title}
                      </h3>
                      <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
