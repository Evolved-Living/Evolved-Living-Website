(function (global) {
  // Content loader orchestrates page initialization, JSON loading, and render flow.
  const { fetchJson, getPageDataSource, selectRoot, selectLoadingScreen } = global.AppUtils;
  const { renderPage } = global.ContentRenderer;

  function setLoading(isLoading) {
    const loader = selectLoadingScreen();
    if (!loader) {
      return;
    }
    loader.style.display = isLoading ? 'flex' : 'none';
  }

  // Load global and page content JSON in parallel, then render the page.
  async function loadAllContent() {
    setLoading(true);

    const pageSource = getPageDataSource();
    const globalUrl = 'content/global.json';

    try {
      const [globalData, pageData] = await Promise.all([
        fetchJson(globalUrl),
        fetchJson(pageSource),
      ]);

      renderPage(globalData, pageData);
    } catch (error) {
      const root = selectRoot();
      root.innerHTML = '';
      const errorMessage = document.createElement('div');
      errorMessage.className = 'content-block';
      errorMessage.innerHTML = `
        <div class="content-block__inner">
          <h2>Unable to load page content</h2>
          <p>${error.message}</p>
        </div>
      `;
      root.appendChild(errorMessage);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Initialize the page loading flow after DOM readiness.
  function initialize() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadAllContent);
    } else {
      loadAllContent();
    }
  }

  global.ContentLoader = {
    initialize,
  };

  initialize();
})(window);
