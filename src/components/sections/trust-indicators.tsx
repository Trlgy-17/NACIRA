import React from "react";

export function TrustIndicators() {
  const stats = [
    { label: "Prioritas Presisi", val: "100%" },
    { label: "Spesifikasi Material", val: "Verified" },
    { label: "Garansi Pemeliharaan", val: "Tertulis" },
    { label: "Manajemen Satu Pintu", val: "End-to-End" },
  ];

  return (
    <section className="py-16 bg-[#222220] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((st, idx) => (
            <div key={idx} className="px-4 space-y-2">
              <div className="font-display text-3xl md:text-5xl text-[#b68d40] tracking-tight">
                {st.val}
              </div>
              <div className="font-sans text-xs font-semibold tracking-widest uppercase text-[#e5e2db]/80">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
