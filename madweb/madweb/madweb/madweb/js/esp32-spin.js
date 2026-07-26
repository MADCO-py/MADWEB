// ============================================================
// La placa ESP32 rota un poco cada vez que el usuario
// desliza la rueda del mouse (o hace scroll con trackpad).
// ============================================================
(function () {
  const badge = document.querySelector('.esp32-board-badge');
  if (!badge) return;

  let rotation = 0;
  let ticking = false;

  window.addEventListener('wheel', (e) => {
    rotation += e.deltaY * 0.6;
    if (!ticking) {
      requestAnimationFrame(() => {
        badge.style.transform = `rotate(${rotation}deg)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
