export interface WhatsAppConsultationParams {
  name?: string;
  location?: string;
  description?: string;
}

export function buildWhatsAppUrl(params?: WhatsAppConsultationParams): string {
  const rawNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285385069717";

  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  const targetNumber = cleanNumber.length >= 8 ? cleanNumber : "6285385069717";

  if (!params || (!params.name && !params.description && !params.location)) {
    const defaultText = `Halo kak, terima kasih sudah menghubungi Nacira Interior.

Boleh dibantu informasinya ya:

• Nama
• Lokasi proyek
• Kebutuhan interior yang ingin dibuat

Setelah itu saya akan bantu berikan informasi dan estimasi yang paling sesuai 🙏`;
    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const text = `Halo kak, terima kasih sudah menghubungi Nacira Interior.

Boleh dibantu informasinya ya:

• Nama: ${params.name || "-"}
• Lokasi proyek: ${params.location || "-"}
• Kebutuhan interior yang ingin dibuat: ${params.description || "-"}

Setelah itu saya akan bantu berikan informasi dan estimasi yang paling sesuai 🙏`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
}
