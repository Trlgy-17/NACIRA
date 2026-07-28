"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#f6f3ec] text-[#222220] border-t border-[#222220]/15">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16 space-y-3">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#a99782]">
            Informasi Pertanyaan
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#222220]">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="font-sans text-sm text-[#77746d] max-w-lg mx-auto">
            Jawaban lengkap seputar alur konsultasi, estimasi pengerjaan, serta sistem garansi di NACIRA STUDIO.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#fcf9f2] border border-[#222220]/15 rounded-xl md:rounded-2xl overflow-hidden transition-colors shadow-xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex justify-between items-center space-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b68d40]"
                >
                  <span className="font-display text-xl text-[#222220]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#b68d40] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 font-sans text-sm text-[#77746d] leading-relaxed border-t border-[#222220]/10 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
