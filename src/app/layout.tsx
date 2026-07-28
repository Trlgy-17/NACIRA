import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NACIRA STUDIO | Architectural Interior Design & Build",
    template: "%s | NACIRA STUDIO",
  },
  description:
    "Studio arsitektur & interior design premium Indonesia. Spesialisasi interior residential, komersial, renovasi, dan custom furniture berintegritas arsitektural.",
  keywords: [
    "Interior Design Jakarta",
    "Design and Build Indonesia",
    "Renovasi Rumah Mewah",
    "Custom Furniture Jakarta",
    "Arsitek Interior",
    "NACIRA STUDIO",
  ],
  authors: [{ name: "NACIRA STUDIO" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "NACIRA STUDIO | Architectural Interior Design & Build",
    description:
      "Membangun ruang hunian & komersial berintegritas arsitektural tinggi dengan kehangatan material alami.",
    url: "/",
    siteName: "NACIRA STUDIO",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NACIRA STUDIO | Architectural Interior Design & Build",
    description:
      "Studio arsitektur & interior design premium Indonesia. Merancang ruang berkarakter timeless.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <body className="antialiased font-sans bg-[#fcf9f2] text-[#222220] selection:bg-[#b68d40] selection:text-white">
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
