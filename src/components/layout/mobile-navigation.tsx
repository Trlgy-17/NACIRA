"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { NaciraLogo } from "@/components/ui/logo";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#materials", label: "Materials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/portfolio", label: "All Portfolio" },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const waUrl = buildWhatsAppUrl();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#222220] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b68d40]"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-[#fcf9f2] p-6 sm:p-8 shadow-2xl transition-transform duration-300 ease-in-out border-l border-[#222220]/10 flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasi Seluler"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#222220]/10">
            <NaciraLogo height={32} showText={true} />
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#222220] hover:text-[#b68d40]"
              aria-label="Tutup menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-[#222220]/10 space-y-4">
          <Link
            href="/#consultation"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center font-sans text-xs font-semibold tracking-widest uppercase bg-[#b68d40] text-white py-3.5 rounded hover:bg-[#7b580d] transition-colors"
          >
            Form Konsultasi
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-sans text-xs font-semibold tracking-widest uppercase border border-[#222220]/20 text-[#222220] py-3 rounded hover:bg-[#222220] hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
