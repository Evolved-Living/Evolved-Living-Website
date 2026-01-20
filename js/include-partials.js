/**
 * include-partials.js
 * 
 * Loads partial HTML files and injects them into the page.
 * Looks for data-partial attributes and loads the corresponding partial.
 */

async function loadPartials() {
  const partialElements = document.querySelectorAll('[data-partial]');
  
  for (const element of partialElements) {
    const partialName = element.getAttribute('data-partial');
    try {
      const response = await fetch(`partials/${partialName}.html`);
      if (!response.ok) throw new Error(`Failed to load partial: ${partialName}`);
      const html = await response.text();
      element.innerHTML = html;
    } catch (error) {
      console.error(error);
      element.innerHTML = `<p>Error loading ${partialName}</p>`;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPartials);
} else {
  loadPartials();
}
