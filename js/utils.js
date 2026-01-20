/**
 * utils.js
 * 
 * Shared utility functions for the website.
 */

function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function addClass(selector, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add(className);
  });
}

function removeClass(selector, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.remove(className);
  });
}

function toggleClass(selector, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.toggle(className);
  });
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function setQueryParam(name, value) {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
}
