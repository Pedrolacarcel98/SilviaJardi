---
name: Silvia Jardi
colors:
  surface: '#f8fafa'
  surface-dim: '#d8dada'
  surface-bright: '#f8fafa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f4'
  surface-container: '#eceeee'
  surface-container-high: '#e6e8e9'
  surface-container-highest: '#e1e3e3'
  on-surface: '#191c1d'
  on-surface-variant: '#3f4947'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f1'
  outline: '#6f7977'
  outline-variant: '#bfc8c7'
  surface-tint: '#286864'
  primary: '#286864'
  on-primary: '#ffffff'
  primary-container: '#a2e1db'
  on-primary-container: '#256661'
  inverse-primary: '#93d2cc'
  secondary: '#0c6967'
  on-secondary: '#ffffff'
  secondary-container: '#a0ede9'
  on-secondary-container: '#156e6b'
  tertiary: '#725a47'
  on-tertiary: '#ffffff'
  tertiary-container: '#f0cfb8'
  on-tertiary-container: '#6f5745'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#afeee8'
  primary-fixed-dim: '#93d2cc'
  on-primary-fixed: '#00201e'
  on-primary-fixed-variant: '#03504c'
  secondary-fixed: '#a3f0ec'
  secondary-fixed-dim: '#87d4d0'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504d'
  tertiary-fixed: '#fddcc4'
  tertiary-fixed-dim: '#e0c1a9'
  on-tertiary-fixed: '#291809'
  on-tertiary-fixed-variant: '#584231'
  background: '#f8fafa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e3'
  celeste-deep: '#4A908C'
  ink-slate: '#33474B'
  soft-blush: '#FFF0E5'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style
The design system is defined by a "Lyrical Childhood" aesthetic—moving beyond simple minimalism into a space that feels handcrafted, nurturing, and personal. It targets parents and educators who value a boutique, artisanal approach to child-centric products and services.

The design style is **Soft Boutique**. It merges the clean breathing room of minimalism with the warmth of tactile, pen-style calligraphy. The emotional response should be one of "sophisticated gentleness." The UI avoids clinical sharpness, opting for a fluid, organic rhythm that feels like a handwritten note or a curated scrapbook. High-quality imagery is framed by expansive white space and "celeste" tones to evoke a sense of calm and wonder.

## Colors
The palette shifts toward a "Turquoise-Celeste" spectrum, providing a fresher and more vibrant atmosphere while remaining soft enough for a child-oriented brand.

- **Primary (Turquoise Pastel):** #A2E1DB is the foundational color, used for large decorative backgrounds, header tints, and secondary containers.
- **Secondary (Turquoise Celeste):** #7BC8C4 is the active brand color, used for primary buttons, selection states, and iconography to ensure a distinct interactive layer.
- **Tertiary (Warm Peach/Blush):** Used sparingly as a "humanizing" accent for badges or specific highlights to balance the cool turquoise tones.
- **Neutrals:** The background uses a "Cool Cloud" white (#F7F9F9) to keep the turquoise looking crisp. 
- **Typography:** To maintain a pen-and-paper feel, use "Ink Slate" (#33474B) for text instead of black, providing better legibility against the pastel palette.

## Typography
The typography system prioritizes character and legibility over modern abstraction.

**Epilogue** is utilized for headlines to provide a classic, pen-style weight. Its geometric but distinctive construction mimics the intentionality of calligraphy without sacrificing digital readability. For main brand moments, headlines should use a slightly tighter letter-spacing to feel more cohesive and "ink-heavy."

**Be Vietnam Pro** serves as the functional workhorse. Its friendly, open counters and contemporary structure ensure that long-form content, such as descriptions or educational materials, is easy to digest. It provides a grounded balance to the more expressive headline font.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on vertical "breathing room" to maintain the boutique feel.

- **Desktop:** A 12-column grid with a maximum content width of 1280px. Sectional spacing (LG/XL) is intentionally large to separate different brand stories or product categories.
- **Mobile:** A 4-column grid with 20px margins. Content should be stacked with generous padding between elements to avoid a cramped "mobile-first" utilitarian look.
- **Philosophy:** Use an 8px spacing rhythm. White space is treated as a design element itself, not just a gap between components.

## Elevation & Depth
Depth is communicated through tonal stacking and soft, colorful ambient glows rather than traditional gray shadows.

1.  **Celeste Halos:** Higher-priority cards use very soft, diffused shadows tinted with the primary color (Blur: 30px, Opacity: 8%, Color: #A2E1DB). This makes elements appear as if they are floating on a layer of light.
2.  **Surface Tiers:** Use the #F7F9F9 background for the base layer, and pure White (#FFFFFF) for the foreground containers (cards, modals) to create a subtle "lift" without needing borders.
3.  **Soft Insets:** Form fields and interactive wells use a subtle 1px inset border in #D1EAE8 to create a "pressed" tactile feel.

## Shapes
In alignment with the "child-oriented" focus, all shapes are significantly rounded to ensure the UI feels safe and approachable.

- **Standard Buttons/Inputs:** Use the `rounded` (0.5rem) setting.
- **Hero Sections & Images:** Images should feature `rounded-xl` (1.5rem) corners to soften the photography.
- **Interactive Badges:** Use "Pill" shapes (fully rounded) for status indicators and category chips to contrast with the more structured rectangular cards.

## Components
- **Buttons:** The primary button uses the Turquoise Celeste (#7BC8C4) background with White text. It features a generous horizontal padding (32px) and a subtle 2px bottom-shadow to give it a "squishy," tactile quality.
- **Product & Content Cards:** These feature a pure white background, a soft celeste halo shadow, and no border. Headings within cards are center-aligned to maintain the boutique aesthetic.
- **Input Fields:** Use a soft-blush or very light turquoise background when focused, with a "Celeste-Deep" label. The corners must be consistently rounded to 8px.
- **Chips/Filters:** These should be "Pill" shaped with a light turquoise background (#A2E1DB at 20% opacity) and dark turquoise text.
- **Navigation:** A clean, horizontal layout where the active state is indicated by a subtle, hand-drawn style dot or a soft color transition in the Epilogue font.
- **Modals:** Use a large radius (24px) and a heavy backdrop blur to keep the focus on the content while maintaining the airy feel of the background.