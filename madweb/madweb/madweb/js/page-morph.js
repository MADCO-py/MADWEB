// ============================================================
// PAGE MORPH — el fondo de toda la página cambia de color
// suavemente según qué sección está visible mientras haces scroll.
// ============================================================
(function () {
  const pageBg = document.getElementById('page-bg');
  if (!pageBg) return;

  // ---- Colores por sección (coinciden con data-bg-color en el HTML) ----
  const HERO_COLOR = [255, 255, 255];

  function parseColor(str) {
    return str.split(',').map(Number);
  }

  function lerp(a, b, t) {
    return Math.round(a + (b - a) * t);
  }
  function smoothstep(t) {
    return t * t * (3 - 2 * t);
  }
  function lerpColor(c1, c2, t) {
    const e = smoothstep(Math.min(1, Math.max(0, t)));
    return [lerp(c1[0], c2[0], e), lerp(c1[1], c2[1], e), lerp(c1[2], c2[2], e)];
  }
  function toRgb(c) {
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }

  // ---- Recopilar secciones y sus colores al cargar ----
  let sections = [];

  function buildSections() {
    sections = [];
    // Hero: usa todo el viewport hasta el primer section
    sections.push({ top: 0, bottom: 0, color: HERO_COLOR });

    document.querySelectorAll('.page-section[data-bg-color]').forEach(el => {
      const color = parseColor(el.getAttribute('data-bg-color'));
      sections.push({ el, color });
    });
  }

  function recalcPositions() {
    sections.forEach((s, i) => {
      if (i === 0) {
        s.top = 0;
        const nextEl = sections[1] && sections[1].el;
        s.bottom = nextEl ? nextEl.getBoundingClientRect().top + window.scrollY : window.innerHeight;
      } else {
        const rect = s.el.getBoundingClientRect();
        s.top = rect.top + window.scrollY;
        s.bottom = s.top + rect.height;
      }
    });
  }

  function update() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    // Punto de referencia: 40% del viewport (dónde "estamos mirando")
    const viewPoint = scrollY + vh * 0.4;

    let color;

    if (sections.length === 0) {
      color = HERO_COLOR;
    } else if (viewPoint <= sections[0].bottom) {
      color = sections[0].color;
    } else if (viewPoint >= sections[sections.length - 1].top) {
      color = sections[sections.length - 1].color;
    } else {
      // Encontrar entre qué dos secciones estamos
      for (let i = 0; i < sections.length - 1; i++) {
        const curr = sections[i];
        const next = sections[i + 1];
        if (viewPoint >= curr.top && viewPoint < next.top) {
          // Dentro de curr: qué tan cerca estamos del final de curr
          const transitionStart = curr.bottom - vh * 0.3;
          const transitionEnd = next.top + vh * 0.1;
          if (viewPoint < transitionStart) {
            color = curr.color;
          } else if (viewPoint > transitionEnd) {
            color = next.color;
          } else {
            const t = (viewPoint - transitionStart) / (transitionEnd - transitionStart);
            color = lerpColor(curr.color, next.color, t);
          }
          break;
        }
      }
      if (!color) color = sections[sections.length - 1].color;
    }

    pageBg.style.backgroundColor = toRgb(color);
  }

  // ---- Setup ----
  function init() {
    buildSections();
    recalcPositions();
    update();
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { update(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    recalcPositions();
    update();
  });

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', () => { recalcPositions(); update(); });
  setTimeout(() => { recalcPositions(); update(); }, 400);
})();
