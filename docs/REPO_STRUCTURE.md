# REPO_STRUCTURE.md

## Purpose

This document defines the **intended repository layout** for the *Evolved Living* website.

This structure is the *target state*, not a rigid filesystem contract. Code-generation tools **may adjust filenames or groupings if necessary**, but they MUST preserve:

* The architectural intent
* The separation of concerns
* The maintainability goals defined in `CODEGEN_RULES.md`

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
│  ├─ theme-solar-modern.css
│  └─ (additional theme files)
│
├─ js/
│  ├─ include-partials.js
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

## Directory Responsibilities

### `/partials/`

* Contains reusable HTML fragments only
* No business copy
* No inline styles
* Uses `data-*` attributes for content binding

---

### `/content/`

* Contains all editable business content
* JSON files only
* Files are named after the section they control
* Intended for non-technical editors

---

### `/css/`

* `theme-base.css` contains ALL layout and component rules
* Theme files ONLY define CSS variables and import the base
* No duplicated component styling across themes

---

### `/js/`

* Small, focused scripts only
* No framework code
* No content embedded in JavaScript

---

### `/assets/`

* Static images and icons only
* Paths referenced from JSON files
* Organized by usage, not by page

---

### `/docs/`

* Contains documentation for code generation tools
* Not referenced by runtime code
* Must be reviewed before any automated generation

---

## Flexibility Clause

Code-generation tools MAY:

* Rename files slightly for clarity
* Merge or split partials if logically justified

They MUST NOT:

* Eliminate partials
* Inline content into HTML
* Replace JSON-driven content with hard-coded copy
* Introduce build tools or frameworks

---

## End of Repository Structure
