let currentPage='lobby',cameraStream=null,facingMode='user',capturedImageData=null,currentFilter='none',currentFrame='none',currentLayout='4-grid',selectedStickers=[],isCapturing=false,galleryPhotos=[],currentModalIndex=-1,capturedFrames=[];
    const MAX_STICKERS=8;
    const frameNames={'none':'None','pink':'Pink','purple':'Dreamy','dots':'Dots','gradient':'Ombre','classic':'Classic','hearts':'Hearts','sparkle':'Sparkle','polaroid':'Polaroid','filmstrip':'Film','lace':'Lace','blueberry':'Blueberry'};
    const filterNames={'none':'Normal','soft-pink':'Soft Pink','warm':'Warm','cool':'Cool','vintage':'Vintage','bw':'B&W','rose':'Rose','lavender':'Lavender','sunset':'Sunset','ocean':'Ocean','peach':'Peach','dreamy':'Dreamy'};
    const filterCSS={'none':'none','soft-pink':'sepia(0.3) saturate(1.5) hue-rotate(330deg) brightness(1.1)','warm':'sepia(0.4) saturate(1.3) brightness(1.05)','cool':'saturate(0.8) hue-rotate(180deg) brightness(1.1)','vintage':'sepia(0.6) contrast(0.9) brightness(0.95)','bw':'grayscale(1) contrast(1.1)','rose':'sepia(0.2) saturate(1.8) hue-rotate(340deg) brightness(1.05)','lavender':'saturate(0.9) hue-rotate(240deg) brightness(1.08) contrast(0.95)','sunset':'sepia(0.35) saturate(1.6) hue-rotate(350deg) brightness(1.05)','ocean':'saturate(1.2) hue-rotate(200deg) brightness(0.95) contrast(1.1)','peach':'sepia(0.2) saturate(1.4) hue-rotate(10deg) brightness(1.08)','dreamy':'saturate(1.3) brightness(1.1) contrast(0.9) blur(0.3px)'};
    const stickerSlots=[{css:{bottom:'16px',right:'16px'},cx:(w,s)=>w-s-20,cy:(h,s)=>h-s-20},{css:{bottom:'16px',left:'16px'},cx:(w,s)=>20,cy:(h,s)=>h-s-20},{css:{top:'50px',right:'16px'},cx:(w,s)=>w-s-20,cy:(h,s)=>60},{css:{top:'50px',left:'16px'},cx:(w,s)=>20,cy:(h,s)=>60},{css:{bottom:'100px',right:'16px'},cx:(w,s)=>w-s-20,cy:(h,s)=>h-s-100},{css:{bottom:'100px',left:'16px'},cx:(w,s)=>20,cy:(h,s)=>h-s-100},{css:{bottom:'16px',left:'50%',transform:'translateX(-50%)'},cx:(w,s)=>w/2-s/2,cy:(h,s)=>h-s-20},{css:{top:'50px',left:'50%',transform:'translateX(-50%)'},cx:(w,s)=>w/2-s/2,cy:(h,s)=>60}];
    const stickerSVGs={bunny:'<svg viewBox="0 0 100 100"><ellipse cx="50" cy="65" rx="20" ry="22" fill="#FFD1DC"/><ellipse cx="40" cy="30" rx="8" ry="18" fill="#FFD1DC"/><ellipse cx="60" cy="30" rx="8" ry="18" fill="#FFD1DC"/><ellipse cx="40" cy="30" rx="5" ry="14" fill="#FFB6C1"/><ellipse cx="60" cy="30" rx="5" ry="14" fill="#FFB6C1"/><circle cx="43" cy="58" r="3" fill="#5C2D3E"/><circle cx="57" cy="58" r="3" fill="#5C2D3E"/><ellipse cx="50" cy="65" rx="2.5" ry="1.5" fill="#FF8FAB"/></svg>',bear:'<svg viewBox="0 0 100 100"><circle cx="25" cy="25" r="12" fill="#D2A679"/><circle cx="75" cy="25" r="12" fill="#D2A679"/><circle cx="25" cy="25" r="8" fill="#E8C9A0"/><circle cx="75" cy="25" r="8" fill="#E8C9A0"/><circle cx="50" cy="55" r="28" fill="#D2A679"/><ellipse cx="50" cy="62" rx="16" ry="12" fill="#E8C9A0"/><circle cx="40" cy="48" r="3.5" fill="#5C2D3E"/><circle cx="60" cy="48" r="3.5" fill="#5C2D3E"/></svg>',heart:'<svg viewBox="0 0 100 100"><path d="M50 85 C20 60 10 40 10 28 C10 15 20 8 32 8 C40 8 47 13 50 20 C53 13 60 8 68 8 C80 8 90 15 90 28 C90 40 80 60 50 85Z" fill="#FF8FAB"/></svg>',star:'<svg viewBox="0 0 100 100"><polygon points="50,5 61,35 95,35 68,57 79,90 50,70 21,90 32,57 5,35 39,35" fill="#FFD700"/></svg>',cloud:'<svg viewBox="0 0 100 70"><ellipse cx="50" cy="50" rx="40" ry="18" fill="#F3E8FF"/><ellipse cx="35" cy="35" rx="22" ry="18" fill="#F3E8FF"/><ellipse cx="65" cy="32" rx="25" ry="20" fill="#F3E8FF"/></svg>',ribbon:'<svg viewBox="0 0 100 100"><circle cx="50" cy="40" r="14" fill="#FF8FAB"/><path d="M36,40 L16,22 L32,48 Z" fill="#FF8FAB"/><path d="M64,40 L84,22 L68,48 Z" fill="#FF8FAB"/><path d="M36,40 L22,62 L34,48 Z" fill="#E8607A"/><path d="M64,40 L78,62 L66,48 Z" fill="#E8607A"/><circle cx="50" cy="40" r="7" fill="#FFD1DC"/></svg>',flower:'<svg viewBox="0 0 100 100"><circle cx="50" cy="30" r="14" fill="#FFB6C1"/><circle cx="30" cy="50" r="14" fill="#FFD1DC"/><circle cx="70" cy="50" r="14" fill="#FFD1DC"/><circle cx="38" cy="68" r="14" fill="#FFB6C1"/><circle cx="62" cy="68" r="14" fill="#FFB6C1"/><circle cx="50" cy="50" r="10" fill="#FFD700"/></svg>',crown:'<svg viewBox="0 0 100 100"><polygon points="10,70 20,30 35,55 50,20 65,55 80,30 90,70" fill="#FFD700"/><rect x="10" y="70" width="80" height="15" rx="3" fill="#FFD700"/><circle cx="20" cy="30" r="5" fill="#FF8FAB"/><circle cx="50" cy="20" r="5" fill="#D8B4FE"/><circle cx="80" cy="30" r="5" fill="#87CEEB"/></svg>',moon:'<svg viewBox="0 0 100 100"><circle cx="45" cy="50" r="35" fill="#FFD700"/><circle cx="60" cy="40" r="28" fill="#1a1a2e"/></svg>',candy:'<svg viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="22" ry="15" fill="#FF8FAB"/><path d="M28,50 Q10,40 15,30 Q20,45 28,50" fill="#FF8FAB"/><path d="M72,50 Q90,40 85,30 Q80,45 72,50" fill="#FF8FAB"/><line x1="35" y1="45" x2="65" y2="45" stroke="white" stroke-width="3" stroke-linecap="round"/><line x1="35" y1="55" x2="65" y2="55" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>',cherry:'<svg viewBox="0 0 100 100"><circle cx="35" cy="70" r="16" fill="#E8607A"/><circle cx="65" cy="70" r="16" fill="#E8607A"/><path d="M35,55 Q40,20 50,15" fill="none" stroke="#4CAF50" stroke-width="3"/><path d="M65,55 Q60,20 50,15" fill="none" stroke="#4CAF50" stroke-width="3"/><ellipse cx="55" cy="15" rx="12" ry="6" fill="#4CAF50"/></svg>',rainbow:'<svg viewBox="0 0 100 70"><path d="M10,60 A40,40 0 0,1 90,60" fill="none" stroke="#FF8FAB" stroke-width="6"/><path d="M18,60 A32,32 0 0,1 82,60" fill="none" stroke="#FFD700" stroke-width="6"/><path d="M26,60 A24,24 0 0,1 74,60" fill="none" stroke="#90EE90" stroke-width="6"/><path d="M34,60 A16,16 0 0,1 66,60" fill="none" stroke="#87CEEB" stroke-width="6"/><path d="M42,60 A8,8 0 0,1 58,60" fill="none" stroke="#D8B4FE" stroke-width="6"/></svg>'};

    function navigateTo(p){document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));
        document.getElementById('page-'+p).classList.add('active');
        document.querySelectorAll('.sidebar-menu li').forEach(l=>l.classList.toggle('active',l.dataset.page===p));
        document.querySelectorAll('.top-nav-links a').forEach(a=>a.classList.toggle('active',a.dataset.page===p));
        currentPage=p;if(p==='photobooth')startCamera();else stopCamera();
        if(p==='result'&&capturedImageData)renderResultPhoto();if(p==='gallery')renderGallery();}
    async function startCamera(){try{const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:facingMode,width:{ideal:640},height:{ideal:480}},audio:false});
        cameraStream=s;document.getElementById('cameraVideo').srcObject=s;
        applyFilterToVideo();}catch(e){showToast('Kamera tidak tersedia.');}}
    function stopCamera(){if(cameraStream){cameraStream.getTracks().forEach(t=>t.stop());cameraStream=null;}}
    function toggleCamera(){facingMode=facingMode==='user'?'environment':'user';stopCamera();startCamera();}
    function applyFilterToVideo(){document.getElementById('cameraVideo').style.filter=filterCSS[currentFilter]||'none';}
    function updateFramePreview(){const o=document.getElementById('framePreviewOverlay'),l=document.getElementById('frameLabel');
        o.className='frame-preview-overlay';if(currentFrame!=='none'){o.classList.add('frame-'+currentFrame);
        l.textContent=frameNames[currentFrame];l.classList.add('show');}else l.classList.remove('show');}
    function updateStickerPreview(){const o=document.getElementById('stickersOverlay'),c=document.getElementById('stickerCounter'),b=document.getElementById('btnClearStickers');
        o.innerHTML='';selectedStickers.forEach((s,i)=>{if(i>=stickerSlots.length)return;
        const d=document.createElement('div');d.className='sticker-item-preview';
        d.innerHTML=stickerSVGs[s];Object.assign(d.style,stickerSlots[i].css);o.appendChild(d);});
        if(selectedStickers.length>0){c.textContent=selectedStickers.length+' stiker';
        c.classList.add('show');b.classList.add('show');}else{c.classList.remove('show');b.classList.remove('show');}}
    function clearAllStickers(){selectedStickers=[];document.querySelectorAll('#panel-stickers .tool-item').forEach(i=>i.classList.remove('selected'));
        updateStickerPreview();showToast('Semua stiker dihapus');}
    function switchToolbarTab(t){document.querySelectorAll('.toolbar-tab').forEach(e=>e.classList.toggle('active',e.dataset.tab===t));
        document.querySelectorAll('.toolbar-panel').forEach(p=>p.classList.toggle('active',p.id==='panel-'+t));}
    function selectFrame(f,el){currentFrame=f;document.querySelectorAll('#panel-frames .tool-item').forEach(i=>i.classList.remove('selected'));
        el.classList.add('selected');updateFramePreview();showToast('Frame "'+frameNames[f]+'" diterapkan');}
    function selectSticker(s,el){const i=selectedStickers.indexOf(s);if(i>-1){selectedStickers.splice(i,1);el.classList.remove('selected');
        showToast('Stiker dihapus');}else{if(selectedStickers.length>=MAX_STICKERS){showToast('Maks 8 stiker!');return;}selectedStickers.push(s);
        el.classList.add('selected');showToast('Stiker ditambahkan ('+selectedStickers.length+'/'+MAX_STICKERS+')');}updateStickerPreview();}
    function selectFilter(f,el){currentFilter=f;document.querySelectorAll('#panel-filters .filter-item').forEach(i=>i.classList.remove('selected'));
        el.classList.add('selected');applyFilterToVideo();showToast('Filter "'+filterNames[f]+'" diterapkan');}
    function selectLayout(l,el){currentLayout=l;document.querySelectorAll('#panel-layouts .tool-item').forEach(i=>i.classList.remove('selected'));
        el.classList.add('selected');let n=l;if(l==='4-grid')n='4 Kotak (2x2)';if(l==='4-vertical')n='4 Rak (1x4)';showToast('Layout '+n+' dipilih');}

    async function startCapture(){if(isCapturing)return;isCapturing=true;capturedFrames=[];
        const v=document.getElementById('cameraVideo'),lc=parseInt(currentLayout);
        for(let i=0;i<lc;i++){await showCountdown(lc>1?'Pose '+(i+1)+'/'+lc:'');
            const tc=document.createElement('canvas'),tx=tc.getContext('2d');tc.width=v.videoWidth||640;tc.height=v.videoHeight||480;tx.filter=filterCSS[currentFilter]||'none';
            if(facingMode==='user'){tx.translate(tc.width,0);tx.scale(-1,1);}tx.drawImage(v,0,0,tc.width,tc.height);
            tx.setTransform(1,0,0,1,0,0);tx.filter='none';capturedFrames.push(tc.toDataURL('image/png'));
            triggerFlash();if(i<lc-1)await new Promise(r=>setTimeout(r,1000));}assembleCollage();}
        function showCountdown(txt){
        return new Promise(r=>{
            const o=document.getElementById('countdownOverlay'),
                  n=document.getElementById('countdownNumber');
            o.classList.add('show');
            let c=3;
            n.textContent=txt? txt+' - '+c : c;
            
            const t=setInterval(()=>{
                c--;
                if(c>0){
                    n.textContent=txt? txt+' - '+c : c;

                }else{
                    clearInterval(t);
                    o.classList.remove('show');
                    r();
                }
            },1000);
        });
    }
    function assembleCollage(){const cv=document.getElementById('captureCanvas'),ctx=cv.getContext('2d'),W=640,H=480;cv.width=W;cv.height=H;
        ctx.fillStyle='#FFF0F5';ctx.fillRect(0,0,W,H);let cols=1,rows=1;if(currentLayout==='2'){cols=2;rows=1;}else if(currentLayout==='3')
            {cols=1;rows=3;}else if(currentLayout==='4-grid'){cols=2;rows=2;}else if(currentLayout==='4-vertical')
                {cols=1;rows=4;}else if(currentLayout==='5'){cols=2;rows=3;}else if(currentLayout==='6')
                    {cols=2;rows=3;}const cW=W/cols,cH=H/rows;let il=0;capturedFrames.forEach((du,idx)=>{const img=new Image();
                        img.onload=function(){let x=0,y=0;if(currentLayout==='5'&&idx===4){x=0;y=cH*2;ctx.drawImage(img,x,y,W,cH);}
                        else{x=(idx%cols)*cW;y=Math.floor(idx/cols)*cH;const ri=img.width/img.height,rc=cW/cH;
                            let sx=0,sy=0,sw=img.width,sh=img.height;if(ri>rc){sw=img.height*rc;sx=(img.width-sw)/2;}else{sh=img.width/rc;sy=(img.height-sh)/2;}
                            ctx.drawImage(img,sx,sy,sw,sh,x,y,cW,cH);}ctx.strokeStyle='white';ctx.lineWidth=4;ctx.strokeRect(x,y,(currentLayout==='5'&&idx===4?W:cW),cH);
                            il++;if(il===capturedFrames.length){drawFrameOverlay(ctx,W,H);
                                selectedStickers.forEach((s,i)=>{if(i>=stickerSlots.length)return;
                                    const sz=75,sx=stickerSlots[i].cx(W,sz),sy=stickerSlots[i].cy(H,sz);
                                    drawStickerOnCanvas(ctx,sx,sy,sz,s);});capturedImageData=cv.toDataURL('image/png');
                                    document.getElementById('btnNext').classList.add('show');updateResultInfo();
                                    saveToGallery();showToast('Foto kolase siap!');isCapturing=false;}};img.src=du;});}

    function triggerFlash(){const f=document.getElementById('flashEffect');
        f.classList.add('flash');setTimeout(()=>f.classList.remove('flash'),500);}

    function drawFrameOverlay(ctx,w,h){const bw=12;switch(currentFrame){case'pink':ctx.strokeStyle='#FF8FAB';
        ctx.lineWidth=bw;ctx.strokeRect(bw/2,bw/2,w-bw,h-bw);break;case'purple':ctx.strokeStyle='#D8B4FE';
        ctx.lineWidth=bw;roundRect(ctx,bw/2,bw/2,w-bw,h-bw,20);ctx.stroke();
        break;case'dots':ctx.fillStyle='#FF8FAB';for(let x=0;x<w;x+=16){ctx.beginPath();
            ctx.arc(x,6,3,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(x,h-6,3,0,Math.PI*2);
            ctx.fill();}for(let y=0;y<h;y+=16){ctx.beginPath();
                ctx.arc(6,y,3,0,Math.PI*2);ctx.fill();ctx.beginPath();
                ctx.arc(w-6,y,3,0,Math.PI*2);ctx.fill();}break;case'gradient':const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,'#FF8FAB');
                g.addColorStop(1,'#D8B4FE');
                ctx.strokeStyle=g;ctx.lineWidth=bw;
                ctx.strokeRect(bw/2,bw/2,w-bw,h-bw);break;case'classic':ctx.strokeStyle='#FF8FAB';
                ctx.lineWidth=3;ctx.strokeRect(4,4,w-8,h-8);ctx.strokeRect(10,10,w-20,h-20);break;case'hearts':ctx.strokeStyle='#FF8FAB';
                ctx.lineWidth=bw;ctx.strokeRect(bw/2,bw/2,w-bw,h-bw);
                ctx.fillStyle='#FF8FAB';drawMiniHeart(ctx,16,16,10);drawMiniHeart(ctx,w-26,16,10);
                drawMiniHeart(ctx,16,h-26,10);drawMiniHeart(ctx,w-26,h-26,10);break;case'sparkle':ctx.strokeStyle='#FFD700';
                ctx.lineWidth=bw;ctx.strokeRect(bw/2,bw/2,w-bw,h-bw);ctx.fillStyle='#FFD700';
                drawMiniStar(ctx,20,20,8);drawMiniStar(ctx,w-28,20,8);drawMiniStar(ctx,20,h-28,8);drawMiniStar(ctx,w-28,h-28,8);
                break;case'polaroid':ctx.fillStyle='white';ctx.fillRect(0,0,w,bw);ctx.fillRect(0,0,bw,h);
                ctx.fillRect(w-bw,0,bw,h);ctx.fillRect(0,h-45,w,45);break;case'filmstrip':ctx.fillStyle='#333';
                ctx.fillRect(0,0,18,h);ctx.fillRect(w-18,0,18,h);ctx.fillStyle='#666';for(let y=10;y<h;y+=30){ctx.fillRect(4,y,10,16);
                ctx.fillRect(w-14,y,10,16);}break;case'lace':ctx.strokeStyle='#FF8FAB';ctx.lineWidth=4;ctx.setLineDash([8,6]);
                ctx.strokeRect(8,8,w-16,h-16);ctx.setLineDash([]);
                ctx.fillStyle='rgba(255,143,171,0.4)';for(let x=12;x<w-12;x+=20){ctx.beginPath();
                ctx.arc(x,8,2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(x,h-8,2,0,Math.PI*2);
                ctx.fill();}for(let y=12;y<h-12;y+=20){ctx.beginPath();ctx.arc(8,y,2,0,Math.PI*2);ctx.fill();
                ctx.beginPath();ctx.arc(w-8,y,2,0,Math.PI*2);ctx.fill();}break;}}

    function drawMiniHeart(ctx,x,y,s){ctx.beginPath();ctx.moveTo(x,y+s*.3);
        ctx.bezierCurveTo(x,y,x-s*.5,y,x-s*.5,y+s*.3);ctx.bezierCurveTo(x-s*.5,y+s*.6,x,y+s*.8,x,y+s);
        ctx.bezierCurveTo(x,y+s*.8,x+s*.5,y+s*.6,x+s*.5,y+s*.3);ctx.bezierCurveTo(x+s*.5,y,x,y,x,y+s*.3);ctx.fill();}
    function drawMiniStar(ctx,cx,cy,r){ctx.beginPath();
        for(let i=0;i<5;i++){const oA=(i*72-90)*Math.PI/180,iA=((i*72)+36-90)*Math.PI/180;if(i===0)ctx.moveTo(cx+r*Math.cos(oA),cy+r*Math.sin(oA));
            else ctx.lineTo(cx+r*Math.cos(oA),cy+r*Math.sin(oA));
            ctx.lineTo(cx+r*.4*Math.cos(iA),cy+r*.4*Math.sin(iA));}ctx.closePath();ctx.fill();}
    function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);
        ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
        ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
        ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);
        ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}

    function drawStickerOnCanvas(ctx,x,y,s,sticker){ctx.save();switch(sticker){case'bunny':ctx.fillStyle='#FFD1DC';
        ctx.beginPath();ctx.ellipse(x+s/2,y+s*.65,s*.35,s*.35,0,0,Math.PI*2);ctx.fill();ctx.beginPath();
        ctx.ellipse(x+s*.3,y+s*.15,s*.12,s*.25,-.15,0,Math.PI*2);ctx.fill();ctx.beginPath();
        ctx.ellipse(x+s*.7,y+s*.15,s*.12,s*.25,.15,0,Math.PI*2);ctx.fill();ctx.fillStyle='#FFB6C1';
        ctx.beginPath();ctx.ellipse(x+s*.3,y+s*.15,s*.07,s*.17,-.15,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.ellipse(x+s*.7,y+s*.15,s*.07,s*.17,.15,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#5C2D3E';ctx.beginPath();ctx.arc(x+s*.38,y+s*.55,s*.05,0,Math.PI*2);
        ctx.fill();ctx.beginPath();ctx.arc(x+s*.62,y+s*.55,s*.05,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#FF8FAB';ctx.beginPath();ctx.ellipse(x+s/2,y+s*.63,s*.04,s*.03,0,0,Math.PI*2);
        ctx.fill();break;case'bear':ctx.fillStyle='#D2A679';ctx.beginPath();ctx.arc(x+s*.2,y+s*.2,s*.15,0,Math.PI*2);
        ctx.fill();ctx.beginPath();ctx.arc(x+s*.8,y+s*.2,s*.15,0,Math.PI*2);ctx.fill();ctx.fillStyle='#E8C9A0';
        ctx.beginPath();ctx.arc(x+s*.2,y+s*.2,s*.09,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.arc(x+s*.8,y+s*.2,s*.09,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#D2A679';ctx.beginPath();ctx.arc(x+s/2,y+s*.55,s*.35,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#E8C9A0';ctx.beginPath();ctx.ellipse(x+s/2,y+s*.62,s*.18,s*.13,0,0,Math.PI*2);
        ctx.fill();ctx.fillStyle='#5C2D3E';ctx.beginPath();ctx.arc(x+s*.38,y+s*.48,s*.045,0,Math.PI*2);
        ctx.fill();ctx.beginPath();ctx.arc(x+s*.62,y+s*.48,s*.045,0,Math.PI*2);
        ctx.fill();break;case'heart':ctx.fillStyle='#FF8FAB';ctx.beginPath();
        ctx.moveTo(x+s/2,y+s*.85);ctx.bezierCurveTo(x+s*.1,y+s*.6,x,y+s*.3,x+s*.15,y+s*.15);
        ctx.bezierCurveTo(x+s*.3,y,x+s*.45,y+s*.1,x+s/2,y+s*.25);
        ctx.bezierCurveTo(x+s*.55,y+s*.1,x+s*.7,y,x+s*.85,y+s*.15);
        ctx.bezierCurveTo(x+s,y+s*.3,x+s*.9,y+s*.6,x+s/2,y+s*.85);ctx.fill();break;case'star':ctx.fillStyle='#FFD700';
        ctx.beginPath();const cx2=x+s/2,cy2=y+s/2;for(let i=0;i<5;i++){const oA=(i*72-90)*Math.PI/180,iA=((i*72)+36-90)*Math.PI/180;if(i===0)ctx.moveTo(cx2+s*.45*Math.cos(oA),cy2+s*.45*Math.sin(oA));
            else ctx.lineTo(cx2+s*.45*Math.cos(oA),cy2+s*.45*Math.sin(oA));
        ctx.lineTo(cx2+s*.18*Math.cos(iA),cy2+s*.18*Math.sin(iA));}ctx.closePath();
        ctx.fill();break;case'cloud':ctx.fillStyle='#F3E8FF';ctx.beginPath();
        ctx.ellipse(x+s/2,y+s*.7,s*.4,s*.2,0,0,Math.PI*2);ctx.fill();ctx.beginPath();
        ctx.ellipse(x+s*.35,y+s*.5,s*.22,s*.2,0,0,Math.PI*2);ctx.fill();ctx.beginPath();
        ctx.ellipse(x+s*.65,y+s*.45,s*.25,s*.22,0,0,Math.PI*2);
        ctx.fill();break;case'ribbon':const cx3=x+s/2,cy3=y+s/2,r=s/2;ctx.fillStyle='#FF8FAB';
        ctx.beginPath();ctx.arc(cx3,cy3,r*.3,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(cx3-r*.2,cy3);
        ctx.lineTo(cx3-r,cy3-r*.7);ctx.lineTo(cx3-r*.4,cy3+r*.1);ctx.closePath();ctx.fill();ctx.beginPath();
        ctx.moveTo(cx3+r*.2,cy3);ctx.lineTo(cx3+r,cy3-r*.7);ctx.lineTo(cx3+r*.4,cy3+r*.1);ctx.closePath();
        ctx.fill();ctx.fillStyle='#E8607A';ctx.beginPath();ctx.moveTo(cx3-r*.2,cy3);ctx.lineTo(cx3-r*.8,cy3+r*.7);
        ctx.lineTo(cx3-r*.3,cy3+r*.1);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(cx3+r*.2,cy3);
        ctx.lineTo(cx3+r*.8,cy3+r*.7);ctx.lineTo(cx3+r*.3,cy3+r*.1);ctx.closePath();ctx.fill();
        ctx.fillStyle='#FFD1DC';ctx.beginPath();ctx.arc(cx3,cy3,r*.15,0,Math.PI*2);
        ctx.fill();break;case'flower':ctx.fillStyle='#FFB6C1';ctx.beginPath();
        ctx.arc(x+s/2,y+s*.3,s*.14,0,Math.PI*2);ctx.fill();ctx.fillStyle='#FFD1DC';
        ctx.beginPath();ctx.arc(x+s*.3,y+s*.5,s*.14,0,Math.PI*2);ctx.fill();ctx.beginPath();
        ctx.arc(x+s*.7,y+s*.5,s*.14,0,Math.PI*2);ctx.fill();ctx.fillStyle='#FFB6C1';
        ctx.beginPath();ctx.arc(x+s*.38,y+s*.68,s*.14,0,Math.PI*2);ctx.fill();ctx.beginPath();
        ctx.arc(x+s*.62,y+s*.68,s*.14,0,Math.PI*2);ctx.fill();ctx.fillStyle='#FFD700';
        ctx.beginPath();ctx.arc(x+s/2,y+s*.5,s*.1,0,Math.PI*2);ctx.fill();break;case'crown':ctx.fillStyle='#FFD700';
        ctx.beginPath();ctx.moveTo(x+s*.1,y+s*.7);ctx.lineTo(x+s*.2,y+s*.3);ctx.lineTo(x+s*.35,y+s*.55);
        ctx.lineTo(x+s*.5,y+s*.2);ctx.lineTo(x+s*.65,y+s*.55);ctx.lineTo(x+s*.8,y+s*.3);ctx.lineTo(x+s*.9,y+s*.7);
        ctx.closePath();ctx.fill();ctx.fillRect(x+s*.1,y+s*.7,s*.8,s*.15);break;case'moon':ctx.fillStyle='#FFD700';
        ctx.beginPath();ctx.arc(x+s*.45,y+s/2,s*.35,0,Math.PI*2);ctx.fill();ctx.fillStyle='#1a1a2e';ctx.beginPath();
        ctx.arc(x+s*.6,y+s*.4,s*.28,0,Math.PI*2);ctx.fill();break;case'candy':ctx.fillStyle='#FF8FAB';ctx.beginPath();
        ctx.ellipse(x+s/2,y+s/2,s*.22,s*.15,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(x+s*.28,y+s/2);
        ctx.quadraticCurveTo(x+s*.1,y+s*.4,x+s*.15,y+s*.3);ctx.quadraticCurveTo(x+s*.2,y+s*.45,x+s*.28,y+s/2);
        ctx.fill();ctx.beginPath();ctx.moveTo(x+s*.72,y+s/2);ctx.quadraticCurveTo(x+s*.9,y+s*.4,x+s*.85,y+s*.3);
        ctx.quadraticCurveTo(x+s*.8,y+s*.45,x+s*.72,y+s/2);ctx.fill();
        ctx.strokeStyle='white';ctx.lineWidth=Math.max(1,s*.03);
        ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x+s*.35,y+s*.42);
        ctx.lineTo(x+s*.65,y+s*.42);ctx.stroke();ctx.beginPath();
        ctx.moveTo(x+s*.35,y+s*.55);ctx.lineTo(x+s*.65,y+s*.55);
        ctx.stroke();break;case'cherry':ctx.fillStyle='#E8607A';
        ctx.beginPath();ctx.arc(x+s*.35,y+s*.7,s*.16,0,Math.PI*2);
        ctx.fill();ctx.beginPath();ctx.arc(x+s*.65,y+s*.7,s*.16,0,Math.PI*2);
        ctx.fill();ctx.strokeStyle='#4CAF50';ctx.lineWidth=Math.max(1,s*.03);ctx.lineCap='round';
        ctx.beginPath();ctx.moveTo(x+s*.35,y+s*.55);ctx.quadraticCurveTo(x+s*.4,y+s*.2,x+s*.5,y+s*.15);ctx.stroke();
        ctx.beginPath();ctx.moveTo(x+s*.65,y+s*.55);ctx.quadraticCurveTo(x+s*.6,y+s*.2,x+s*.5,y+s*.15);ctx.stroke();
        ctx.fillStyle='#4CAF50';ctx.beginPath();ctx.ellipse(x+s*.55,y+s*.15,s*.12,s*.06,0,0,Math.PI*2);
        ctx.fill();break;case'rainbow':const rcx=x+s/2,rcy=y+s*.85,rr=s*.4;ctx.lineWidth=Math.max(1,s*.05);
        ctx.strokeStyle='#FF8FAB';ctx.beginPath();ctx.arc(rcx,rcy,rr,Math.PI,0);ctx.stroke();ctx.strokeStyle='#FFD700';
        ctx.beginPath();ctx.arc(rcx,rcy,rr*.8,Math.PI,0);ctx.stroke();ctx.strokeStyle='#90EE90';ctx.beginPath();
        ctx.arc(rcx,rcy,rr*.6,Math.PI,0);ctx.stroke();break;}ctx.restore();}

    function renderResultPhoto(){if(!capturedImageData)return;
        const cv=document.getElementById('resultCanvas'),ctx=cv.getContext('2d'),img=new Image();img.onload=
        function(){cv.width=img.width;cv.height=img.height;ctx.drawImage(img,0,0);};img.src=capturedImageData;}
    function updateResultInfo(){const n=new Date(),ms=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],ds=n.getDate()+' '+ms[n.getMonth()]+' '+n.getFullYear();
        let h=n.getHours();const a=h>=12?'PM':'AM';h=h%12||12;const ts=h+':'+String(n.getMinutes()).padStart(2,'0')+' '+a;document.getElementById('resultDate').textContent=ds;
        document.getElementById('resultTime').textContent=ts;
        document.getElementById('resultFilter').textContent=filterNames[currentFilter];
        document.getElementById('resultFrame').textContent=frameNames[currentFrame];
        document.getElementById('resultLayout').textContent=currentLayout;}
    function downloadPhoto(){if(!capturedImageData){showToast('Belum ada foto');return;}
    const a=document.createElement('a');
    a.download='pastel-snap-'+Date.now()+'.png';a.href=capturedImageData;a.click();
    showToast('Foto berhasil diunduh!');}
    function retakePhoto(){capturedImageData=null;capturedFrames=[];
        document.getElementById('btnNext').classList.remove('show');
        navigateTo('photobooth');showToast('Silakan ambil foto kembali');}

    function saveToGallery(){if(!capturedImageData)return;const n=new Date(),ms=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
        ds=n.getDate()+' '+ms[n.getMonth()]+' '+n.getFullYear();let h=n.getHours();
        const a=h>=12?'PM':'AM';h=h%12||12;const ts=h+':'+String(n.getMinutes()).padStart(2,'0')+' '+a;galleryPhotos.unshift({title:'Pastel Snap #'+(galleryPhotos.length+1),
            date:ds,time:ts,filter:filterNames[currentFilter],frame:frameNames[currentFrame],
            imageData:capturedImageData,id:Date.now(),isNew:true,layout:currentLayout});}

    function renderGallery(){const grid=document.getElementById('galleryGrid');grid.innerHTML='';
        const all=[...galleryPhotos];document.getElementById('photoCount').textContent='Total '+all.length+' foto';
        document.getElementById('galleryTotalInfo').textContent='Total '+all.length+' foto';
        if(all.length===0){grid.innerHTML='<div class="gallery-empty"><i class="fas fa-camera-retro"></i><h3>Belum Ada Foto</h3><p>Yuk, ambil foto pertamamu di Photobooth!</p></div>';
            window._galleryPhotos=[];return;}all.forEach((photo,index)=>{const card=document.createElement('div');card.className='gallery-card';card.onclick=()=>openModal(index,all);const badge=photo.isNew?'<div class="new-badge">Baru!</div>':'';
                card.innerHTML='<div class="gallery-card-img">'+badge+'<canvas id="gc'+index+'" width="320" height="240"></canvas><div class="gallery-card-overlay"><i class="fas fa-heart" onclick="event.stopPropagation();toggleLike(this)"></i><i class="fas fa-expand" onclick="event.stopPropagation();openModal('+index+',null)"></i></div></div><div class="gallery-card-info"><div><div class="card-title">'+photo.title+'</div><div class="card-date">'+photo.date+'</div></div><div class="card-actions"><i class="fas fa-heart" onclick="event.stopPropagation();toggleLike(this)"></i><i class="fas fa-download" onclick="event.stopPropagation();downloadGalleryPhoto('+index+')"></i></div></div>';grid.appendChild(card);const canvas=document.getElementById('gc'+index),ctx=canvas.getContext('2d');const img=new Image();img.onload=function(){ctx.drawImage(img,0,0,canvas.width,canvas.height);};img.src=photo.imageData;});window._galleryPhotos=all;}

    function openModal(i,ps){const a=ps||window._galleryPhotos||[];if(!a[i])return;currentModalIndex=i;
        const p=a[i];document.getElementById('modalTitle').textContent=p.title;
        document.getElementById('modalDate').textContent=p.date;document.getElementById('modalTime').textContent=p.time;
        document.getElementById('modalFilter').textContent=p.filter;const cv=document.getElementById('modalCanvas'),ctx=cv.getContext('2d');
        cv.width=480;cv.height=360;const img=new Image();img.onload=function(){ctx.drawImage(img,0,0,cv.width,cv.height);};
        img.src=p.imageData;document.getElementById('modalOverlay').classList.add('show');}

    function closeModal(){document.getElementById('modalOverlay').classList.remove('show');currentModalIndex=-1;}
    function downloadModalPhoto(){const a=window._galleryPhotos||[];
        if(currentModalIndex>=0&&a[currentModalIndex]){const cv=document.getElementById('modalCanvas'),l=document.createElement('a');
            l.download=a[currentModalIndex].title+'.png';l.href=cv.toDataURL('image/png');
            l.click();showToast('Foto berhasil diunduh!');}}
    function deletePhoto(){if(currentModalIndex>=0){const a=window._galleryPhotos||[],p=a[currentModalIndex];
        galleryPhotos=galleryPhotos.filter(x=>x.id!==p.id);closeModal();renderGallery();showToast('Foto berhasil dihapus');}}
    function showToast(m){const t=document.getElementById('toast');
        document.getElementById('toastMessage').textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}
    function toggleLike(el){if(el.classList.contains('liked')){el.style.color='';
        el.classList.remove('liked');}else{el.style.color='#E8607A';
            el.classList.add('liked');el.style.animation='heartbeat .5s ease';setTimeout(()=>el.style.animation='',500);}}
    function downloadGalleryPhoto(i){const a=window._galleryPhotos||[];
        if(a[i]&&a[i].imageData){const l=document.createElement('a');
            l.download=a[i].title+'.png';l.href=a[i].imageData;l.click();
            showToast('Foto berhasil diunduh!');}else showToast('Buka foto untuk mengunduh');}

    function downloadSelectedPhotos(){
        const all = window._galleryPhotos || [];
        if(all.length === 0){
            showToast('Belum ada foto untuk diunduh');
            return;
        }
        all.forEach(function(photo, index){
            setTimeout(function(){
                const link = document.createElement('a');
                link.download = photo.title + '.png';
                link.href = photo.imageData;
                link.click();
            }, index * 500);
        });
        showToast('Mengunduh ' + all.length + ' foto...');
    }

    // Background particles
    (function(){
        const container=document.getElementById('bgParticles');
        const colors=['#FF8FAB','#FFD1DC','#D8B4FE','#F3E8FF','#FFD700'];
        for(let i=0;i<20;i++){
            const p=document.createElement('div');
            p.className='particle';
            const size=Math.random()*8+3;
            p.style.width=size+'px';
            p.style.height=size+'px';
            p.style.left=Math.random()*100+'%';
            p.style.background=colors[Math.floor(Math.random()*colors.length)];
            p.style.animationDuration=(Math.random()*15+10)+'s';
            p.style.animationDelay=(Math.random()*10)+'s';
            container.appendChild(p);
        }
    })();