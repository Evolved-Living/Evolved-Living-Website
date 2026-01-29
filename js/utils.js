/* Minimal utilities used by progressive enhancement scripts */
function fetchJSON(path){
  return fetch(path).then(function(r){ if(!r.ok) throw new Error('Fetch failed'); return r.json() });
}
