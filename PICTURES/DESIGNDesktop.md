---
name: Ignition Portfolio System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e6beb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1700'
  primary-container: '#ff571a'
  on-primary-container: '#521300'
  inverse-primary: '#ae3200'
  secondary: '#ffbc7c'
  on-secondary: '#4b2800'
  secondary-container: '#fe9400'
  on-secondary-container: '#633700'
  tertiary: '#ffb4a8'
  on-tertiary: '#690000'
  tertiary-container: '#fb5945'
  on-tertiary-container: '#5c0000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#ffb874'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#6a3b00'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#920703'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  stack-lg: 80px
  stack-md: 48px
---

## Brand & Style

This design system is engineered for a high-impact Computer Science portfolio, blending the precision of a high-end development environment with the raw energy of a high-performance engine. The brand personality is **fierce, authoritative, and sophisticated**. It targets tech recruiters and fellow engineers who value both technical depth and aesthetic polish.

The style is a fusion of **Modern Minimalism** and **Glassmorphism**, taking cues from Apple’s structural clarity and Steam’s immersive, dark-mode-first environment. We utilize deep, ink-black voids contrasted against vibrant, glowing "ember" accents. The emotional response should be one of "controlled power"—a professional interface that feels alive and high-octane.

## Colors

The palette is rooted in a "Volcanic Dark" scheme. The foundation is an absolute black (`#050505`) to maximize contrast and focus. 

- **Primary Accent:** A searing "Forge Orange" (`#FF4D00`) used for primary actions and critical highlights.
- **Secondary Accent:** A "Solar Gold" (`#FF9500`) for hover states and secondary information depth.
- **Tones:** Deep charcoals serve as the base for glass containers, allowing the vibrant gradients to appear as if they are glowing from within the interface. 
- **The Glow:** Use the `accent_gradient` sparingly for progress bars, primary buttons, and active status indicators to simulate heat and energy.

## Typography

The typography strategy emphasizes **hierarchy through weight**. **Montserrat** is used for headings to provide a geometric, assertive presence that feels architectural and strong. 

**Inter** serves as the body face for maximum legibility in project descriptions and technical documentation. To reinforce the Computer Science identity, **JetBrains Mono** is introduced for labels, tags, and small technical metadata, providing a "code-adjacent" aesthetic. 

Headlines should utilize "Tight" letter spacing to feel more like a single unit of impact.

## Layout & Spacing

This design system uses a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. The layout is "Center-Focused," meaning content is housed in a fixed-width container (`1200px`) on ultra-wide screens to maintain readability.

Spacing follows an **8px base unit**. Vertical rhythm is intentionally generous (e.g., `stack-lg`) between major sections to allow the glass elements to "breathe" against the dark background. Use 48px to 80px gaps between project cards to prevent the UI from feeling cluttered.

## Elevation & Depth

Depth is achieved through **Glassmorphism and Internal Glows** rather than traditional drop shadows.

1.  **Base Layer:** The deepest `#050505` background.
2.  **Surface Layer:** Semi-transparent charcoals with a `20px` backdrop-blur.
3.  **Border Treatment:** Use 1px "Ghost Borders"—low-opacity (10-15%) white or orange strokes that define edges without creating heavy visual weight.
4.  **The Ember Effect:** For the most important elements (like a "Featured Project"), apply a very soft, large-radius outer glow using the primary orange at 5-10% opacity to simulate light emission.

## Shapes

The shape language is **sleek and modern**. A standard `0.5rem` (8px) radius is applied to cards and inputs to provide a premium, balanced feel. 

Buttons and "Tech Tags" use a more aggressive **Pill Shape** to differentiate them from structural layout containers. This contrast between the structured cards and the soft, rounded interactive elements guides the user's eye to where they can click.

## Components

### Buttons
- **Primary:** Gradient background (`accent_gradient`), bold white text, and a slight "inner glow" on hover. Transitions should be smooth (200ms ease-out).
- **Secondary (Glass):** Transparent background with a `1px` orange border and `20px` backdrop blur. On hover, the background fills slightly with 10% orange.

### Project Cards
- Cards feature a `1px` border with a subtle top-to-bottom gradient (White at 10% to Transparent). 
- Images inside cards should have a `0.4` grayscale filter, returning to full color and slightly scaling up (1.05x) on hover.

### Tech Chips
- Small, pill-shaped labels using **JetBrains Mono**. 
- Dark grey background with a 1px border colored by the primary accent.

### Input Fields
- Dark, recessed wells with no background (just a bottom border or subtle outline). Focus states should "ignite" the border with the primary orange glow.

### Progress/Skill Bars
- Thin, sleek tracks with the `accent_gradient` filling the progress. Use a subtle pulse animation for "currently learning" skills.