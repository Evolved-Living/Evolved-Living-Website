# Responsive Design Patterns

This guide documents responsive behavior for all block types and provides patterns for creating mobile-friendly layouts.

---

## 1. Breakpoint Reference

All responsive design uses a **mobile-first approach**: default styles are for mobile, then enhanced at larger breakpoints.

### Defined Breakpoints

| Device | Min Width | Max Width | Context |
|---|---|---|---|
| **Mobile** | 0 | 47.99rem | Phones, small tablets |
| **Tablet** | 48rem (768px) | 63.99rem | Tablets, large phones |
| **Desktop** | 64rem (1024px) | 79.99rem | Laptops, desktop monitors |
| **Widescreen** | 80rem (1280px) | ∞ | Large desktop monitors |

### CSS Media Query Pattern

```css
/* Mobile-first: Default styles here */
.my-element {
  padding: 1rem;
  font-size: 1rem;
}

/* Tablet and up */
@media (min-width: 48rem) {
  .my-element {
    padding: 1.5rem;
  }
}

/* Desktop and up */
@media (min-width: 64rem) {
  .my-element {
    padding: 2rem;
    font-size: 1.25rem;
  }
}

/* Widescreen and up */
@media (min-width: 80rem) {
  .my-element {
    max-width: 1200px;
  }
}
```

---

## 2. Block-Specific Responsive Patterns

### Hero Block

**Purpose:** Intro section with title, subtitle, optional buttons, optional image

**Mobile (< 48rem)**
- Full width
- Single column layout
- Image stacked below text
- Text fills full width with padding
- Buttons stack vertically

**Tablet (48rem - 64rem)**
- Wider container with padding
- Two-column: 60% text, 40% image
- Buttons may show inline
- Enhanced spacing

**Desktop (64rem+)**
- Full-width hero section
- Two-column layout optimized
- Larger typography
- Buttons horizontal group

**Code Pattern:**
```css
.hero-block__grid {
  display: grid;
  gap: var(--space-lg);
}

@media (min-width: 48rem) {
  .hero-block__grid {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  }
}

@media (min-width: 64rem) {
  .hero-block__grid {
    gap: var(--space-xxl);
  }
}
```

---

### Services Grid

**Purpose:** Display multiple service cards in a grid

**Mobile (< 48rem)**
- Single column (100% width)
- Full-width cards
- Vertical stacking
- Card height auto

**Tablet (48rem - 64rem)**
- Two columns
- Cards side-by-side
- Reduced gap between cards
- Uniform card heights

**Desktop (64rem+)**
- Three columns
- Optimal spacing
- Consistent card sizing
- Maximum visual impact

**Code Pattern:**
```css
.services-grid__items {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
  .services-grid__items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64rem) {
  .services-grid__items {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
  }
}
```

---

### Split Content

**Purpose:** Two-column layout (text + image) that stacks on mobile

**Mobile (< 48rem)**
- Full width, single column
- Text section full width
- Image section full width below
- Vertical stacking
- Text readable at mobile size

**Tablet (48rem - 64rem)**
- Two columns
- 50/50 split
- Side-by-side layout
- Reduced padding

**Desktop (64rem+)**
- Two columns, full width
- Better spacing
- Larger typography
- Enhanced imagery

**Code Pattern:**
```css
.split-content__inner {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
  .split-content__inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 64rem) {
  .split-content__inner {
    gap: var(--space-xxl);
    grid-template-columns: 1fr 1fr;
  }
}
```

---

### Image Banner

**Purpose:** Full-width background image with optional overlay text

**Mobile (< 48rem)**
- Full viewport width
- Reduced height (200-300px)
- Image aspect ratio maintained
- Text: small font, centered
- Overlay overlay more opaque

**Tablet (48rem - 64rem)**
- Full viewport width
- Moderate height (350-400px)
- Better text sizing
- Balanced overlay

**Desktop (64rem+)**
- Full viewport width
- Full height (400-500px)
- Large overlay text
- Subtle overlay gradient

**Code Pattern:**
```css
.image-banner {
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  align-items: center;
}

@media (min-width: 48rem) {
  .image-banner {
    height: 350px;
  }
}

@media (min-width: 64rem) {
  .image-banner {
    height: 450px;
  }
}

.image-banner::before {
  background: linear-gradient(180deg, rgba(26,90,26,0.12), rgba(26,90,26,0.28));
}
```

---

### Process Block

**Purpose:** Display sequential steps

**Mobile (< 48rem)**
- Vertical stacked steps
- Full width
- Step numbers centered or left-aligned
- Step descriptions below

**Tablet (48rem - 64rem)**
- Horizontal progression beginning
- May show 2 columns
- Steps flow left to right
- Connection lines between steps

**Desktop (64rem+)**
- Full horizontal progression
- All steps visible at once
- Clear step connectors
- Spacious layout

**Code Pattern:**
```css
.process-block__steps {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
  .process-block__steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64rem) {
  .process-block__steps {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }
}
```

---

### Testimonial Block

**Purpose:** Display client testimonials/reviews

**Mobile (< 48rem)**
- Single column stacking
- Full-width cards
- Large readable text
- Card with padding

**Tablet (48rem - 64rem)**
- Two columns
- Side-by-side cards
- Better space utilization

**Desktop (64rem+)**
- Three columns
- Balanced card layout
- Optimal typography

**Code Pattern:**
```css
.testimonial-block__items {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
  .testimonial-block__items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64rem) {
  .testimonial-block__items {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
  }
}
```

---

### Header/Navigation

**Mobile (< 48rem)**
- Sticky to top
- Compact logo
- Hamburger menu (if expanded navigation)
- Full-width

**Tablet (48rem - 64rem)**
- Sticky to top
- Logo left, nav right
- Horizontal navigation
- More padding

**Desktop (64rem+)**
- Sticky to top
- Full spacing
- Full horizontal navigation
- Maximum padding

**Code Pattern:**
```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
}

.site-header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-md);
}

@media (min-width: 48rem) {
  .site-header__inner {
    padding: var(--space-lg) var(--space-xl);
  }
}

@media (min-width: 64rem) {
  .site-header__inner {
    padding: var(--space-xl) var(--space-xxl);
  }
}
```

---

### Footer

**Mobile (< 48rem)**
- Full width
- Single column
- Stacked groups
- Mobile-friendly text

**Tablet (48rem - 64rem)**
- Two columns
- Side-by-side groups
- Better space utilization

**Desktop (64rem+)**
- Multiple columns
- Full-width utilization
- Enhanced typography

**Code Pattern:**
```css
.site-footer__inner {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
  .site-footer__inner {
    grid-template-columns: 1.2fr 1fr;
  }
}

@media (min-width: 64rem) {
  .site-footer__inner {
    grid-template-columns: 1.3fr 0.7fr;
    gap: var(--space-xxl);
  }
}
```

---

## 3. Typography Responsiveness

### Heading Sizes

**Mobile (< 48rem)**
```css
h1 { font-size: clamp(2rem, 5vw, 2.5rem); }
h2 { font-size: var(--font-size-xl); }
h3 { font-size: var(--font-size-lg); }
```

**Desktop (64rem+)**
```css
h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); }
h2 { font-size: var(--font-size-xxl); }
h3 { font-size: var(--font-size-xl); }
```

### Line Length

Keep lines between 50-75 characters for readability.

```css
/* Mobile: Narrower columns */
.content-block__inner {
  width: 100%;
  padding: 0 var(--space-md);
}

/* Desktop: Wider but constrained */
@media (min-width: 64rem) {
  .content-block__inner {
    width: min(100%, 1200px);
    margin: 0 auto;
  }
}
```

---

## 4. Common Responsive Patterns

### Flexible Grid (Auto-Fit)

Automatically adjusts column count based on available space:

```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-md);
}
```

This will:
- Show 1 column on mobile (< 250px available)
- Show 2 columns at 500px+
- Show 3 columns at 750px+
- Show 4 columns at 1000px+

### Flexible Padding

Scale padding based on screen size:

```css
.section-padding {
  padding: var(--space-md);
}

@media (min-width: 48rem) {
  .section-padding {
    padding: var(--space-lg);
  }
}

@media (min-width: 64rem) {
  .section-padding {
    padding: var(--space-xl);
  }
}
```

### Flexible Font Size

```css
.headline {
  /* 1.5rem on mobile, scales to 2rem on desktop */
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

### Touch-Friendly Buttons

Ensure buttons are at least 44x44px for mobile:

```css
.btn {
  min-height: var(--button-height); /* 48px */
  padding: var(--button-padding); /* 0 2rem */
}
```

---

## 5. Testing Responsive Design

### Key Breakpoints to Test

1. **320px** - Small phone
2. **375px** - iPhone/standard phone
3. **480px** - Larger phone/small tablet
4. **768px** - Tablet (48rem)
5. **1024px** - Desktop (64rem)
6. **1280px** - Widescreen (80rem)
7. **1920px** - Large monitor

### Mobile Testing Checklist

- [ ] Text is readable without zooming
- [ ] Buttons are touch-friendly (44x44px minimum)
- [ ] Images scale properly
- [ ] No horizontal scrolling
- [ ] Navigation is accessible
- [ ] Spacing feels balanced
- [ ] Line lengths are readable (50-75 chars)

### Tablet Testing Checklist

- [ ] Two-column layouts working
- [ ] Grid transitions smoothly
- [ ] Spacing increases appropriately
- [ ] Images at optimal size
- [ ] Navigation horizontal

### Desktop Testing Checklist

- [ ] Multi-column layouts visible
- [ ] Spacing is generous
- [ ] Max-width constraint applied
- [ ] Typography at full size
- [ ] All interactive elements visible

---

## 6. Performance Considerations

### Images in Responsive Layouts

- Use responsive image sizes: `srcset` attribute
- Optimize for mobile delivery
- Load smaller images on mobile

```html
<img
  src="image-768w.jpg"
  srcset="image-480w.jpg 480w, image-768w.jpg 768w, image-1280w.jpg 1280w"
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
  alt="Descriptive text"
/>
```

### CSS Optimization

- Mobile-first CSS (smallest files first)
- Only add rules for larger breakpoints
- Use `clamp()` instead of multiple media queries where possible
- Avoid unnecessary nested media queries

---

## 7. Accessibility in Responsive Design

### Viewport Meta Tag

Already in HTML, but ensure it exists:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Touch Targets

Minimum 44x44px touch area for buttons and links:
```css
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.5rem 1.5rem;
}
```

### Color Contrast

Maintain WCAG AA contrast ratios at all sizes.

### Text Spacing

Allow users to increase text spacing without breaking layout:
```css
* {
  line-height: 1.5;
  letter-spacing: 0.12em;
}
```

---

## 8. Quick Reference: When to Use Each Breakpoint

| Breakpoint | When to Use | Example |
|---|---|---|
| Mobile (< 48rem) | Default, no media query | Base styles |
| Tablet (48rem+) | More space, 2-column layouts | Services grid → 2 cols |
| Desktop (64rem+) | Full layouts, 3+ columns | Services grid → 3 cols |
| Widescreen (80rem+) | Maximum width constraints | Limit content to 1200px |

---

## 9. Common Responsive Mistakes to Avoid

❌ **Desktop-first approach** - Start with mobile, enhance upward
❌ **Too many breakpoints** - Use 3-4, not 10
❌ **Fixed widths** - Use percentages and max-width
❌ **Horizontal scrolling on mobile** - Always test
❌ **Tiny tap targets** - Keep buttons ≥ 44x44px
❌ **Responsive text that's unreadable** - Use `clamp()` with reasonable limits
❌ **Heavy images for mobile** - Optimize and resize
❌ **No testing on actual devices** - Desktop browsers lie

---

## 10. Resources

- MDN: [Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- CSS Tricks: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- CSS Tricks: [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Can I Use: Check browser support for CSS features

---

## Conclusion

Responsive design is about **starting mobile and enhancing for larger screens**. Use the breakpoints and patterns documented here to ensure consistent, accessible experiences across all devices.

Test early, test often, and always optimize for mobile first.
