# CODEGEN_DOCS.md

## Project Overview

This repository contains the official website for **Evolved Living**, a residential construction company.

The website must remain:

* Simple
* Clean
* Easily editable by non-technical users
* Visually consistent across all pages

The site is intended to:

1. Advertise contact information
2. Communicate brand values
3. Later showcase available homes and projects

---

## Brand Identity

### Company Name

**Evolved Living**

### Brand Attributes

* Modern
* Trustworthy
* High-quality craftsmanship
* Calm and confident

### Visual Direction

* Earth-adjacent tones with modern accents
* example colors(adjust as needed):
  * Primary: #1a5a1a
  * Accent: #4F94E0
  * Background: #d4b896
  * Border: #c9a889
  * Surface: #FFFFFF
  * Text: #333333
* Clean spacing and generous white space
* Subtle gradients and soft shadows
* No visual clutter

---

## Styling Guidance

### Base Stylesheet

`theme-base.css` defines:

* Layout grid
* Typography scale
* Spacing system
* Buttons
* Cards
* Forms
* Header and footer

All components MUST derive from this file.

---

### Preferred Theme: Solar Modern

The client prefers the direction established in:

* `theme-base.css`
* `theme-solar-modern.css`

Key characteristics:

* Warm background tones
* Forest green primary
* Soft blue accent
* White surfaces
* Calm, upscale residential feel

Improvements allowed:

* Slightly increase contrast for accessibility
* Ensure consistent application across all components
* Refine hover and focus states
* Reduce visual noise where possible

---

## Content Structure

### Content Directory

All editable content lives in `/content/`.

Required files:

* `site.json`

  * Company name
  * Tagline
  * Phone number
  * Email
  * Address
  * Footer copyright

* `hero.json`

  * Headline
  * Subheadline
  * Primary CTA text

* `services.json`

  * Section title
  * List of services

* `projects.json`

  * Section title
  * List of projects (can be empty initially)

* `contact.json`

  * Section title
  * Contact instructions

---

### Editing Expectations

A non-technical user should be able to:

* Open a JSON file
* Change text values
* Save the file
* See the update live

No HTML or CSS editing should be required for content changes.

---

## Page Structure

### Required Pages

* `index.html` – Home
* `services.html` – Services overview
* `contact.html` – Contact information

Future pages may include:

* `projects.html`
* `available-homes.html`

---

### Page Composition

Each page should be assembled from partials:

* `header.html`
* `hero.html` (homepage only)
* `section-services.html`
* `section-projects.html`
* `section-contact.html`
* `footer.html`

---

## Interactivity

### Theme Switching

* Multiple theme CSS files may exist
* A simple theme switcher is allowed
* Theme selection should persist via `localStorage`

Theme switching must NOT:

* Alter layout
* Break accessibility
* Change content

---

## Accessibility & Quality

* Semantic HTML elements only
* Logical heading order
* Sufficient color contrast
* Keyboard-accessible buttons and links

---

## Long-Term Vision

The architecture should support:

* Adding new pages without duplication
* Adding new themes without refactoring
* Adding listings via JSON only

No architectural decisions should limit these goals.

---

## Summary for Code Generators

When in doubt:

* Favor simplicity
* Favor clarity
* Favor explicit structure

The best solution is the one a non-technical business owner can maintain confidently.

---

## End of Documentation
