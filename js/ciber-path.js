// ============================================================
// Sección Flipper Zero — naranja constante (sin morph interno).
// Solo aplica un glow sutil que respira, sin cambios de color
// que causen cortes.
// ============================================================
(function () {
  const path = document.querySelector('.ciber-path');
  if (!path) return;

  // Naranja Flipper fijo en toda la sección
  path.style.setProperty('--ciber-live-bg', 'rgb(15, 15, 15)');
  path.style.setProperty('--ciber-live-accent', 'rgb(143, 143, 143)');
  path.style.setProperty('--ciber-live-glow', 'rgb(143, 143, 143)');
})();
