// Monta rodapé (monograma + paginação) e monograma grande. Incluir no fim do <body>.
(function(){
  const mono=w=>`<svg viewBox="0 0 250 300"><g fill="none" stroke="currentColor" stroke-width="${w}" stroke-linejoin="miter" stroke-miterlimit="10"><path d="M48 18H158C204 18 232 48 232 90C232 112 220 128 196 136C226 148 238 176 238 206C238 248 206 280 160 280H48V172L16 140L48 108Z"/><path d="M58 98L120 36V204L196 128"/></g></svg>`;
  const all=[...document.querySelectorAll('.s')];
  all.forEach((s,i)=>{s.id='s'+(i+1);const f=document.createElement('div');f.className='foot';
    f.innerHTML=`<div class="brand">${mono(13)}<span>Bom Negócio Imóveis</span></div><div class="pg">${i+1} / ${all.length}</div>`;s.appendChild(f);});
  document.querySelectorAll('.mono-big').forEach(e=>e.innerHTML=mono(9));
})();
