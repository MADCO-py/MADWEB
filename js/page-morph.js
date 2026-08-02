// ============================================================
// PAGE MORPH — fondo global que cambia de color con el scroll
// Transición ULTRA suave: interpola de forma continua entre
// los colores de todas las secciones según la posición exacta.
// ============================================================
(function () {
  const pageBg = document.getElementById('page-bg');
  if (!pageBg) return;

  const HERO_COLOR = [255, 255, 255];

  function parseColor(str) { return str.split(',').map(Number); }
  function smoothstep(t) { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); }
  function lerp(a, b, t) { return Math.round(a + (b - a) * t); }
  function lerpColor(c1, c2, t) {
    const e = smoothstep(t);
    return [lerp(c1[0],c2[0],e), lerp(c1[1],c2[1],e), lerp(c1[2],c2[2],e)];
  }
  function toRgb(c) { return `rgb(${c[0]},${c[1]},${c[2]})`; }

  let sections = [];

  function build() {
    sections = [{ color: HERO_COLOR, center: 0 }];
    document.querySelectorAll('.page-section[data-bg-color]').forEach(el => {
      sections.push({ el, color: parseColor(el.getAttribute('data-bg-color')), center: 0 });
    });
  }

  function recalc() {
    sections.forEach((s, i) => {
      if (i === 0) {
        // Hero: su centro es el inicio de la página
        s.center = 0;
      } else {
        const rect = s.el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        // El "centro" de influencia de cada sección es su punto medio superior
        s.center = top + rect.height * 0.4;
      }
    });
  }

  function update() {
    if (sections.length === 0) return;
    // Punto de referencia: mitad del viewport
    const ref = window.scrollY + window.innerHeight * 0.5;

    let color;
    if (ref <= sections[0].center) {
      color = sections[0].color;
    } else if (ref >= sections[sections.length - 1].center) {
      color = sections[sections.length - 1].color;
    } else {
      // Encontrar entre qué dos centros está el punto de referencia
      // e interpolar de forma continua entre TODA la trayectoria
      for (let i = 0; i < sections.length - 1; i++) {
        const a = sections[i], b = sections[i + 1];
        if (ref >= a.center && ref < b.center) {
          const t = (ref - a.center) / (b.center - a.center);
          color = lerpColor(a.color, b.color, t);
          break;
        }
      }
    }
    if (color) pageBg.style.backgroundColor = toRgb(color);
  }

  function init() { build(); recalc(); update(); }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { update(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => { recalc(); update(); });

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', () => { recalc(); update(); });
  // Recalcular varias veces por si cargan imágenes/videos que cambian la altura
  setTimeout(() => { recalc(); update(); }, 300);
  setTimeout(() => { recalc(); update(); }, 900);
  setTimeout(() => { recalc(); update(); }, 2000);
})();
