const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
await p.goto('file://'+__dirname+'/slides.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
const n=await p.$$eval('.s',e=>e.length);
for(let i=1;i<=n;i++){await (await p.$('#s'+i)).screenshot({path:`../slide-${i}.png`});}
await b.close();})();
