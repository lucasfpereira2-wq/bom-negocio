import sys
from PIL import Image
d,n,pdf=sys.argv[1],int(sys.argv[2]),sys.argv[3]
ims=[Image.open(f'{d}/slide-{i}.png').convert('RGB') for i in range(1,n+1)]
ims[0].save(pdf,save_all=True,append_images=ims[1:],resolution=150)
W,H,g=270,338,10;cols=4;rows=(n+cols-1)//cols
s=Image.new('RGB',(cols*W+(cols+1)*g,rows*H+(rows+1)*g),(220,220,220))
for i,im in enumerate(ims): s.paste(im.resize((W,H),Image.LANCZOS),(g+(i%cols)*(W+g),g+(i//cols)*(H+g)))
s.save(f'{d}/previa.png')
