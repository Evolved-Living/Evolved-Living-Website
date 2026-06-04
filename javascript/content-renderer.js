(function (global) {
  // Content renderer builds page sections from JSON using explicit block renderers.
  // Each block type is mapped to a dedicated renderer function via the block registry.
  const { createElement, buildButton, buildList } = global.AppUtils;

  function renderSection(blockType, innerClass, sectionClass) {
    const section = createElement('section', {
      className: `content-block ${blockType} ${sectionClass || ''}`.trim(),
    });

    const inner = createElement('div', {
      className: `content-block__inner ${innerClass || ''}`.trim(),
    });

    section.appendChild(inner);
    return { section, inner };
  }

  /* ===============================================
     HEADER AND STRUCTURE
     =============================================== */

  // Render the global header using shared navigation and company data.
  function renderHeader(globalData) {
    const navItems = Array.isArray(globalData.navigation) ? globalData.navigation : [];
    const brand = globalData.company?.name || 'Evolved Living';

    const header = createElement('header', { className: 'site-header' });
    const inner = createElement('div', { className: 'site-wrapper site-header__inner' });
    const logo = createElement('a', {
      className: 'header-logo',
      attrs: { href: globalData.homepage || 'index.html' },
      text: brand,
    });

    const nav = createElement('nav', { attrs: { 'aria-label': 'Primary navigation' } });
    const list = createElement('ul', { className: 'nav-list' });
    navItems.forEach(item => {
      const link = createElement('a', {
        className: 'nav-link',
        attrs: { href: item.href || '#' },
        text: item.label || item.title || 'Link',
      });
      const listItem = createElement('li', { className: 'nav-item' }, [link]);
      list.appendChild(listItem);
    });

    nav.appendChild(list);
    inner.append(logo, nav);
    header.appendChild(inner);
    return header;
  }

  /* ===============================================
     BLOCK RENDERERS: One per official block type
     =============================================== */

  function renderHeroBlock(block) {
    const { section, inner } = renderSection('hero-block');
    const grid = createElement('div', { className: 'hero-block__grid section-grid' });
    const copy = createElement('div', { className: 'hero-copy section-copy' });

    if (block.title) {
      copy.appendChild(createElement('h1', { className: 'hero-title section-heading', text: block.title }));
    }
    if (block.subtitle) {
      copy.appendChild(createElement('p', { text: block.subtitle }));
    }
    if (Array.isArray(block.buttons) && block.buttons.length) {
      const actions = createElement('div', { className: 'hero-actions section-actions' });
      block.buttons.forEach(button => actions.appendChild(buildButton(button)));
      copy.appendChild(actions);
    }

    grid.appendChild(copy);

    if (block.image) {
      const media = createElement('div', { className: 'hero-visual' });
      const img = createElement('img', { attrs: { src: block.image, alt: block.imageAlt || block.title || 'Hero image' } });
      media.appendChild(img);
      grid.appendChild(media);
    }

    inner.appendChild(grid);
    return section;
  }

  function renderServicesGrid(block) {
    const { section, inner } = renderSection('services-grid');
    if (block.title) {
      inner.appendChild(createElement('h2', { className: 'section-title', text: block.title }));
    }
    if (block.subtitle) {
      inner.appendChild(createElement('p', { className: 'section-subtitle', text: block.subtitle }));
    }

    const cards = createElement('div', { className: 'services-grid__items section-grid' });
    const items = Array.isArray(block.items) ? block.items : [];

    items.forEach(item => {
      const card = createElement('article', { className: 'service-card section-card' });
      if (item.icon || item.image) {
        const media = createElement('div', { className: 'service-card__media' });
        const img = createElement('img', {
          attrs: { src: item.image || item.icon, alt: item.title || 'Service image' },
        });
        media.appendChild(img);
        card.appendChild(media);
      }
      card.appendChild(createElement('h3', { className: 'service-card__title', text: item.title || 'Service' }));
      if (item.description) {
        card.appendChild(createElement('p', { className: 'service-card__description', text: item.description }));
      }
      cards.appendChild(card);
    });

    inner.appendChild(cards);
    return section;
  }

  function renderSplitContent(block) {
    const { section, inner } = renderSection('split-content section-columns');
    const left = createElement('div', { className: 'split-pane' });
    const right = createElement('div', { className: 'split-pane' });

    if (block.left) {
      if (block.left.title) {
        left.appendChild(createElement('h2', { className: 'split-pane__title section-heading', text: block.left.title }));
      }
      if (block.left.text) {
        left.appendChild(createElement('p', { className: 'split-pane__text', text: block.left.text }));
      }
      if (Array.isArray(block.left.buttons)) {
        const actions = createElement('div', { className: 'section-actions' });
        block.left.buttons.forEach(button => actions.appendChild(buildButton(button)));
        left.appendChild(actions);
      }
    }

    if (block.right) {
      if (block.right.image) {
        const img = createElement('img', {
          attrs: { src: block.right.image, alt: block.right.imageAlt || block.right.title || 'Split content image' },
        });
        right.appendChild(img);
      }
      if (block.right.title) {
        right.appendChild(createElement('h3', { className: 'split-pane__title', text: block.right.title }));
      }
      if (block.right.text) {
        right.appendChild(createElement('p', { className: 'split-pane__text', text: block.right.text }));
      }
    }

    inner.append(left, right);
    return section;
  }

  function renderImageBanner(block) {
    const { section, inner } = renderSection('image-banner section-banner');
    if (block.image) {
      section.style.backgroundImage = `url('${block.image}')`;
    }
    const overlay = createElement('div', { className: 'image-banner__content' });
    if (block.title) {
      overlay.appendChild(createElement('h2', { className: 'image-banner__title section-heading', text: block.title }));
    }
    if (block.subtitle) {
      overlay.appendChild(createElement('p', { className: 'image-banner__subtitle', text: block.subtitle }));
    }
    section.appendChild(overlay);
    return section;
  }

  function renderProcessBlock(block) {
    const { section, inner } = renderSection('process-block');
    if (block.title) {
      inner.appendChild(createElement('h2', { className: 'section-title', text: block.title }));
    }
    const steps = createElement('div', { className: 'process-block__steps section-grid' });
    const items = Array.isArray(block.steps) ? block.steps : [];

    items.forEach((step, index) => {
      const card = createElement('article', { className: 'process-step section-card' });
      card.appendChild(createElement('div', { className: 'process-step__index', text: String(index + 1) }));
      if (step.title) {
        card.appendChild(createElement('h3', { className: 'process-step__title', text: step.title }));
      }
      if (step.description) {
        card.appendChild(createElement('p', { className: 'process-step__description', text: step.description }));
      }
      steps.appendChild(card);
    });

    inner.appendChild(steps);
    return section;
  }

  function renderTestimonialBlock(block) {
    const { section, inner } = renderSection('testimonial-block');
    if (block.title) {
      inner.appendChild(createElement('h2', { className: 'section-title', text: block.title }));
    }
    const items = createElement('div', { className: 'testimonial-block__items section-grid' });
    const testimonials = Array.isArray(block.items) ? block.items : [];

    testimonials.forEach(item => {
      const card = createElement('article', { className: 'testimonial-card section-card' });
      if (item.quote) {
        card.appendChild(createElement('p', { className: 'testimonial-quote', text: item.quote }));
      }
      const metaText = [item.name, item.project].filter(Boolean).join(' · ');
      if (metaText) {
        card.appendChild(createElement('p', { className: 'testimonial-meta', text: metaText }));
      }
      items.appendChild(card);
    });

    inner.appendChild(items);
    return section;
  }

  function renderContactCta(block) {
    const { section, inner } = renderSection('contact-cta', 'section-panel');
    if (block.title) {
      inner.appendChild(createElement('h2', { className: 'contact-cta__title section-heading', text: block.title }));
    }
    if (block.text) {
      inner.appendChild(createElement('p', { className: 'contact-cta__text', text: block.text }));
    }
    if (Array.isArray(block.buttons) && block.buttons.length) {
      const actions = createElement('div', { className: 'contact-cta__actions' });
      block.buttons.forEach(button => actions.appendChild(buildButton(button)));
      inner.appendChild(actions);
    }
    return section;
  }

  function renderFooterBlock(block, globalData) {
    const { section, inner } = renderSection('footer-block', 'footer-block__inner');
    const companyName = globalData.company?.name || 'Evolved Living';
    const footerLinks = Array.isArray(globalData.footer?.links) ? globalData.footer.links : [];
    const contactItems = Array.isArray(globalData.footer?.contact) ? globalData.footer.contact : [];

    const groupA = createElement('div', { className: 'footer-block__group' });
    groupA.appendChild(createElement('div', { className: 'footer-brand', text: companyName }));
    if (globalData.footer?.text) {
      groupA.appendChild(createElement('p', { text: globalData.footer.text }));
    }

    const groupB = createElement('div', { className: 'footer-block__group' });
    if (footerLinks.length) {
      groupB.appendChild(createElement('h3', { text: 'Quick links' }));
      groupB.appendChild(buildList(footerLinks, 'footer-block__list'));
    }
    if (contactItems.length) {
      groupB.appendChild(createElement('h3', { text: 'Contact' }));
      const contactList = createElement('ul', { className: 'footer-block__list' });
      contactItems.forEach(item => {
        const listItem = createElement('li');
        if (item.href) {
          listItem.appendChild(createElement('a', { className: 'footer-block__link', attrs: { href: item.href }, text: item.label }));
        } else {
          listItem.textContent = item.label;
        }
        contactList.appendChild(listItem);
      });
      groupB.appendChild(contactList);
    }

    inner.append(groupA, groupB);
    section.appendChild(inner);
    return section;
  }

  /* ===============================================
     BLOCK REGISTRY AND RENDERING
     =============================================== */

  // Explicit registry mapping block type strings to renderer functions.
  // This supports predictable block rendering without runtime discovery.
  const blockRegistry = {
    'hero-block': renderHeroBlock,
    'services-grid': renderServicesGrid,
    'split-content': renderSplitContent,
    'image-banner': renderImageBanner,
    'process-block': renderProcessBlock,
    'testimonial-block': renderTestimonialBlock,
    'contact-cta': renderContactCta,
    'footer-block': renderFooterBlock,
  };

  function renderBlock(block, globalData) {
    if (!block || typeof block.type !== 'string') {
      return null;
    }

    const renderer = blockRegistry[block.type];
    if (!renderer) {
      const fallback = createElement('section', {
        className: 'content-block content-block--unsupported',
      });
      fallback.appendChild(createElement('div', { className: 'content-block__inner' }, [
        createElement('p', { text: `Unsupported block type: ${block.type}` }),
      ]));
      return fallback;
    }

    return renderer(block, globalData);
  }

  /* ===============================================
     PAGE RENDERING
     =============================================== */

  // Render the complete page by first inserting global header content,
  // then rendering page-specific blocks in order into the main wrapper.
  function renderPage(globalData, pageData) {
    const root = document.querySelector('#site-root');
    if (!root) {
      throw new Error('Missing #site-root element in HTML.');
    }

    root.innerHTML = '';
    root.appendChild(renderHeader(globalData));

    const main = createElement('main', { className: 'main-content page-shell' });
    const blocks = Array.isArray(pageData.blocks) ? pageData.blocks : [];

    blocks.forEach(block => {
      const node = renderBlock(block, globalData);
      if (node) {
        main.appendChild(node);
      }
    });

    root.appendChild(main);
  }

  global.ContentRenderer = {
    renderPage,
  };
})(window);
