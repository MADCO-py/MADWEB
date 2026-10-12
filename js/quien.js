// ============================================================
// ¿Necesitas una página web? — la ventanita de ejemplo va
// cambiando entre proyectos reales cada pocos segundos.
// ============================================================
(function () {
  const screen = document.querySelector('.qw-mock__screen');
  if (!screen) return;
  const imgs = [...screen.querySelectorAll('img')];
  const url = document.querySelector('[data-qw-url]');
  if (imgs.length < 2) return;
  let i = 0, timer = 0;

  const show = (n) => {
    imgs[i].classList.remove('is-on');
    i = (n + imgs.length) % imgs.length;
    imgs[i].classList.add('is-on');
    if (url) url.textContent = imgs[i].dataset.qwUrlText || '';
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => show(i + 1), 3200); };
  const stop = () => clearInterval(timer);

  // Solo rota mientras está en pantalla
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())).observe(screen);
  } else {
    start();
  }
})();
