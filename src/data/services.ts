import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "interior-design",
    title: "Interior Design",
    subtitle: "Perencanaan Spasial & Konsep Editorial",
    description:
      "Perencanaan ruang menyeluruh yang berfokus pada efisiensi alur gerak, proporsi arsitektural, dan pemilihan material yang selaras dengan gaya hidup Anda.",
    iconName: "PenTool",
    features: [
      "Studi Kelayakan Spasial & Alur Sirkulasi",
      "Pengembangan Konsep 3D & Material Moodboard",
      "Dokumentasi Gambar Kerja Komprehensif",
      "Spesifikasi Pencahayaan & Skema Material",
    ],
  },
  {
    id: "design-and-build",
    title: "Design & Build",
    subtitle: "Solusi Terintegrasi Konsep Hingga Konstruksi",
    description:
      "Layanan terpadu satu pintu dari tahap ideasi hingga serah terima kunci. Kami memastikan presisi detail desain terealisasi sempurna di lapangan.",
    iconName: "Compass",
    features: [
      "Manajemen Proyek Satu Pintuk",
      "Pengawasan Kontrol Kualitas Konstruksi",
      "Transparansi Rencana Anggaran Biaya (RAB)",
      "Garansi Pemeliharaan Pasca Serah Terima",
    ],
  },
  {
    id: "renovation",
    title: "Renovation",
    subtitle: "Transformasi & Restrukturisasi Ruang",
    description:
      "Transformasi ruang eksisting menjadi lingkungan baru yang berdaya guna tinggi tanpa mengorbankan integritas struktural bangunan.",
    iconName: "Hammer",
    features: [
      "Audit & Analisis Kelayakan Struktur Eksisting",
      "Redesain Tata Letak & Optimasi Pencahayaan Alami",
      "Pembaharuan Sistem Utilitas & MEP",
      "Pengantian Material Permukaan & Finishing",
    ],
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    subtitle: "Furnitur Terukur & Detail Pertukangan",
    description:
      "Perancangan dan pembuatan kustom built-in cabinetry serta lose furniture eksklusif yang menyatu presisi dengan dimensi ruangan Anda.",
    iconName: "Layers",
    features: [
      "Material Kayu Olahan Pilihan & Fitting Premium",
      "Fabrikasi Khusus di Workshop Sendiri",
      "Finishing Hand-crafted (Veneer, Duco, Melamic)",
      "Pemasangan Presisi Milimeter di Lokasi",
    ],
  },
];
