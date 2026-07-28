"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const waUrl = buildWhatsAppUrl();

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi NACIRA STUDIO via WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center space-x-2 bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-w-[44px] min-h-[44px]"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="font-sans text-xs font-semibold tracking-wider hidden sm:inline-block">
        WhatsApp
      </span>
    </a>
  );
}
