# CODEGEN_RULES.md

## Purpose

This document defines the **mandatory generation rules** for the Evolved Living website. These rules ensure Copilot (or any generator) produces a site that is:

* Static-first
* Fully usable without JavaScript
* Easy for non-technical users to maintain
* Structurally consistent and predictable

These rules override default assumptions made by code generators.

---

## 1. Core Architecture

### 1.1 Static-First Requirement

The website MUST function as a complete, readable website with JavaScript disabled.

This means:

* All pages contain real content in HTML
* Navigation works with normal links
* No content depends on JS to appear

JavaScript is **progressive enhancement only**.

---

### 1.2 Layer Responsibilities

| Layer | Responsibility                              |
| ----- | ------------------------------------------- |
| HTML  | Structure + visible fallback content        |
| JSON  | Editable mirror of page content             |
| CSS   | Styling only                                |
| JS    | Optional content replacement & enhancements |

HTML is the baseline source users see. JSON is the editing source of truth.

---

## 2. HTML Generation Rules

### 2.1 Pages Must Contain Content

Each HTML page MUST include:

* Semantic structure (`header`, `main`, `section`, `footer`)
* Real headings and paragraphs
* Example buttons/links

This fallback content must match the JSON files conceptually.

Example:

```html
<h1 data-content="hero.title">Designed for the Way You Live</h1>
```

If JS runs, content may update. If JS fails, this text remains.

---

### 2.2 Partials Usage

Partials are allowed for reuse, but **pages must remain valid and readable if partial loading JS fails**.

Therefore:

* Partials may be included directly in pages during generation
* JS-based partial loading must not be required for layout

---

## 3. JSON Content Rules

* JSON mirrors the visible HTML content
* JSON structure must be simple and shallow
* Keys must align with `data-content` attributes
* JSON exists to make editing easier, not to render the site

---

## 4. JavaScript Rules

JavaScript must be minimal.

Allowed:

* Replace fallback HTML text with JSON values
* Theme switching
* Minor UI enhancements

Forbidden:

* Rendering full page sections
* Creating layout from scratch
* Hiding content until JS loads

The site must never appear blank without JS.

---

## 5. CSS & Theme Rules

### 5.1 Theme Naming

The primary theme MUST be named:

**`theme-main.css`**

This file defines brand colors and variables. Avoid stylistic names like "solar".

---

### 5.2 Styling Model

* `theme-base.css` = layout and components
* `theme-main.css` = color variables only
* No hard-coded colors in component rules

---

## 6. Maintainability Rules

Assume editors are non-technical.

Therefore:

* JSON files must be easy to locate and edit
* File names must be descriptive
* Avoid clever or abstract patterns

Clarity over elegance.

---

## 7. Validation Criteria

Generated output is correct only if:

* Pages display full content with JS disabled
* Theme file is named `theme-main.css`
* JSON mirrors HTML content
* No frameworks or build tools are used

---

## End of Rules
