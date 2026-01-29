# Evolved Living — Static Marketing Website

This repository contains a static-first marketing site for Evolved Living. It follows the project's codegen rules: pages are fully usable without JavaScript, and JSON files serve as the editable source of truth.

Quick start (preview locally)
--------------------------------
From the repository root run a simple static server and open a browser:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Project structure
------------------
- `index.html`, `services.html`, `contact.html` — fully rendered HTML pages with fallback content.
- `partials/` — reusable HTML fragments (also included inline in pages to ensure no JS dependency).
- `content/` — editable JSON files that mirror visible text. Edit these to update content without touching HTML.
  - `site.json`, `hero.json`, `services.json`, `projects.json`, `contact.json`
- `css/`
  - `theme-main.css` — REQUIRED name: contains design tokens and variables. Edit these to change color, radii, shadows, and other theme values.
  - `theme-base.css` — layout, components, spacing. Uses variables from `theme-main.css`.
- `js/` — minimal progressive-enhancement scripts.
  - `content-loader.js` replaces fallback HTML text with values from the JSON files when available. The site never hides content while JS is loading.
  - `theme.js` provides a small `window.toggleTheme()` helper for runtime testing.
- `assets/` — images and icons (SVG placeholders included).

Editing content
----------------
- Non-technical editors should change the JSON files in `content/`. Keys match `data-content` attributes in the HTML (for example, `hero.title` maps to `data-content="hero.title"`).
- After editing JSON, reload the page in the browser. With JS enabled the page will reflect JSON values; without JS the fallback HTML remains intact.

Theming and visual tokens
-------------------------
- To adjust colors, spacing, or radii, edit `css/theme-main.css`. This file defines CSS custom properties used across the site. Important tokens include:
  - `--bg-gradient` — page background (tan gradient used by default)
  - `--color-text`, `--color-text-soft` — text colors
  - `--color-surface`, `--color-surface-muted` — surfaces and form backgrounds
  - `--color-primary` — brand/accent green
  - `--button-bg`, `--btn-primary-hover-bg` — button colors
  - `--radius-sm`, `--radius-md`, `--radius-lg` — border radii
  - `--shadow-soft`, `--shadow-subtle` — shadows (these use tinted values, not pure black)

Accessibility & progressive enhancement
--------------------------------------
- Pages are fully accessible without JavaScript. Navigation uses plain links. Headings, landmarks (`header`, `main`, `footer`), and form labels are present.
- `js/content-loader.js` is intentionally conservative: it only replaces text content and silently fails if JSON can't be loaded.

Development notes
-----------------
- Keep `theme-main.css` and `theme-base.css` separate: `theme-main.css` for tokens, `theme-base.css` for layout.
- Avoid adding frameworks or build steps — this site is static-first by design.

Next steps / suggestions
------------------------
- Replace SVG placeholders in `assets/images/` with production photography sized appropriately.
- Tune contrast values in `css/theme-main.css` if any areas need stronger accessibility contrast.
- If you'd like, I can add a small CI check or a GitHub Pages configuration to preview automatically.

Contact
--------
If you want help tuning visuals or committing these changes, tell me which next step you prefer (commit, README adjustments, or CI preview).
# Evolved Living Website

A clean, modern, static website for Evolved Living residential construction company.

## Overview

This website is built with **zero frameworks, zero build steps**. It's a static site that works perfectly with GitHub Pages and can be maintained by non-technical users.

## Architecture

### Key Principles

- **Static Only**: No server-side rendering, frameworks, or build tools
- **Separation of Concerns**: HTML (structure) → JSON (content) → CSS (style) → JS (binding)
- **Maintainability**: Non-technical users can edit content in JSON files without touching HTML
- **GitHub Pages Compatible**: Works perfectly when deployed as a static site

## Directory Structure

```
/
├── index.html                 # Homepage
├── services.html              # Services page
├── contact.html               # Contact page
├── projects.html              # Projects page
│
├── partials/                  # Reusable HTML fragments
│   ├── header.html
│   ├── footer.html
│   ├── hero.html
│   ├── section-services.html
│   ├── section-projects.html
│   └── section-contact.html
│
├── content/                   # All editable content (JSON)
│   ├── site.json              # Company info, contact details
│   ├── hero.json              # Homepage hero section
│   ├── services.json          # Services listing
│   ├── projects.json          # Project listings
│   └── contact.json           # Contact page info
│
├── css/
│   ├── theme-base.css         # All layout & component styles
│   ├── theme-solar-modern.css # Color variables & theming
│   └── main-theme.css         # Legacy theme import
│
├── js/
│   ├── include-partials.js    # Loads HTML partials
│   ├── content-loader.js      # Binds JSON data to pages
│   ├── theme.js               # Theme switching
│   └── utils.js               # Utility functions
│
└── docs/
    ├── CODEGEN_RULES.md       # Code generation rules
    ├── CODEGEN_DOCS.md        # Project documentation
    └── REPO_STRUCTURE.md      # Repository structure guide
```

## How It Works

1. **HTML Pages** load partials via `data-partial` attributes
2. **Partials** use `data-content`, `data-text`, and `data-repeat` attributes
3. **Content Loader** fetches JSON files and binds data to HTML
4. **CSS Variables** control all colors and design tokens
5. **Scripts** run in sequence: partials → content → theme

## Editing Content

Edit any JSON file in `/content/` and changes appear instantly:

- **site.json** - Company name, email, phone, address
- **hero.json** - Homepage headline and CTA
- **services.json** - Services offered
- **contact.json** - Contact information
- **projects.json** - Featured projects

## Deployment

Push to GitHub and enable Pages in repository settings. Done!

## License

© 2026 Evolved Living. All rights reserved.
