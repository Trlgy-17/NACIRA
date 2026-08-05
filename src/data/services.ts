import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "interior-design",
    title: "Interior Design",
    subtitle: "Perencanaan Spasial & Konsep Editorial",
    description:
      "Perencanaan ruang secara menyeluruh yang berfokus pada efisiensi sirkulasi, proporsi arsitektural, dan pemilihan material yang disesuaikan secara presisi dengan gaya hidup Anda.",
    iconName: "PenTool",
    features: [
      "Studi Kelayakan Spasial & Alur Sirkulasi Ruang",
      "Pengembangan Konsep 3D & Material Moodboard",
      "Dokumentasi Gambar Kerja Teknis Komprehensif",
      "Spesifikasi Pencahayaan (Lighting) & Skema Material",
    ],
  },
  {
    id: "design-and-build",
    title: "Design & Build",
    subtitle: "Solusi Terintegrasi Konsep Hingga Konstruksi",
    description:
      "Layanan terpadu satu pintu dari tahap ideasi awal hingga serah terima kunci. Kami memastikan presisi detail rancangan terealisasi sempurna di lokasi proyek.",
    iconName: "Compass",
    features: [
      "Manajemen Proyek & Supervisi Lapangan Terpadu",
      "Pengawasan Kontrol Kualitas Konstruksi Berkala",
      "Transparansi Rencana Anggaran Biaya (RAB) Rinci",
      "Garansi Pemeliharaan Pasca Serah Terima",
    ],
  },
  {
    id: "renovation",
    title: "Renovation",
    subtitle: "Transformasi & Restrukturisasi Ruang",
    description:
      "Transformasi tata ruang eksisting menjadi lingkungan baru yang estetik dan berdaya guna tinggi, tanpa mengorbankan integritas struktural bangunan.",
    iconName: "Hammer",
    features: [
      "Audit & Analisis Kelayakan Struktur Eksisting",
      "Redesain Tata Letak & Optimasi Pencahayaan Alami",
      "Pembaharuan Sistem Utilitas Listrik & Air (MEP)",
      "Penggantian Material Permukaan & Finishing",
    ],
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    subtitle: "Furnitur Terukur & Detail Pertukangan Presisi",
    description:
      "Perancangan dan pembuatan kabinet built-in kustom serta furnitur eksklusif di workshop sendiri yang menyatu secara presisi dengan dimensi ruangan Anda.",
    iconName: "Layers",
    features: [
      "Material Kayu Olahan Pilihan & Fitting Premium",
      "Fabrikasi Kustom Presisi di Workshop Sendiri",
      "Finishing Hand-Crafted (Veneer, Duco, Melamic)",
      "Pemasangan Presisi Milimeter di Lokasi Proyek",
    ],
  },
];
