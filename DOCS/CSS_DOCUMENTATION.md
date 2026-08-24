# WeberSeek CSS Architecture & Design System Documentation

This document provides a comprehensive reference guide to the styling architecture, CSS custom properties, component class structure, visual effects, and responsive breakpoints powering the **WeberSeek** website.

---

## 1. Architecture Overview & Core Philosophy

WeberSeek's styling is architected around a **pure, high-performance Vanilla CSS system** loaded globally via `app/globals.css`. 

### Key Architectural Principles:
1. **Global Class Naming (No CSS Modules)**:
   - High-fidelity animations, 3D coverflow transforms, particle disintegrations, and interactive hover mechanics are orchestrated by the JavaScript/GSAP engine in `public/main.js`.
   - Using standardized, semantic global class names allows tight synchronization between React JSX rendering and DOM-driven GSAP / Canvas animations.
2. **Apple & Linear-Inspired Aesthetic**:
   - Deep cinematic dark backgrounds (`#04060a`), layered black radial vignettes, subtle SVG refraction liquid-glass borders, and glow auras.
3. **Hardware-Accelerated Fluid Layouts**:
   - Heavy use of CSS variables for scroll-linked variables (`--bg-scale`, `--scroll-vignette`), CSS transforms, backface visibility hidden, and `will-change` on animated nodes.

---

## 2. Design Tokens & CSS Custom Properties (`:root`)

Defined at the top of `app/globals.css`:

```css
:root {
  /* Typography */
  --font-brand: 'Anurati', sans-serif;
  --font-heading: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Color Palette */
  --bg-dark: #04060a;
  --text-main: #f3f5fa;
  --text-muted: #9ba3b8;
  --text-dim: #647087;

  /* Accent Tones */
  --accent-cyan: #38bdf8;
  --accent-blue: #3b82f6;
  --accent-indigo: #6366f1;
  --accent-violet: #a855f7;
  --accent-pink: #ec4899;
  --accent-emerald: #10b981;
  --accent-amber: #f59e0b;

  /* Glassmorphism System */
  --glass-bg: rgba(11, 15, 25, 0.68);
  --glass-bg-hover: rgba(18, 24, 40, 0.82);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-border-glow: rgba(255, 255, 255, 0.35);

  /* Dynamic Scroll Engine Variables */
  --scroll-vignette: 0;
  --bg-scale: 1;
}
```

---

## 3. Global Layering & Stacking Context (`z-index`)

The application uses an explicit multi-layer visual depth hierarchy:

```
┌────────────────────────────────────────────────────────┐  z-index: 100
│  .site-header (Floating capsule navigation bar)        │
├────────────────────────────────────────────────────────┤  z-index: 20
│  .scroll-cue & Interactive UI overlays                 │
├────────────────────────────────────────────────────────┤  z-index: 10
│  .intro-screen-layer (Screen 1 Particle Canvas Intro)  │
├────────────────────────────────────────────────────────┤  z-index: 5
│  .details-screen-layer (Screen 2 Main Content Flow)    │
├────────────────────────────────────────────────────────┤  z-index: -1
│  .vignette-overlay (Cinematic ambient dark gradient)   │
├────────────────────────────────────────────────────────┤  z-index: -2
│  .ambient-canvas (Floating celestial star particles)   │
├────────────────────────────────────────────────────────┤  z-index: -3
│  .bg-fixed-canvas (Fixed 3D background artwork)        │
└────────────────────────────────────────────────────────┘
```

---

## 4. Component-by-Component Class Dictionary

### A. Navigation & Site Header
- `.site-header`: Fixed floating navigation container with automatic transition to a glass capsule upon scrolling.
- `.header-container`: Max-width flex wrapper containing the brand logo, link list, and CTA button.
- `.brand-logo` & `.brand-title`: Renders the logotype using the custom `Anurati` geometric display font.
- `.nav-links` & `.nav-link`: Primary navigation item with hover glow effects and active state tracking.
- `.btn-primary-glow`: Glowing call-to-action button with radial light backdrop.
- `.nav-scroll-progress`: Hairline progress beam that tracks page read position along the bottom border of the navbar capsule.
- `.mobile-toggle`: Hamburger toggle button with animated hamburger-to-cross state.

### B. Screen 1: Intro Particle Hero
- `.intro-screen-layer`: Fullscreen fixed container managing the initial branding presentation.
- `.intro-content`: Centered flexbox housing the canvas stage.
- `.intro-title-stage`: Coordinate frame for the particle disintegration engine.
- `.disintegrateCanvas`: Canvas element where text particles dissolve and reconstruct based on cursor and scroll interactions.
- `.intro-glow-aura`: Ambient radial cyan-violet blurred aura behind the title.
- `.scroll-cue`, `.scroll-mouse`, `.scroll-wheel`, `.scroll-arrows`: Animated cue prompting user to scroll down.

### C. Screen 2: Hero Details & Metrics 3D Coverflow
- `.hero-details-section`: First section of the main content flow.
- `.section-pill` / `.hero-section-pill`: Glass capsule eyebrow badge (e.g. `FULL-STACK DIGITAL AGENCY`).
- `.hero-main-title`: High-impact headline with white-to-slate metallic gradient fill.
- `.hero-subheadline`: Focused value proposition text with highlighted white `<strong>` keyword accents.
- `.hero-cta-group`: Button row holding liquid glass primary CTA and cost estimator trigger.
- `.btn-liquid-glass`: Liquid glassmorphism button featuring refraction borders and specular backdrop.
- `.btn-with-peeker` & `.peeker-character`: Mascot animation that smoothly peeks over the button on cursor hover.
- `.liquid-glass-border` & `.liquid-glass-backdrop`: Sub-layers providing optical distortion and border reflection.
- `.coverflow-carousel-wrapper`: 3D coverflow carousel container.
- `.coverflow-frame` & `.coverflow-track`: 3D perspective track holding the interactive metric cards with unclipped depth.
- `.coverflow-card` / `.metric-card` / `.liquid-glass-card`: 1:1 aspect-ratio metric cards with background photography, soft radial dark vignette, and crisp numeric typography.
- `.coverflow-nav-btn.prev` / `.coverflow-nav-btn.next`: Circular glass arrow chevrons.
- `.coverflow-pagination`: Dynamic pagination dots reflecting the active card index.

### D. Core Services Section (HUD Bento Grid)
- `.services-grid`: Bento layout grid displaying feature services with interactive interface simulations.
- `.service-card` / `.engineered-card`: Base container for service cards with specular border highlights on hover.
- `.feature-card-wide` (Span 2 columns) / `.feature-card-tall` (Vertical focus card).
- `.card-visual-hud`: Simulated live application viewport preview.
  - `.preview-browser-frame`: Realistic browser Chrome top-bar with traffic light dots and URL pill (`ektarealestate.in`).
  - `.preview-mobile-frame`: Realistic mobile screen housing dynamic island pill, clock, and lead feed.
  - `.preview-saas-frame`: Executive analytics dashboard with interactive bar chart and revenue badges.
  - `.preview-ai-frame`: Automated document RAG chat bubble simulation.
- `.service-chips-grid` & `.tech-chip`: Pill tags highlighting key technical specifications (e.g., `<0.4s Fast Load`, `Google SEO Ready`).
- `.turnaround-tag`: Pricing and delivery milestone indicator.

### E. Showcase Section (Live Interactive Coverflow)
- `.coverflow-frame-viewport`: Viewport container with perspective styling.
- `.coverflow-browser-window` & `.coverflow-browser-chrome`: Mini browser frame housing live iframe previews of portfolio items (Otogent, Ekta Real Estate, RR Solutions, Bima Headquarter).
- `.browser-open-btn`: External link trigger allowing direct site visit.
- `.coverflow-live-iframe`: Sandboxed iframe element loading live responsive sites.
- `.coverflow-caption-area`, `.coverflow-caption-title`, `.coverflow-caption-sub`: Synchronized dynamic caption displaying the active project title and description.

### F. Solutions by Business Scale
- `.scale-tabs` & `.scale-tab-btn`: Tab switcher buttons for *Small & Local Businesses*, *Growth Startups*, and *Enterprise*.
- `.scale-content-box` / `.parallax-big-card`: Glass panel containing the active business tier details.
- `.scale-panel` (`#panel-local`, `#panel-startup`, `#panel-enterprise`): Content panels with parallax background art and feature checklist.
- `.scale-perks` & `.perk-item`: Feature deliverables list with checkmarks.
- `.preview-mini-hud`: Live metrics HUD showing expected client ROI, speed score, and uptime.

### G. Interactive Project Cost Estimator
- `.estimator-box`: Main glass calculation panel with dynamic background photography switching based on selected project type.
- `.estimator-bg-layer` & `.estimator-bg-img`: Multi-image crossfading background system (`estimator_bg_website.jpg`, `estimator_bg_mobile.jpg`, etc.).
- `.estimator-grid`: Step-by-step interactive selection flow:
  1. *Project Type Pills* (`.option-pills`, `.pill-btn`)
  2. *Business Scale Multipliers*
  3. *Add-on Feature Checkboxes* (`.check-card`, `.check-box-custom`)
- `.estimator-summary-card`: Real-time calculation readout showing estimated timeline (`#estTimeline`) and price range (`#estPrice`).
- `#estimatorCta`: Direct WhatsApp quote trigger pre-filled with the calculated scope.

### H. Tech Stack (3D Solar Planetary Orbit System)
- `.solar-system-wrapper`: 3D perspective stage for orbital animation.
- `.solar-plane`: Tilted elliptical plane rotated in 3D space (`transform: rotateX(65deg) rotateZ(-25deg)`).
- `.solar-sun-core`: Central glowing reactor with pulse flares (`.sun-flare.flare-1`, `.sun-flare.flare-2`).
- `.solar-orbit-ring` (`.ring-1`, `.ring-2`, `.ring-3`): Concentric orbital pathways.
- `.planet-node`: Planetary tech badges revolving along orbital paths (TypeScript, React/Next.js, Flutter, Node.js, Python, PostgreSQL, AWS/GCP, Docker).
- `.planet-card` & `.planet-icon-box`: Glass pill with brand iconography and tech domain role.

### I. 5-Step Process Workflow
- `.process-vertical-list`: Step-by-step vertical roadmap.
- `.process-vertical-card`: Horizontal split card with milestone information and delivery imagery.
- `.process-step-header`, `.process-step-pill`, `.process-step-num`: Phase indicator badge (e.g. `PHASE 01`).
- `.process-deliverables` & `.deliverable-item`: Structured deliverable checklist.
- `.process-frame-side` & `.process-frame-img`: High-contrast preview photo of the design/engineering phase.

### J. Contact & Proposal Section
- `.contact-box`: Split-grid proposal card.
- `.contact-info`: Value points highlighting 24-Hour Response, Direct Engineer Access, and Milestone-Based Delivery.
- `.whatsapp-direct-badge`: Direct messaging link with official WhatsApp green iconography.
- `.contact-video-frame` & `.contact-webm-video`: Glassmorphic container with 10% cropped ambient looping WebM video.
- `.contact-form`: Crisp white-on-dark glass input fields with focus glow borders.
- `.btn-whatsapp`: Full-width direct submission trigger opening pre-formatted WhatsApp chat.

### K. Site Footer
- `.site-footer`: Bottom section with four-column link structure.
- `.footer-brand`: Brand summary and copyright statement.
- `.status-indicator-pill` & `.status-dot`: Pulsing green availability beacon (*Available for New Projects*).
- `.back-to-top`: Smooth scroll anchor back to `#introScreen`.

---

## 5. Optical Effects & SVG Refraction Shaders

Defined at the end of the markup:

```xml
<svg class="svg-glass-filter" style="position: absolute; width: 0; height: 0; pointer-events: none;" aria-hidden="true">
  <defs>
    <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
      <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
      <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
      <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
      <feComposite in="finalBlur" in2="finalBlur" operator="over" />
    </filter>
  </defs>
</svg>
```

This filter provides the **physical glass chromatic refraction effect** applied to `.btn-liquid-glass` elements.

---

## 6. Responsive Breakpoints

| Breakpoint | Target Devices | Key Adaptations |
|---|---|---|
| `> 1024px` | Desktop & Ultrawide | Multi-column bento grids, 3D tilted planetary solar system, side-by-side process cards. |
| `≤ 1024px` | Tablets & Sub-Laptops | Condensed horizontal paddings, scaled typography (`clamp()`), smaller coverflow aspect ratio. |
| `≤ 960px` | Mobile Landscape & Tablets | Bento grids collapse to single column, tabs switch to scrollable horizontal strip, compact header. |
| `≤ 480px` | Modern Smartphones | Finger-friendly button targets (min 44px), touch-optimized covers, stacked forms, condensed margins. |

---

## 7. Developer Cheat Sheet: Adding New UI Elements

When creating new features or components:
1. **Always use global classes from `app/globals.css`** rather than creating new CSS Modules to maintain 1:1 parity with the GSAP animation system.
2. **Use pre-defined tokens** for colors and fonts (e.g., `var(--accent-cyan)`, `var(--glass-bg)`).
3. **Follow the Liquid Glass pattern** for buttons:
   ```tsx
   <a href="#link" className="btn-liquid-glass btn-liquid-primary">
     <div className="liquid-glass-border"></div>
     <div className="liquid-glass-backdrop"></div>
     <div className="btn-content">
       <span>Button Text</span>
       {/* SVG icon */}
     </div>
   </a>
   ```
