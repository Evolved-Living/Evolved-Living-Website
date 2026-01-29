/* content-loader.js
   Progressive enhancement: load JSON and replace elements with matching data-content keys.
   Does nothing visible if JSON fetch fails — fallback HTML remains. */

(function(){
  if(!window.fetch) return; // very old browsers: skip

  function applyContent(obj, base){
    for(var key in obj){
      var val = obj[key];
      var path = base ? base + '.' + key : key;
      if(typeof val === 'object'){
        applyContent(val, path);
      } else {
        var els = document.querySelectorAll('[data-content="'+path+'"]');
        els.forEach(function(el){
          // Replace only textContent — preserve HTML structure
          el.textContent = val;
        });
      }
    }
  }

  // Load all content JSON files declared in /content/ (simple list)
  var files = ['content/site.json','content/hero.json','content/services.json','content/projects.json','content/contact.json'];

  files.forEach(function(f){
    fetchJSON(f).then(function(data){
      applyContent(data);
    }).catch(function(){
      // Silent fail: leave fallback HTML in place per rules
    });
  });
})();
