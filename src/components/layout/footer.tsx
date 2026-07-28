import React from "react";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { NaciraLogo } from "@/components/ui/logo";

export function Footer() {
  const waUrl = buildWhatsAppUrl();

  return (
    <footer className="bg-[#f6f3ec] border-t border-[#222220]/15 text-[#222220] pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#222220]/10">
          {/* Brand & Office Details */}
          <div className="lg:col-span-4 space-y-6">
            <NaciraLogo height={42} showText={true} />
            <p className="font-sans text-sm text-[#77746d] leading-relaxed">
              Membangun ruang interior berintegritas arsitektural tinggi. Mengintegrasikan kehangatan material alami, presisi pertukangan kustom, dan kepraktisan hidup sehari-hari.
            </p>
            <div className="pt-2 text-xs font-sans text-[#77746d] space-y-2 leading-relaxed">
              <p>
                <strong className="text-[#222220]">Office:</strong> Kp Cibogo, RT.03/RW.04, Citatah, Kec. Cipatat, Citatah, Bandung 40554, Kabupaten Bandung Barat, Jawa Barat 40554
              </p>
              <p>
                <strong className="text-[#222220]">Email:</strong>{" "}
                <a
                  href="mailto:nacirastudio@gmail.com"
                  className="text-[#4e4538] hover:text-[#b68d40] transition-colors underline"
                >
                  nacirastudio@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-[#222220]">WhatsApp:</strong>{" "}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4e4538] hover:text-[#b68d40] transition-colors font-medium"
                >
                  +62 853-8506-9717
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-[#a99782]">
              Navigasi Utama
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link href="/" className="text-[#4e4538] hover:text-[#b68d40] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-[#4e4538] hover:text-[#b68d40] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#4e4538] hover:text-[#b68d40] transition-colors">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-[#4e4538] hover:text-[#b68d40] transition-colors">
                  Proses Kerja
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#4e4538] hover:text-[#b68d40] transition-colors">
                  Arsip Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[#4e4538] hover:text-[#b68d40] transition-colors">
                  Pertanyaan Umum (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Maps Location Embed */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-[#a99782]">
              Lokasi Studio & Office
            </h4>
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#222220]/15 shadow-sm bg-[#e6ded1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7922.873873878583!2d107.42112946848674!3d-6.838102892158459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68fdfb8dae21d1%3A0xd1af7dcc0b4970d4!2sNACIRA%20STUDIO!5e0!3m2!1sid!2sid!4v1785146565536!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Google Maps NACIRA STUDIO"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Sub-footer Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-[#77746d] space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} NACIRA STUDIO. Architectural Integrity.</p>
          <div className="flex space-x-6">
            <span>Privasi & Syarat Ketentuan</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
