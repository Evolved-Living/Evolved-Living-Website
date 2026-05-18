# BLOCK_LIBRARY_SPEC.md

## Purpose

This document defines the official content block library for the Evolved Living website.

The block library exists to ensure:

- Visual consistency
- Predictable rendering behavior
- Reusable layouts
- Responsive scalability
- Simpler maintenance
- Consistent JSON structures

All rendered page content must be built using approved block types defined in this document.

---

# 1. Core Block System Rules

## 1.1 Block Architecture

Each page is rendered as a vertical sequence of content blocks.

Each block:
- Spans the full viewport width
- Is rendered independently
- Contains its own internal structure
- May contain nested sub-blocks

Blocks are rendered sequentially in the order they appear in the page JSON.

---

## 1.2 Block Responsibilities

Blocks are responsible for:
- Layout structure
- Responsive behavior
- Rendering grouped content

Blocks are NOT responsible for:
- Global site state
- Navigation routing
- Arbitrary scripting
- Styling outside their defined scope

---

## 1.3 Sub-Blocks

Sub-blocks are child layout regions inside content blocks.

Sub-blocks are used to:
- Group related content
- Support responsive scaling
- Enable horizontal-to-vertical stacking

Examples:
- Card groups
- Split content layouts
- Feature grids
- Button groups

---

# 2. Official Block Library

Only approved block types should be used.

---

# 2.1 `hero-block`

## Purpose

Primary landing section for page introduction.

Usually appears first on the page.

---

## Expected Content

- Large title
- Supporting subtitle
- Optional buttons
- Optional background image
- Optional accent image

---

## Example Layout

```text
[ Large Title                ]
[ Subtitle text              ]
[ CTA Buttons                ]

[ Optional image/graphic     ]
```

---

## Example JSON

```json
{
  "type": "hero-block",
  "title": "Built Around Your Life",
  "subtitle": "Custom homes designed for modern living.",
  "buttons": [
    {
      "label": "View Services",
      "href": "services.html"
    }
  ],
  "image": "content/assets/hero/home-1.jpg"
}
```

---

## Responsive Behavior

Desktop:
- Text and image may appear side-by-side

Mobile:
- Content stacks vertically

---

# 2.2 `services-grid`

## Purpose

Displays grouped service offerings.

---

## Expected Content

- Section title
- Section subtitle
- Grid of service cards

Each service card may contain:
- Icon/image
- Title
- Description

---

## Example JSON

```json
{
  "type": "services-grid",
  "title": "Our Services",
  "subtitle": "Designed for modern living.",
  "items": [
    {
      "title": "Custom Homes",
      "description":
        "High-quality residential construction."
    }
  ]
}
```

---

## Responsive Behavior

Desktop:
- Multi-column grid

Tablet:
- Reduced column count

Mobile:
- Single-column stacked cards

---

# 2.3 `split-content`

## Purpose

Displays two related content regions side-by-side.

Useful for:
- Image + text
- Process explanations
- Feature highlights

---

## Expected Content

Left and right sub-block regions.

Each region may contain:
- Title
- Paragraphs
- Images
- Buttons

---

## Example JSON

```json
{
  "type": "split-content",
  "left": {
    "title": "Designed for Comfort",
    "text":
      "Thoughtful layouts built around daily living."
  },
  "right": {
    "image":
      "content/assets/projects/interior-1.jpg"
  }
}
```

---

## Responsive Behavior

Desktop:
- Horizontal layout

Mobile:
- Vertical stacking

---

# 2.4 `image-banner`

## Purpose

Large visual separator or featured project showcase.

---

## Expected Content

- Large image
- Optional overlay title
- Optional overlay subtitle

---

## Example JSON

```json
{
  "type": "image-banner",
  "image":
    "content/assets/projects/exterior-1.jpg",
  "title": "Modern Residential Design"
}
```

---

## Responsive Behavior

Image scales responsively while maintaining aspect ratio.

---

# 2.5 `process-block`

## Purpose

Displays a sequential workflow or company process.

---

## Expected Content

- Section title
- Ordered steps

Each step may contain:
- Number
- Title
- Description

---

## Example JSON

```json
{
  "type": "process-block",
  "title": "Our Process",
  "steps": [
    {
      "title": "Consultation",
      "description":
        "We begin by understanding your goals."
    }
  ]
}
```

---

## Responsive Behavior

Desktop:
- Horizontal progression layout

Mobile:
- Vertical stacked steps

---

# 2.6 `testimonial-block`

## Purpose

Displays client testimonials or reviews.

---

## Expected Content

- Quote text
- Client name
- Optional project reference

---

## Example JSON

```json
{
  "type": "testimonial-block",
  "items": [
    {
      "quote":
        "Excellent craftsmanship and communication.",
      "name": "Sarah Mitchell"
    }
  ]
}
```

---

## Responsive Behavior

Desktop:
- Multi-column cards or carousel-style layout

Mobile:
- Vertical stacking

---

# 2.7 `contact-cta`

## Purpose

Final conversion-focused call-to-action section.

Usually appears near page end.

---

## Expected Content

- CTA title
- Supporting text
- Contact button(s)
- Optional phone/email

---

## Example JSON

```json
{
  "type": "contact-cta",
  "title": "Start Your Project",
  "text":
    "Let’s discuss your future home.",
  "buttons": [
    {
      "label": "Contact Us",
      "href": "contact.html"
    }
  ]
}
```

---

## Responsive Behavior

Centered stacked layout on smaller screens.

---

# 2.8 `footer-block`

## Purpose

Global footer section.

Usually populated using `global.json`.

---

## Expected Content

- Company name
- Navigation links
- Contact information
- Copyright

---

## Example JSON

```json
{
  "type": "footer-block"
}
```

---

# 3. Block Rendering Rules

## 3.1 Explicit Rendering

All blocks must be rendered explicitly through the block registry.

Preferred pattern:

```javascript
const blockRegistry = {
  "hero-block": renderHeroBlock,
  "services-grid": renderServicesGrid,
  "split-content": renderSplitContent
};
```

Avoid:
- Dynamic imports
- Runtime-generated templates
- Arbitrary block discovery

---

# 4. Block Styling Rules

All blocks must:
- Use shared spacing scales
- Use shared typography rules
- Use CSS variables from `theme-main.css`
- Use layouts from `content-blocks.css`

Avoid:
- Inline styles
- Per-page styling
- One-off layout logic

---

# 5. Responsive Design Rules

All blocks MUST:
- Scale cleanly on mobile
- Avoid horizontal scrolling
- Preserve readable spacing
- Reflow predictably

Preferred responsive behavior:
- Desktop → grouped horizontal layouts
- Mobile → vertical stacking

---

# 6. Future Expansion Rules

New block types should only be added if:
- Existing blocks cannot reasonably support the layout
- The new block is reusable
- The new block has clear responsive behavior
- The new block has a clearly defined JSON schema

Avoid:
- Single-use blocks
- Hyper-specialized layouts
- Blocks that only exist for one page

---

# 7. Architectural Philosophy

The block library is intended to:
- Keep layouts predictable
- Keep content centralized
- Keep rendering explicit
- Reduce maintenance complexity
- Improve long-term scalability

The goal is NOT to build a CMS framework.

The goal IS to build a maintainable, reusable static site architecture.

---

# End of Block Library Specification