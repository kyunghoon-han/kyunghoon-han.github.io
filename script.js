// ============================================================
// CONFIG — edit these for your info
// ============================================================
const CONFIG = {
  email:    'kyunghoon.h@gmail.com',
  scholar:  'https://scholar.google.com/citations?user=oVkngE4AAAAJ&hl',
  github:   'https://github.com/kyunghoon-han',
  linkedin: 'https://www.linkedin.com/in/kyunghoon-han',
  cv:       'cv.pdf'
};

// ============================================================
// ICONS
// ============================================================
const svg = (s) => `data:image/svg+xml;utf8,${encodeURIComponent(s)}`;

const ICONS = {
  folder: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><path d='M2 9h11l2 2h15v17H2z' fill='#FFE07A' stroke='#000'/><path d='M2 9h11l2 2h15v3H2z' fill='#E5C45A' stroke='#000'/></svg>`),
  email: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='3' y='8' width='26' height='18' fill='#fff' stroke='#000'/><polyline points='3,8 16,19 29,8' fill='none' stroke='#000'/><line x1='3' y1='26' x2='14' y2='17' stroke='#000'/><line x1='29' y1='26' x2='18' y2='17' stroke='#000'/></svg>`),
  scholar: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='#4885ED'/><polygon points='16,5 28,11 16,17 4,11' fill='#fff'/><path d='M9.5 13.2 L9.5 18.5 Q16 21.5 22.5 18.5 L22.5 13.2 L16 16.5 Z' fill='#fff'/><line x1='26' y1='11' x2='26' y2='17.5' stroke='#fff' stroke-width='1.4'/><circle cx='26' cy='18.8' r='1.6' fill='#fff'/></svg>`),
  github: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='#ffffff' stroke='#181717' stroke-width='0.5'/><g transform='translate(4,4)'><path fill='#181717' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/></g></svg>`),
  visualizations: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><rect x='2' y='4' width='28' height='20' fill='#2a2a3a' stroke='#000'/><rect x='4' y='6' width='24' height='16' fill='#e8f4fc'/><line x1='6' y1='20' x2='26' y2='20' stroke='#999'/><line x1='6' y1='8' x2='6' y2='20' stroke='#999'/><rect x='8' y='15' width='2.5' height='5' fill='#ff6b6b'/><rect x='11.5' y='12' width='2.5' height='8' fill='#4dabf7'/><rect x='15' y='10' width='2.5' height='10' fill='#51cf66'/><rect x='18.5' y='13' width='2.5' height='7' fill='#ffd43b'/><rect x='22' y='8' width='2.5' height='12' fill='#cc5de8'/><rect x='13' y='24' width='6' height='3' fill='#2a2a3a' stroke='#000'/><rect x='10' y='27' width='12' height='2' fill='#2a2a3a' stroke='#000'/></svg>`),
  notebook: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><rect x='4' y='3' width='4' height='26' fill='#3a3a5a' stroke='#000'/><rect x='8' y='3' width='20' height='26' fill='#d97f6b' stroke='#000'/><circle cx='6' cy='8' r='1.4' fill='#fff' stroke='#000'/><circle cx='6' cy='14' r='1.4' fill='#fff' stroke='#000'/><circle cx='6' cy='20' r='1.4' fill='#fff' stroke='#000'/><circle cx='6' cy='26' r='1.4' fill='#fff' stroke='#000'/><line x1='12' y1='10' x2='25' y2='10' stroke='#fff' stroke-width='1'/><line x1='12' y1='14' x2='25' y2='14' stroke='#fff' stroke-width='1'/><line x1='12' y1='18' x2='25' y2='18' stroke='#fff' stroke-width='1'/><line x1='12' y1='22' x2='20' y2='22' stroke='#fff' stroke-width='1'/></svg>`),
  html: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><rect x='3' y='5' width='26' height='22' fill='#fff' stroke='#000'/><rect x='3' y='5' width='26' height='4' fill='#000080'/><circle cx='6' cy='7' r='1' fill='#fff'/><circle cx='9' cy='7' r='1' fill='#fff'/><line x1='6' y1='13' x2='26' y2='13' stroke='#888'/><line x1='6' y1='17' x2='22' y2='17' stroke='#888'/><line x1='6' y1='21' x2='24' y2='21' stroke='#888'/></svg>`),
  text: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><polygon points='6,3 22,3 28,9 28,29 6,29' fill='#fff' stroke='#000'/><polyline points='22,3 22,9 28,9' fill='none' stroke='#000'/><line x1='9' y1='14' x2='25' y2='14' stroke='#000'/><line x1='9' y1='18' x2='25' y2='18' stroke='#000'/><line x1='9' y1='22' x2='20' y2='22' stroke='#000'/></svg>`),
  cv: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><polygon points='6,3 22,3 28,9 28,29 6,29' fill='#fff' stroke='#000'/><polyline points='22,3 22,9 28,9' fill='none' stroke='#000'/><circle cx='12' cy='14' r='2.5' fill='#444'/><path d='M8.5 20 Q 12 17 15.5 20 L 15.5 21 L 8.5 21 Z' fill='#444'/><line x1='17' y1='13' x2='25' y2='13' stroke='#000'/><line x1='17' y1='16' x2='25' y2='16' stroke='#000'/><line x1='9' y1='24' x2='25' y2='24' stroke='#000'/><line x1='9' y1='26.5' x2='22' y2='26.5' stroke='#000'/></svg>`),
  pdf: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><polygon points='6,3 22,3 28,9 28,29 6,29' fill='#fff' stroke='#000'/><polyline points='22,3 22,9 28,9' fill='none' stroke='#000'/><rect x='7' y='17' width='18' height='8' fill='#c0212d'/><text x='16' y='23' text-anchor='middle' font-family='Arial,sans-serif' font-size='6' font-weight='bold' fill='#fff'>PDF</text></svg>`),
  md: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><polygon points='6,3 22,3 28,9 28,29 6,29' fill='#fff' stroke='#000'/><polyline points='22,3 22,9 28,9' fill='none' stroke='#000'/><line x1='9' y1='14' x2='25' y2='14' stroke='#888'/><line x1='9' y1='17' x2='22' y2='17' stroke='#888'/><rect x='7' y='21' width='18' height='6' fill='#1f6feb'/><text x='16' y='25.6' text-anchor='middle' font-family='Arial,sans-serif' font-size='5' font-weight='bold' fill='#fff'>MD</text></svg>`),
  linkedin: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='3' fill='#0a66c2'/><text x='16' y='23' font-family='Arial,sans-serif' font-size='18' font-weight='bold' fill='#fff' text-anchor='middle'>in</text></svg>`),
  doom: svg(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' shape-rendering='crispEdges'><rect width='32' height='32' fill='#2a0a0a'/><path d='M16 4 C9 4 6 9 6 15 C6 20 8 24 8 27 L11 27 L11 23 L13 23 L13 27 L19 27 L19 23 L21 23 L21 27 L24 27 C24 24 26 20 26 15 C26 9 23 4 16 4 Z' fill='#c0c0c0' stroke='#000'/><path d='M10 13 L14 15 L10 17 Z' fill='#cc0000'/><path d='M22 13 L18 15 L22 17 Z' fill='#cc0000'/><rect x='14' y='18' width='1.5' height='4' fill='#000'/><rect x='16.5' y='18' width='1.5' height='4' fill='#000'/></svg>`)
};

// ============================================================
// CONTENT TREE — populated from CONTENT (content.js) at startup
// ============================================================
const TREE = {
  visualizations: { title: 'Visualizations', type: 'folder', children: [] },
  notebook:       { title: 'Notebook',       type: 'folder', children: [] }
};

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

function applyContent() {
  if (typeof CONTENT === 'undefined') {
    console.warn('CONTENT not defined — run `python3 build.py` to generate content.js');
    return;
  }
  if (Array.isArray(CONTENT.visualizations)) {
    TREE.visualizations.children = CONTENT.visualizations.map((v) => ({
      title: v.title,
      type:  'iframe',
      icon:  ICONS.html,
      src:   v.src
    }));
  }
  if (Array.isArray(CONTENT.writings)) {
    TREE.notebook.children = buildNotebookChildren(CONTENT.writings);
  }
}

function buildNotebookChildren(articles) {
  const byYearMonth = {};
  for (const a of articles) {
    if (!a.date) continue;
    const d = new Date(a.date + 'T00:00:00');
    if (isNaN(d.getTime())) continue;
    const year  = d.getFullYear();
    const month = MONTH_NAMES[d.getMonth()];
    (byYearMonth[year] ||= {});
    (byYearMonth[year][month] ||= []).push(a);
  }

  const years = Object.keys(byYearMonth).map(Number).sort((a, b) => b - a);
  return years.map((year) => {
    const months = Object.keys(byYearMonth[year])
      .sort((a, b) => MONTH_NAMES.indexOf(b) - MONTH_NAMES.indexOf(a));
    return {
      title: String(year),
      type:  'folder',
      children: months.map((month) => ({
        title: month,
        type:  'folder',
        children: byYearMonth[year][month]
          .slice()
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((a) => ({
            title:      a.title.endsWith('.md') ? a.title : a.title + '.md',
            type:       'md',
            src:        a.file,
            body:       a.body,
            date:       a.date,
            subtitle:   a.subtitle,
            categories: a.categories,
            tags:       a.tags
          }))
      }))
    };
  });
}

// ============================================================
// DESKTOP ITEMS + QUICK LAUNCH
// ============================================================
const DESKTOP_ITEMS = [
  { id: 'visualizations', title: 'Visualizations', icon: ICONS.visualizations,
    tree: TREE.visualizations,
    action: () => openFolderWindow(TREE.visualizations) },
  { id: 'notebook', title: 'Notebook', icon: ICONS.notebook,
    tree: TREE.notebook,
    action: () => openFolderWindow(TREE.notebook) },
  { id: 'email',   title: 'E-mail Me',      icon: ICONS.email,
    action: () => { window.location.href = `mailto:${CONFIG.email}`; } },
  { id: 'scholar', title: 'Google Scholar', icon: ICONS.scholar,
    action: () => window.open(CONFIG.scholar, '_blank', 'noopener') },
  { id: 'github',  title: 'GitHub',         icon: ICONS.github,
    action: () => window.open(CONFIG.github,  '_blank', 'noopener') },
  { id: 'cv', title: 'CV', icon: ICONS.cv,
    action: () => openPdfWindow({ title: 'CV', src: CONFIG.cv }) },
  { id: 'doom', title: 'DOOM', icon: ICONS.doom,
    action: () => openIframeWindow({ title: 'DOOM', icon: ICONS.doom, src: 'htmls/doom.html' }) }
];

const QUICK_LAUNCH = [
  { id: 'cv',       title: 'CV',       icon: ICONS.cv,
    action: () => openPdfWindow({ title: 'CV', src: CONFIG.cv }) },
  { id: 'linkedin', title: 'LinkedIn', icon: ICONS.linkedin,
    action: () => window.open(CONFIG.linkedin, '_blank', 'noopener') }
];

// ============================================================
// WINDOW MANAGER
// ============================================================
const wins = new Map();
let zCounter = 100;
let activeId = null;

const uid      = () => 'w_' + Math.random().toString(36).slice(2, 9);
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
const isTouch  = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches
  || ('ontouchstart' in window);

function openWindow({ title, icon, contentEl, width = 480, height = 320, noPad = false }) {
  const id = uid();

  const offset = (wins.size % 8) * 22;
  const startX = Math.max(20, Math.round((window.innerWidth  - width)  / 2) + offset - 96);
  const startY = Math.max(10, Math.round((window.innerHeight - 48 - height) / 3) + offset);

  const el = document.createElement('div');
  el.className = 'window window-instance';
  el.dataset.id = id;
  el.style.left   = startX + 'px';
  el.style.top    = startY + 'px';
  el.style.width  = width  + 'px';
  el.style.height = height + 'px';
  el.style.zIndex = ++zCounter;

  el.innerHTML = `
    <div class="title-bar">
      <div class="title-bar-text">
        ${icon ? `<img class="title-icon" src="${icon}" alt="" />` : ''}
        <span>${escapeHtml(title)}</span>
      </div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" data-action="min"></button>
        <button aria-label="Maximize" data-action="max"></button>
        <button aria-label="Close"    data-action="close"></button>
      </div>
    </div>
    <div class="window-body${noPad ? ' no-pad' : ''}"></div>
    <div class="resize-handle"></div>
  `;

  el.querySelector('.window-body').appendChild(contentEl);
  document.getElementById('windows').appendChild(el);

  el.querySelector('[data-action="close"]').addEventListener('click', (e) => { e.stopPropagation(); closeWindow(id); });
  el.querySelector('[data-action="min"]'  ).addEventListener('click', (e) => { e.stopPropagation(); minimizeWindow(id); });
  el.querySelector('[data-action="max"]'  ).addEventListener('click', (e) => { e.stopPropagation(); toggleMaximize(id); });

  el.addEventListener('mousedown',  () => focusWindow(id), true);
  el.addEventListener('touchstart', () => focusWindow(id), { passive: true, capture: true });

  attachDrag(el,   el.querySelector('.title-bar'));
  attachResize(el, el.querySelector('.resize-handle'));

  wins.set(id, { id, title, icon, el, minimized: false, maximized: false });
  focusWindow(id);
  renderTaskbar();
  return id;
}

function closeWindow(id) {
  const w = wins.get(id); if (!w) return;
  w.el.remove();
  wins.delete(id);
  if (activeId === id) activeId = null;
  renderTaskbar();
}

function minimizeWindow(id) {
  const w = wins.get(id); if (!w) return;
  w.minimized = true;
  w.el.classList.add('minimized');
  if (activeId === id) activeId = null;
  renderTaskbar();
}

function restoreWindow(id) {
  const w = wins.get(id); if (!w) return;
  w.minimized = false;
  w.el.classList.remove('minimized');
  focusWindow(id);
}

function toggleMaximize(id) {
  const w = wins.get(id); if (!w) return;
  w.maximized = !w.maximized;
  w.el.classList.toggle('maximized', w.maximized);
}

function focusWindow(id) {
  const w = wins.get(id); if (!w) return;
  if (w.minimized) {
    w.minimized = false;
    w.el.classList.remove('minimized');
  }
  w.el.style.zIndex = ++zCounter;
  activeId = id;
  wins.forEach((wi) => {
    const tb = wi.el.querySelector('.title-bar');
    if (tb) tb.classList.toggle('inactive', wi.id !== id);
  });
  renderTaskbar();
}

function setWindowTitle(id, newTitle) {
  const w = wins.get(id); if (!w) return;
  w.title = newTitle;
  const titleSpan = w.el.querySelector('.title-bar-text span');
  if (titleSpan) titleSpan.textContent = newTitle;
  renderTaskbar();
}

function attachDrag(el, handle) {
  let startX, startY, startLeft, startTop, dragging = false;
  const onDown = (e) => {
    if (el.classList.contains('maximized') || isMobile()) return;
    if (e.target.closest('.title-bar-controls')) return;
    const p = pt(e);
    startX = p.x; startY = p.y;
    startLeft = parseInt(el.style.left, 10) || 0;
    startTop  = parseInt(el.style.top,  10) || 0;
    dragging = true;
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup',   onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend',  onUp);
    e.preventDefault();
  };
  const onMove = (e) => {
    if (!dragging) return;
    const p = pt(e);
    el.style.left = (startLeft + p.x - startX) + 'px';
    el.style.top  = Math.max(0, startTop + p.y - startY) + 'px';
    e.preventDefault();
  };
  const onUp = () => {
    dragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup',   onUp);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend',  onUp);
  };
  handle.addEventListener('mousedown',  onDown);
  handle.addEventListener('touchstart', onDown, { passive: false });
}

function attachResize(el, handle) {
  let startX, startY, startW, startH, resizing = false;
  const onDown = (e) => {
    if (el.classList.contains('maximized') || isMobile()) return;
    const p = pt(e);
    startX = p.x; startY = p.y;
    startW = el.offsetWidth;
    startH = el.offsetHeight;
    resizing = true;
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup',   onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend',  onUp);
    e.preventDefault();
    e.stopPropagation();
  };
  const onMove = (e) => {
    if (!resizing) return;
    const p = pt(e);
    el.style.width  = Math.max(280, startW + (p.x - startX)) + 'px';
    el.style.height = Math.max(180, startH + (p.y - startY)) + 'px';
    e.preventDefault();
  };
  const onUp = () => {
    resizing = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup',   onUp);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend',  onUp);
  };
  handle.addEventListener('mousedown',  onDown);
  handle.addEventListener('touchstart', onDown, { passive: false });
}

function pt(e) {
  if (e.touches && e.touches[0])               return { x: e.touches[0].clientX,        y: e.touches[0].clientY };
  if (e.changedTouches && e.changedTouches[0]) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
  return { x: e.clientX, y: e.clientY };
}

// ============================================================
// CONTENT WINDOWS
// ============================================================
function openFolderWindow(rootNode) {
  const navStack = [rootNode];
  let winId = null;

  const wrapper = document.createElement('div');
  wrapper.className = 'folder-wrapper';

  const toolbar = document.createElement('div');
  toolbar.className = 'folder-toolbar';
  toolbar.innerHTML = `
    <button class="folder-btn folder-up" title="Up one level">⬆ Up</button>
    <div class="folder-path"></div>
  `;

  const content = document.createElement('div');
  content.className = 'folder-content';

  wrapper.appendChild(toolbar);
  wrapper.appendChild(content);

  const renderCurrent = () => {
    const current = navStack[navStack.length - 1];
    toolbar.querySelector('.folder-path').textContent =
      navStack.map(n => n.title).join(' \\ ');
    toolbar.querySelector('.folder-up').disabled = navStack.length === 1;

    if (winId) setWindowTitle(winId, current.title);

    content.innerHTML = '';
    content.appendChild(renderFolderItems(current, (child) => {
      if (child.type === 'folder') { navStack.push(child); renderCurrent(); }
      else openTreeNode(child);
    }));
  };

  toolbar.querySelector('.folder-up').addEventListener('click', () => {
    if (navStack.length > 1) {
      navStack.pop();
      renderCurrent();
    }
  });

  renderCurrent();

  winId = openWindow({
    title:     rootNode.title,
    icon:      ICONS.folder,
    contentEl: wrapper,
    width:     520, height: 380, noPad: true
  });
}

function renderFolderItems(node, onOpen) {
  const container = document.createElement('div');
  container.className = 'folder-view';

  if (!node.children || node.children.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'folder-empty';
    empty.textContent = 'This folder is empty.';
    container.appendChild(empty);
    return container;
  }

  node.children.forEach((child) => {
    const item = document.createElement('div');
    item.className = 'folder-item';
    item.innerHTML = `
      <img class="icon" src="${iconForNode(child)}" alt="" />
      <div class="label">${escapeHtml(child.title)}</div>`;

    let lastTap = 0;
    item.addEventListener('click', () => {
      container.querySelectorAll('.folder-item.selected').forEach((el) => el.classList.remove('selected'));
      item.classList.add('selected');
      const now = Date.now();
      if (now - lastTap < 350) onOpen(child);
      lastTap = now;
    });
    container.appendChild(item);
  });
  return container;
}

function openIframeWindow(node) {
  const iframe = document.createElement('iframe');
  iframe.className = 'iframe-content';
  iframe.src = node.src;
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('referrerpolicy', 'no-referrer');
  openWindow({
    title:     node.title,
    icon:      node.icon || ICONS.html,
    contentEl: iframe,
    width:     Math.min(820, window.innerWidth  - 60),
    height:    Math.min(580, window.innerHeight - 100),
    noPad:     true
  });
}

function openPdfWindow(node) {
  const iframe = document.createElement('iframe');
  iframe.className = 'iframe-content';
  iframe.src = node.src;
  iframe.setAttribute('type', 'application/pdf');
  openWindow({
    title:     node.title,
    icon:      ICONS.pdf,
    contentEl: iframe,
    width:     Math.min(760, window.innerWidth  - 60),
    height:    Math.min(640, window.innerHeight - 100),
    noPad:     true
  });
}

function openTextWindow(node) {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'background:#fff;padding:14px;min-height:100%';
  const pre = document.createElement('pre');
  pre.style.cssText = 'white-space:pre-wrap;font-family:"Pixelated MS Sans Serif",Arial,sans-serif;font-size:13px;margin:0';
  pre.textContent = node.body || '';
  wrapper.appendChild(pre);
  openWindow({
    title: node.title, icon: ICONS.text, contentEl: wrapper,
    width: 520, height: 400, noPad: true
  });
}

async function openMdWindow(node) {
  const wrapper = document.createElement('div');
  wrapper.className = 'md-wrapper';
  wrapper.innerHTML = '<div class="md-loading">Loading…</div>';

  openWindow({
    title:     node.title || 'Document',
    icon:      ICONS.md,
    contentEl: wrapper,
    width:     Math.min(780, window.innerWidth  - 60),
    height:    Math.min(640, window.innerHeight - 100),
    noPad:     true
  });

  try {
    let mdText = node.body;
    if (!mdText && node.src) {
      const res = await fetch(node.src);
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${node.src}`);
      mdText = await res.text();
    }
    if (!mdText) throw new Error('No "body" or "src" on this markdown node');

    wrapper.innerHTML = renderArticle(node, mdText);

    await waitForMathJax();
    await MathJax.typesetPromise([wrapper]);
  } catch (err) {
    wrapper.innerHTML =
      `<div class="md-error">` +
      `<strong>Could not load this document.</strong><br/><br/>` +
      `Error: <code>${escapeHtml(err.message)}</code><br/><br/>` +
      `<small>If you opened the page via <code>file://</code> and this article ` +
      `has no embedded body, serve the project with <code>python3 -m http.server</code> ` +
      `instead, or run <code>python3 build.py</code> to embed article contents.</small>` +
      `</div>`;
  }
}

// ============================================================
// MARKDOWN + MATHJAX
// ============================================================
function renderArticle(node, mdText) {
  let html = '<article>';
  html += '<header class="article-meta">';
  if (node.title)    html += `<h1 class="article-title">${escapeHtml(node.title)}</h1>`;
  if (node.subtitle) html += `<p class="article-subtitle">${escapeHtml(node.subtitle)}</p>`;

  const bits = [];
  if (node.date)       bits.push(formatDate(node.date));
  if (node.categories) bits.push(escapeHtml(node.categories));
  if (node.tags)       bits.push('Tags: ' + escapeHtml(node.tags));
  if (bits.length)     html += `<p class="article-info">${bits.join(' &middot; ')}</p>`;

  html += '</header>';
  html += renderMarkdownForMathJax(mdText);
  html += '</article>';
  return html;
}

// Protects math blocks from marked, then re-inserts them with MathJax-friendly
// delimiters. Display vs inline for "$$...$$" is decided by surrounding context
// (alone on its lines = display; mid-paragraph = inline).
function renderMarkdownForMathJax(md) {
  // Strip Jekyll YAML frontmatter (safety; embedded bodies are already stripped)
  md = md.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '');
  // Strip Liquid tags
  md = md.replace(/\{%[\s\S]*?%\}/g, '');

  const blocks = [];
  const ph = (i) => `\u0000MATH${i}\u0000`;

  md = md.replace(/\$\$([\s\S]+?)\$\$/g, (match, content, offset, str) => {
    const before = str.slice(0, offset);
    const after  = str.slice(offset + match.length);
    const bLine  = (before.match(/[^\n]*$/) || [''])[0];
    const aLine  = (after.match(/^[^\n]*/)  || [''])[0];
    const display = bLine.trim() === '' && aLine.trim() === '';
    blocks.push({ display, content });
    return ph(blocks.length - 1);
  });

  md = md.replace(/(^|[^\\$])\$([^\$\n]+?)\$(?!\$)/g, (m, lead, content) => {
    blocks.push({ display: false, content });
    return lead + ph(blocks.length - 1);
  });

  let html = marked.parse(md, { gfm: true, breaks: false });

  html = html.replace(/\u0000MATH(\d+)\u0000/g, (_, i) => {
    const m = blocks[parseInt(i, 10)];
    return m.display ? `\\[${m.content}\\]` : `\\(${m.content}\\)`;
  });
  return html;
}

async function waitForMathJax(timeout = 15000) {
  const start = Date.now();
  while (!(window.MathJax && MathJax.typesetPromise)) {
    if (Date.now() - start > timeout) throw new Error('MathJax did not finish loading');
    await new Promise((r) => setTimeout(r, 50));
  }
}

function formatDate(s) {
  const d = new Date(s + 'T00:00:00');
  if (isNaN(d.getTime())) return s;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ============================================================
// DESKTOP / TASKBAR / START MENU
// ============================================================
function openTreeNode(node) {
  if      (node.type === 'folder') openFolderWindow(node);
  else if (node.type === 'iframe') openIframeWindow(node);
  else if (node.type === 'pdf')    openPdfWindow(node);
  else if (node.type === 'md')     openMdWindow(node);
  else if (node.type === 'text')   openTextWindow(node);
  else if (node.type === 'link')   window.open(node.url, '_blank', 'noopener');
}

function iconForNode(node) {
  return node.icon
    || (node.type === 'folder' ? ICONS.folder
    :   node.type === 'iframe' ? ICONS.html
    :   node.type === 'pdf'    ? ICONS.pdf
    :   node.type === 'md'     ? ICONS.md
    :                            ICONS.text);
}

function renderDesktop() {
  const container = document.getElementById('desktop-icons');
  container.innerHTML = '';
  DESKTOP_ITEMS.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'desktop-icon';
    el.tabIndex = 0;
    el.innerHTML = `<img class="icon" src="${item.icon}" alt="" /><span class="label">${escapeHtml(item.title)}</span>`;

    const select = () => {
      container.querySelectorAll('.desktop-icon.selected').forEach((d) => d.classList.remove('selected'));
      el.classList.add('selected');
    };

    if (isTouch()) {
      // Phones / touch devices: a single tap opens.
      el.addEventListener('click', () => { select(); item.action(); });
    } else {
      // Desktop browsers: single click selects, double-click opens.
      el.addEventListener('click', select);
      el.addEventListener('dblclick', () => { select(); item.action(); });
    }

    el.addEventListener('keydown', (e) => { if (e.key === 'Enter') item.action(); });
    container.appendChild(el);
  });
}

function renderQuickLaunch() {
  const container = document.getElementById('taskbar-quick');
  container.innerHTML = '';
  QUICK_LAUNCH.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'taskbar-quick-item';
    el.title = item.title;
    el.innerHTML = `<img src="${item.icon}" alt="${escapeHtml(item.title)}" />`;
    el.addEventListener('click', (e) => { e.stopPropagation(); item.action(); });
    container.appendChild(el);
  });
}

function renderTaskbar() {
  const tb = document.getElementById('taskbar-windows');
  tb.innerHTML = '';
  wins.forEach((w) => {
    const btn = document.createElement('button');
    btn.className = 'taskbar-window';
    if (activeId === w.id && !w.minimized) btn.classList.add('active');
    btn.innerHTML = `
      ${w.icon ? `<img class="tb-icon" src="${w.icon}" alt="" />` : ''}
      <span class="tb-label">${escapeHtml(w.title)}</span>`;
    btn.addEventListener('click', () => {
      if      (w.minimized)        restoreWindow(w.id);
      else if (activeId === w.id)  minimizeWindow(w.id);
      else                         focusWindow(w.id);
    });
    tb.appendChild(btn);
  });
}

// Recursive cascading menu builder
function makeMenuItem(node, parentUl) {
  const li = document.createElement('li');
  const hasSubmenu = node.type === 'folder'
    && Array.isArray(node.children) && node.children.length > 0;
  if (hasSubmenu) li.classList.add('has-submenu');

  li.innerHTML = `
    <img class="icon" src="${iconForNode(node)}" alt="" />
    <span class="menu-label">${escapeHtml(node.title)}</span>
    ${hasSubmenu ? '<span class="submenu-arrow">▶</span>' : ''}`;

  if (hasSubmenu) {
    const submenu = document.createElement('ul');
    submenu.className = 'start-submenu';
    node.children.forEach((child) => makeMenuItem(child, submenu));
    li.appendChild(submenu);

    li.addEventListener('click', (e) => {
      if (e.target.closest('.start-submenu')) return;
      e.stopPropagation();
      if (isMobile()) {
        toggleStartMenu(false);
        openTreeNode(node);
        return;
      }
      Array.from(li.parentElement.children).forEach((sib) => {
        if (sib !== li && sib.classList) sib.classList.remove('submenu-open');
      });
      li.classList.toggle('submenu-open');
    });
  } else {
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStartMenu(false);
      openTreeNode(node);
    });
  }

  parentUl.appendChild(li);
}

function renderStartMenu() {
  const ul = document.getElementById('start-menu-list');
  ul.innerHTML = '';

  DESKTOP_ITEMS.forEach((item) => {
    if (item.tree && item.tree.children && item.tree.children.length) {
      makeMenuItem({
        title:    item.title,
        type:     'folder',
        icon:     item.icon,
        children: item.tree.children
      }, ul);
    } else {
      const li = document.createElement('li');
      li.innerHTML = `<img class="icon" src="${item.icon}" alt="" /><span class="menu-label">${escapeHtml(item.title)}</span>`;
      li.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStartMenu(false);
        item.action();
      });
      ul.appendChild(li);
    }
  });

  const sep = document.createElement('li');
  sep.className = 'separator';
  ul.appendChild(sep);

  QUICK_LAUNCH.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<img class="icon" src="${item.icon}" alt="" /><span class="menu-label">${escapeHtml(item.title)}</span>`;
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStartMenu(false);
      item.action();
    });
    ul.appendChild(li);
  });
}

function toggleStartMenu(force) {
  const menu = document.getElementById('start-menu');
  const btn  = document.getElementById('start-button');
  const open = force !== undefined ? force : menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !open);
  btn.classList.toggle('pressed', open);
  if (!open) {
    menu.querySelectorAll('.submenu-open').forEach((el) => el.classList.remove('submenu-open'));
  }
}

// ============================================================
// CLOCK + UTILS
// ============================================================
function tickClock() {
  const el = document.getElementById('clock');
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  el.textContent = `${h}:${m} ${ampm}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ============================================================
// INIT
// ============================================================
applyContent();   // populate TREE from CONTENT (synchronous)

document.addEventListener('DOMContentLoaded', () => {
  renderDesktop();
  renderQuickLaunch();
  renderStartMenu();
  tickClock();
  setInterval(tickClock, 15000);

  document.getElementById('start-button').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleStartMenu();
  });

  document.addEventListener('click', (e) => {
    const menu = document.getElementById('start-menu');
    if (!menu.classList.contains('hidden') &&
        !menu.contains(e.target) &&
        !e.target.closest('#start-button')) {
      toggleStartMenu(false);
    }
  });

  document.getElementById('desktop').addEventListener('click', (e) => {
    if (e.target.id === 'desktop' || e.target.id === 'desktop-icons') {
      document.querySelectorAll('.desktop-icon.selected').forEach((el) => el.classList.remove('selected'));
    }
  });
});