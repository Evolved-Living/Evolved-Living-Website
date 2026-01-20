# CODEGEN_RULES.md

## Purpose

This file defines **strict, non-negotiable rules** that any code-generation tool (including GitHub Copilot) MUST follow when generating or modifying code for the *Evolved Living* website.

The primary goals are:

* Extreme maintainability
* Clear separation of structure, content, and style
* Zero technical burden for non-technical editors
* Compatibility with GitHub Pages (static hosting)

Violations of these rules are considered incorrect output.

---

## 1. Architectural Rules (Hard Requirements)

### 1.1 Static-Only Architecture

* The site MUST remain fully static.
* NO server-side rendering.
* NO frameworks (React, Vue, Svelte, Next.js, Rails, etc.).
* NO build step (no bundlers, no transpilers).

Everything must work when opened directly in a browser or served via GitHub Pages.

---

### 1.2 Separation of Concerns

The following separation is mandatory:

| Layer | Allowed Responsibility          | Forbidden Responsibility    |
| ----- | ------------------------------- | --------------------------- |
| HTML  | Semantic structure only         | Hard-coded business content |
| JSON  | All editable text & image paths | Layout, styling, logic      |
| CSS   | Visual styling only             | Content, copy, structure    |
| JS    | Data loading & DOM binding only | Hard-coded copy, styling    |

---

## 2. HTML Rules

### 2.1 Page-Level HTML

Each page HTML file (`index.html`, `services.html`, etc.) MUST:

* Contain only:

  * `<head>` metadata
  * `<link>` to theme stylesheet
  * `<script>` includes
  * `data-partial` placeholders
* NOT contain business copy, phone numbers, addresses, taglines, or descriptions.

Allowed example:

```html
<div data-partial="header"></div>
<main class="page">
  <div data-partial="hero"></div>
</main>
<div data-partial="footer"></div>
```

Forbidden example:

```html
<h1>Building Homes That Last</h1>
```

---

### 2.2 Partials

All reusable sections MUST be implemented as partials in `/partials/`.

Rules:

* One partial = one logical section
* Filenames must be descriptive and human-readable
* Partials MUST NOT contain hard-coded copy

Required attributes:

* `data-content="path.to.value"` for single values
* `data-repeat="path.to.array"` for lists
* `data-text`, `data-href`, `data-src` inside repeat blocks

---

## 3. JSON Content Rules

### 3.1 Content Location

All editable content MUST live in `/content/`.

Each file must represent ONE concept:

* `site.json` → company-wide information
* `hero.json` → homepage hero
* `services.json` → services list
* `projects.json` → project listings
* `contact.json` → contact details

---

### 3.2 JSON Simplicity Rules

JSON files MUST:

* Be readable by non-technical users
* Avoid nesting deeper than 2 levels
* Use plain language keys
* Avoid abbreviations and acronyms

Good:

```json
{
  "title": "Our Services",
  "items": [
    { "title": "Custom Homes", "description": "..." }
  ]
}
```

Bad:

```json
{ "svc": { "itm": [{ "t": "..." }] } }
```

---

## 4. JavaScript Rules

### 4.1 JavaScript Scope

JavaScript is ONLY allowed to:

* Load partial HTML files
* Fetch JSON content
* Bind JSON values into HTML via data attributes
* Handle theme switching

JavaScript MUST NOT:

* Contain business copy
* Generate HTML strings manually
* Manipulate CSS values directly

---

### 4.2 Content Binding Rules

* All content binding MUST be declarative via `data-*` attributes
* No inline logic tied to specific content
* Scripts must be generic and reusable

---

## 5. CSS & Theme Rules

### 5.1 Base + Theme Model

* `theme-base.css` defines ALL shared layout and component styles
* Theme files (e.g. `theme-solar-modern.css`) ONLY define `:root` variables
* Theme files MUST `@import "theme-base.css"`

This pattern is mandatory.

---

### 5.2 Uniform Application

* All colors MUST come from CSS variables
* NO hard-coded colors inside layout rules
* Components must look consistent across all pages

If a color is needed, it must be a variable.

---

## 6. Maintainability & Clarity

### 6.1 Non-Technical Editor Priority

Assume the editor:

* Does not know HTML
* Does not know CSS
* Does not know JavaScript

Therefore:

* Content files must be obvious to locate
* Filenames must explain their purpose
* No "magic" or hidden coupling

---

### 6.2 Naming Conventions

* Use full words, not abbreviations
* Avoid cleverness
* Prefer boring clarity over elegance

---

## 7. Company Identity

* Company name: **Evolved Living**
* Tone: professional, modern, calm, trustworthy
* Industry: residential construction & home building
* Design goal: clean, confident, timeless

---

## End of Rules

Any generated code must comply with ALL sections above.
