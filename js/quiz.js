/* ============================================================
   BUILD YOURS — 6-question configurator, live preview,
   instant estimate and downloadable images (post + story).
   Uses globals from app.js: $, $$, t, esc, usd, QUIZ_PRICE, PALETTES, VIBES
   ============================================================ */
const Q = { step: 0, type: null, feats: new Set(), vibe: null, pal: null, size: null, langs: null, name: '' };
const STEPS = [
  { key: 'type', title: 'q1', opts: ['business', 'artist', 'event', 'personal', 'system'], desc: true },
  { key: 'feats', title: 'q2', opts: ['show', 'sell', 'data', 'admin', 'forms', 'games', 'bot', 'auto', 'nfc'], desc: true, multi: true },
  { key: 'vibe', title: 'q3', opts: ['minimal', 'bold', 'elegant', 'playful'], desc: true, vibe: true },
  { key: 'pal', title: 'q4', opts: ['midnight', 'sunset', 'rose', 'forest', 'ocean', 'mono'], swatch: true },
  { key: 'size', title: 'q5', opts: ['one', 'mid', 'big'], desc: true },
  { key: 'langs', title: 'q6', opts: ['1', '2', '3'], desc: true },
];
const answered = (s) => s.multi ? Q.feats.size > 0 : Q[s.key] != null;
const pad2 = (n) => String(n).padStart(2, '0');

function quote() {
  const P = QUIZ_PRICE, type = Q.type || 'business';
  const lines = [[t('r.base') + ' · ' + t('q1.' + type), P.base[type]]];
  [...Q.feats].forEach((f) => {
    if (type === 'system' && P.systemIncludes.includes(f)) return;
    if (P.feat[f]) lines.push([t('q2.' + f), P.feat[f]]);
  });
  if (Q.size && P.size[Q.size]) lines.push([t('r.size') + ' · ' + t('q5.' + Q.size), P.size[Q.size]]);
  if (Q.langs && P.langs[Q.langs]) lines.push([t('r.lang') + ' · ' + t('q6.' + Q.langs), P.langs[Q.langs]]);
  const total = Math.round(lines.reduce((a, [, v]) => a + v, 0) / 10) * 10;
  return { lines, total };
}

/* Which preview blocks to show, in order */
function mockTypes() {
  const f = Q.feats, type = Q.type || 'business', out = [];
  if (type === 'system' || f.has('admin')) out.push('admin');
  if (type === 'system' || f.has('data')) out.push('live');
  if (f.has('sell')) out.push('shop');
  if (f.has('bot')) out.push('bot');
  if (f.has('auto')) out.push('auto');
  if (f.has('show') || !f.size) out.push('gallery');
  if (f.has('forms')) out.push('forms');
  if (f.has('games')) out.push('games');
  if (f.has('nfc')) out.push('nfc');
  return out;
}
const projName = () => (Q.name || '').trim() || t('r.name.ph');
const projSlug = () => projName().toLowerCase().normalize('NFD').replace(/[^\w]+/g, '') || 'yourbrand';

/* ---------- Render ---------- */
function renderQuiz() {
  const box = $('#quiz');
  const done = Q.step >= STEPS.length;
  const ac = PALETTES[Q.pal || 'midnight'].ac;
  const acc = ac === '#111111' ? '#3e6ae1' : ac;
  $('#build').style.setProperty('--q-ac', acc);
  $('#build').style.setProperty('--q-glow', acc);
  box.innerHTML = `<div class="quiz-grid">
    <div class="quiz-left">${done ? resultHTML() : stepHTML()}</div>
    <div class="mock-col">
      <div class="mock-wrap">
        <div class="mock-bar"><i></i><i></i><i></i><div class="url" id="mockUrl"></div></div>
        <div class="mock" id="mock"></div>
      </div>
      <p class="mock-cap">${esc(t('q.live'))}</p>
    </div>
  </div>`;
  renderMock();
  if (done) {
    const inp = $('#rName');
    inp.addEventListener('input', () => { Q.name = inp.value; renderMock(); updateMail(); });
    updateMail();
    countUp($('#rTotal'), quote().total);
  }
}

function stepHTML() {
  const s = STEPS[Q.step];
  const isOn = (o) => s.multi ? Q.feats.has(o) : Q[s.key] === o;
  const opt = (o, i) => {
    let inner;
    if (s.swatch) {
      const p = PALETTES[o];
      inner = `<span class="sw"><i style="background:${p.bg}"></i><i style="background:${p.ac}"></i><i style="background:${p.fg}"></i></span><b>${esc(t('q4.' + o))}</b>`;
    } else {
      const v = s.vibe ? VIBES[o] : null;
      inner = `${v ? `<span class="vibe-sample" style="font-family:'${v.font}';font-weight:${v.w};font-style:${v.fs};text-transform:${v.tt}">${v.sample}</span>` : ''}
        <b>${esc(t(s.title + '.' + o))}</b>${s.desc ? `<span>${esc(t(s.title + '.' + o + '.d'))}</span>` : ''}`;
    }
    return `<button class="q-opt${isOn(o) ? ' on' : ''}" data-opt="${o}"><kbd>${i + 1}</kbd>${inner}</button>`;
  };
  return `
    <div class="q-seg">${STEPS.map((_, i) => `<i class="${i < Q.step ? 'done' : i === Q.step ? 'now' : ''}"></i>`).join('')}</div>
    <div class="q-num"><b>${pad2(Q.step + 1)}</b><span>/06</span></div>
    <h3 class="q-title">${esc(t(s.title))}</h3>
    <p class="q-hint">${s.multi ? esc(t('q.multi')) : esc(t('q.keys'))}</p>
    <div class="q-opts${s.swatch ? ' sw3' : ''}${s.opts.length > 6 ? ' many' : ''}">${s.opts.map(opt).join('')}</div>
    <div class="q-nav">
      <button class="btn dark" data-q="back" ${Q.step === 0 ? 'disabled' : ''}>${esc(t('q.back'))}</button>
      <button class="btn primary" data-q="next" ${answered(s) ? '' : 'disabled'}>${esc(t(Q.step === STEPS.length - 1 ? 'q.see' : 'q.next'))} →</button>
    </div>`;
}

function resultHTML() {
  const q = quote();
  return `<div class="r-side">
    <div class="q-seg">${STEPS.map(() => '<i class="done"></i>').join('')}</div>
    <label class="r-label" for="rName">${esc(t('r.name'))}</label>
    <input class="r-name" id="rName" maxlength="28" placeholder="${esc(t('r.name.ph'))}" value="${esc(Q.name)}" autocomplete="off">
    <div class="r-price">
      <p class="from">${esc(LANG === 'ja' ? t('r.est') : `${t('r.est')} · ${t('r.from')}`)}</p>
      <div class="big"><span id="rTotal">$0</span><small>USD</small></div>
    </div>
    <ul class="r-list">
      ${q.lines.map(([k, v]) => `<li><span>${esc(k)}</span><em>${v ? '+' + usd(v) : '—'}</em></li>`).join('')}
      <li><span>${esc(t('r.server'))}</span><em>${esc(t('r.server.v'))}</em></li>
    </ul>
    <p class="r-note">${esc(t('r.note'))}</p>
    <div class="r-dl">
      <button class="btn primary" data-dl="post">↓ ${esc(t('r.dl.post'))}</button>
      <button class="btn primary" data-dl="story">↓ ${esc(t('r.dl.story'))}</button>
    </div>
    <div class="r-dl">
      <a class="btn secondary" id="rSend" href="#">${esc(t('r.send'))}</a>
      <button class="btn dark" data-q="restart">${esc(t('r.again'))}</button>
    </div>
  </div>`;
}

function countUp(el, to) {
  if (!el) return;
  const t0 = performance.now(), dur = 1100;
  const tick = (now) => {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4);
    el.textContent = usd(Math.round(to * e / 10) * 10);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function summaryLines() {
  return [
    `${t('r.name')}: ${projName()}`,
    `${t('q1')} ${t('q1.' + Q.type)}`,
    `${t('q2')} ${[...Q.feats].map((f) => t('q2.' + f)).join(', ')}`,
    `${t('q3')} ${t('q3.' + Q.vibe)}`,
    `${t('q4')} ${t('q4.' + Q.pal)}`,
    `${t('q5')} ${t('q5.' + Q.size)}`,
    `${t('q6')} ${t('q6.' + Q.langs)}`,
  ];
}
function updateMail() {
  const body = [...summaryLines(), '', `${t('r.est')}: ${usd(quote().total)} USD + ${t('r.server.v')}`].join('\n');
  $('#rSend').href = `mailto:madcarranzaosorio@gmail.com?subject=${encodeURIComponent(t('r.mail.subject', { name: projName() }))}&body=${encodeURIComponent(body)}`;
}

/* ---------- Live HTML preview ---------- */
function renderMock() {
  const m = $('#mock'); if (!m) return;
  const pal = PALETTES[Q.pal || 'midnight'];
  const v = VIBES[Q.vibe || 'minimal'];
  const type = Q.type || 'business';
  const name = projName();
  $('#mockUrl').textContent = `${projSlug()}.com`;
  Object.entries({ '--m-bg': pal.bg, '--m-fg': pal.fg, '--m-ac': pal.ac, '--m-font': `'${v.font}'`, '--m-w': v.w, '--m-tt': v.tt, '--m-fs': v.fs, '--m-r': v.r })
    .forEach(([k, val]) => m.style.setProperty(k, val));

  const B = {
    admin: () => `<h6>${esc(t('m.admin'))}</h6><div class="m-bars">${[40, 65, 52, 80, 70, 95, 88].map((h, i) => `<i style="height:${h}%;animation-delay:${i * 70}ms"></i>`).join('')}</div>`,
    live: () => `<h6>${esc(t('m.live'))}</h6><div class="m-live"><i></i>1,284 <small>${esc(t('m.records'))}</small></div>`,
    shop: () => `<h6>${esc(t('m.shop'))}</h6>${['01', '02', '03'].map((n) => `<div class="m-prod"><span>Item ${n}</span><em>${esc(t('m.add'))}</em></div>`).join('')}`,
    bot: () => `<h6>${esc(t('m.bot'))}</h6><div class="m-chat"><p>${esc(t('m.bot.q'))}</p><p class="me">${esc(t('m.bot.a'))}</p></div>`,
    auto: () => `<h6>${esc(t('m.auto'))}</h6><div class="m-auto"><span>${esc(t('m.auto.1'))}</span><i>→</i><span>${esc(t('m.auto.2'))}</span><i>→</i><span>${esc(t('m.auto.3'))} ✓</span></div>`,
    gallery: () => `<h6>${esc(t('m.work'))}</h6><div class="m-tiles"><i></i><i></i><i></i></div>`,
    forms: () => `<h6>${esc(t('m.forms'))}</h6><div class="m-field"></div><div class="m-field"></div><span class="m-btn">${esc(t('m.send'))}</span>`,
    games: () => `<h6>${esc(t('m.games'))}</h6><div class="m-lb"><div><span>1. Ana</span><b>9,820</b></div><div><span>2. Luis</span><b>8,410</b></div><div><span>3. Sofi</span><b>7,005</b></div></div>`,
    nfc: () => `<h6>NFC</h6><div class="m-nfc"><span class="m-nfc-ico"><i></i><i></i><i></i></span><b>${esc(t('m.nfc'))}</b></div>`,
  };
  const types = mockTypes();
  const blocks = types.map((k, i) => {
    const wide = k === 'admin' || k === 'auto' || (i === types.length - 1 && (types.length - types.filter((x) => x === 'admin' || x === 'auto').length) % 2 === 1);
    return `<div class="m-block${wide ? ' wide' : ''}" style="animation-delay:${i * 70}ms">${B[k]()}</div>`;
  });
  const langs = Q.langs ? ['EN', 'ES', '日本'].slice(0, +Q.langs).join(' · ') : '';
  m.innerHTML = `
    <div class="m-nav"><b>${esc(name)}</b><span>${langs ? `<em>${langs}</em>` : `${esc(t('m.nav1'))} ${esc(t('m.nav2'))} ${esc(t('m.nav3'))}`}</span></div>
    <div class="m-hero">
      <h5>${esc(name)}</h5>
      <p>${esc(t('m.tag.' + type))}</p>
      <span class="m-cta">${esc(t('m.cta'))} →</span>
    </div>
    <div class="m-blocks">${blocks.join('')}</div>`;
}

/* ============================================================
   IMAGE EXPORT — drawn on <canvas>, no external libraries.
   post = 1080×1350 (Instagram feed) · story = 1080×1920
   ============================================================ */
const hex2rgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const mix = (a, b, k) => { const A = hex2rgb(a), B2 = hex2rgb(b); return `rgb(${A.map((v, i) => Math.round(v + (B2[i] - v) * k)).join(',')})`; };
const rgba = (h, a) => `rgba(${hex2rgb(h).join(',')},${a})`;
function rr(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
const SANS = '"Inter", "Noto Sans JP", sans-serif';
function fitFont(ctx, text, maxW, size, build) {
  let s = size; ctx.font = build(s);
  while (ctx.measureText(text).width > maxW && s > 14) { s -= 2; ctx.font = build(s); }
  return s;
}
function wrap(ctx, text, maxW) {
  const words = text.split(LANG === 'ja' ? '' : ' '), lines = []; let cur = '';
  const sep = LANG === 'ja' ? '' : ' ';
  words.forEach((w) => { const tst = cur ? cur + sep + w : w; if (ctx.measureText(tst).width > maxW && cur) { lines.push(cur); cur = w; } else cur = tst; });
  if (cur) lines.push(cur); return lines;
}
const loadImg = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });

async function makeImage(kind) {
  const W = 1080, H = kind === 'story' ? 1920 : 1350, S = kind === 'story';
  const pal = PALETTES[Q.pal || 'midnight'], v = VIBES[Q.vibe || 'minimal'];
  const ac = pal.ac === '#111111' ? '#3e6ae1' : pal.ac;
  const vibeFont = (sz) => `${v.fs === 'italic' ? 'italic ' : ''}${v.w} ${sz}px "${v.font}", "Noto Sans JP", sans-serif`;
  try { await Promise.all([document.fonts.load(vibeFont(40), 'Aa'), document.fonts.load(`600 40px "Inter"`), document.fonts.load(`700 40px "Noto Sans JP"`, '日本')]); } catch (e) {}
  const logo = await loadImg(LOGO_DATA);

  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');

  // background + glow
  x.fillStyle = '#050507'; x.fillRect(0, 0, W, H);
  let g = x.createRadialGradient(W / 2, S ? 520 : 380, 40, W / 2, S ? 520 : 380, 760);
  g.addColorStop(0, rgba(ac, .45)); g.addColorStop(1, rgba(ac, 0));
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  // grain lines
  x.strokeStyle = 'rgba(255,255,255,.035)'; x.lineWidth = 1;
  for (let i = 0; i < W; i += 54) { x.beginPath(); x.moveTo(i + .5, 0); x.lineTo(i + .5, H); x.stroke(); }

  // header
  const top = S ? 90 : 56;
  if (logo) { const lh = S ? 64 : 52, lw = lh * logo.width / logo.height; x.drawImage(logo, 72, top, lw, lh); }
  x.fillStyle = 'rgba(255,255,255,.55)'; x.font = `500 22px ${SANS}`; x.textAlign = 'right'; x.textBaseline = 'middle';
  x.fillText(`${projSlug()}.com`, W - 72, top + (S ? 32 : 26)); x.textAlign = 'left';

  // browser frame
  const fx = 72, fy = top + (S ? 130 : 96), fw = W - 144, fh = S ? 980 : 690;
  x.save(); x.shadowColor = rgba(ac, .55); x.shadowBlur = 90; rr(x, fx, fy, fw, fh, 26); x.fillStyle = pal.bg; x.fill(); x.restore();
  x.save(); rr(x, fx, fy, fw, fh, 26); x.clip();
  x.fillStyle = pal.bg; x.fillRect(fx, fy, fw, fh);
  x.fillStyle = '#16161b'; x.fillRect(fx, fy, fw, 52);
  ['#ff5f57', '#febc2e', '#28c840'].forEach((col, i) => { x.fillStyle = col; x.beginPath(); x.arc(fx + 30 + i * 24, fy + 26, 7, 0, 7); x.fill(); });
  rr(x, fx + 120, fy + 12, fw - 150, 28, 8); x.fillStyle = '#26262d'; x.fill();
  x.fillStyle = 'rgba(255,255,255,.6)'; x.font = `500 16px ${SANS}`; x.fillText(`${projSlug()}.com`, fx + 136, fy + 27);

  // site content
  const cx = fx + 36, cw = fw - 72; let y = fy + 52 + 40;
  const name = projName(), nameTT = v.tt === 'uppercase' ? name.toUpperCase() : name;
  x.fillStyle = pal.fg; x.font = vibeFont(22); x.fillText(nameTT, cx, y);
  x.globalAlpha = .65; x.font = `500 16px ${SANS}`; x.textAlign = 'right';
  x.fillText(Q.langs ? ['EN', 'ES', '日本'].slice(0, +Q.langs).join(' · ') : `${t('m.nav1')}   ${t('m.nav2')}   ${t('m.nav3')}`, cx + cw, y); x.textAlign = 'left'; x.globalAlpha = 1;
  // hero glow
  y += S ? 70 : 40;
  g = x.createRadialGradient(fx + fw / 2, y + 60, 10, fx + fw / 2, y + 60, 300);
  g.addColorStop(0, rgba(pal.ac, .35)); g.addColorStop(1, rgba(pal.ac, 0)); x.fillStyle = g; x.fillRect(fx, y - 120, fw, 420);
  x.textAlign = 'center'; x.fillStyle = pal.fg;
  const hs = fitFont(x, nameTT, cw - 40, S ? 112 : 92, vibeFont);
  y += hs * .9; x.fillText(nameTT, fx + fw / 2, y);
  x.globalAlpha = .75; x.font = `400 ${S ? 24 : 20}px ${SANS}`; y += hs * .36 + (S ? 40 : 30); x.fillText(t('m.tag.' + (Q.type || 'business')), fx + fw / 2, y); x.globalAlpha = 1;
  const cta = `${t('m.cta')} →`; x.font = `600 ${S ? 22 : 18}px ${SANS}`; const ctw = x.measureText(cta).width + 48, cth = S ? 50 : 42;
  y += S ? 36 : 26; rr(x, fx + fw / 2 - ctw / 2, y, ctw, cth, parseInt(v.r) * 1.6 || 2); x.fillStyle = pal.ac; x.fill();
  x.fillStyle = pal.bg; x.fillText(cta, fx + fw / 2, y + cth / 2 + 1); x.textAlign = 'left';
  y += cth + (S ? 50 : 34);

  // blocks
  const types = mockTypes(); const gap = 18, colW = (cw - gap) / 2;
  const isWideAt = (k, i, c) => k === 'admin' || k === 'auto' || (c === 0 && i === types.length - 1);
  // fit as many whole rows as possible (min 120px tall), never squash below that
  const bottom = fy + fh - 24;
  let rows = 0; { let c = 0; types.forEach((k, i) => { const w = isWideAt(k, i, c); if (w && c === 1) { c = 0; rows++; } if (w) rows++; else if (c === 1) { c = 0; rows++; } else c = 1; }); if (c === 1) rows++; }
  const fitRows = Math.max(1, Math.min(rows, Math.floor((bottom - y + gap) / (120 + gap))));
  const bh = Math.min(S ? 180 : 150, (bottom - y + gap) / fitRows - gap);
  let col = 0, by = y;
  const r = parseInt(v.r) * 1.6 || 2;
  const blockBg = mix(pal.bg, pal.fg, .07), line = mix(pal.bg, pal.fg, .16);
  types.forEach((k, i) => {
    const isWide = isWideAt(k, i, col);
    if (isWide && col === 1) { col = 0; by += bh + gap; }
    const bx = cx + (isWide ? 0 : col * (colW + gap)), bw = isWide ? cw : colW;
    if (by + bh > bottom) return;
    rr(x, bx, by, bw, bh, r); x.fillStyle = blockBg; x.fill(); x.strokeStyle = line; x.lineWidth = 1.5; x.stroke();
    drawBlock(x, k, bx + 20, by + 18, bw - 40, bh - 36, pal, r);
    if (isWide) { by += bh + gap; col = 0; } else if (col === 1) { col = 0; by += bh + gap; } else col = 1;
  });
  x.restore();
  x.strokeStyle = 'rgba(255,255,255,.12)'; x.lineWidth = 2; rr(x, fx, fy, fw, fh, 26); x.stroke();

  // price + features
  const q = quote();
  let py = fy + fh + (S ? 110 : 70);
  x.fillStyle = 'rgba(255,255,255,.55)'; x.font = `500 ${S ? 26 : 22}px ${SANS}`; x.fillText((LANG === 'ja' ? t('r.est') : `${t('r.est')} · ${t('r.from')}`).toUpperCase(), 72, py);
  py += S ? 120 : 96;
  const pg = x.createLinearGradient(72, py - 100, 560, py);
  pg.addColorStop(0, '#ffffff'); pg.addColorStop(1, mix(ac, '#ffffff', .35));
  x.fillStyle = pg; x.font = `700 ${S ? 140 : 112}px ${SANS}`; x.fillText(usd(q.total), 68, py);
  const pw = x.measureText(usd(q.total)).width;
  x.fillStyle = 'rgba(255,255,255,.5)'; x.font = `600 ${S ? 28 : 24}px ${SANS}`; x.fillText('USD', 80 + pw, py);

  // features list (right column on post, below on story)
  const feats = [...Q.feats].map((f) => t('q2.' + f));
  x.font = `500 ${S ? 28 : 22}px ${SANS}`;
  // post: one column on the right · story: two columns under the price
  const maxF = S ? 8 : 6, fx0 = S ? 72 : 640, fy0 = S ? py + 100 : fy + fh + 70;
  const colWF = S ? 440 : 370, rowH = S ? 52 : 36;
  const shown = feats.length > maxF ? feats.slice(0, maxF - 1) : feats;
  shown.forEach((f, i) => {
    const fxx = S ? fx0 + (i % 2) * 468 : fx0, fyy = S ? fy0 + Math.floor(i / 2) * rowH : fy0 + i * rowH;
    x.fillStyle = ac; x.beginPath(); x.arc(fxx + 8, fyy - 8, 6, 0, 7); x.fill();
    x.fillStyle = 'rgba(255,255,255,.9)';
    let s = f; while (x.measureText(s).width > colWF - 30 && s.length > 4) s = s.slice(0, -2);
    x.fillText(s === f ? s : s + '…', fxx + 28, fyy);
  });
  if (feats.length > maxF) {
    const i = shown.length, fxx = S ? fx0 + (i % 2) * 468 : fx0, fyy = S ? fy0 + Math.floor(i / 2) * rowH : fy0 + i * rowH;
    x.fillStyle = 'rgba(255,255,255,.5)'; x.fillText(`+${feats.length - shown.length}`, fxx + 28, fyy);
  }

  // footer
  const fy2 = H - (S ? 150 : 110);
  x.fillStyle = 'rgba(255,255,255,.14)'; x.fillRect(72, fy2, W - 144, 2);
  x.fillStyle = 'rgba(255,255,255,.6)'; x.font = `400 ${S ? 24 : 20}px ${SANS}`;
  const inc = `${t('r.server')} ${t('r.server.v')} · ${t('img.inc')}`;
  wrap(x, inc, W - 144).slice(0, 2).forEach((l, i) => x.fillText(l, 72, fy2 + 42 + i * 30));
  x.fillStyle = '#fff'; x.font = `600 ${S ? 26 : 22}px ${SANS}`;
  x.fillText('madcarranzaosorio@gmail.com  ·  @madco.py', 72, H - (S ? 50 : 30));
  x.textAlign = 'right'; x.font = `700 ${S ? 26 : 22}px ${SANS}`; x.fillText('M A D C O', W - 72, H - (S ? 50 : 30)); x.textAlign = 'left';

  return c;
}

function drawBlock(x, k, bx, by, bw, bh, pal, r) {
  x.textBaseline = 'alphabetic';
  const label = { admin: t('m.admin'), live: t('m.live'), shop: t('m.shop'), bot: t('m.bot'), auto: t('m.auto'), gallery: t('m.work'), forms: t('m.forms'), games: t('m.games'), nfc: 'NFC' }[k];
  x.fillStyle = pal.fg; x.globalAlpha = .6; x.font = `600 15px ${SANS}`; x.fillText(label.toUpperCase(), bx, by + 12); x.globalAlpha = 1;
  const cy = by + 30, ch = bh - 30;
  const pill = (px, py, text, size = 14) => { x.font = `600 ${size}px ${SANS}`; const w = x.measureText(text).width + 22; rr(x, px - w, py - size - 6, w, size + 14, r * .7); x.fillStyle = pal.ac; x.fill(); x.fillStyle = pal.bg; x.fillText(text, px - w + 11, py); };
  if (k === 'admin') {
    const hs = [.4, .65, .52, .8, .7, .95, .88], w = (bw - 6 * 10) / 7;
    hs.forEach((h, i) => { x.fillStyle = pal.ac; x.fillRect(bx + i * (w + 10), cy + ch - ch * h, w, ch * h); });
  } else if (k === 'live') {
    x.fillStyle = '#2fd36b'; x.beginPath(); x.arc(bx + 8, cy + ch / 2, 8, 0, 7); x.fill();
    x.fillStyle = pal.fg; x.font = `700 40px ${SANS}`; x.fillText('1,284', bx + 26, cy + ch / 2 + 14);
  } else if (k === 'shop') {
    [0, 1, 2].forEach((i) => { const yy = cy + 10 + i * (ch / 3); x.fillStyle = pal.fg; x.font = `500 16px ${SANS}`; x.fillText(`Item 0${i + 1}`, bx, yy + 12); pill(bx + bw, yy + 12, t('m.add')); });
  } else if (k === 'bot') {
    x.font = `500 15px ${SANS}`;
    const q1 = t('m.bot.q'), a1 = t('m.bot.a');
    let w = Math.min(bw * .8, x.measureText(q1).width + 26); rr(x, bx, cy + 4, w, 32, 14); x.fillStyle = mix(pal.bg, pal.fg, .15); x.fill(); x.fillStyle = pal.fg; x.fillText(q1, bx + 13, cy + 25);
    w = Math.min(bw * .8, x.measureText(a1).width + 26); rr(x, bx + bw - w, cy + 42, w, 32, 14); x.fillStyle = pal.ac; x.fill(); x.fillStyle = pal.bg; x.fillText(a1, bx + bw - w + 13, cy + 63);
  } else if (k === 'auto') {
    const steps = [t('m.auto.1'), t('m.auto.2'), t('m.auto.3') + ' ✓']; const sw = (bw - 2 * 40) / 3;
    steps.forEach((s, i) => {
      const sx = bx + i * (sw + 40); rr(x, sx, cy + ch / 2 - 24, sw, 48, r * .7); x.fillStyle = i === 2 ? pal.ac : mix(pal.bg, pal.fg, .15); x.fill();
      x.fillStyle = i === 2 ? pal.bg : pal.fg; x.font = `600 16px ${SANS}`; x.textAlign = 'center'; x.fillText(s, sx + sw / 2, cy + ch / 2 + 6); x.textAlign = 'left';
      if (i < 2) { x.fillStyle = pal.fg; x.font = `600 22px ${SANS}`; x.fillText('→', sx + sw + 9, cy + ch / 2 + 8); }
    });
  } else if (k === 'gallery') {
    const s = Math.min((bw - 20) / 3, ch);
    [1, .7, .45].forEach((a, i) => { x.globalAlpha = a; rr(x, bx + i * (s + 10), cy + (ch - s) / 2, s, s, r * .6); const gg = x.createLinearGradient(bx, cy, bx + s, cy + s); gg.addColorStop(0, pal.ac); gg.addColorStop(1, mix(pal.ac, pal.bg, .6)); x.fillStyle = gg; x.fill(); });
    x.globalAlpha = 1;
  } else if (k === 'forms') {
    [0, 1].forEach((i) => { rr(x, bx, cy + 4 + i * 34, bw, 26, r * .6); x.fillStyle = pal.bg; x.fill(); x.strokeStyle = mix(pal.bg, pal.fg, .25); x.stroke(); });
    pill(bx + 90, cy + ch - 2, t('m.send'));
  } else if (k === 'games') {
    [['1. Ana', '9,820'], ['2. Luis', '8,410'], ['3. Sofi', '7,005']].forEach(([n, s], i) => {
      const yy = cy + 18 + i * (ch / 3); x.fillStyle = i ? pal.fg : pal.ac; x.font = `${i ? 500 : 700} 17px ${SANS}`;
      x.fillText(n, bx, yy); x.textAlign = 'right'; x.fillText(s, bx + bw, yy); x.textAlign = 'left';
    });
  } else if (k === 'nfc') {
    const ox = bx + 26, oy = cy + ch / 2; x.strokeStyle = pal.ac; x.lineWidth = 4;
    [10, 20, 30].forEach((rad) => { x.beginPath(); x.arc(ox, oy, rad, -Math.PI / 4, Math.PI / 4); x.stroke(); });
    x.fillStyle = pal.fg; x.font = `600 18px ${SANS}`; x.fillText(t('m.nfc'), ox + 50, oy + 6); x.lineWidth = 1;
  }
}

async function downloadImage(kind, btn) {
  const label = btn.textContent; btn.textContent = t('r.dl.busy'); btn.disabled = true;
  try {
    const c = await makeImage(kind);
    const blob = await new Promise((res) => c.toBlob(res, 'image/png'));
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = `${projSlug()}-madco-${kind}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  } catch (e) { console.error(e); }
  btn.textContent = label; btn.disabled = false;
}

/* ---------- Events ---------- */
function pickOpt(val) {
  const s = STEPS[Q.step]; if (!s) return;
  if (s.multi) { Q.feats.has(val) ? Q.feats.delete(val) : Q.feats.add(val); }
  else Q[s.key] = val;
  renderQuiz();
  if (!s.multi) setTimeout(() => { if (STEPS[Q.step] === s) { Q.step++; renderQuiz(); } }, 280);
}
function quizNav(a) {
  if (a === 'next' && Q.step < STEPS.length && answered(STEPS[Q.step])) Q.step++;
  if (a === 'back' && Q.step > 0) Q.step--;
  if (a === 'restart') Object.assign(Q, { step: 0, type: null, feats: new Set(), vibe: null, pal: null, size: null, langs: null });
  renderQuiz();
  if (window.innerWidth < 1000) $('#build').scrollIntoView({ behavior: 'smooth' });
}
function onQuizClick(e) {
  const o = e.target.closest('[data-opt]'); if (o) return pickOpt(o.dataset.opt);
  const d = e.target.closest('[data-dl]'); if (d) return downloadImage(d.dataset.dl, d);
  const n = e.target.closest('[data-q]'); if (n) quizNav(n.dataset.q);
}
/* keys 1–9 pick, Enter = next, Backspace = back — only while the section is on screen */
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
  const r = $('#build').getBoundingClientRect(); if (r.top > innerHeight * .6 || r.bottom < innerHeight * .4) return;
  const s = STEPS[Q.step]; if (!s) return;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= s.opts.length) { e.preventDefault(); pickOpt(s.opts[n - 1]); }
  else if (e.key === 'Enter' && answered(s)) { e.preventDefault(); quizNav('next'); }
  else if (e.key === 'Backspace' && Q.step > 0) { e.preventDefault(); quizNav('back'); }
});
