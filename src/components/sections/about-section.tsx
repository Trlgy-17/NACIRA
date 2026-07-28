"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  FileCheck2,
  Gem,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const features = [
    {
      icon: Layers,
      title: "End-to-End Service",
      description:
        "Mulai dari konsultasi, desain, produksi, instalasi hingga garansi dalam satu layanan.",
    },
    {
      icon: FileCheck2,
      title: "Proses Transparan",
      description:
        "Klien mendapatkan alur kerja yang jelas, update progres, serta timeline pengerjaan yang terstruktur.",
    },
    {
      icon: Gem,
      title: "Material Berkualitas",
      description:
        "Menggunakan material pilihan dengan pengerjaan presisi untuk menghasilkan interior yang awet dan rapi.",
    },
    {
      icon: ShieldCheck,
      title: "Garansi & After Sales",
      description:
        "Setelah proyek selesai kami tetap memberikan layanan garansi dan pendampingan apabila diperlukan.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#fcf9f2] text-[#222220]">
      <div className="container-custom space-y-24">
        {/* Header & Manifesto */}
        <div className="max-w-4xl space-y-6">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#b68d40] border-b border-[#b68d40]/40 pb-1">
            ABOUT US
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222220] leading-[1.05] tracking-tight">
            Membangun Interior Berkualitas dengan Proses yang Transparan.
          </h2>

          <div className="font-sans text-base sm:text-lg text-[#77746d] leading-relaxed space-y-4 font-light pt-2">
            <p>
              Nacira Interior adalah perusahaan Interior Design & Build yang melayani proyek hunian maupun komersial secara end-to-end.
            </p>
            <p>
              Mulai dari konsultasi, desain, produksi di workshop sendiri, instalasi hingga after sales, seluruh proses dikerjakan secara profesional agar setiap detail sesuai dengan desain, kebutuhan, dan kualitas yang dijanjikan.
            </p>
          </div>
        </div>

        {/* 4 Premium Statistics with Revised Copy & Counter Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Since 2018 */}
          <div className="p-8 bg-[#f6f3ec] border border-[#222220]/10 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#b68d40]/50 group">
            <div className="font-display text-4xl md:text-5xl text-[#b68d40] group-hover:text-[#222220] transition-colors leading-none pt-2">
              Since 2018
            </div>
            <div className="space-y-1.5 pt-2">
              <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-[#222220]">
                Pengalaman yang Teruji
              </h3>
              <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                Lebih dari 7 tahun menghadirkan layanan Interior Design & Build dengan standar kualitas, presisi, dan profesionalisme yang konsisten.
              </p>
            </div>
          </div>

          {/* Card 2: 4048+ Area Interior Dikerjakan */}
          <div className="p-8 bg-[#f6f3ec] border border-[#222220]/10 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#b68d40]/50 group">
            <div className="font-display text-5xl md:text-6xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
              <AnimatedCounter end={4048} suffix="+" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-[#222220]">
                Area Interior Dikerjakan
              </h3>
              <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                Ribuan area interior hunian dan komersial telah kami desain, produksi, dan instalasi di berbagai kota di Indonesia.
              </p>
            </div>
          </div>

          {/* Card 3: 62+ Client Trust */}
          <div className="p-8 bg-[#f6f3ec] border border-[#222220]/10 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#b68d40]/50 group">
            <div className="font-display text-5xl md:text-6xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
              <AnimatedCounter end={62} suffix="+" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-[#222220]">
                Client Trust
              </h3>
              <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                Dipercaya oleh puluhan klien untuk menangani proyek interior dengan nilai investasi puluhan hingga ratusan juta rupiah.
              </p>
            </div>
          </div>

          {/* Card 4: 15+ Workshop & Production Partner */}
          <div className="p-8 bg-[#f6f3ec] border border-[#222220]/10 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#b68d40]/50 group">
            <div className="font-display text-5xl md:text-6xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-[#222220]">
                Workshop & Production Partner
              </h3>
              <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                Didukung jaringan workshop dan partner produksi untuk memastikan kapasitas pengerjaan, kualitas, dan ketepatan waktu tetap terjaga.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#fcf9f2] border border-[#222220]/15 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b68d40] hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-full bg-[#b68d40]/10 border border-[#b68d40]/30 flex items-center justify-center text-[#b68d40] group-hover:bg-[#b68d40] group-hover:text-white group-hover:border-[#b68d40] transition-all duration-300 shadow-xs">
                  <Icon className="w-5 h-5 stroke-[1.3]" />
                </div>
                <h3 className="font-display text-2xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
                  {feat.title}
                </h3>
                <p className="font-sans text-xs text-[#77746d] leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2-Column: Kenapa Memilih Nacira Interior */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#222220]/15">
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#222220]/15 shadow-xl bg-[#e6ded1] group">
            <Image
              src="/images/portfolio/backdrop-tv/2.JPG"
              alt="Hasil pengerjaan interior premium NACIRA STUDIO"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#222220]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-[#fcf9f2]/90 backdrop-blur-md p-4 rounded-xl border border-[#222220]/10 text-xs font-sans text-[#222220] flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#b68d40] shrink-0" />
              <span>Garansi Pengerjaan & Kontrol Kualitas Teruji</span>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#a99782]">
              KENAPA MEMILIH NACIRA INTERIOR
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#222220] leading-tight">
              Lebih dari Sekadar Mengerjakan Interior.
            </h2>
            <div className="font-sans text-sm sm:text-base text-[#77746d] leading-relaxed space-y-4 font-light">
              <p>
                Kami percaya bahwa interior bukan hanya soal tampilan, tetapi juga investasi jangka panjang. Karena itu setiap proyek kami kerjakan dengan perencanaan yang matang, material berkualitas, tenaga berpengalaman, serta kontrol kualitas pada setiap tahap pengerjaan.
              </p>
              <p>
                Komitmen kami adalah memberikan hasil yang sesuai ekspektasi klien, tepat waktu, dan memiliki nilai estetika serta fungsi yang maksimal.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-12 md:p-16 bg-[#222220] text-[#fcf9f2] rounded-2xl md:rounded-3xl border border-[#b68d40]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#fcf9f2]">
              Wujudkan Interior Impian Anda Bersama Nacira Interior
            </h3>
            <p className="font-sans text-sm text-[#e5e2db]/80 leading-relaxed font-light">
              Jadwalkan FREE Survey & Konsultasi bersama tim kami untuk mendapatkan rekomendasi desain serta estimasi biaya yang sesuai dengan kebutuhan proyek Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center space-x-2 font-sans text-xs font-semibold tracking-widest uppercase bg-[#b68d40] text-white px-8 py-4 rounded-md hover:bg-[#7b580d] transition-colors text-center shadow-md"
            >
              <span>Book Free Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center font-sans text-xs font-semibold tracking-widest uppercase text-[#fcf9f2] bg-transparent border border-[#fcf9f2]/40 px-8 py-4 rounded-md hover:bg-[#fcf9f2]/10 transition-colors text-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
