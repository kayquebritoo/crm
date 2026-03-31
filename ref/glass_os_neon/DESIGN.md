# Design System Document

## 1. Overview & Creative North Star: "The Obsidian Lens"
This design system is a radical departure from the flat, utilitarian nature of traditional CRMs. It is built upon the concept of **"The Obsidian Lens"**—a visual metaphor where high-performance data is viewed through layers of polished glass, suspended over a cosmic, shifting void. 

Instead of standard grids and boxes, we prioritize **Atmospheric Depth**. By utilizing Glassmorphism 2.0, we create a UI that feels native to a futuristic OS. The experience is defined by high-contrast typography, intentional asymmetry, and the refraction of light. We don't just display data; we curate an environment where information feels tangible yet ethereal.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the deep reaches of space, punctuated by high-energy cyan accents.

### The Foundation
*   **Background (`#131220`):** The absolute base. It is the void upon which all elements float.
*   **Primary (`#a5e7ff`) & Primary Container (`#00d2ff`):** Used exclusively for high-intent actions and critical status indicators.
*   **Secondary (`#a0cafc`):** Used for supporting information and tonal balance.

### The "No-Line" Rule
Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined by:
1.  **Tonal Transitions:** Moving from `surface-container-low` to `surface-container-high`.
2.  **Negative Space:** Using the `Spacing Scale` (16/20/24) to let the background breathe.
3.  **Refractive Edges:** Using the 1px gradient border technique (see Elevation).

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. The deeper the content, the darker the surface.
*   **Main Canvas:** `surface` (`#131220`).
*   **Persistent Sidebars:** `surface-container-low`.
*   **Standard Cards:** `surface-container-highest` with 20px Backdrop Blur.
*   **Modals/Floating Elements:** `surface-bright` with increased opacity.

### Signature Textures
Apply a **5% opacity monochromatic noise texture** to all glass surfaces. This breaks the digital perfection and adds a premium, "hardware" feel to the interface.

---

## 3. Typography: Editorial Performance
We utilize a hierarchy that balances the technical precision of **Space Grotesk** with the human readability of **Manrope**.

*   **The Display Scale:** Use `display-lg` and `display-md` with **tight tracking (-0.04em)**. These are not just titles; they are graphic elements.
*   **The Headline Scale:** `headline-sm` in Space Grotesk provides an authoritative, geometric structure to section headers.
*   **The Body Scale:** `body-md` and `body-lg` utilize Manrope for its high legibility in dense CRM data environments. 
*   **The Label Scale:** `label-sm` (Inter) is used for technical metadata, always in Uppercase with **+0.05em letter spacing** to maintain a "native app" aesthetic.

---

## 4. Elevation & Depth: Glassmorphism 2.0
Depth is achieved through **Tonal Layering** and optical simulation rather than structural lines.

### The Layering Principle
Never use a shadow where a color shift will suffice. Place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" look.

### The Ghost Border & Refraction
For glass containers, use a **1px Thin Gradient Border**. 
*   **Top/Left:** `outline-variant` at 20% opacity (simulating light hitting the edge).
*   **Bottom/Right:** `surface-container-highest` at 5% opacity (simulating a shadow edge).

### Ambient Shadows
When an element must "float" (e.g., a dropdown or modal), use:
*   **Blur:** 40px - 80px.
*   **Opacity:** 8% max.
*   **Color:** Use a tinted version of `primary` or `on-secondary` to simulate the background light bleeding through the shadow.

---

## 5. Components

### Buttons
*   **Primary:** A vibrant gradient from `primary` to `primary-container`. No border. Text is `on-primary` (deep indigo) for maximum contrast.
*   **Secondary/Glass:** `surface-container-highest` background with 20px blur and the 1px "Ghost Border."
*   **Tertiary:** Ghost style. No background, `primary` text, glows slightly on hover.

### Input Fields
Avoid the "boxed" look. Use a `surface-container-lowest` background with a bottom-only `primary` accent line (2px) that animates from the center outward when focused.

### Cards & Lists
**Strict Rule:** No divider lines. Separate list items using `surface-container` shifts or 8px (`2`) vertical spacing. 
*   **Hover State:** Cards should transition from `surface-container-high` to `surface-container-highest` and scale by 1.01% to simulate physical lift.

### Chips
Small, pill-shaped (`rounded-full`). Use `secondary-container` for backgrounds with `on-secondary-container` text. Labels must be `label-sm` for a technical feel.

### The Glass Navigation
The header is a slim, centered glass bar. The logo is centered and small. Navigation items are spaced widely to avoid clutter, using `label-md` Inter.

---

## 6. Do's and Don'ts

### Do
*   **DO** use wide margins (8/10/12 on the spacing scale) to create an "editorial" feel.
*   **DO** use subtle animated background spheres (Deep Blues/Purples) to create movement behind the glass.
*   **DO** keep the "noise" texture subtle—it should be felt, not seen.
*   **DO** use `tight tracking` on all Display and Headline text.

### Don't
*   **DON'T** use 100% opaque, high-contrast borders.
*   **DON'T** use standard grey shadows (`#000000`). Always tint your shadows with the primary indigo theme.
*   **DON'T** clutter the glass surfaces. If a screen feels heavy, increase the `backdrop-blur` or add more vertical white space.
*   **DON'T** use standard icons. Use thin-stroke (1px or 1.5px) geometric icons to match the "The Obsidian Lens" aesthetic.