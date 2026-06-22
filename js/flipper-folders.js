// ============================================================
// Carpetas del Flipper como botones reales — al hacer click,
// marcan la carpeta activa y llevan a la card del proyecto.
// ============================================================
(function () {
  document.addEventListener('content-rendered', init);
  document.addEventListener('DOMContentLoaded', init);
  let bound = false;

  const FOLDER_ANIMATIONS = {
    badusb: 'idle',
    subghz: 'null_signal',
    nfc: 'access',
    infrared: 'emulate',
    gpio: 'idle',
    keyclone: 'access',
    apps: 'null_signal',
  };

  function init() {
    if (bound) return;
    const rows = document.querySelectorAll('.flipper-fs__row');
    if (!rows.length) return;
    bound = true;

    rows.forEach(row => {
      row.addEventListener('click', () => {
        rows.forEach(r => r.classList.remove('is-active'));
        row.classList.add('is-active');

        const target = row.getAttribute('data-folder-target');

        if (window.flipperMascot && FOLDER_ANIMATIONS[target]) {
          window.flipperMascot.setAnimation(FOLDER_ANIMATIONS[target]);
        }

        const id = target === 'apps' ? 'flipper-recommended-anchor' : 'flipper-card-' + target;
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('flipper-card--pulse');
        setTimeout(() => el.classList.remove('flipper-card--pulse'), 1200);
      });
    });
  }
})();
