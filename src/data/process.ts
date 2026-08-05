import { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Konsultasi & Estimasi Awal",
    duration: "1 – 3 Hari",
    paymentStage: "Gratis & Tanpa Komitmen",
    description:
      "Kami mendiskusikan kebutuhan ruang, fungsi, preferensi gaya, serta alokasi anggaran Anda. Pada tahap ini, tim konsultan kami siap memberikan rekomendasi konsep dan estimasi biaya awal secara transparan.",
    deliverables: [
      "Diskusi Kebutuhan Proyek via WhatsApp / Tatap Muka",
      "Estimasi Awal Anggaran Biaya (RAB Transparan)",
      "Rekomendasi Konsep & Pemilihan Material",
      "Penjadwalan Survei & Pengukuran Lokasi",
    ],
  },
  {
    stepNumber: "02",
    title: "Survei Lokasi & Pengembangan Desain",
    duration: "3 – 7 Hari",
    paymentStage: "Deposit Desain (untuk 3D Render)",
    description:
      "Tim arsitek kami melakukan pengukuran presisi di lokasi Anda. Kami membuatkan Layout 2D secara gratis sebagai gambaran alur sirkulasi. Setelah komitmen deposit desain disetujui, kami melanjutkan ke visualisasi 3D realistis sebelum produksi dimulai.",
    deliverables: [
      "Survei Akurat & Pengukuran Lokasi Proyek",
      "Layout Desain Spasial 2D (Gratis)",
      "Visualisasi Render Desain 3D Realistis*",
      "Draft Sampel Material & Finishing",
      "*Visualisasi 3D dikerjakan setelah konfirmasi deposit desain.",
    ],
  },
  {
    stepNumber: "03",
    title: "Finalisasi Desain & Fabrikasi Workshop",
    duration: "14 – 21 Hari Kerja",
    paymentStage: "DP 50% → Termin saat Progres ±40%",
    description:
      "Setelah rancangan disetujui, kami mengunci spesifikasi ukuran, material, dan detail teknis. Proses fabrikasi langsung dikerjakan di workshop sendiri dengan kontrol kualitas ketat pada setiap tahapnya.",
    deliverables: [
      "Dokumen Gambar Kerja Final Disetujui",
      "Spesifikasi Teknis Material Final",
      "Fabrikasi Custom Interior & Cabinetry di Workshop",
      "Laporan Pembaruan Progres Produksi Berkala",
    ],
  },
  {
    stepNumber: "04",
    title: "Instalasi & Serah Terima Proyek",
    duration: "1 – 5 Hari",
    paymentStage: "Pelunasan → Garansi Pemeliharaan 6 Bulan",
    description:
      "Seluruh furnitur dan kabinet yang telah selesai diproduksi dipasang secara presisi oleh tim ahli di lokasi. Dilanjutkan dengan pemeriksaan kualitas bersama sebelum proses serah terima dan penerbitan garansi.",
    deliverables: [
      "Pemasangan Presisi oleh Tim Nacira Studio",
      "Pemeriksaan Akhir & Quality Control",
      "Serah Terima Kunci Proyek Selesai",
      "Garansi Pemeliharaan Pasca Jual 6 Bulan",
    ],
  },
];
