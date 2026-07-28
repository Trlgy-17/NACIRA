import { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Konsultasi & Estimasi Awal",
    duration: "1 – 3 Hari",
    paymentStage: "Gratis",
    description:
      "Kami berdiskusi mengenai kebutuhan ruang, fungsi, gaya desain, preferensi material, serta kisaran anggaran yang Anda miliki. Pada tahap ini kami membantu memberikan solusi dan estimasi biaya awal sebelum proyek dilanjutkan.",
    deliverables: [
      "Konsultasi Kebutuhan Proyek",
      "Estimasi Awal Anggaran",
      "Rekomendasi Material & Konsep",
      "Jadwal Survei Lokasi",
    ],
  },
  {
    stepNumber: "02",
    title: "Survei Lokasi & Pengembangan Desain",
    duration: "3 – 7 Hari",
    paymentStage: "Deposit Desain (untuk lanjut 3D)",
    description:
      "Tim kami melakukan pengukuran detail di lokasi. Setelah survei, kami membuat Desain 2D secara gratis sebagai gambaran tata letak. Setelah deposit desain dilakukan, kami melanjutkan ke visualisasi 3D agar Anda dapat melihat hasil akhir sebelum produksi dimulai.",
    deliverables: [
      "Survei & Pengukuran Lokasi",
      "Layout Desain 2D (Gratis)",
      "Visualisasi Desain 3D*",
      "Draft Pemilihan Material & Finishing",
      "*3D diberikan setelah deposit desain.",
    ],
  },
  {
    stepNumber: "03",
    title: "Finalisasi Desain & Produksi",
    duration: "14 – 21 Hari Kerja",
    paymentStage: "DP 50% → Termin saat progres ±40%",
    description:
      "Setelah desain disetujui, kami melakukan finalisasi ukuran, material, warna, aksesoris, serta detail teknis lainnya. Selanjutnya proses produksi dilakukan di workshop dengan pengawasan kualitas pada setiap tahap.",
    deliverables: [
      "Desain Final Disetujui",
      "Spesifikasi Material Final",
      "Produksi Custom Interior & Furniture",
      "Update Progress Produksi Berkala",
    ],
  },
  {
    stepNumber: "04",
    title: "Instalasi & Serah Terima",
    duration: "1 – 5 Hari",
    paymentStage: "Pelunasan → Garansi 6 Bulan",
    description:
      "Produk yang telah selesai diproduksi dipasang langsung oleh tim profesional di lokasi proyek. Setelah instalasi selesai, dilakukan pengecekan kualitas bersama sebelum proses serah terima. Seluruh pekerjaan sudah termasuk instalasi dan garansi pengerjaan hingga 6 bulan.",
    deliverables: [
      "Instalasi oleh Tim Nacira Studio",
      "Quality Control & Finishing",
      "Serah Terima Proyek",
      "Garansi Pengerjaan Hingga 6 Bulan",
    ],
  },
];
