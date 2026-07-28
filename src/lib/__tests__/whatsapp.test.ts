import { buildWhatsAppUrl } from "../whatsapp";

describe("buildWhatsAppUrl helper", () => {
  it("should return target number 6285385069717 and default text when no params are provided", () => {
    const url = buildWhatsAppUrl();
    expect(url).toContain("https://wa.me/6285385069717?text=");
    expect(url).toContain(encodeURIComponent("Halo kak, terima kasih sudah menghubungi Nacira Interior."));
    expect(url).toContain(encodeURIComponent("• Nama"));
    expect(url).toContain(encodeURIComponent("• Lokasi proyek"));
    expect(url).toContain(encodeURIComponent("• Kebutuhan interior yang ingin dibuat"));
  });

  it("should correctly encode 1-step form filled parameters", () => {
    const url = buildWhatsAppUrl({
      name: "Budi Santoso",
      location: "Jakarta Selatan",
      description: "Renovasi interior rumah 2 lantai dan custom kitchen",
    });

    expect(url).toContain("https://wa.me/6285385069717?text=");
    expect(url).toContain(encodeURIComponent("• Nama: Budi Santoso"));
    expect(url).toContain(encodeURIComponent("• Lokasi proyek: Jakarta Selatan"));
    expect(url).toContain(encodeURIComponent("• Kebutuhan interior yang ingin dibuat: Renovasi interior rumah 2 lantai dan custom kitchen"));
  });
});
