const startButton = document.getElementById('startButton');
const homeButton = document.getElementById('homeButton');
const worldButton = document.getElementById('worldButton');
const introScreen = document.getElementById('introScreen');
const portfolioWorld = document.getElementById('portfolioWorld');
const platformer = document.getElementById('platformer');
const worldAvatar = document.getElementById('worldAvatar');
const contentPanel = document.getElementById('contentPanel');
const panelInner = document.getElementById('panelInner');
const closePanel = document.getElementById('closePanel');
const menuButton = document.getElementById('menuButton');
const menuPanel = document.getElementById('menuPanel');
const menuHome = document.getElementById('menuHome');
const hudStatus = document.getElementById('hudStatus');
const interactionHint = document.getElementById('interactionHint');

const panels = {
  selected: {
    kicker: '01 / SELECTED PROJECTS', title: 'Selected<br>Projects',
    intro: 'A selection of publishing and game visual projects. The first version focuses on complete project stories rather than isolated design categories.',
    cards: [
      ['01','Tokyo Ghoul','European Publishing','IP publishing / KV / campaign pages / banners / store assets / pre-registration / official website / offline materials'],
      ['02','Yu Yu Hakusho','Publishing Visual','IP publishing / KV / campaign visuals / banners / store assets / pre-registration'],
      ['03','Selected Game Project','Coming soon','A complete game visual case study will be added here.'],
      ['04','Selected Game Project','Coming soon','Process and final work will be presented as a visual case study.']
    ]
  },
  game: {
    kicker: '02 / GAME VISUAL', title: 'Game<br>Visual',
    intro: 'Seven years across game publishing and visual production, covering the major visual touchpoints around a game launch and live operation.',
    cards: [
      ['01','Character','Design & development','Original character design, visual exploration and presentation.'],
      ['02','Key Visual','Campaign communication','KVs and promotional compositions designed around the core message.'],
      ['03','Logo / Icon','Brand language','Game logos, event marks, icons and supporting visual assets.'],
      ['04','Web / Store','Product presentation','Pre-registration pages, official websites, store images and campaign pages.']
    ]
  },
  marketing: {
    kicker: '03 / MARKETING + UA', title: 'Marketing<br>/ UA',
    intro: 'Performance-oriented creative work developed alongside publishing visual production. This section is intentionally secondary to the game visual work.',
    cards: [
      ['01','Ad Creative','Performance campaigns','Static advertising creatives for user acquisition.'],
      ['02','Creative Testing','Variation & iteration','Different compositions, hooks and visual treatments for campaign testing.'],
      ['03','Campaign Visual','Marketing support','Visual assets connecting publishing campaigns with acquisition needs.']
    ]
  },
  about: {
    kicker: '04 / ABOUT ME', title: 'About<br>Echo',
    intro: 'Game Visual Designer with 7 years in game industry, specializing in publishing, IP campaigns and game marketing.', about: true
  },
  lab: {
    kicker: '05 / LAB', title: 'Lab',
    intro: 'The space for experiments outside the day-to-day production pipeline.', lab: true
  }
};

function showHome() {
  closePanelNow();
  menuPanel.classList.remove('active');
  portfolioWorld.classList.remove('active');
  portfolioWorld.setAttribute('aria-hidden', 'true');
  introScreen.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openWorld() {
  introScreen.style.display = 'none';
  portfolioWorld.classList.add('active');
  portfolioWorld.setAttribute('aria-hidden', 'false');
  menuPanel.classList.remove('active');
  requestAnimationFrame(() => platformer.focus());
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closePanelNow() {
  contentPanel.classList.remove('active');
  contentPanel.setAttribute('aria-hidden', 'true');
  hudStatus.textContent = 'READY';
  interactionHint.textContent = '← → MOVE   SPACE JUMP';
}

function makeCards(cards) {
  return '<div class="project-grid">' + cards.map(c => `
    <article class="project-card">
      <div><div class="number">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p></div>
      <div><p>${c[3]}</p><div class="tag">CASE STUDY / PLACEHOLDER</div></div>
    </article>`).join('') + '</div>';
}

function renderPanel(section) {
  const d = panels[section];
  let html = `<div class="panel-kicker">${d.kicker}</div><h2>${d.title}</h2><p class="panel-intro">${d.intro}</p>`;
  if (d.about) {
    html += `<div class="about-layout"><div><h3>Experience</h3><ul><li>7 years of game-related visual / publishing experience.</li><li>Publishing visuals across complete game project lifecycles.</li><li>2 years of team / project coordination experience.</li><li>Task allocation, review, scheduling, quality control and cross-team communication.</li></ul></div><div><h3>Focus</h3><p>Game visual design, IP campaigns, publishing systems and marketing communication.</p><p>Currently exploring Godot, AI-assisted workflows and independent game creation.</p><p>This portfolio will gradually evolve together with that transition.</p></div></div>`;
  } else if (d.lab) {
    html += `<div class="lab-note"><strong>Currently building.</strong><p>Godot experiments, AI-assisted game development, interactive portfolio experiments and independent game prototypes will live here.</p></div><div class="project-grid"><article class="project-card"><div><div class="number">01</div><h3>Godot</h3><p>Learning systems, coding logic and debugging.</p></div><div class="tag">IN PROGRESS</div></article><article class="project-card"><div><div class="number">02</div><h3>AI Workflow</h3><p>Exploring practical AI-assisted workflows for visual and game production.</p></div><div class="tag">IN PROGRESS</div></article></div>`;
  } else {
    html += makeCards(d.cards);
  }
  panelInner.innerHTML = html;
  contentPanel.classList.add('active');
  contentPanel.setAttribute('aria-hidden', 'false');
  menuPanel.classList.remove('active');
  hudStatus.textContent = 'VIEWING / PRESS ESC OR CLOSE';
  interactionHint.textContent = 'CLOSE TO RETURN TO WORLD';
}

const sections = [
  { id: 'selected', x: 900 },
  { id: 'game', x: 2200 },
  { id: 'marketing', x: 3650 },
  { id: 'about', x: 5100 },
  { id: 'lab', x: 6550 }
];

let player = { x: 260, y: 0, vx: 0, vy: 0, grounded: true };
let keys = {};
let lastTime = performance.now();
let activeSection = null;
const worldWidth = 7600;
const playerWidth = 74;
const gravity = 1800;
const speed = 430;
const jump = 690;

function nearestSection() {
  let best = null;
  let dist = Infinity;
  sections.forEach(s => {
    const d = Math.abs(player.x - s.x);
    if (d < dist) { dist = d; best = s; }
  });
  return dist < 180 ? best : null;
}

function openNearest() {
  const s = nearestSection();
  if (s) {
    activeSection = s.id;
    renderPanel(s.id);
  }
}

function updatePlayer(dt) {
  const left = keys.ArrowLeft || keys.a || keys.A;
  const right = keys.ArrowRight || keys.d || keys.D;
  const wantJump = keys.Space;
  const direction = (right ? 1 : 0) - (left ? 1 : 0);

  player.vx += direction * 1900 * dt;
  if (!direction) player.vx *= Math.pow(0.001, dt);
  player.vx = Math.max(-speed, Math.min(speed, player.vx));

  if (wantJump && player.grounded && !keys._jumpConsumed) {
    player.vy = -jump;
    player.grounded = false;
    keys._jumpConsumed = true;
  }
  if (!wantJump) keys._jumpConsumed = false;

  player.vy += gravity * dt;
  player.x += player.vx * dt;
  player.y += player.vy * dt;

  if (player.y >= 0) {
    player.y = 0;
    player.vy = 0;
    player.grounded = true;
  }

  player.x = Math.max(80, Math.min(worldWidth - 100, player.x));

  const screenCenter = window.innerWidth * 0.42;
  const cameraX = Math.max(0, Math.min(worldWidth - window.innerWidth, player.x - screenCenter));
  platformer.style.setProperty('--camera-x', `${cameraX}px`);
  worldAvatar.style.transform = `translate3d(${player.x - cameraX}px, ${player.y}px, 0)`;

  const near = nearestSection();
  if (near) {
    hudStatus.textContent = `PRESS E / ${near.id.toUpperCase()}`;
    interactionHint.textContent = `E ENTER ${near.id.toUpperCase()}`;
  } else {
    hudStatus.textContent = direction ? 'MOVING' : 'READY';
    interactionHint.textContent = '← → MOVE   SPACE JUMP';
  }
}

function loop(now) {
  const dt = Math.min(0.033, (now - lastTime) / 1000);
  lastTime = now;
  if (portfolioWorld.classList.contains('active') && !contentPanel.classList.contains('active')) updatePlayer(dt);
  requestAnimationFrame(loop);
}

startButton.addEventListener('click', openWorld);
homeButton.addEventListener('click', showHome);
worldButton.addEventListener('click', openWorld);
closePanel.addEventListener('click', closePanelNow);
menuButton.addEventListener('click', () => menuPanel.classList.toggle('active'));
menuHome.addEventListener('click', showHome);

document.querySelectorAll('.menu-panel button[data-jump]').forEach(button => {
  button.addEventListener('click', () => {
    openWorld();
    const target = sections.find(s => s.id === button.dataset.jump);
    if (target) player.x = target.x;
    setTimeout(openNearest, 100);
  });
});

document.querySelectorAll('.world-sign').forEach(sign => {
  sign.addEventListener('click', () => {
    const section = sections.find(s => s.id === sign.dataset.section);
    if (section) {
      player.x = section.x;
      renderPanel(section.id);
    }
  });
});

document.addEventListener('keydown', e => {
  keys[e.key] = true;
  if (e.key === 'Escape') {
    if (contentPanel.classList.contains('active')) closePanelNow();
    else if (menuPanel.classList.contains('active')) menuPanel.classList.remove('active');
  }
  if (e.key.toLowerCase() === 'e' && portfolioWorld.classList.contains('active') && !contentPanel.classList.contains('active')) openNearest();
  if (['ArrowLeft','ArrowRight','ArrowUp','Space'].includes(e.key)) e.preventDefault();
});
document.addEventListener('keyup', e => { keys[e.key] = false; });

document.querySelectorAll('.mobile-controls button').forEach(button => {
  const action = button.dataset.control;
  const key = action === 'left' ? 'ArrowLeft' : action === 'right' ? 'ArrowRight' : 'Space';
  const start = e => { e.preventDefault(); keys[key] = true; };
  const end = e => { e.preventDefault(); keys[key] = false; };
  button.addEventListener('pointerdown', start);
  button.addEventListener('pointerup', end);
  button.addEventListener('pointercancel', end);
  button.addEventListener('pointerleave', end);
});

platformer.addEventListener('click', () => platformer.focus());
requestAnimationFrame(loop);
