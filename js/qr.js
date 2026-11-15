/* ============================================================
   QR — (1) live QR that keeps changing between real projects,
        (2) share QR on the quiz result (opens the same project on a phone).
   Needs the `qrcode` global (qrcode-generator, loaded from cdnjs in index.html).
   If it fails to load, QR blocks simply stay hidden.
   ============================================================ */
const SITE_URL = 'https://madco-py.github.io/MADWEB/'; // used when the page is opened as a local file

function qrSVG(text, fg = '#000', bg = '#fff') {
  if (typeof qrcode !== 'function') return '';
  const q = qrcode(0, 'M'); q.addData(text); q.make();
  const n = q.getModuleCount(), m = 2; // 2-module quiet zone
  let d = '';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c + m} ${r + m}h1v1h-1z`;
  const s = n + m * 2;
  return `<svg viewBox="0 0 ${s} ${s}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"><rect width="${s}" height="${s}" fill="${bg}"/><path d="${d}" fill="${fg}"/></svg>`;
}

/* ---------- share link: quiz answers live in the URL hash ---------- */
function baseURL() {
  return /^https?:/.test(location.protocol) ? location.origin + location.pathname : SITE_URL;
}
function shareURL() {
  const parts = [Q.type, [...Q.feats].join('-'), Q.vibe, Q.pal, Q.size, Q.langs, encodeURIComponent((Q.name || '').trim())];
  return `${baseURL()}?lang=${LANG}#p=${parts.join('.')}`;
}
function restoreFromHash() {
  const m = location.hash.match(/^#p=(.+)$/); if (!m) return false;
  const [type, feats, vibe, pal, size, langs, ...rest] = m[1].split('.');
  const ok = (v, list) => (list.includes(v) ? v : null);
  Q.type = ok(type, STEPS[0].opts);
  Q.feats = new Set((feats || '').split('-').filter((f) => STEPS[1].opts.includes(f)));
  Q.vibe = ok(vibe, STEPS[2].opts); Q.pal = ok(pal, STEPS[3].opts);
  Q.size = ok(size, STEPS[4].opts); Q.langs = ok(langs, STEPS[5].opts);
  try { Q.name = decodeURIComponent(rest.join('.')).slice(0, 28); } catch (e) { Q.name = ''; }
  if (!Q.type || !Q.feats.size || !Q.vibe || !Q.pal || !Q.size || !Q.langs) return false;
  Q.step = STEPS.length;
  return true;
}
function updateShareQR() {
  const box = $('#rQR'); if (!box) return;
  const svg = qrSVG(shareURL());
  box.closest('.r-qr').hidden = !svg;
  box.innerHTML = svg;
}

/* ---------- live QR (changes every few seconds) ---------- */
let liveIdx = 0, liveTimer;
function liveList() { return PROJECTS.filter((p) => p.url); }
function renderLiveQR() {
  const sec = $('#liveqr'); if (!sec) return;
  const list = liveList(); const p = list[liveIdx % list.length];
  const svg = qrSVG(p.url);
  if (!svg) { sec.hidden = true; return; }
  sec.hidden = false;
  const code = $('#liveCode');
  code.classList.remove('swap'); void code.offsetWidth; code.classList.add('swap');
  code.innerHTML = svg;
  $('#liveName').textContent = p.name;
  $('#liveKind').textContent = L(p.kind);
  $('#liveDots').innerHTML = list.map((_, i) => `<i class="${i === liveIdx % list.length ? 'on' : ''}"></i>`).join('');
  const bar = $('#liveBar'); bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run');
}
function startLiveQR() {
  clearInterval(liveTimer);
  renderLiveQR();
  liveTimer = setInterval(() => { liveIdx++; renderLiveQR(); }, 3500);
}
