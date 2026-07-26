// ============================================================
// Scroll reveal — agrega .is-visible cuando el elemento entra
// Se ejecuta al cargar y otra vez cuando main.js inyecta
// contenido dinámico (evento "content-rendered").
// ============================================================
(function () {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  function scan() {
    document.querySelectorAll('.reveal:not([data-observed]), .reveal-stagger:not([data-observed])').forEach((el) => {
      el.setAttribute('data-observed', '1');
      io.observe(el);
    });
    document.querySelectorAll('.reveal-stagger:not([data-staggered])').forEach((group) => {
      group.setAttribute('data-staggered', '1');
      [...group.children].forEach((child, i) => {
        child.style.transitionDelay = `${i * 80}ms`;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', scan);
  document.addEventListener('content-rendered', scan);
  scan();
})();
