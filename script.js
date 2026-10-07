(() => {
  'use strict';

  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  const i18n = {
    'zh-CN': {homeEyebrow:'游戏视觉设计 · 游戏发行 · IP',homeLede:'为游戏构建视觉世界——从发行营销、IP叙事，到让玩家愿意走进游戏的每一个细节。',enterWorld:'进入我的世界 ↗',browseWork:'浏览作品',homeNote:'从这里开始',scrollHint:'向下探索',worldTitle:'走一走。',worldCopy:'探索这个世界。找到项目，就走进它。',gameStartTitle:'找到作品。',gameStartCopy:'操控 Echo 穿过城市，走进你发现的作品入口。',gameStart:'开始探索',worldFooter:'世界就是导航。',worldProjects:'查看全部项目 ↗',projectsTitle:'从最近开始。',projectsIntro:'最新的工作优先呈现，早期项目仍然是职业故事的一部分。',aboutTitle:'从游戏出发做设计。',aboutIntro:'拥有游戏发行、IP营销、视觉设计与团队/项目协作经验的游戏视觉设计师。',aboutStatement:'我在意玩家第一次看到一款游戏的瞬间——那张图、那种感觉，以及让他们决定走进去的理由。',labTitle:'在 Brief 之外。',labIntro:'关于交互、AI辅助工作流、游戏制作与视觉系统的实验。',labInteraction:'让作品集不只是一个页面，而成为一个可以进入的地方。',labAI:'探索 AI 在视觉开发、创意发散与生产流程中的实际应用。',labGame:'通过亲手做原型学习游戏系统、交互与开发。',menuTitle:'探索',menuWorld:'进入世界',menuProjects:'项目作品',menuAbout:'关于 Echo',menuLab:'实验室',backWorld:'返回世界',viewCase:'查看项目'},
    'zh-TW': {homeEyebrow:'遊戲視覺設計 · 遊戲發行 · IP',homeLede:'為遊戲建立視覺世界——從發行行銷、IP 敘事，到讓玩家願意走進遊戲的每一個細節。',enterWorld:'進入我的世界 ↗',browseWork:'瀏覽作品',homeNote:'從這裡開始',scrollHint:'向下探索',worldTitle:'走一走。',worldCopy:'探索這個世界。找到項目，就走進它。',gameStartTitle:'找到作品。',gameStartCopy:'操控 Echo 穿過城市，走進你發現的作品入口。',gameStart:'開始探索',worldFooter:'世界就是導航。',worldProjects:'查看全部項目 ↗',projectsTitle:'從最近開始。',projectsIntro:'最新的工作優先呈現，早期項目仍然是職業故事的一部分。',aboutTitle:'從遊戲出發做設計。',aboutIntro:'擁有遊戲發行、IP 行銷、視覺設計與團隊／項目協作經驗的遊戲視覺設計師。',aboutStatement:'我在意玩家第一次看到一款遊戲的瞬間——那張圖、那種感覺，以及讓他們決定走進去的理由。',labTitle:'在 Brief 之外。',labIntro:'關於互動、AI 輔助工作流、遊戲製作與視覺系統的實驗。',labInteraction:'讓作品集不只是一個頁面，而成為一個可以進入的地方。',labAI:'探索 AI 在視覺開發、創意發散與生產流程中的實際應用。',labGame:'透過親手做原型學習遊戲系統、互動與開發。',menuTitle:'探索',menuWorld:'進入世界',menuProjects:'項目作品',menuAbout:'關於 Echo',menuLab:'實驗室',backWorld:'返回世界',viewCase:'查看項目'},
    en: {homeEyebrow:'GAME VISUAL DESIGN · PUBLISHING · IP',homeLede:'I build visual worlds for games — from publishing campaigns and IP storytelling to the details that make a game worth entering.',enterWorld:'ENTER MY WORLD ↗',browseWork:'BROWSE WORK',homeNote:'START HERE',scrollHint:'SCROLL TO EXPLORE',worldTitle:'Take a walk.',worldCopy:'Explore the world. Walk into a project when you find one.',gameStartTitle:'Find the work.',gameStartCopy:'Move Echo through the city and step into a portal.',gameStart:'START EXPLORING',worldFooter:'The world is the navigation.',worldProjects:'VIEW ALL PROJECTS ↗',projectsTitle:'Recent first.',projectsIntro:'The newest work leads the way. Earlier projects remain part of the story.',aboutTitle:'Designing from the game outward.',aboutIntro:'A game visual designer with experience across publishing, IP campaigns, marketing and visual coordination.',aboutStatement:'I care about the moment a player sees a game for the first time — the image, the feeling, and the reason they decide to step in.',labTitle:'Outside the brief.',labIntro:'Experiments in interaction, AI-assisted workflows, game making and visual systems.',labInteraction:'Building small systems that make a portfolio feel like a place.',labAI:'Exploring practical AI workflows for visual development and ideation.',labGame:'Learning game systems and prototyping through hands-on experiments.',menuTitle:'EXPLORE',menuWorld:'ENTER WORLD',menuProjects:'PROJECTS',menuAbout:'ABOUT ECHO',menuLab:'LAB',backWorld:'BACK TO WORLD',viewCase:'VIEW CASE STUDY'},
    ko: {homeEyebrow:'게임 비주얼 디자인 · 퍼블리싱 · IP',homeLede:'게임을 위한 비주얼 세계를 만듭니다. 퍼블리싱 캠페인과 IP 스토리텔링부터 플레이어가 게임에 들어가고 싶게 만드는 디테일까지.',enterWorld:'MY WORLD 들어가기 ↗',browseWork:'작품 보기',homeNote:'여기서 시작',scrollHint:'스크롤하여 탐색',worldTitle:'천천히 걸어보세요.',worldCopy:'세계를 탐험하고 프로젝트를 발견하면 그 안으로 들어가세요.',gameStartTitle:'작품을 찾아보세요.',gameStartCopy:'Echo를 움직여 도시를 지나고 포털 안으로 들어가세요.',gameStart:'탐험 시작',worldFooter:'이 세계 자체가 내비게이션입니다.',worldProjects:'전체 프로젝트 보기 ↗',projectsTitle:'최신 작업부터.',projectsIntro:'가장 최근의 작업을 먼저 보여주고, 이전 프로젝트는 성장의 일부로 남깁니다.',aboutTitle:'게임에서 시작하는 디자인.',aboutIntro:'퍼블리싱, IP 캠페인, 마케팅 및 비주얼 코디네이션 경험을 가진 게임 비주얼 디자이너입니다.',aboutStatement:'플레이어가 게임을 처음 보는 순간을 중요하게 생각합니다. 한 장의 이미지와 감정, 그리고 들어가 보고 싶게 만드는 이유를 만듭니다.',labTitle:'Brief 밖에서.',labIntro:'인터랙션, AI 워크플로, 게임 제작과 비주얼 시스템에 대한 실험입니다.',labInteraction:'포트폴리오를 단순한 페이지가 아니라 들어갈 수 있는 장소로 만드는 작은 시스템을 연구합니다.',labAI:'비주얼 개발과 아이디어 발산을 위한 실용적인 AI 워크플로를 탐색합니다.',labGame:'직접 프로토타입을 만들며 게임 시스템과 인터랙션을 배웁니다.',menuTitle:'탐색',menuWorld:'세계로 들어가기',menuProjects:'프로젝트',menuAbout:'Echo 소개',menuLab:'LAB',backWorld:'세계로 돌아가기',viewCase:'프로젝트 보기'}
  };

  const projects = [
    {id:'youyan',num:'01',title:'Youyan',year:'2025 — NOW',company:'Youyan',type:'Visual Direction / Publishing',featured:true,summary:'Current chapter · publishing visual system and team coordination',role:'Visual direction, publishing graphics, creative review, project coordination and team collaboration.',scope:'Game publishing / marketing / visual system',images:['assets/works/youyan-legacy/.jpg','assets/works/youyan-legacy/.png']},
    {id:'tokyo',num:'02',title:'Tokyo Ghoul',year:'2024 — 25',company:'Hulai',type:'IP Publishing / Campaign',featured:true,summary:'IP publishing visuals across key visual, UA, web, store and campaign touchpoints.',role:'Publishing visual direction, key visual, campaign assets, UA creatives, official web and store materials.',scope:'IP / publishing / marketing',images:['assets/works/hula-tokyo-ghoul/01-K.jpg','assets/works/hula-tokyo-ghoul/03.jpg','assets/works/hula-tokyo-ghoul/06.jpg','assets/works/hula-tokyo-ghoul/PC--1.jpg','assets/works/hula-tokyo-ghoul/H5--1.jpg']},
    {id:'yuyu',num:'03',title:'Yu Yu Hakusho',year:'2024 — 25',company:'Hulai',type:'IP Publishing / Campaign',featured:true,summary:'A publishing visual package built around an established IP.',role:'Publishing visuals, campaign direction, key visual extensions, banners, store and pre-registration assets.',scope:'IP / publishing / marketing',images:['assets/works/hula-yuyu-hakusho/01.jpg','assets/works/hula-yuyu-hakusho/02.jpg','assets/works/hula-yuyu-hakusho/03.jpg','assets/works/hula-yuyu-hakusho/04.jpg','assets/works/hula-yuyu-hakusho/05.jpg','assets/works/hula-yuyu-hakusho/06.jpg']},
    {id:'tianyou',num:'04',title:'胖西游',year:'2024',company:'Tianyou',type:'Product / Store Visual',featured:false,summary:'Game product visual exploration and store-facing communication.',role:'Product visual design, key art adaptation and promotional materials.',scope:'Game product / store / marketing',images:['assets/works/tianyou-fat-xiyou/1920-1080-01.jpg','assets/works/tianyou-fat-xiyou/1920-1080-02.jpg','assets/works/tianyou-fat-xiyou/1920-1080-03.jpg','assets/works/tianyou-fat-xiyou/1920-1080-04.jpg','assets/works/tianyou-fat-xiyou/1920-1080-05.jpg']},
    {id:'digital',num:'05',title:'Digital Girls',year:'2022 — 23',company:'Banana Interactive',type:'Game Visual / Marketing',featured:false,summary:'Game visual and marketing assets across campaign communication.',role:'Game visual design, campaign graphics and marketing materials.',scope:'Game visual / marketing',images:['assets/works/banana-digital-girls/01.jpg','assets/works/banana-digital-girls/02.jpg','assets/works/banana-digital-girls/03.jpg','assets/works/banana-digital-girls/04.jpg','assets/works/banana-digital-girls/05.jpg']},
    {id:'start',num:'06',title:'Tencent START',year:'2020 — 22',company:'Tencent',type:'Brand / Product / H5',featured:false,summary:'Product and brand visual work across web, campaign and launch touchpoints.',role:'Visual design, web/H5 graphics, product communication and campaign materials.',scope:'Brand / product / digital',images:['assets/works/tencent-start/PC.jpg','assets/works/tencent-start/PC-.jpg','assets/works/tencent-start/13--.png']},
    {id:'early',num:'07',title:'Early Works',year:'2019 — 20',company:'Jiuzuo Culture',type:'Visual Foundation',featured:false,summary:'Early visual practice that built the foundation for later game publishing work.',role:'Graphic design, campaign visuals, illustration and production execution.',scope:'Graphic / campaign / visual production',images:['assets/works/jiuzuo-and-other/EN.jpg','assets/works/jiuzuo-and-other/KV.jpg','assets/works/jiuzuo-and-other/KK----K.png']}
  ];

  const careers = [
    ['2025 — NOW','Youyan','Visual / Publishing Lead','Publishing visual system, creative review and team coordination.'],
    ['2024 — 25','Hulai','Game Visual / Publishing','IP publishing and campaign visual work.'],
    ['2024','Tianyou','Game Visual','Product and store-facing visual communication.'],
    ['2022 — 23','Banana Interactive','Game Visual','Game marketing and campaign visual production.'],
    ['2020 — 22','Tencent START','Visual Designer','Brand, product, web/H5 and campaign visuals.'],
    ['2019 — 20','Jiuzuo Culture','Graphic Designer','Visual production and design foundation.']
  ];

  const state = {lang:localStorage.getItem('echo-lang') || 'en', started:false, x:260, y:0, vx:0, vy:0, grounded:true, facing:1, last:performance.now(), keys:new Set(), jumpLock:false, target:null};
  const gameWidth=10400, playerW=74, groundY=82, gravity=1900, maxSpeed=430, accel=2200, jump=-720;
  const platforms=[{x:820,w:260,bottom:185},{x:2350,w:330,bottom:210},{x:5100,w:300,bottom:170},{x:7600,w:360,bottom:225}];
  const projectPositions={youyan:1350,tokyo:2750,yuyu:4050,tianyou:5350,digital:6650,start:7950,early:9250};

  const els={
    home:$('#home'),world:$('#world'),gameShell:$('#gameShell'),gameWorld:$('#gameWorld'),player:$('#player'),shadow:$('#playerShadow'),hudState:$('#hudState'),hudProject:$('#hudProject'),hudHint:$('#hudHint'),intro:$('#gameIntroCard'),modal:$('#projectModal'),caseContent:$('#caseContent'),lightbox:$('#lightbox'),lightboxImage:$('#lightboxImage'),menu:$('#menuDrawer'),langMenu:$('#languageMenu'),langButton:$('#languageButton'),languageControl:$('#languageControl')
  };

  function setLanguage(lang){
    if(!i18n[lang]) return; state.lang=lang; localStorage.setItem('echo-lang',lang); document.documentElement.lang=lang; els.langButton.textContent=lang==='zh-CN'?'简':lang==='zh-TW'?'繁':lang==='ko'?'한':'EN';
    document.documentElement.dataset.lang=lang;
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18n[lang][key])el.textContent=i18n[lang][key]});
    renderProjects(); renderCareer();
    els.langMenu.classList.remove('open'); els.langButton.setAttribute('aria-expanded','false');
  }

  function renderProjects(){
    const list=$('#projectList'); list.innerHTML=projects.map(p=>`<article class="project-row" data-project-row="${p.id}"><div class="num">${p.num}</div><div><div class="featured-label">${p.featured?'FEATURED':''}</div><h3>${p.title}</h3><p>${p.type}</p></div><div class="type"><p>${p.summary}</p></div><div class="year">${p.year}</div></article>`).join('');
    $$('[data-project-row]').forEach(el=>el.addEventListener('click',()=>openProject(el.dataset.projectRow)));
  }
  function renderCareer(){
    $('#careerList').innerHTML=careers.map(c=>`<div class="career-item"><div class="year">${c[0]}</div><div><strong>${c[1]}</strong><span>${c[2]}</span><span>${c[3]}</span></div></div>`).join('');
  }

  function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})}
  function openWorld(){scrollToId('world'); if(!state.started){startGame();} }
  function startGame(){state.started=true;els.intro.classList.add('hidden');els.gameShell.focus({preventScroll:true}); requestAnimationFrame(gameLoop)}

  function setKeysForTouch(key,on){ if(on) state.keys.add(key); else state.keys.delete(key); }
  function onKeyDown(e){
    const key=e.key; if(['ArrowLeft','ArrowRight','ArrowUp',' ','Spacebar'].includes(key))e.preventDefault();
    if(key==='Escape'){closeModal();return}
    state.keys.add(key);
    if((key===' '||key==='Spacebar'||key==='ArrowUp')&&!e.repeat)state.jumpLock=false;
    if(key.toLowerCase()==='e')tryEnter();
  }
  function onKeyUp(e){state.keys.delete(e.key)}

  function jumpIfNeeded(){
    const want=state.keys.has(' ')||state.keys.has('Spacebar')||state.keys.has('ArrowUp')||state.keys.has('w')||state.keys.has('W');
    if(want&&!state.jumpLock&&state.grounded){state.vy=jump;state.grounded=false;state.jumpLock=true}
    if(!want)state.jumpLock=false;
  }

  function currentPlatform(){
    const feet=state.y;
    if(state.vy<0)return null;
    let best=null;
    for(const p of platforms){if(state.x+35>p.x&&state.x-35<p.x+p.w){const top=Math.max(0,p.bottom+24-groundY);if(feet<=top+12&&feet>=top-50)best=top}}
    return best;
  }

  function update(dt){
    if(!state.started||els.modal.classList.contains('open'))return;
    const left=state.keys.has('ArrowLeft')||state.keys.has('a')||state.keys.has('A');
    const right=state.keys.has('ArrowRight')||state.keys.has('d')||state.keys.has('D');
    const dir=(right?1:0)-(left?1:0);
    if(dir){state.vx += dir*accel*dt; state.facing=dir}
    else state.vx *= Math.pow(.0008,dt);
    state.vx=Math.max(-maxSpeed,Math.min(maxSpeed,state.vx));
    jumpIfNeeded();
    const oldY=state.y; state.vy += gravity*dt; state.y += state.vy*dt; state.x += state.vx*dt;
    const h=gameShell.clientHeight;
    const floor=0;
    if(state.y>=floor){state.y=floor;state.vy=0;state.grounded=true}
    else {const p=currentPlatform(); if(p!==null&&oldY<=p+4&&state.y>=p){state.y=p;state.vy=0;state.grounded=true}}
    state.x=Math.max(90,Math.min(gameWidth-120,state.x));
    const view=gameShell.clientWidth; const camera=Math.max(0,Math.min(gameWidth-view,state.x-view*.38));
    els.gameWorld.style.transform=`translate3d(${-camera}px,0,0)`;
    const bottom=groundY+state.y;
    els.player.style.left=`${state.x-54}px`;els.player.style.bottom=`${bottom}px`;els.player.classList.toggle('running',Math.abs(state.vx)>40&&state.grounded);els.player.classList.toggle('jumping',!state.grounded);els.player.classList.toggle('face-left',state.facing<0);
    els.shadow.style.left=`${state.x-35}px`;els.shadow.style.bottom=`${groundY-1}px`;els.shadow.style.transform=`scale(${Math.max(.55,1-Math.min(1,Math.abs(state.y)/220)*.45)})`;
    updatePortalProximity();
  }
  function updatePortalProximity(){
    let nearest=null,dist=Infinity;
    for(const p of projects){const d=Math.abs(state.x-projectPositions[p.id]);if(d<dist){dist=d;nearest=p}}
    $$('.portal').forEach(el=>el.classList.remove('near'));
    if(nearest&&dist<220){const el=$(`.portal[data-project="${nearest.id}"]`);el?.classList.add('near');els.hudState.textContent='READY';els.hudProject.textContent=nearest.title.toUpperCase();els.hudHint.textContent=state.lang==='zh-CN'?'按 E 进入':state.lang==='zh-TW'?'按 E 進入':state.lang==='ko'?'E를 눌러 들어가기':'PRESS E TO ENTER';state.target=nearest.id}else{els.hudState.textContent=Math.abs(state.vx)>30?'MOVING':'READY';els.hudProject.textContent='WORLD';els.hudHint.textContent=state.lang==='zh-CN'?'移动 / 跳跃 / 探索':state.lang==='zh-TW'?'移動 / 跳躍 / 探索':state.lang==='ko'?'이동 / 점프 / 탐험':'MOVE / JUMP / EXPLORE';state.target=null}
  }
  function tryEnter(){if(state.target)openProject(state.target)}
  function gameLoop(now){const dt=Math.min(.032,(now-state.last)/1000);state.last=now;update(dt);requestAnimationFrame(gameLoop)}

  function openProject(id){const p=projects.find(x=>x.id===id);if(!p)return;const t=i18n[state.lang];els.caseContent.innerHTML=`<header class="case-head"><div class="case-kicker">${p.num} / ${p.company.toUpperCase()}</div><h2 class="case-title">${p.title}</h2><p class="case-subtitle">${p.summary}</p><div class="case-meta"><div>YEAR<strong>${p.year}</strong></div><div>ROLE<strong>${p.type}</strong></div><div>SCOPE<strong>${p.scope}</strong></div></div></header><section class="case-block"><h3>${state.lang==='zh-CN'?'MY ROLE':state.lang==='zh-TW'?'我的職責':state.lang==='ko'?'MY ROLE':'MY ROLE'}</h3><p>${p.role}</p></section><section class="case-block"><h3>${state.lang==='zh-CN'?'SELECTED WORK':state.lang==='zh-TW'?'精選作品':state.lang==='ko'?'SELECTED WORK':'SELECTED WORK'}</h3><div class="case-images">${p.images.map((src,i)=>`<img loading="lazy" src="${src}" alt="${p.title} selected work ${i+1}" class="${i===0?'wide':''}" data-lightbox="${src}">`).join('')}</div></section><footer class="case-footer"><span>${p.company} · ${p.year}</span><button data-close-modal>${t.backWorld} ↩</button></footer>`;els.modal.classList.add('open');els.modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');$$('[data-lightbox]').forEach(img=>img.addEventListener('click',()=>openLightbox(img.dataset.lightbox)));$$('[data-close-modal]').forEach(b=>b.addEventListener('click',closeModal));}
  function closeModal(){els.modal.classList.remove('open');els.modal.setAttribute('aria-hidden','true');document.body.classList.remove('locked')}
  function openLightbox(src){els.lightboxImage.src=src;els.lightbox.classList.add('open');els.lightbox.setAttribute('aria-hidden','false')}
  function closeLightbox(){els.lightbox.classList.remove('open');els.lightbox.setAttribute('aria-hidden','true');els.lightboxImage.src=''}

  // Navigation
  $('[data-action="home"]').addEventListener('click',()=>scrollToId('home'));
  $('[data-action="world"]').addEventListener('click',openWorld);
  $('#enterWorld').addEventListener('click',openWorld);
  $('#browseWork').addEventListener('click',()=>scrollToId('projects'));
  $('#gameStart').addEventListener('click',startGame);
  $('#openProjectList').addEventListener('click',()=>scrollToId('projects'));
  $('#menuToggle').addEventListener('click',()=>{const open=!els.menu.classList.contains('open');els.menu.classList.toggle('open',open);els.menu.setAttribute('aria-hidden',String(!open));$('#menuToggle').setAttribute('aria-expanded',String(open))});
  $('#menuClose').addEventListener('click',()=>els.menu.classList.remove('open'));
  $$('[data-menu]').forEach(b=>b.addEventListener('click',()=>{els.menu.classList.remove('open');const id=b.dataset.menu;if(id==='world')openWorld();else scrollToId(id)}));
  $('#languageButton').addEventListener('click',()=>{const open=!els.langMenu.classList.contains('open');els.langMenu.classList.toggle('open',open);els.langButton.setAttribute('aria-expanded',String(open))});
  $$('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  document.addEventListener('click',e=>{if(!els.languageControl.contains(e.target))els.langMenu.classList.remove('open')});
  $$('[data-close-modal]').forEach(b=>b.addEventListener('click',closeModal));
  $('[data-close-lightbox]').addEventListener('click',closeLightbox);els.lightbox.addEventListener('click',e=>{if(e.target===els.lightbox)closeLightbox()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
  document.addEventListener('keydown',onKeyDown);document.addEventListener('keyup',onKeyUp);

  // Touch: buttons plus swipe in the game area.
  $$('.touch-controls button').forEach(btn=>{const action=btn.dataset.touch;const key=action==='left'?'ArrowLeft':action==='right'?'ArrowRight':' ';const on=e=>{e.preventDefault();setKeysForTouch(key,true)};const off=e=>{e.preventDefault();setKeysForTouch(key,false)};btn.addEventListener('pointerdown',on);['pointerup','pointercancel','pointerleave'].forEach(ev=>btn.addEventListener(ev,off))});
  let touchStart=null;els.gameShell.addEventListener('touchstart',e=>{if(e.touches.length===1)touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY,t:performance.now()};},{passive:true});els.gameShell.addEventListener('touchend',e=>{if(!touchStart)return;const t=e.changedTouches[0],dx=t.clientX-touchStart.x,dy=t.clientY-touchStart.y;const elapsed=performance.now()-touchStart.t;if(Math.abs(dx)>35&&Math.abs(dx)>Math.abs(dy)){setKeysForTouch(dx>0?'ArrowRight':'ArrowLeft',true);setTimeout(()=>setKeysForTouch(dx>0?'ArrowRight':'ArrowLeft',false),Math.min(320,Math.max(120,elapsed)))}else if(dy<-35){setKeysForTouch(' ',true);setTimeout(()=>setKeysForTouch(' ',false),160)}else if(Math.abs(dx)<20&&Math.abs(dy)<20&&state.target)tryEnter();touchStart=null;},{passive:true});

  // Clickable portals for accessibility / mouse users.
  $$('.portal').forEach(p=>p.addEventListener('click',()=>openProject(p.dataset.project)));

  renderProjects();renderCareer();setLanguage(state.lang);requestAnimationFrame(gameLoop);
})();
