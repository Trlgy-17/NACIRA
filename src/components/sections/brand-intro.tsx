"use client";

import React from "react";
import { motion } from "motion/react";

export function BrandIntro() {
  return (
    <section className="py-24 md:py-36 bg-[#fcf9f2] text-[#222220] border-b border-[#222220]/10 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40]"
          >
            FILOSOFI NACIRA STUDIO
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl text-[#222220] leading-[1.08] tracking-tight"
          >
            Interior yang Berangkat dari Kebutuhan Nyata & Ketelitian Pertukangan.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-16 h-[2px] bg-[#b68d40]/40 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-[#77746d] max-w-3xl mx-auto leading-relaxed font-light"
          >
            Kami percaya bahwa desain yang baik bukan sekadar estetika permukaan, melainkan respons yang tepat terhadap cara Anda hidup, bekerja, dan berinteraksi. Pendekatan kami menyatukan arsitektur minimalis modern dengan material alami yang bernyawa.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
