"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const waUrl = buildWhatsAppUrl();

  const drawerContent = (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel with solid opaque background */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-[85vw] max-w-sm bg-[#171614] text-[#fcf9f2] p-6 sm:p-8 shadow-2xl transition-transform duration-300 ease-out border-l border-white/10 flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasi Seluler"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <NaciraLogo height={32} showText={true} textColor="text-[#fcf9f2]" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#fcf9f2] hover:text-[#b68d40] transition-colors rounded-full bg-white/5 border border-white/10"
              aria-label="Tutup menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm font-semibold tracking-[0.18em] uppercase text-[#e5e2db]/90 hover:text-[#b68d40] transition-colors py-3 border-b border-white/5 flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#b68d40] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-3 mt-8">
          <Link
            href="/#consultation"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center font-sans text-xs font-semibold tracking-widest uppercase bg-[#b68d40] text-white py-4 rounded-full hover:bg-[#7b580d] transition-colors shadow-md"
          >
            Form Konsultasi
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full text-center font-sans text-xs font-semibold tracking-widest uppercase border border-white/20 text-[#fcf9f2] py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#222220] hover:text-[#b68d40] transition-colors rounded-full bg-[#222220]/5 border border-[#222220]/10"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mounted && createPortal(drawerContent, document.body)}
    </div>
  );
}
