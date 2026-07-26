// ============================================================
// Sendero Ciberseguridad — interpola morado (Kali) → naranja (Flipper)
// mientras el usuario hace scroll dentro de la sección.
// ============================================================
(function () {
  const path = document.querySelector('.ciber-path');
  if (!path) return;

  const hexToRgb = (hex) => {
    const v = hex.replace('#', '');
    return [
      parseInt(v.substring(0, 2), 16),
      parseInt(v.substring(2, 4), 16),
      parseInt(v.substring(4, 6), 16),
    ];
  };
  const lerp = (a, b, t) => Math.round(a + (b - a) * t);
  const rgbToCss = (rgb) => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

  const start = {
    bg: hexToRgb('#0a1626'),
    accent: hexToRgb('#2f6fad'),
    glow: hexToRgb('#14304d'),
  };
  const end = {
    bg: hexToRgb('#1a0d00'),
    accent: hexToRgb('#ff7a1a'),
    glow: hexToRgb('#ff7a1a'),
  };

  function update() {
    const rect = path.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const traveled = -rect.top;
    let t = total > 0 ? traveled / total : 0;
    t = Math.min(1, Math.max(0, t));
    // easing suave para que la transición no se sienta lineal/brusca
    const eased = t * t * (3 - 2 * t);

    path.style.setProperty('--ciber-live-bg', rgbToCss([
      lerp(start.bg[0], end.bg[0], eased),
      lerp(start.bg[1], end.bg[1], eased),
      lerp(start.bg[2], end.bg[2], eased),
    ]));
    path.style.setProperty('--ciber-live-accent', rgbToCss([
      lerp(start.accent[0], end.accent[0], eased),
      lerp(start.accent[1], end.accent[1], eased),
      lerp(start.accent[2], end.accent[2], eased),
    ]));
    path.style.setProperty('--ciber-live-glow', rgbToCss([
      lerp(start.glow[0], end.glow[0], eased),
      lerp(start.glow[1], end.glow[1], eased),
      lerp(start.glow[2], end.glow[2], eased),
    ]));
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { update(); ticking = false; });
      ticking = true;
    }
  });
  window.addEventListener('resize', update);
  update();
})();
