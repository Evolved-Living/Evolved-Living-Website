(function (global) {
  // Utility helpers for DOM rendering and JSON loading.
  // These functions are intentionally small and explicit to support
  // the static content block architecture without external dependencies.
  const AppUtils = {
    // Create an element with optional attributes, properties, content, and children.
    createElement(tag, options = {}, children = []) {
      const element = document.createElement(tag);

      if (options.className) {
        element.className = options.className;
      }

      if (options.text) {
        element.textContent = options.text;
      }

      if (options.html) {
        element.innerHTML = options.html;
      }

      if (options.attrs) {
        Object.entries(options.attrs).forEach(([name, value]) => {
          if (value === false || value == null) {
            return;
          }
          element.setAttribute(name, value === true ? name : String(value));
        });
      }

      if (options.props) {
        Object.entries(options.props).forEach(([name, value]) => {
          element[name] = value;
        });
      }

      if (Array.isArray(children)) {
        children.forEach(child => {
          if (child == null) {
            return;
          }
          if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
          } else {
            element.appendChild(child);
          }
        });
      }

      return element;
    },

    // Fetch a JSON file using a cache-safe request.
    // Throws a descriptive error when the fetch fails.
    async fetchJson(url) {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Unable to load JSON from ${url} (${response.status})`);
      }
      return response.json();
    },

    // Determine the page-specific JSON source defined by body[data-content-source].
    // Falls back to content/index.json when the attribute is missing.
    getPageDataSource() {
      const body = document.body;
      const source = body.dataset.contentSource || 'content/index.json';
      return source.trim();
    },

    // Get the root content insertion point in the page.
    selectRoot() {
      const root = document.querySelector('#site-root');
      if (!root) {
        throw new Error('Missing #site-root element in HTML.');
      }
      return root;
    },

    selectLoadingScreen() {
      return document.querySelector('#loading-screen');
    },

    // Build a standard anchor-based button for block actions.
    buildButton(button) {
      return AppUtils.createElement('a', {
        className: 'btn',
        attrs: {
          href: button.href || '#',
          target: button.target || '_self',
          rel: button.target === '_blank' ? 'noopener noreferrer' : undefined,
        },
        text: button.label || 'Learn more',
      });
    },

    // Build a simple vertical list from structured navigation or footer data.
    buildList(items, className) {
      const list = AppUtils.createElement('ul', { className });
      items.forEach(item => {
        const listItem = AppUtils.createElement('li', {}, [
          item.href
            ? AppUtils.createElement('a', { attrs: { href: item.href }, text: item.label })
            : AppUtils.createElement('span', { text: item.label }),
        ]);
        list.appendChild(listItem);
      });
      return list;
    },
  };

  global.AppUtils = AppUtils;
})(window);
