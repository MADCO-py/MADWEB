// ============================================================
// Sección Flipper Zero — naranja constante (sin morph interno).
// Solo aplica un glow sutil que respira, sin cambios de color
// que causen cortes.
// ============================================================
(function () {
  const path = document.querySelector('.ciber-path');
  if (!path) return;

  // Naranja Flipper fijo en toda la sección
  path.style.setProperty('--ciber-live-bg', 'rgb(26, 13, 0)');
  path.style.setProperty('--ciber-live-accent', 'rgb(255, 122, 26)');
  path.style.setProperty('--ciber-live-glow', 'rgb(255, 122, 26)');
})();
