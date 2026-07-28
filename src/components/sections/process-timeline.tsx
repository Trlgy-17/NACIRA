"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/process";
import { CreditCard, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#f6f3ec] text-[#222220] border-t border-[#222220]/15">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16 border-b border-[#222220]/15 pb-6">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]">
            TRANSPARANSI KERJA & PEMBAYARAN
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] tracking-tight">
            Alur Pengerjaan Proyek
          </h2>
          <p className="font-sans text-sm text-[#77746d] font-light leading-relaxed">
            Tahapan kerja terstruktur dari konsultasi awal hingga serah terima garansi untuk kenyamanan dan kejelasan investasi Anda.
          </p>
        </div>

        {/* Timeline Line & Step Items */}
        <div className="relative border-l-2 border-[#b68d40]/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Step indicator node */}
              <div className="absolute -left-[43px] md:-left-[59px] top-1 w-7 h-7 rounded-full bg-[#222220] border-2 border-[#b68d40] flex items-center justify-center text-[11px] font-sans font-bold text-[#b68d40] group-hover:bg-[#b68d40] group-hover:text-white transition-colors duration-300 shadow-md">
                {step.stepNumber}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex flex-wrap gap-2 items-center text-[11px] font-sans font-semibold tracking-wider uppercase">
                    <span className="inline-flex items-center space-x-1.5 bg-[#e6ded1] text-[#4e4538] px-3.5 py-1 rounded-full border border-[#222220]/10">
                      <Clock className="w-3.5 h-3.5 text-[#b68d40]" />
                      <span>ESTIMASI: {step.duration}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
                    {step.title}
                  </h3>

                  {/* Payment stage badge */}
                  {step.paymentStage && (
                    <div className="inline-flex items-center space-x-2.5 bg-[#222220] text-[#fcf9f2] px-4 py-2 rounded-full text-xs font-sans font-medium border border-[#b68d40]/40 shadow-sm">
                      <CreditCard className="w-4 h-4 text-[#b68d40]" />
                      <span>{step.paymentStage}</span>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <p className="font-sans text-sm text-[#77746d] leading-relaxed font-light">
                    {step.description}
                  </p>

                  {/* Double-Bezel Hardware Deliverables Box */}
                  <div className="p-2 rounded-2xl bg-[#222220]/5 border border-[#222220]/10">
                    <div className="p-5 rounded-[calc(1rem-0.25rem)] bg-[#fcf9f2] space-y-3 border border-[#222220]/5">
                      <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-[#a99782] block border-b border-[#222220]/10 pb-2">
                        HASIL KELUARAN (DELIVERABLES):
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs text-[#4e4538]">
                        {step.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-[#b68d40] shrink-0 mt-0.5" />
                            <span className={del.startsWith("*") ? "italic text-[#77746d] font-light" : "font-light"}>
                              {del}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
