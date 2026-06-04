# Templates Directory Guide

Welcome to the template library for Evolved Living! This directory contains everything you need to create new pages and content blocks.

---

## Quick Start

1. **Starting a new page?** → Copy `pages/page-template.json` and customize
2. **Need a specific block?** → Check `blocks/` directory
3. **Want page layout guidance?** → See `guides/PAGE_STRUCTURE_GUIDE.md`
4. **CSS styling questions?** → See `guides/CSS_LAYOUT_UTILITIES.md`
5. **Responsive design?** → See `guides/RESPONSIVE_DESIGN_PATTERNS.md`

---

## Directory Structure

```
docs/templates/
├── README.md (this file)
├── guides/
│   ├── PAGE_STRUCTURE_GUIDE.md
│   ├── CSS_LAYOUT_UTILITIES.md
│   └── RESPONSIVE_DESIGN_PATTERNS.md
│
├── blocks/
│   ├── hero-block-template.json
│   ├── services-grid-template.json
│   ├── split-content-template.json
│   ├── image-banner-template.json
│   ├── process-block-template.json
│   ├── testimonial-block-template.json
│   ├── contact-cta-template.json
│   └── footer-block-template.json
│
├── pages/
│   └── page-template.json
│
└── shared/
    └── global-template.json
```

---

## 1. Templates Included

### Individual Block Templates

Each file in `blocks/` is a standalone block ready to use. Copy the relevant template and insert into your page's `blocks` array.

**Available Blocks:**

| File | Block Type | Purpose |
|---|---|---|
| `hero-block-template.json` | `hero-block` | Hero/landing section |
| `services-grid-template.json` | `services-grid` | Service or feature grid |
| `split-content-template.json` | `split-content` | Two-column text + image |
| `image-banner-template.json` | `image-banner` | Full-width image section |
| `process-block-template.json` | `process-block` | Sequential steps |
| `testimonial-block-template.json` | `testimonial-block` | Client quotes/reviews |
| `contact-cta-template.json` | `contact-cta` | Call-to-action section |
| `footer-block-template.json` | `footer-block` | Global footer |

### Page Templates

| File | Purpose |
|---|---|
| `pages/page-template.json` | Base template for all pages |
| `shared/global-template.json` | Shared data (navigation, footer, company info) |

---

## 2. Creating a New Page

### Step 1: Copy the Page Template

```bash
# Copy pages/page-template.json to content/ directory
cp docs/templates/pages/page-template.json content/my-new-page.json
```

### Step 2: Edit the Page Structure

Open `content/my-new-page.json` and:

1. Replace blocks with your content
2. Reference `guides/PAGE_STRUCTURE_GUIDE.md` for recommended block sequences
3. Copy individual block templates from `blocks/` for each block you add

### Step 3: Add HTML Entry Point

Create a new HTML file in the root:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page Title | Evolved Living</title>
    <link rel="stylesheet" href="css/theme-main.css" />
    <link rel="stylesheet" href="css/global.css" />
    <link rel="stylesheet" href="css/utilities.css" />
    <link rel="stylesheet" href="css/components.css" />
    <link rel="stylesheet" href="css/content-blocks.css" />
  </head>
  <body data-content-source="content/my-new-page.json">
    <div id="loading-screen"></div>
    <noscript>
      <p>This site requires JavaScript. Please enable it.</p>
    </noscript>
    <div id="site-root"></div>
    <script src="javascript/utilities.js"></script>
    <script src="javascript/content-renderer.js"></script>
    <script src="javascript/content-loader.js"></script>
  </body>
</html>
```

### Step 4: Update Navigation

Edit `content/global.json` to add your page to the navigation array:

```json
"navigation": [
  { "label": "Home", "href": "index.html" },
  { "label": "Services", "href": "services.html" },
  { "label": "My New Page", "href": "my-new-page.html" }
]
```

### Step 5: Test Locally

```bash
# Start local server
python -m http.server 8000

# Visit http://localhost:8000/my-new-page.html
```

---

## 3. Editing Global Data

Global data (header, navigation, footer) is stored in `content/global.json` and affects all pages.

### What to Edit in global.json

```json
{
  "company": {
    "name": "Company name",
    "tagline": "Company tagline",
    "address": "Physical address",
    "phone": "+1 (555) 123-4567",
    "email": "contact@company.com"
  },
  "homepage": "index.html",
  "navigation": [
    { "label": "Link text", "href": "page.html" }
  ],
  "footer": {
    "text": "Footer company description",
    "links": [ /* Quick links */ ],
    "contact": [ /* Contact methods */ ]
  }
}
```

**Changes here automatically appear on all pages!**

---

## 4. Block Template Format

Each block template follows this pattern:

```json
{
  "_comment": "Description of what this block does and when to use it.",
  "type": "block-type-name",
  "property1": "value",
  "property2": [ { "nested": "object" } ]
}
```

### Using Block Templates

1. Open the relevant block template from `blocks/`
2. Copy the entire JSON object
3. Paste into your page's `blocks` array
4. Edit the content (text, images, links, etc.)
5. Keep the `type` and `_comment` unchanged

### Example: Adding a Hero Block

```json
{
  "blocks": [
    {
      "_comment": "Hero block introduces the page with headline, supporting text, optional buttons, and an optional image.",
      "type": "hero-block",
      "title": "Your Title Here",
      "subtitle": "Your subtitle here",
      "buttons": [
        { "label": "Button Text", "href": "page.html" }
      ],
      "image": "content/assets/placeholders/images/hero/example.jpg"
    }
  ]
}
```

---

## 5. Content Asset Organization

Place images and assets in the `content/assets/` directory following this structure:

```
content/assets/
├── placeholders/
│   ├── icons/           # Icon files or SVGs
│   ├── images/
│   │   ├── hero/        # Hero block images
│   │   ├── services/    # Service grid images
│   │   ├── projects/    # Project showcase images
│   │   ├── process/     # Process step visuals
│   │   └── testimonials/ # Client photos
│   └── videos/          # Video placeholders
```

### Image Path Format in JSON

```json
"image": "content/assets/placeholders/images/hero/example.jpg"
```

---

## 6. Best Practices

### Writing Good Content

- **Headings:** 3-10 words, clear value proposition
- **Subtitles:** 1-2 sentences, supporting context
- **Body text:** Short paragraphs, easy scanning
- **Buttons:** 1-3 words, action-oriented ("View Services" not "Click here")

### Image Guidelines

| Block Type | Recommended Format | Aspect Ratio | Notes |
|---|---|---|---|
| Hero Block | Landscape | 16:9 or wider | Showcases completed work |
| Services Grid | Square | 1:1 | Icon or image |
| Split Content | Vertical/Square | 4:5 or 1:1 | Stands out against text |
| Image Banner | Landscape | 16:9 or wider | Full-width, bold impact |
| Testimonials | Square avatar | 1:1 | Client profile photo |

### Responsive Layout Patterns

See `guides/RESPONSIVE_DESIGN_PATTERNS.md` for detailed guidance on how blocks adapt to different screen sizes.

---

## 7. Guides Included

### guides/PAGE_STRUCTURE_GUIDE.md

Recommended block sequences for common page types:
- Landing/Home Page
- Services Page
- About/Company Page
- Portfolio/Project Page
- Contact Page
- Case Study Page
- Blog Landing Page

Use these patterns to structure your pages for maximum effectiveness.

### guides/CSS_LAYOUT_UTILITIES.md

Reference for all reusable utility classes available in `css/utilities.css`:
- Text utilities (alignment, styling)
- Spacing utilities (margin, padding)
- Layout utilities (flexbox, grid)
- Sizing utilities
- Button styles
- Shadow and border effects

### guides/RESPONSIVE_DESIGN_PATTERNS.md

Detailed guide to responsive design:
- Breakpoints and media queries
- Block-specific responsive behavior
- Typography scaling
- Testing checklist
- Performance optimization
- Accessibility guidelines

---

## 8. Common Editing Tasks

### Change a Button Label

Find the button in the block's JSON and edit the `label`:

```json
"buttons": [
  { "label": "New Button Text", "href": "page.html" }
]
```

### Add Another Service Card

Add another item to the `services-grid` block's `items` array:

```json
{
  "type": "services-grid",
  "items": [
    { "title": "Service 1", "description": "..." },
    { "title": "Service 2", "description": "..." },
    { "title": "New Service", "description": "..." }
  ]
}
```

### Change Navigation Links

Edit `content/global.json` navigation array:

```json
"navigation": [
  { "label": "Home", "href": "index.html" },
  { "label": "My New Page", "href": "new-page.html" },
  { "label": "Contact", "href": "contact.html" }
]
```

### Update Company Information

Edit `content/global.json` company object:

```json
"company": {
  "name": "New Name",
  "phone": "+1 (555) 987-6543",
  "email": "newemail@company.com"
}
```

Changes automatically appear on all pages!

---

## 9. JSON Format Checklist

When editing JSON files, remember:

- ✅ Every property needs a value (string in quotes, array, or object)
- ✅ Commas separate properties/items
- ✅ NO trailing commas after last item
- ✅ Curly braces `{}` for objects
- ✅ Square brackets `[]` for arrays
- ✅ String values in double quotes `"text"`

### Common JSON Mistakes

❌ Trailing comma: `"property": "value",` ← delete the comma at end
❌ Missing quotes: `"label": text` ← should be `"label": "text"`
❌ Single quotes: `'text'` ← should be `"text"`
❌ Unescaped quotes: `"text with "quotes""` ← should be `"text with \"quotes\""`

**Tip:** Use an online JSON validator if you get errors: https://jsonlint.com

---

## 10. Testing Your Changes

### Local Testing

```bash
# Start a local server
python -m http.server 8000

# Visit your page
# http://localhost:8000/page-name.html

# Test on mobile
# Visit from your phone on the same network
# Replace localhost with your computer's IP
```

### What to Check

- [ ] Page loads without errors
- [ ] All text appears correctly
- [ ] Images load
- [ ] Navigation links work
- [ ] Buttons link to correct pages
- [ ] Mobile view looks good
- [ ] Desktop view looks good
- [ ] Footer displays company info correctly

---

## 11. Troubleshooting

### Page shows "Unable to load page content"

**Check:**
- JSON file name matches `data-content-source` in HTML
- JSON file is in `content/` directory
- JSON syntax is valid (use jsonlint.com)
- Check browser console for error messages

### Images not loading

**Check:**
- Image path is correct (case-sensitive on some systems)
- Image file exists at that path
- Path format: `content/assets/category/filename.jpg`

### Navigation doesn't appear

**Check:**
- `global.json` exists in `content/` directory
- Navigation array has items
- Label and href properties are correct

### Layout looks different on mobile

**Check:**
- This is normal! See `guides/RESPONSIVE_DESIGN_PATTERNS.md`
- Blocks intentionally stack vertically on mobile
- Images scale to fit screen width

---

## 12. File Locations Summary

| Content | Location | Edit When |
|---|---|---|
| Page content blocks | `content/[page-name].json` | Creating new pages or editing block content |
| Global data | `content/global.json` | Changing company info, navigation, or footer |
| Page HTML | `[page-name].html` | Adding new pages (copy existing pattern) |
| Block templates | `docs/templates/blocks/` | Reference only (don't edit) |
| Page templates | `docs/templates/pages/` | Reference only (don't edit) |
| Shared templates | `docs/templates/shared/` | Reference only (don't edit) |
| CSS styles | `css/` | Adding new block styles (advanced) |
| JavaScript | `javascript/` | Adding new block renderers (advanced) |
| Images/Assets | `content/assets/placeholders/images/` | Upload your images here |

---

## 13. Next Steps

1. **Review** `guides/PAGE_STRUCTURE_GUIDE.md` for page layout patterns
2. **Choose** a page type (landing, services, about, etc.)
3. **Copy** `pages/page-template.json` to `content/my-page.json`
4. **Edit** the blocks following the templates
5. **Test** locally on `http://localhost:8000/my-page.html`
6. **Deploy** to GitHub Pages (no build step needed!)

---

## 14. Need Help?

### Refer to Documentation

- **Page layouts?** → `guides/PAGE_STRUCTURE_GUIDE.md`
- **CSS utilities?** → `guides/CSS_LAYOUT_UTILITIES.md`
- **Responsive design?** → `guides/RESPONSIVE_DESIGN_PATTERNS.md`
- **Block specifications?** → `docs/BLOCK_LIBRARY_SPEC.md`
- **Architecture overview?** → `docs/SITE_ARCHITECTURE_SPEC.md`

### Common Questions

**Q: Can I add a new block type?**
A: Possibly. See `docs/BLOCK_LIBRARY_SPEC.md` for expansion rules. Advanced work.

**Q: How many blocks can a page have?**
A: Unlimited! Blocks render in order they appear.

**Q: Can I delete the footer-block?**
A: Not recommended. Footer provides navigation and company info on every page.

**Q: How do I publish this?**
A: Deploy to GitHub Pages. No build step required. See `README.md` for instructions.

---

## File Manifest

This directory contains:

✅ **3 Missing Template Files** (Now created!)
- `image-banner-template.json` - Full-width image sections
- `footer-block-template.json` - Global footer reference
- `global-template.json` - Shared data template

✅ **7 Block Templates**
- `hero-block-template.json`
- `services-grid-template.json`
- `split-content-template.json`
- `process-block-template.json`
- `testimonial-block-template.json`
- `contact-cta-template.json`

✅ **1 Page Template**
- `pages/page-template.json`

✅ **1 Shared Template**
- `shared/global-template.json`

✅ **4 Guide Documents**
- `guides/PAGE_STRUCTURE_GUIDE.md`
- `guides/CSS_LAYOUT_UTILITIES.md`
- `guides/RESPONSIVE_DESIGN_PATTERNS.md`
- `README.md` (this file)

---

**Last Updated:** May 19, 2026  
**Template Status:** Complete with all 8 block types + guides  
**Ready for:** Content creation and page expansion
