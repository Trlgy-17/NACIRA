---
name: Architectural Editorial
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#4e4538'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#807666'
  outline-variant: '#d2c5b3'
  surface-tint: '#7b580d'
  primary: '#7b580d'
  on-primary: '#ffffff'
  primary-container: '#b68d40'
  on-primary-container: '#3c2900'
  inverse-primary: '#eebf6d'
  secondary: '#655d50'
  on-secondary: '#ffffff'
  secondary-container: '#ece1d0'
  on-secondary-container: '#6b6356'
  tertiary: '#5f5e5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#959390'
  on-tertiary-container: '#2c2c2a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#eebf6d'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#ece1d0'
  secondary-fixed-dim: '#d0c5b5'
  on-secondary-fixed: '#201b11'
  on-secondary-fixed-variant: '#4d463a'
  tertiary-fixed: '#e5e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
  clay-taupe: '#A99782'
  deep-olive: '#3E4338'
  muted-gray: '#77746D'
  border-subtle: rgba(34, 34, 32, 0.15)
typography:
  display-hero:
    fontFamily: Instrument Serif
    fontSize: 104px
    fontWeight: '400'
    lineHeight: '0.95'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Instrument Serif
    fontSize: 56px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Instrument Serif
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Instrument Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Instrument Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  subheading:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-base:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  caption:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  section-gap-lg: 180px
  section-gap-md: 120px
  section-gap-sm: 80px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the philosophy of **Modern Editorial Minimalism**. It targets a high-end clientele seeking sophistication, precision, and a timeless aesthetic. The UI should evoke a sense of "Contemporary Luxury"—quiet, confident, and deeply intentional.

The visual narrative is driven by architectural clarity:
- **Architectural Minimal:** Clean lines, structural integrity, and an emphasis on form over decoration.
- **High-End Editorial:** Large-scale typography, asymmetric layouts, and generous whitespace reminiscent of a premium design monograph.
- **Warm Modernism:** Utilizing a palette of natural, earthy tones to prevent the minimalism from feeling sterile, instead creating an inviting, tactile atmosphere.

Avoid trendy "web-native" effects like heavy blurs or neon glows. The focus remains on high-quality imagery, meticulous type pairings, and structural elegance.

## Colors

The palette is a sophisticated "Warm Neutral" scheme. It uses a base of **Warm Ivory** for expansive surfaces to provide a softer, more premium alternative to pure white. 

- **Primary Accent (#b68d40):** A refined Gold/Clay Taupe used for key calls to action, active states, and subtle branding moments.
- **Functional Charcoal (#222220):** Used for primary typography and dark-mode immersive sections. It provides the necessary weight to anchor the airy layout.
- **Surface Layering:** Use **Soft Sand** for secondary containers and section backgrounds to create gentle depth transitions without relying on shadows.
- **Subtle Contrast:** **Muted Gray** and **Deep Olive** are reserved for secondary UI metadata and interactive hover states to maintain a calm, low-friction interface.

## Typography

The typography system relies on a high-contrast pairing of **Instrument Serif** for display and **Manrope** for utility.

- **Instrument Serif:** Should be used for large, editorial headlines. It features a "Rapat" (tight) line height to create a graphic, block-like appearance for hero text.
- **Manrope:** Chosen for its modern, functional legibility. It handles all body copy, navigation, and button labels.
- **Text Styling:** Use `label-caps` for eyebrow headings and small labels to introduce a rhythmic, structured feel to the information hierarchy. 
- **Readability:** Maintain line lengths between 65–75 characters for body text. Paragraphs should use generous line heights (1.6 to 1.8) to enhance the feeling of "breathable" luxury.

## Layout & Spacing

This design system employs a **12-column asymmetric editorial grid** for desktop, an 8-column grid for tablet, and a 4-column grid for mobile.

- **Whitespace as a Primary Element:** Spacing is not just a separator but a design feature. Section gaps should be aggressive (up to 180px) to give portfolio imagery and editorial type space to "breathe."
- **Alignment:** Content should often be offset from the center or span irregular column counts (e.g., a 7-column image paired with a 4-column text block) to create the dynamic feel of a high-end magazine.
- **Responsive Reflow:** On mobile, the layout collapses into a single-column vertical flow with margins reduced to 20px, ensuring focus remains on the verticality of the architectural imagery.

## Elevation & Depth

In line with architectural minimalism, the system avoids traditional drop shadows in favor of **Tonal Layering** and **Structural Separation**.

- **Surface Tiers:** Use the contrast between Warm Ivory backgrounds and Soft Sand containers to create visual hierarchy. 
- **Borders over Shadows:** Depth is defined by thin, high-precision borders (`1px` width at 12–18% opacity of Charcoal). These act as "guide rails" for the eye, mimicking architectural blueprints.
- **Glassmorphism (Functional Only):** Semi-transparent surfaces are limited strictly to the Global Navigation bar on scroll, using a high-quality backdrop blur to maintain legibility over varying background imagery.
- **Image Depth:** Depth is also achieved through layering images and text (z-axis overlap) rather than shadow-based lift.

## Shapes

The shape language is disciplined and professional. 

- **Subtle Softness:** A "Soft" roundedness level (4px to 8px) is applied to buttons, input fields, and cards. This provides enough approachability to avoid feeling "sharp" or "aggressive" while maintaining an architectural rigor.
- **Image Treatment:** Most imagery should remain sharp (0px radius) to reflect the precision of interior design, though a small 8px radius may be used when images are contained within card modules.
- **Consistency:** Avoid "Pill" shapes or overly rounded "Bubble" styles, as these detract from the premium, high-end positioning.

## Components

### Buttons
- **Primary:** Solid Charcoal fill with White text. Small 4px radius.
- **Secondary:** Transparent fill with a 1px Charcoal (18% opacity) border. 
- **Interactions:** Use a slow, premium background-color transition (250ms) to Deep Olive on hover.

### Inputs & Fields
- **Styling:** Minimalist bottom-border only or very light 1px outlines. Focus states should shift the border color to the Primary Gold accent.
- **Labels:** Use `label-caps` for all form labels to maintain a structured look.

### Project Cards
- **Structure:** Large-scale imagery with text content placed either directly below or in a Soft Sand container.
- **Hover States:** Implement a subtle scale-up of the image (1.05x) and a "reveal" of metadata using a smooth clip-path animation.

### Navigation
- **Header:** Clean, high-whitespace bar. Links use the `label-caps` style.
- **Active State:** A thin 1px underline in the Primary Gold accent.

### Interactive Elements
- **Before/After Sliders:** Use thin vertical lines and minimal handles to showcase project transformations.
- **Multi-step Forms:** Keep progress indicators minimal—standardized thin bars or simple numeric labels (`01 / 04`).