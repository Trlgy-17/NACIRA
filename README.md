<div align="center">

# 🏛️ NACIRA STUDIO
### Architectural Interior Design & Build Web Application

[![Next.js](https://img.shields.io/badge/Next.js-15.5-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v12.4-E10098?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

<p align="center">
  <b>High-End Architectural Interior & Design-Build Web Platform for Luxury Residential & Commercial Projects in Indonesia</b>
</p>

[🌐 Live Server Demo](http://localhost:3001) • [📁 Portfolio Projects](http://localhost:3001/portfolio) • [💬 Free Consultation](http://localhost:3001/#consultation)

---

</div>

## 🌟 Key Highlights

- **✨ Double-Bezel Hardware Architecture:** Custom nested container UI (`Outer Shell` + `Inner Core`) with squircle radii, physical depth, and concentric curves.
- **🖼️ Authentic Local Portfolio Galleries:** 4 complete project showcases (*Backdrop TV*, *Master Bedroom*, *Modern Kitchen Set*, *Custom Wardrobe*) featuring interactive image slider carousels.
- **🔄 Before/After Interactive Spatial Slider:** Side-by-side comparison slider for real-world architectural renovation transformations.
- **📊 About Us & Counter Animation:** 4 luxury statistics cards (`Since 2018`, `4048+ Area Interior Dikerjakan`, `62+ Client Trust`, `15+ Workshop & Partner`) with smooth count-up motion triggers.
- **📝 1-Step Zod Consultation Form:** Instant single-step form with real-time validation and automated WhatsApp payload formatting.
- **⚡ Next.js 15 App Router & React 19:** 100% pre-rendered static page generation (`12/12 static routes`), zero hydration errors, and fast LCP performance.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15.5](https://nextjs.org/) (App Router) |
| **UI Engine** | [React 19.0](https://react.dev/) |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Design Tokens |
| **Motion Physics** | [Motion (Framer Motion v12)](https://motion.dev/) |
| **Form & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod 3.24](https://zod.dev/) |
| **Iconography** | [Lucide React](https://lucide.dev/) (Ultra-Light Architectural Stroke) |
| **Fonts** | Google Fonts (`Instrument Serif` + `Manrope`) |

---

## 📂 Directory Structure

```text
d:\Nacira Web/
├── public/
│   └── images/
│       ├── before-after/      # High-res Before/After comparison images
│       ├── materials/         # Material showcase textures (Veneer, PVC Board, Quartz)
│       └── portfolio/         # Authentic local photography per portfolio project
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── consultation/  # API Route Handler for consultation submissions
│   │   ├── portfolio/
│   │   │   ├── page.tsx       # Portfolio Archive Page with Dynamic Filter Tabs
│   │   │   └── [slug]/        # Case Study Detail Page (generateStaticParams)
│   │   ├── layout.tsx         # Root Layout with Font & SEO Metadata Config
│   │   └── page.tsx           # Main Homepage (15+ Modular Sections)
│   ├── components/
│   │   ├── forms/             # Zod Consultation Form
│   │   ├── layout/            # Header, Footer, MobileNav, SkipLink
│   │   ├── portfolio/         # Dynamic Category Project Filter
│   │   ├── sections/          # Hero, BrandIntro, AboutSection, FeaturedProjects, Services, etc.
│   │   └── ui/                # Logo, BeforeAfterSlider, ProjectImageCarousel, Button, Input
│   ├── data/                  # Projects, Services, Process, Materials, Testimonials, FAQ
│   ├── lib/                   # WhatsApp URL generator & utility helpers
│   └── types/                 # TypeScript Types & Interfaces
├── package.json
└── tsconfig.json
```

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
Ensure you have **Node.js 18+** and **pnpm** (or `npm`) installed.

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/Trlgy-17/NACIRA.git
cd NACIRA
pnpm install
```

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Production Run
```bash
# Verify Type Checking & Production Build
pnpm build

# Start Production Server on Port 3001
npx pnpm start -p 3001
```

---

## 📝 License & Authors

Created with ❤️ for **NACIRA STUDIO** — Architectural Interior Design & Build.
* **Email:** nacirastudio@gmail.com
* **WhatsApp:** [+62 853-8506-9717](https://wa.me/6285385069717)
* **Office Location:** Kp Cibogo, RT.03/RW.04, Citatah, Kec. Cipatat, Kabupaten Bandung Barat, Jawa Barat 40554
