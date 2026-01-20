/**
 * content-loader.js
 * 
 * Loads JSON content files and binds data to the page using declarative 
 * data-* attributes on HTML elements.
 */

let contentCache = {};

async function loadContent() {
  try {
    // Load all content files
    const contentFiles = ['site.json', 'hero.json', 'services.json', 'projects.json', 'contact.json'];
    
    for (const file of contentFiles) {
      const response = await fetch(`content/${file}`);
      if (!response.ok) continue;
      const data = await response.json();
      const key = file.replace('.json', '');
      contentCache[key] = data;
    }
    
    bindContent();
  } catch (error) {
    console.error('Error loading content:', error);
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    if (key === '*') return current;
    return current?.[key];
  }, obj);
}

function bindContent() {
  // Bind single values using data-content
  document.querySelectorAll('[data-content]').forEach(element => {
    const path = element.getAttribute('data-content');
    const value = getNestedValue(contentCache, path);
    if (value) {
      element.textContent = value;
    }
  });
  
  // Bind single values using data-text (for inside repeats)
  document.querySelectorAll('[data-text]').forEach(element => {
    const path = element.getAttribute('data-text');
    const value = getNestedValue(contentCache, path);
    if (value) {
      element.textContent = value;
    }
  });
  
  // Bind href with prefix
  document.querySelectorAll('[data-href-prefix][data-content]').forEach(element => {
    const prefix = element.getAttribute('data-href-prefix');
    const path = element.getAttribute('data-content');
    const value = getNestedValue(contentCache, path);
    if (value) {
      element.href = prefix + value;
      element.textContent = value;
    }
  });
  
  // Handle repeats (data-repeat for items in arrays)
  document.querySelectorAll('[data-repeat]').forEach(container => {
    const path = container.getAttribute('data-repeat');
    const items = getNestedValue(contentCache, path);
    
    if (!Array.isArray(items) || items.length === 0) {
      // If array is empty or doesn't exist, keep placeholder content
      return;
    }
    
    const template = container.innerHTML;
    container.innerHTML = '';
    
    items.forEach((item, index) => {
      const itemHtml = template.replace(/\*[a-zA-Z]*/g, (match) => {
        const dataAttr = match;
        const itemPath = dataAttr.replace('*', '');
        return getNestedValue(item, itemPath) || '';
      });
      
      const div = document.createElement('div');
      div.innerHTML = itemHtml;
      
      // Bind data-text within each repeated item
      div.querySelectorAll('[data-text]').forEach(el => {
        const dataPath = el.getAttribute('data-text');
        const pathPart = dataPath.replace(new RegExp(`.*\\.\\*\\.`), '');
        const value = getNestedValue(item, pathPart);
        if (value) {
          el.textContent = value;
        }
      });
      
      container.appendChild(div.firstElementChild);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadContent);
} else {
  loadContent();
}
