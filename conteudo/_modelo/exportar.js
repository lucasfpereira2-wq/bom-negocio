// Uso: node conteudo/_modelo/exportar.js conteudo/05-carrossel-...   (gera slide-N.png, previa.png e o PDF)
const {chromium}=require('playwright');const path=require('path');const fs=require('fs');const {execFileSync}=require('child_process');
(async()=>{const dir=path.resolve(process.argv[2]);const html=path.join(dir,'fonte','slides.html');
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
await p.goto('file://'+html,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
const n=await p.$$eval('.s',e=>e.length);
for(let i=1;i<=n;i++) await (await p.$('#s'+i)).screenshot({path:path.join(dir,`slide-${i}.png`)});
await b.close();
const pdf=path.join(dir,path.basename(dir).replace(/^\d+-/,'')+'.pdf');
execFileSync('python3',[path.join(__dirname,'montar.py'),dir,String(n),pdf],{stdio:'inherit'});})();
