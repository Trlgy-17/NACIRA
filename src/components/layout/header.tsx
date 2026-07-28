import React from "react";
import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { NaciraLogo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#fcf9f2]/75 backdrop-blur-xl border-b border-[#222220]/10 transition-all duration-300 shadow-xs">
      <div className="container-custom flex justify-between items-center py-4 w-full">
        {/* Brand Logo with Monogram Mark */}
        <Link
          href="/"
          className="hover:opacity-85 transition-opacity"
          aria-label="NACIRA STUDIO Beranda"
        >
          <NaciraLogo height={38} showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 lg:space-x-10 items-center">
          <Link
            href="/"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/#services"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#process"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors"
          >
            Process
          </Link>
          <Link
            href="/#materials"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors"
          >
            Materials
          </Link>
          <Link
            href="/#faq"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/portfolio"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-[#4e4538] hover:text-[#b68d40] transition-colors"
          >
            Portfolio
          </Link>
        </nav>

        {/* Action Button & Mobile Nav Trigger */}
        <div className="flex items-center space-x-4">
          <Link
            href="/#consultation"
            className="font-sans text-xs font-semibold tracking-widest uppercase text-white bg-[#171614] px-6 py-3 rounded-full hover:bg-[#b68d40] transition-all duration-300 hidden sm:inline-block shadow-sm active:scale-[0.98]"
          >
            Konsultasi
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
