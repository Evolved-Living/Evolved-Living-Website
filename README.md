# Evolved Living Website

A lightweight static website for a residential construction brand. The site uses JSON-driven content blocks, framework-free JavaScript rendering, and clean CSS separation to keep the architecture simple, maintainable, and easy to update.

## Purpose

This repository contains a static marketing website for Evolved Living. Pages are built from structured JSON content files, so the site can be updated without editing HTML directly.

## Architecture Overview

- **Static entry pages**: `index.html`, `services.html`, `contact.html`
- **JSON content**: `content/global.json` plus page JSON files
- **Rendering pipeline**: `javascript/content-loader.js` loads JSON, then `javascript/content-renderer.js` builds page blocks
- **CSS architecture**:
  - `css/theme-main.css` for variables and design tokens
  - `css/global.css` for site shell and layout
  - `css/utilities.css` for reusable helper classes
  - `css/components.css` for reusable component wrappers and panel patterns
  - `css/content-blocks.css` as the page block compile layer that assembles components into final block layouts
- **Block library**: reusable page sections such as hero, services grid, split content, image banner, process, testimonial, contact CTA, and footer

## Repository Structure

- `index.html`, `services.html`, `contact.html` — page entry points
- `content/` — page content and shared global content
- `css/` — visual theme, layout, utilities, and block styling
- `javascript/` — loader, renderer, and utilities for DOM construction
- `docs/templates/` — JSON templates for creating new content blocks
- `docs/` — architecture guidance and block library specs

## How Pages Are Rendered

1. Each HTML page declares its page JSON source with `body data-content-source="..."`.
2. `javascript/content-loader.js` loads `content/global.json` and the page-specific JSON file.
3. `javascript/content-renderer.js` uses an explicit block registry to render each block type.
4. Rendered blocks are appended into the `#site-root` container.
5. A loading screen shows while content is fetched.

## Editing Content JSON Files

- Use `content/global.json` for shared navigation, company data, and footer content.
- Use page JSON files under `content/` for page-specific blocks.
- Each page file is a `blocks` array of block objects.
- For syntax and examples, refer to `docs/templates/`.
- Keep content simple, and avoid embedding HTML or layout logic in JSON.

## Adding a New Content Block

1. Define the block schema in `docs/templates/` to keep it human-readable.
2. Add a renderer function in `javascript/content-renderer.js` that creates the DOM structure for the new block type.
3. Register the new renderer in the block registry object in `content-renderer.js`.
4. Add a block object to a page JSON file with `"type": "your-block-type"` and the expected fields.

## Local Testing

To preview the site locally, run a simple local HTTP server from the repository root. For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This is recommended because the renderer loads JSON files using fetch.

## Hosting with GitHub Pages

This site is ready for GitHub Pages deployment as a static repository. To host it:

1. Push the repository to GitHub.
2. Enable GitHub Pages in repository settings.
3. Choose the branch containing the root HTML files.
4. The site will serve the root HTML files directly.

No build step is required.

## Notes

- The site is intentionally framework-free and static.
- Content is managed in JSON rather than hardcoded HTML.
- Styling and layout follow the documented CSS architecture.
