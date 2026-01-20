/**
 * theme.js
 * 
 * Manages theme switching and persistence via localStorage.
 */

const THEME_STORAGE_KEY = 'evolved-living-theme';
const DEFAULT_THEME = 'main-theme';

function getAvailableThemes() {
  return ['main-theme'];
}

function getCurrentTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
}

function setTheme(themeName) {
  const themes = getAvailableThemes();
  if (!themes.includes(themeName)) return;
  
  const link = document.querySelector('link[data-theme]');
  if (link) {
    link.href = `css/${themeName}.css`;
  }
  
  localStorage.setItem(THEME_STORAGE_KEY, themeName);
}

function initializeTheme() {
  const link = document.querySelector('link[data-theme]');
  if (!link) return;
  
  const savedTheme = getCurrentTheme();
  link.href = `css/${savedTheme}.css`;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}
