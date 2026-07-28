"use client";

import React from "react";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function ConsultationSection() {
  const waUrl = buildWhatsAppUrl();

  return (
    <section id="consultation" className="py-24 md:py-36 bg-[#171614] text-[#fcf9f2] overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8 lg:pr-6"
          >
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40] border-b border-[#b68d40]/40 pb-1">
              KONSULTASI LANGSUNG
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#fcf9f2] leading-[1.05] tracking-tight">
              Mari Berdiskusi Mengenai Visi Ruang Anda.
            </h2>

            <p className="font-sans text-base text-[#e5e2db]/80 leading-relaxed font-light">
              Isi formulir praktis 1-langkah di samping untuk terhubung secara langsung dengan tim Nacira Interior melalui WhatsApp.
            </p>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center space-x-3 text-xs font-sans text-[#e5e2db]/80">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>Respon Cepat Jam Kerja (09:00 - 18:00 WIB)</span>
              </div>

              <div className="space-y-2 text-xs font-sans text-[#a99782]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b68d40]" />
                  <span>Free Estimasi Biaya & Konsultasi Awal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b68d40]" />
                  <span>Survei Lokasi & Gambar Layout 2D Gratis</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 font-sans text-xs font-semibold tracking-widest uppercase border border-[#b68d40] text-[#b68d40] px-7 py-3.5 rounded-full hover:bg-[#b68d40] hover:text-white transition-all duration-300 active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi Langsung via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Double-Bezel Hardware Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Outer Hardware Shell */}
            <div className="p-3 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
              {/* Inner Core Container */}
              <div className="p-8 sm:p-12 rounded-[calc(1.5rem-0.375rem)] bg-[#fcf9f2] text-[#222220] space-y-6">
                <div>
                  <h3 className="font-display text-3xl text-[#222220]">
                    Formulir Konsultasi Proyek
                  </h3>
                  <p className="font-sans text-xs text-[#77746d] mt-1 font-light">
                    Lengkapi informasi berikut untuk mendapatkan estimasi dan rekomendasi terbaik dari tim arsitek kami.
                  </p>
                </div>

                <ConsultationForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
