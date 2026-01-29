# CODEGEN_DOCS.md

## Project Overview

This is the official website for **Evolved Living**, a residential construction company.

The website must:

* Work without JavaScript
* Be clean and modern
* Be easy for non-technical users to maintain
* Use JSON for editable content but include fallback HTML

---

## Brand Identity

Company Name: **Evolved Living**

Brand qualities:

* Modern
* Calm
* Professional
* Trustworthy
* High-quality residential construction

---

## Visual Direction

* Neutral, nature-adjacent tones
* Clean white surfaces
* Subtle shadows
* Generous spacing
* No visual clutter

The base styling direction comes from the provided base stylesheet, but it should be refined for consistency and accessibility.

---

## Theme System

### Main Theme Naming

The primary theme must be named clearly:

**`theme-main.css`**

This file defines brand colors and variables.

---

### Styling Structure

* `theme-base.css` → layout, components, spacing
* `theme-main.css` → brand colors via CSS variables

No hard-coded colors inside layout rules.

---

## Content Strategy

Content exists in TWO places by design:

1. **HTML fallback content** (visible without JS)
2. **JSON content** (editable source of truth)

JavaScript replaces HTML fallback with JSON values when enabled.

---

## Required Pages

* Home (`index.html`)
* Services (`services.html`)
* Contact (`contact.html`)

---

## Required Sections

* Header with navigation
* Hero section (home)
* Services section
* Contact section
* Footer

Each must contain example headings and text.

---

## Editing Experience

Non-technical users should:

* Edit text in JSON files
* Not need to modify HTML
* Not need to touch CSS or JS

Fallback content in HTML ensures the site never breaks visually.

---

## Accessibility

* Proper heading structure
* Good color contrast
* Keyboard accessible navigation

---

## Summary for Code Generation

When generating:

* Include real content in HTML
* Mirror it in JSON
* Use minimal JavaScript
* Name files clearly
* Prioritize clarity over abstraction

---

## End of Documentation
