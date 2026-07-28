import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf9f2] text-[#222220] px-4 text-center space-y-6">
      <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#a99782]">
        Error 404
      </span>
      <h1 className="font-display text-5xl md:text-7xl text-[#222220]">
        Halaman Tidak Ditemukan
      </h1>
      <p className="font-sans text-sm text-[#77746d] max-w-md">
        Halaman atau studi kasus proyek yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="font-sans text-xs font-semibold tracking-widest uppercase bg-[#222220] text-white px-8 py-4 rounded hover:bg-[#3e4338] transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
