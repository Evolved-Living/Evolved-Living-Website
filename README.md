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
