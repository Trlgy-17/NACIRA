import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.category} (${project.location}) | NACIRA STUDIO`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | NACIRA STUDIO`,
      description: project.summary,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="pt-36 pb-32 bg-[#fcf9f2] text-[#222220]">
      <div className="container-custom space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-3 font-sans text-xs font-semibold tracking-widest uppercase text-[#a99782]">
            <Link href="/portfolio" className="hover:underline hover:text-[#b68d40] transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-[#b68d40]">{project.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#222220] leading-[1.05] tracking-tight">
            {project.title}
          </h1>

          <p className="font-sans text-lg text-[#77746d] leading-relaxed font-light">
            {project.summary}
          </p>
        </div>

        {/* Project Metadata Hardware Bar */}
        <div className="p-2 rounded-2xl bg-[#222220]/5 border border-[#222220]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#f6f3ec] rounded-[calc(1rem-0.25rem)] font-sans text-xs border border-[#222220]/5">
            <div>
              <span className="text-[#a99782] font-semibold tracking-widest uppercase block mb-1">
                Lokasi
              </span>
              <span className="text-[#222220] font-medium">{project.location}</span>
            </div>
            <div>
              <span className="text-[#a99782] font-semibold tracking-widest uppercase block mb-1">
                Tahun Selesai
              </span>
              <span className="text-[#222220] font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-[#a99782] font-semibold tracking-widest uppercase block mb-1">
                Luas Area
              </span>
              <span className="text-[#222220] font-medium">{project.areaSize || "-"}</span>
            </div>
            <div>
              <span className="text-[#a99782] font-semibold tracking-widest uppercase block mb-1">
                Kategori
              </span>
              <span className="text-[#222220] font-medium">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Hero Cover Image Double-Bezel */}
        <div className="p-2.5 rounded-2xl md:rounded-3xl bg-[#222220]/5 border border-[#222220]/10 shadow-xl">
          <div className="relative aspect-[16/9] w-full bg-[#e6ded1] overflow-hidden rounded-[calc(1.5rem-0.375rem)]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Conceptual Notes & Scope */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl text-[#222220]">
              Konsep & Pembahasan Arsitektural
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#77746d] leading-relaxed font-light">
              {project.description}
            </p>
            {project.conceptNotes && (
              <div className="p-6 bg-[#f6f3ec] border-l-4 border-[#b68d40] rounded-r-xl text-xs font-sans text-[#4e4538] leading-relaxed space-y-1">
                <span className="font-semibold uppercase tracking-wider block text-[#b68d40]">
                  Catatan Desain Spasial:
                </span>
                <p className="font-light">{project.conceptNotes}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 p-2 rounded-2xl bg-[#222220]/5 border border-[#222220]/10">
            <div className="p-8 bg-[#f6f3ec] rounded-[calc(1rem-0.25rem)] space-y-4 border border-[#222220]/5">
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#a99782]">
                Cakupan Pekerjaan (Scope)
              </h3>
              <ul className="space-y-3 font-sans text-sm text-[#222220]">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#b68d40] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-8 pt-12 border-t border-[#222220]/15">
          <h2 className="font-display text-3xl sm:text-4xl text-[#222220]">
            Dokumentasi Galeri Proyek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="space-y-3">
                <div className="p-2 rounded-2xl bg-[#222220]/5 border border-[#222220]/10 shadow-sm">
                  <div className="relative aspect-[4/3] bg-[#e6ded1] overflow-hidden rounded-[calc(1rem-0.25rem)]">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                {img.caption && (
                  <p className="font-sans text-xs text-[#77746d] italic font-light px-2">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <div className="space-y-8 pt-12 border-t border-[#222220]/15">
            <h2 className="font-display text-3xl text-[#222220]">
              Proyek Lainnya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/portfolio/${rel.slug}`}
                  className="group block p-2 rounded-2xl bg-[#222220]/5 border border-[#222220]/10 hover:border-[#b68d40]/60 transition-all duration-300"
                >
                  <div className="p-6 bg-[#f6f3ec] rounded-[calc(1rem-0.25rem)] space-y-2">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#a99782]">
                      {rel.category} • {rel.location}
                    </span>
                    <h3 className="font-display text-2xl text-[#222220] group-hover:text-[#b68d40] transition-colors">
                      {rel.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Callout Hardware Card */}
        <div className="p-8 sm:p-12 bg-[#171614] text-[#fcf9f2] rounded-2xl md:rounded-3xl border border-[#b68d40]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-display text-3xl sm:text-4xl text-[#fcf9f2]">
              Ingin Mewujudkan Karakter Ruang Serupa?
            </h3>
            <p className="font-sans text-sm text-[#e5e2db]/80 font-light">
              Jadwalkan diskusi konsep awal bersama tim arsitek interior NACIRA STUDIO.
            </p>
          </div>
          <Link
            href="/#consultation"
            className="group inline-flex items-center space-x-2 font-sans text-xs font-semibold tracking-widest uppercase bg-[#b68d40] text-white px-8 py-4 rounded-full hover:bg-[#7b580d] transition-all duration-300 shrink-0"
          >
            <span>Konsultasikan Sekarang</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
