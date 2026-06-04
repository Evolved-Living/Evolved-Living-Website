# CSS Layout Utilities Reference

This guide documents all reusable utility classes available in `css/utilities.css` for quick page customization. Shared block wrappers are defined in `css/components.css` and block-specific composition lives in `css/content-blocks.css`.

---

## 1. Visibility Utilities

Control element visibility without affecting layout.

### Classes

| Class | Effect | Use Case |
|---|---|---|
| `.u-hidden` | `display: none` | Hide elements completely |
| `.u-visually-hidden` | Screen reader only | Hide from sight but keep for accessibility |

### Examples

```html
<!-- Hide element completely -->
<div class="u-hidden">This won't render or take up space</div>

<!-- Hide visually but readable by screen readers -->
<span class="u-visually-hidden">Skip to main content</span>
```

---

## 2. Text Alignment Utilities

Control text alignment within containers.

### Classes

| Class | Effect |
|---|---|
| `.u-text-center` | `text-align: center` |
| `.u-text-right` | `text-align: right` |
| `.u-text-muted` | Reduced opacity text color |
| `.u-uppercase` | Uppercase with letter spacing |

### Examples

```html
<!-- Centered heading -->
<h2 class="u-text-center">Welcome to our services</h2>

<!-- Muted secondary text -->
<p class="u-text-muted">Published on March 15, 2024</p>

<!-- Uppercase label -->
<span class="u-uppercase">Featured</span>
```

---

## 3. Spacing Utilities

### Margin (Push elements away)

| Class | Spacing |
|---|---|
| `.u-mt-0` | margin-top: 0 |
| `.u-mb-0` | margin-bottom: 0 |
| `.u-mt-sm` | margin-top: var(--space-sm) |
| `.u-mb-sm` | margin-bottom: var(--space-sm) |
| `.u-mt-md` | margin-top: var(--space-md) |
| `.u-mb-md` | margin-bottom: var(--space-md) |

### Padding (Space inside)

| Class | Effect |
|---|---|
| `.u-px-md` | padding-left/right: var(--space-md) |
| `.u-px-lg` | padding-left/right: var(--space-lg) |

### Spacing Scale Reference

From `theme-main.css`:
- `--space-xxs`: 0.35rem (5px)
- `--space-xs`: 0.75rem (12px)
- `--space-sm`: 1rem (16px)
- `--space-md`: 1.5rem (24px)
- `--space-lg`: 2rem (32px)
- `--space-xl`: 3rem (48px)
- `--space-xxl`: 4rem (64px)

### Examples

```html
<!-- Remove margin that may have defaulted -->
<h3 class="u-mt-0">No top margin</h3>

<!-- Add breathing room below -->
<p class="u-mb-md">Paragraph with margin below</p>

<!-- Horizontal padding -->
<div class="u-px-md">Padded horizontally</div>
```

---

## 4. Layout: Flexbox Utilities

### Classes

| Class | Effect |
|---|---|
| `.u-flex` | `display: flex` |
| `.u-flex-center` | Flex with items centered both axes |

### Examples

```html
<!-- Flex container -->
<div class="u-flex u-gap-md">
  <button>Primary</button>
  <button>Secondary</button>
</div>

<!-- Centered flex (perfect for centered content) -->
<div class="u-flex-center">
  <img src="icon.svg" alt="Logo" />
</div>
```

---

## 5. Layout: Grid Utilities

### Classes

| Class | Effect |
|---|---|
| `.u-grid` | `display: grid` |
| `.u-gap-sm` | `gap: var(--space-sm)` |
| `.u-gap-md` | `gap: var(--space-md)` |

### Examples

```html
<!-- 3-column grid with medium gap -->
<div class="u-grid u-gap-md" style="grid-template-columns: repeat(3, 1fr)">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Auto-fit responsive grid -->
<div class="u-grid u-gap-sm" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>
```

---

## 6. Sizing Utilities

### Classes

| Class | Effect |
|---|---|
| `.u-width-full` | `width: 100%` |
| `.u-max-width-xxl` | `max-width: var(--max-content-width)` |

### Content Width Reference
- `--max-content-width`: 1200px (optimal content width)

### Examples

```html
<!-- Full width container -->
<div class="u-width-full">Stretches to fill parent</div>

<!-- Content constrained to max width -->
<div class="u-max-width-xxl u-mx-auto">
  Main content area
</div>
```

---

## 7. Styling Utilities

### Classes

| Class | Effect |
|---|---|
| `.u-shadow-soft` | Subtle shadow: `var(--shadow-soft)` |
| `.u-radius-md` | Border radius: `var(--radius-md)` |
| `.u-radius-pill` | Full pill shape: `var(--radius-pill)` |

### Shadow Reference
- `--shadow-soft`: 0 2px 4px rgba(0,0,0,0.06)
- `--shadow-card`: 0 4px 12px rgba(0,0,0,0.08)
- `--shadow-hover`: 0 6px 16px rgba(0,0,0,0.12)

### Border Radius Reference
- `--radius-sm`: 0.25rem (4px)
- `--radius-md`: 0.5rem (8px)
- `--radius-lg`: 1rem (16px)
- `--radius-pill`: 9999px (fully rounded)

### Examples

```html
<!-- Card with shadow and rounded corners -->
<div class="u-shadow-soft u-radius-md">
  <img src="project.jpg" alt="Project" />
  <h3>Project Title</h3>
</div>

<!-- Pill-shaped button -->
<button class="btn u-radius-pill">Contact Us</button>
```

---

## 8. Button Utilities

### Button Classes

| Class | Style | Use Case |
|---|---|---|
| `.btn` | Primary blue, full styling | Main call-to-action |
| `.btn-secondary` | Light blue background | Secondary action |

### Button States

| Pseudo-class | Behavior |
|---|---|
| `:hover` | Slight lift effect + darker background |
| `:focus-visible` | Keyboard-accessible outline |
| `:active` | Pressed state |

### Button Dimensions
- `--button-height`: 48px (touch-friendly)
- `--button-padding`: 0 2rem (horizontal padding)

### Examples

```html
<!-- Primary action -->
<a href="services.html" class="btn">View Services</a>

<!-- Secondary action -->
<button class="btn btn-secondary">Learn More</button>

<!-- Button group with flex -->
<div class="u-flex u-gap-md">
  <button class="btn">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
</div>
```

---

## 9. Common Utility Combinations

### Centered Section Heading

```html
<h2 class="u-text-center u-mb-md">Our Services</h2>
<p class="u-text-center u-text-muted">Brief description here</p>
```

### Flex Button Group (Mobile-Friendly)

```html
<div class="u-flex u-gap-sm" style="flex-wrap: wrap; justify-content: center;">
  <button class="btn">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
</div>
```

### Card with Rounded Corners and Shadow

```html
<div class="u-radius-md u-shadow-soft" style="padding: var(--space-md);">
  <h3>Card Title</h3>
  <p>Card description</p>
</div>
```

### Responsive Grid

```html
<div class="u-grid u-gap-md" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
  <div class="u-shadow-soft u-radius-md">Item 1</div>
  <div class="u-shadow-soft u-radius-md">Item 2</div>
  <div class="u-shadow-soft u-radius-md">Item 3</div>
</div>
```

### Centered Full-Width Container

```html
<div style="width: 100%; display: flex; justify-content: center;">
  <div class="u-max-width-xxl">
    Page content here
  </div>
</div>
```

---

## 10. When NOT to Use Utilities

❌ **Block-level layouts** - Use semantic block CSS instead
❌ **Responsive column changes** - Use block CSS media queries
❌ **Complex positioning** - Use component-specific CSS
❌ **Animation** - Use keyframe CSS or JavaScript

---

## 11. Combining Utilities with Block CSS

Utilities enhance blocks but don't replace block-specific styling.

### Example: Enhanced Button Group in Hero Block

```html
<!-- Using utilities to adjust spacing in hero block buttons -->
<div class="hero-actions u-flex u-gap-md" style="justify-content: center;">
  <button class="btn">Primary CTA</button>
  <button class="btn btn-secondary">Secondary CTA</button>
</div>
```

---

## 12. CSS Variable Reference

All utilities use these CSS custom properties from `theme-main.css`:

### Colors
- `--color-primary`: #1a5a1a (forest green)
- `--color-secondary`: #4f94e0 (blue)
- `--color-text`: #2a2420 (dark text)
- `--color-text-muted`: #6b6460 (medium gray)
- `--color-contrast`: #ffffff (white)

### Typography
- `--font-family-base`: System fonts (body text)
- `--font-family-heading`: Plus Jakarta Sans (headings)

### Spacing
- `--space-sm` through `--space-xxl`: Defined scale above

### Effects
- `--shadow-soft`, `--shadow-card`, `--shadow-hover`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`
- `--transition-fast`: 0.15s (quick interactions)
- `--transition-normal`: 0.3s (standard animations)

---

## Quick Lookup Table

| Need | Use |
|---|---|
| Hide something | `.u-hidden` |
| Center text | `.u-text-center` |
| Add space below | `.u-mb-md` |
| Flex layout | `.u-flex` or `.u-flex-center` |
| Grid layout | `.u-grid` with gap utilities |
| Button styling | `.btn` or `.btn-secondary` |
| Card look | `.u-shadow-soft` + `.u-radius-md` |
| Full width | `.u-width-full` |
| Constrained width | `.u-max-width-xxl` |

---

## Tips for Effective Utility Usage

1. **Layer utilities** - Combine multiple utilities for complex effects
2. **Use flexbox-center for alignment** - Most useful utility for centering
3. **Respect spacing scale** - Use `--space-*` vars, not arbitrary values
4. **Apply to block children** - Utilities work best on elements within blocks
5. **Mobile-first** - Default styling is mobile; add media queries in block CSS for tablet/desktop
