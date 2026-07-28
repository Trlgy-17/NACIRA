"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { PenTool, Compass, Hammer, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const ICON_MAP = {
  PenTool: PenTool,
  Compass: Compass,
  Hammer: Hammer,
  Layers: Layers,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 bg-[#f6f3ec] text-[#222220] border-y border-[#222220]/15">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 border-b border-[#222220]/15 pb-6">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
            KEAHLIAN UTUH
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] tracking-tight">
            Layanan Kami
          </h2>
          <p className="font-sans text-sm text-[#77746d] font-light leading-relaxed">
            Layanan perancangan dan konstruksi interior profesional secara terpadu untuk hunian pribadi, apartemen, maupun ruang komersial.
          </p>
        </div>

        {/* 4 Double-Bezel Hardware Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName as keyof typeof ICON_MAP] || PenTool;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col justify-between"
              >
                {/* Double-Bezel Outer Shell */}
                <div className="h-full p-2.5 rounded-2xl md:rounded-3xl bg-[#222220]/5 border border-[#222220]/10 transition-all duration-300 group-hover:border-[#b68d40]/60 group-hover:shadow-xl flex flex-col justify-between">
                  {/* Inner Core */}
                  <div className="h-full p-6 sm:p-8 rounded-[calc(1.5rem-0.375rem)] bg-[#fcf9f2] space-y-6 flex flex-col justify-between border border-[#222220]/5">
                    <div className="space-y-4">
                      {/* Icon Tray */}
                      <div className="w-12 h-12 rounded-xl bg-[#f6f3ec] border border-[#222220]/10 flex items-center justify-center text-[#b68d40] group-hover:bg-[#222220] group-hover:text-[#b68d40] transition-colors duration-300">
                        <IconComponent className="w-6 h-6 stroke-[1.5]" />
                      </div>

                      <div>
                        <h3 className="font-display text-2xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
                          {service.title}
                        </h3>
                        <p className="font-sans text-xs font-semibold tracking-wider text-[#a99782] uppercase mt-1">
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 font-sans text-xs text-[#4e4538] border-t border-[#222220]/10 pt-4">
                        {service.features.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#b68d40] shrink-0 mt-0.5" />
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-[#222220]/10">
                      <Link
                        href="#consultation"
                        className="inline-flex items-center space-x-1.5 font-sans text-xs font-semibold tracking-widest uppercase text-[#b68d40] group-hover:text-[#7b580d] transition-colors"
                      >
                        <span>Pilih Layanan Ini</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
