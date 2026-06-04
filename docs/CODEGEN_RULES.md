# CODEGEN_RULES.md

## Purpose

This document defines the mandatory generation rules for the Evolved Living website.

These rules exist to ensure the generated repository remains:

- Simple
- Predictable
- Easy to maintain
- Mobile responsive
- Consistent across all pages
- Suitable for static hosting via GitHub Pages

These rules override default assumptions made by AI code generators.

---

# 1. Core Architectural Rules

## 1.1 Rendering Model

The website uses a JSON-driven content block architecture.

Rendering flow:

```text
JSON content
    ↓
JavaScript renderer
    ↓
Content block templates
    ↓
Rendered page
```

The renderer is responsible for translating structured JSON content into reusable content block layouts.

---

## 1.2 Static Hosting Requirement

The website MUST be compatible with static hosting environments such as GitHub Pages.

Therefore:
- No server-side rendering
- No backend dependencies
- No databases
- No frameworks requiring build pipelines
- No package managers or bundlers

The site must function using only static assets.

---

## 1.3 Simplicity Requirement

The architecture must remain intentionally simple.

Avoid:
- Framework-style abstractions
- Plugin systems
- Runtime configuration systems
- Dynamic layout engines
- Arbitrary recursive rendering
- User-defined HTML injection

Prefer:
- Explicit block types
- Explicit rendering logic
- Explicit styling rules
- Predictable structure

Clarity is more important than flexibility.

---

# 2. Repository Structure Rules

The repository structure defined in SITE_ARCHITECTURE_SPEC.md is the authoritative structure.

Generators MAY:
- Slightly adjust filenames for clarity
- Reorganize helper files if structure remains clear

Generators MUST NOT:
- Collapse architectural separation
- Merge unrelated responsibilities
- Introduce unnecessary directories
- Introduce framework conventions

---

# 3. HTML Rules

## 3.1 HTML File Purpose

HTML files act as lightweight page entry points.

Their responsibilities are limited to:
- Loading CSS
- Loading JavaScript
- Defining root containers
- Defining loading UI
- Declaring the content source

HTML files should remain minimal and structurally consistent.

---

## 3.2 HTML Structure Requirements

Every page MUST contain:
- Standard HTML document structure
- Root render container
- Loading indicator
- noscript fallback message
- Script references
- Stylesheet references

Preferred structure:
```html
<body data-content-source="content/index.json">
  <div id="loading-screen">
    Loading...
  </div>

  <noscript>
    <p>
      This website requires JavaScript enabled.
    </p>
  </noscript>

  <div id="site-root"></div>

  <script src="javascript/content-loader.js"></script>
</body>
```
---

## 3.3 HTML Restrictions

HTML files MUST NOT:
- Contain large amounts of page content
- Contain page-specific layout logic
- Contain inline styles
- Contain arbitrary script logic

All major page content originates from JSON.

---

# 4. JSON Rules

## 4.1 JSON Responsibilities

JSON files define:
- Content block order
- Block types
- Text content
- Links
- Image references
- Button labels
- Sub-block content

JSON files SHOULD remain human-readable and easy to edit.

---

## 4.2 JSON Restrictions

JSON MUST NOT contain:
- Raw CSS
- Arbitrary HTML
- JavaScript
- Inline styling
- Layout logic

JSON represents structured content only.

---

## 4.3 JSON Simplicity

JSON structure should remain shallow and predictable.

Avoid:
- Deep nesting
- Recursive structures
- Generic configuration objects

Prefer:
- Explicit fields
- Consistent schemas
- Predictable object shapes

---

# 5. Global Content Rules

## 5.1 Shared Content Layer

Global shared content must exist in:
```text
content/global.json
```

This file contains:
- Navigation items
- Company information
- Footer content
- Shared contact information
- Shared CTAs

---

## 5.2 Global Content Loading

The renderer MUST load:
1. `global.json`
2. Current page JSON
before rendering begins.

Global content should be accessible to all content block templates.

---

# 6. Content Block Rules

## 6.1 Content Blocks

Content blocks are the primary layout unit of the website.

All blocks must:
- Span full page width
- Be vertically stackable
- Be mobile responsive
- Be reusable across pages

---

## 6.2 Sub-Blocks

Sub-blocks exist within content blocks.

Purpose:
- Group related content
- Improve responsive scaling
- Allow flexible layouts

Sub-blocks may:
- Wrap horizontally
- Stack vertically on smaller screens

---

## 6.3 Block Naming

Block names must be explicit and descriptive.

Preferred:
- `hero-block`
- `services-grid`
- `split-content`
- `contact-cta`

Avoid:
- Abbreviations
- Generic names
- Numbered sections

---

## 6.4 Block Registry

Content blocks must be registered explicitly.

Preferred pattern:
```JS
const blockRegistry = {
  hero: renderHeroBlock,
  servicesGrid: renderServicesGrid,
  contactCta: renderContactCta
};
```

Avoid dynamic runtime block discovery.

---

# 7. CSS Rules

## 7.1 CSS File Responsibilities

`theme-main.css`

Contains:
- CSS variables
- Color definitions
- Typography variables
- Spacing variables
- Shadows
- Borders
- Transition variables

Must NOT contain:
- Layout rules
- Block structures
- Page-specific styles

`global.css`

Contains:
- Header layout
- Footer layout
- Global page wrappers
- Site-wide structural elements

`components.css`

Contains:
- Reusable component wrappers
- Panel and card patterns
- Media containers
- Shared section helpers
- Grid and action helpers

Must NOT contain:
- Theme variables
- Page-specific block layouts
- Low-level utility classes

`content-blocks.css`

Contains:
- Content block layouts
- Responsive layouts
- Grid/flex structures
- Sub-block behavior
- Block spacing

`utilities.css`

Contains:
- Utility classes
- Helper spacing classes
- Visibility helpers
- Generic reusable utilities

---

## 7.2 Styling Rules

All styling must:
- Be responsive
- Avoid horizontal scrolling
- Use CSS variables where appropriate
- Remain visually consistent

Avoid:
- Hardcoded one-off styling
- Inline styles
- Page-specific CSS duplication

---

# 8. JavaScript Rules

## 8.1 JavaScript Responsibilities

JavaScript is responsible for:
- Loading JSON content
- Rendering content blocks
- Mapping content to templates
- Managing loading state
- Minor UI enhancements

Include descriptive comments where necessary to explain rendering logic.

---

## 8.2 JavaScript Restrictions

JavaScript MUST NOT:
- Implement SPA routing
- Introduce framework patterns
- Create complex application state systems
- Inject arbitrary HTML
- Depend on external build tools

---

## 8.3 Loading Behavior

The site must provide visible loading feedback.

Rendering sequence:
1. Show loading UI
2. Load global.json
3. Load page JSON
4. Render content blocks
5. Hide loading UI
6. Reveal rendered page

The page should never appear frozen or blank during loading.

---

# 9. Responsive Design Rules

All layouts must:
- Scale cleanly on desktop and mobile
- Avoid overflow issues
- Maintain readable spacing
- Reflow predictably

Preferred behavior:
- Desktop → grouped horizontal layouts
- Mobile → vertically stacked layouts

---

# 10. Maintainability Rules

Assume future maintainers are non-technical.

Therefore:
- File names must be descriptive
- Structure must remain obvious
- Code must remain readable
- Logic must remain explicit

Avoid:
- Clever abstractions
- Hidden coupling
- Over-engineering

The architecture should be understandable by reading the repository structure alone.

---

# 11. Validation Criteria

Generated output is considered correct only if:
- Repository structure follows the architecture spec
- HTML files remain lightweight
- JSON remains human-editable
- Content blocks render consistently
- Layouts are responsive
- Global content is centralized
- No frameworks or build systems are introduced
- Styling responsibilities remain separated
- Rendering behavior is predictable and explicit

---

# End of Rules