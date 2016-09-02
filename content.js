function dronizar(el){
  el.innerHTML += " desde el drone de Infobae";
}

for(var a of document.querySelectorAll('a[data-pb-field="headlines.basic"]')){
  dronizar(a);
}

for(var h1 of document.querySelectorAll('.article-header h1')){
  dronizar(h1);
}

for(var h4 of document.querySelectorAll('.result-item h4')){
  dronizar(h4);
}
