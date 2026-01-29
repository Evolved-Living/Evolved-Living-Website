/* theme.js — simple theme toggle that flips a data-theme attribute. Uses variables in theme-main.css.
   This is optional enhancement and does not hide content. */
(function(){
  if(!document.documentElement) return;
  var toggle = function(){
    var current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  };

  // Expose a simple switch for developers: call window.toggleTheme()
  window.toggleTheme = toggle;
})();
