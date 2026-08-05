export interface WhatsAppConsultationParams {
  name?: string;
  location?: string;
  description?: string;
}

export function buildWhatsAppUrl(params?: WhatsAppConsultationParams | string): string {
  const rawNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285385069717";

  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  const targetNumber = cleanNumber.length >= 8 ? cleanNumber : "6285385069717";

  if (typeof params === "string") {
    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(params)}`;
  }

  if (!params || (!params.name && !params.description && !params.location)) {
    const defaultText = `Halo Nacira Interior, saya ingin berkonsultasi mengenai rencana proyek interior saya.

Boleh dibantu informasinya:
• Nama
• Lokasi proyek
• Kebutuhan interior yang ingin dibuat

Terima kasih.`;
    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const text = `Halo Nacira Interior, saya ingin berkonsultasi mengenai rencana proyek interior saya.

Berikut informasi detail proyek:
• Nama: ${params.name || "-"}
• Lokasi proyek: ${params.location || "-"}
• Kebutuhan interior: ${params.description || "-"}

Mohon informasi estimasi & rekomendasi selanjutnya. Terima kasih.`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
}
