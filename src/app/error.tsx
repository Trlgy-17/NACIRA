"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APPLICATION_ERROR]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf9f2] text-[#222220] px-4 text-center space-y-6">
      <span className="font-sans text-xs font-semibold tracking-widest uppercase text-red-600">
        Terjadi Kesalahan Sistem
      </span>
      <h1 className="font-display text-4xl md:text-6xl text-[#222220]">
        Gagal Memuat Halaman
      </h1>
      <p className="font-sans text-sm text-[#77746d] max-w-md">
        Terjadi gangguan teknis saat memuat aplikasi. Anda dapat mencoba memuat ulang.
      </p>
      <button
        onClick={() => reset()}
        className="font-sans text-xs font-semibold tracking-widest uppercase bg-[#b68d40] text-white px-8 py-4 rounded hover:bg-[#7b580d] transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
