// ============================================================
// PREFERENCIAS — tema (oscuro/claro) e idioma (ES/EN).
// El HTML está escrito en español. Para inglés se reemplaza
// cada texto usando el diccionario de js/i18n-en.js; el texto
// original se guarda para poder volver al español sin recargar.
// Lo que se agrega después (tarjetas, mensajes del ajedrez…)
// también se traduce gracias a un MutationObserver.
// ============================================================
(function () {
  const html = document.documentElement;
  const DICT = window.I18N_EN || {};
  const PATTERNS = window.I18N_EN_PATTERNS || [];
  const ATTRS = ['placeholder', 'aria-label', 'title', 'alt', 'data-text', 'data-label', 'data-again'];
  const SKIP = 'script, style, pre, code, textarea, [data-i18n-skip]';

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* modo privado */ } },
  };
  const lang = () => (html.getAttribute('data-lang') === 'en' ? 'en' : 'es');
  const norm = (s) => s.replace(/\s+/g, ' ').trim();

  function lookup(text) {
    const key = norm(text);
    if (!key) return null;
    if (Object.prototype.hasOwnProperty.call(DICT, key)) return DICT[key];
    for (const [re, rep] of PATTERNS) {
      if (re.test(key)) return key.replace(re, rep);
    }
    return null;
  }

  /* ---------- Texto ---------- */
  const ORIG = new WeakMap();   // nodo -> texto en español
  const SHOWN = new WeakMap();  // nodo -> último texto que pusimos nosotros

  function skipped(node) {
    const el = node.nodeType === 1 ? node : node.parentElement;
    return !el || !!el.closest(SKIP);
  }

  function doText(n) {
    if (skipped(n)) return;
    const current = n.nodeValue;
    // Si el texto cambió por fuera (otro script), ese es el nuevo original
    if (!ORIG.has(n) || current !== SHOWN.get(n)) ORIG.set(n, current);
    const orig = ORIG.get(n);
    let next = orig;
    if (lang() === 'en') {
      const t = lookup(orig);
      if (t != null) {
        const lead = orig.match(/^\s*/)[0], trail = orig.match(/\s*$/)[0];
        next = lead + t + trail;
      }
    }
    SHOWN.set(n, next);
    if (current !== next) n.nodeValue = next;
  }

  /* ---------- Atributos ---------- */
  const ORIG_A = new WeakMap();
  const SHOWN_A = new WeakMap();

  function doAttr(el, name) {
    if (!el.hasAttribute(name) || el.closest('[data-i18n-skip]')) return;
    const o = ORIG_A.get(el) || {}, s = SHOWN_A.get(el) || {};
    const current = el.getAttribute(name);
    if (!(name in o) || current !== s[name]) o[name] = current;
    let next = o[name];
    if (lang() === 'en') {
      const t = lookup(o[name]);
      if (t != null) next = t;
    }
    s[name] = next;
    ORIG_A.set(el, o); SHOWN_A.set(el, s);
    if (current !== next) el.setAttribute(name, next);
  }

  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    if (root.matches(SKIP)) return;
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = tw.nextNode())) doText(n);
    const sel = ATTRS.map((a) => '[' + a + ']').join(',');
    if (root.matches(sel)) ATTRS.forEach((a) => doAttr(root, a));
    root.querySelectorAll(sel).forEach((el) => ATTRS.forEach((a) => doAttr(el, a)));
  }

  /* ---------- Título y descripción de la página ---------- */
  const meta = document.querySelector('meta[name="description"]');
  const HEAD_ES = { title: document.title, desc: meta ? meta.content : '' };
  function doHead() {
    const en = lang() === 'en';
    document.title = en ? (lookup(HEAD_ES.title) || HEAD_ES.title) : HEAD_ES.title;
    if (meta) meta.content = en ? (lookup(HEAD_ES.desc) || HEAD_ES.desc) : HEAD_ES.desc;
  }

  /* ---------- Idioma ---------- */
  const langBtns = document.querySelectorAll('.lang-switch [data-lang]');
  function setLang(l, persist) {
    html.setAttribute('data-lang', l);
    html.lang = l;
    langBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    walk(document.body);
    doHead();
    if (persist) store.set('madco-lang', l);
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
    updateThemeBtn();
  }
  langBtns.forEach((b) => b.addEventListener('click', () => { if (b.dataset.lang !== lang()) setLang(b.dataset.lang, true); }));

  /* ---------- Tema ---------- */
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const theme = () => (html.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  function updateThemeBtn() {
    if (!themeBtn) return;
    const dark = theme() === 'dark';
    themeBtn.innerHTML = '<i class="ph ph-' + (dark ? 'sun' : 'moon') + '"></i>';
    const label = dark
      ? (lang() === 'en' ? 'Switch to light mode' : 'Cambiar a modo claro')
      : (lang() === 'en' ? 'Switch to dark mode' : 'Cambiar a modo oscuro');
    themeBtn.setAttribute('aria-label', label);
    themeBtn.setAttribute('title', label);
  }
  let switchTimer = 0;
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = theme() === 'dark' ? 'light' : 'dark';
      html.classList.add('theme-switching');
      clearTimeout(switchTimer);
      switchTimer = setTimeout(() => html.classList.remove('theme-switching'), 600);
      html.setAttribute('data-theme', next);
      store.set('madco-theme', next);
      updateThemeBtn();
      document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    });
  }

  /* ---------- Contenido que aparece después ---------- */
  new MutationObserver((list) => {
    if (lang() !== 'en') return;
    for (const m of list) {
      if (m.type === 'characterData') {
        if (m.target.nodeValue !== SHOWN.get(m.target)) doText(m.target);
      } else if (m.type === 'attributes') {
        const s = SHOWN_A.get(m.target);
        if (!s || m.target.getAttribute(m.attributeName) !== s[m.attributeName]) doAttr(m.target, m.attributeName);
      } else {
        m.addedNodes.forEach(walk);
      }
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  // Arranque: main.js pinta las secciones en DOMContentLoaded, así que
  // traducimos después de eso (y el observer cubre lo demás).
  function start() {
    updateThemeBtn();
    if (lang() === 'en') setLang('en', false);
    else langBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === 'es')));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(start, 0));
  else start();
})();
