# REPO_STRUCTURE.md

## Purpose

This document defines the intended repository layout for the Evolved Living website.

The structure must support a **static-first, JavaScript-optional architecture** and prioritize long-term maintainability.

Generators may adjust filenames slightly if clarity improves, but they must preserve architectural intent.

---

## Root Structure

```text
/
├─ index.html
├─ services.html
├─ contact.html
│
├─ partials/
│  ├─ header.html
│  ├─ footer.html
│  ├─ hero.html
│  ├─ section-services.html
│  ├─ section-projects.html
│  └─ section-contact.html
│
├─ content/
│  ├─ site.json
│  ├─ hero.json
│  ├─ services.json
│  ├─ projects.json
│  └─ contact.json
│
├─ css/
│  ├─ theme-base.css
│  ├─ theme-main.css
│  └─ (optional additional themes)
│
├─ js/
│  ├─ content-loader.js
│  ├─ theme.js
│  └─ utils.js
│
├─ assets/
│  ├─ images/
│  │  ├─ hero/
│  │  ├─ projects/
│  │  └─ logos/
│  └─ icons/
│
└─ docs/
   ├─ CODEGEN_RULES.md
   ├─ CODEGEN_DOCS.md
   └─ REPO_STRUCTURE.md
```

---

## Structural Principles

### Pages (`/`)

* Must be fully readable HTML documents
* Must not rely on JS to assemble layout

---

### Partials (`/partials/`)

* Reusable HTML sections
* May be included directly during generation
* Must contain fallback content

---

### Content (`/content/`)

* JSON files for easy editing
* Mirror HTML content
* Used by JS to enhance, not render

---

### CSS (`/css/`)

* `theme-base.css` contains all layout and component styles
* `theme-main.css` defines brand color variables
* No duplicated component rules across themes

---

### JavaScript (`/js/`)

* Optional enhancements only
* Must not be required for page content

---

### Assets (`/assets/`)

* Static media only
* Referenced from HTML or JSON

---

## Flexibility Clause

Generators MAY:

* Slightly rename files for clarity
* Merge small partials if logical

Generators MUST NOT:

* Remove fallback HTML content
* Require JS to render content
* Introduce frameworks or build steps

---

## End of Repository Structure
