const state={screen:'home',detail:null,playerX:260,playerY:0,vel:0,jumpV:0,onGround:true,keys:{},stageX:0};
const world=document.getElementById('world'),home=document.getElementById('home'),detail=document.getElementById('detail'),about=document.getElementById('about'),lab=document.getElementById('lab'),menu=document.getElementById('menu'),stage=document.getElementById('worldStage'),player=document.getElementById('player');
const order=Object.keys(PROJECTS);const positions={tokyo:850,yuyu:1900,youyan:3050,tianyou:4200,tencent:5400,archive:6600};
let last=performance.now(),rafId=null;

function resetInput(){state.keys={};state.vel=0;state.jumpV=0;}
function hideAll(){[home,world,detail,about,lab].forEach(x=>x.classList.add('hidden'));menu.classList.add('hidden')}
function showHome(){hideAll();home.classList.remove('hidden');state.screen='home';resetInput()}
function showWorld(){hideAll();world.classList.remove('hidden');state.screen='world';state.detail=null;last=performance.now();renderPlayer();cancelAnimationFrame(rafId);rafId=requestAnimationFrame(loop)}
function makeWorld(){
  const box=document.getElementById('worldItems');box.innerHTML='';
  order.forEach((k,i)=>{
    const p=PROJECTS[k],el=document.createElement('button');el.className='world-sign';el.style.left=positions[k]+'px';
    el.innerHTML=`<img class="cover" src="${p.cover}" alt=""><div class="num">PROJECT ${String(i+1).padStart(2,'0')}</div><h3>${p.title}</h3><p>${p.cn} · ${p.desc}</p>`;
    el.addEventListener('click',()=>openProject(k));box.appendChild(el);
  });
  const a=document.createElement('button');a.className='world-sign info-sign';a.style.left='7450px';a.innerHTML='<div class="num">INFO</div><h3>ABOUT ECHO</h3><p>Profile / Experience</p>';a.addEventListener('click',()=>showAbout());box.appendChild(a);
  const l=document.createElement('button');l.className='world-sign info-sign';l.style.left='7900px';l.innerHTML='<div class="num">LAB</div><h3>LAB</h3><p>Godot / AI / Experiments</p>';l.addEventListener('click',()=>showLab());box.appendChild(l);
}
function openProject(k){
  state.detail=k;hideAll();detail.classList.remove('hidden');
  const p=PROJECTS[k];
  document.getElementById('detailIndex').textContent='PROJECT '+String(order.indexOf(k)+1).padStart(2,'0')+' / '+String(order.length).padStart(2,'0');
  document.getElementById('detailEyebrow').textContent=p.cn+' · '+p.desc;
  document.getElementById('detailTitle').textContent=p.title;
  document.getElementById('detailDesc').textContent=p.longDesc||'Selected work from the current archive. More complete case-study context can be added as the portfolio develops.';
  const g=document.getElementById('detailGallery');g.innerHTML='';
  p.images.forEach(src=>{const im=document.createElement('img');im.src=src;im.loading='lazy';im.alt=p.title;im.onload=()=>{if(im.naturalHeight>im.naturalWidth*1.35) im.classList.add('tall');};g.appendChild(im)})
}
function showAbout(){hideAll();about.classList.remove('hidden');state.screen='about';resetInput()}
function showLab(){hideAll();lab.classList.remove('hidden');state.screen='lab';resetInput()}
function nearest(){let best=null,dist=Infinity;for(const k of order){const d=Math.abs(state.playerX-positions[k]);if(d<dist){dist=d;best=k}}return dist<260?best:null}
function renderPlayer(){player.style.transform=`translate(${state.playerX}px,${-state.playerY}px)`}
function doJump(){if(state.screen==='world'&&state.onGround){state.onGround=false;state.jumpV=650}}

// Navigation
document.getElementById('enterBtn').onclick=showWorld;
document.getElementById('homeBtn').onclick=showHome;
document.getElementById('worldBtn').onclick=showWorld;
document.getElementById('backWorld').onclick=showWorld;
document.querySelectorAll('.genericBack').forEach(b=>b.onclick=showWorld);
document.getElementById('menuBtn').onclick=()=>menu.classList.remove('hidden');
document.getElementById('menuClose').onclick=()=>menu.classList.add('hidden');
document.querySelectorAll('[data-menu]').forEach(b=>b.onclick=()=>{menu.classList.add('hidden');({home:showHome,world:showWorld,about:showAbout,lab:showLab}[b.dataset.menu])()});

// Keyboard controls: work immediately when WORLD opens; no click-to-focus required.
window.addEventListener('keydown',e=>{
  if(['ArrowLeft','ArrowRight','Space','KeyA','KeyD','KeyE'].includes(e.code))e.preventDefault();
  if(state.screen!=='world')return;
  if(e.code==='Space'){doJump();return}
  if(e.code==='KeyE'){const k=nearest();if(k)openProject(k);return}
  state.keys[e.code]=true;
  if(e.code==='Escape')showHome();
});
window.addEventListener('keyup',e=>{state.keys[e.code]=false});
window.addEventListener('blur',resetInput);

// Mobile controls: pointer events + touch-action:none make the first press reliable.
document.querySelectorAll('.mobile-controls button').forEach(b=>{
  const k=b.dataset.key;
  const down=e=>{e.preventDefault();if(state.screen!=='world')return;if(k==='left')state.keys.ArrowLeft=true;if(k==='right')state.keys.ArrowRight=true;if(k==='jump')doJump();if(k==='enter'){const n=nearest();if(n)openProject(n)}};
  const up=e=>{e.preventDefault();if(k==='left')state.keys.ArrowLeft=false;if(k==='right')state.keys.ArrowRight=false};
  b.addEventListener('pointerdown',down,{passive:false});b.addEventListener('pointerup',up,{passive:false});b.addEventListener('pointercancel',up,{passive:false});b.addEventListener('pointerleave',up,{passive:false});
});

function loop(now){
  if(state.screen!=='world')return;
  const dt=Math.min(.033,(now-last)/1000);last=now;
  const left=state.keys.ArrowLeft||state.keys.KeyA,right=state.keys.ArrowRight||state.keys.KeyD;
  if(left)state.vel-=900*dt;if(right)state.vel+=900*dt;if(!left&&!right)state.vel*=Math.pow(.0008,dt);
  state.vel=Math.max(-420,Math.min(420,state.vel));state.playerX+=state.vel*dt;
  state.playerX=Math.max(120,Math.min(7900,state.playerX));
  if(!state.onGround){state.jumpV-=1700*dt;state.playerY+=state.jumpV*dt;if(state.playerY<=0){state.playerY=0;state.onGround=true;state.jumpV=0}}
  const camera=Math.max(0,Math.min(7200,state.playerX-360));stage.style.transform=`translateX(${-camera}px)`;renderPlayer();
  rafId=requestAnimationFrame(loop);
}

makeWorld();showHome();
