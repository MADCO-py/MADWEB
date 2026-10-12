// ============================================================
// MENÚ — abre/cierra el menú de pantalla completa y marca con un
// punto la sección en la que estás (como el "• HOMBRE" de Zara).
// ============================================================
(function () {
  const burger = document.querySelector('.zh__burger');
  const menu = document.getElementById('zm');
  if (!burger || !menu) return;
  const isEN = () => document.documentElement.getAttribute('data-lang') === 'en';
  const links = [...menu.querySelectorAll('.zm__link[href^="#"]')];
  const sections = links.map((l) => document.querySelector(l.getAttribute('href')));

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.documentElement.classList.toggle('zm-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? (isEN() ? 'Close menu' : 'Cerrar menú') : (isEN() ? 'Open menu' : 'Abrir menú'));
    if (open) {
      markActive();
      (menu.querySelector('.zm__link.is-active') || menu.querySelector('a')).focus({ preventScroll: true });
    }
  }
  burger.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); burger.focus(); }
  });
  // Cualquier link del menú lo cierra (los de la misma página hacen scroll solos)
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

  // La sección actual es la última cuyo borde superior ya pasó el 40% de la pantalla
  function markActive() {
    let i = -1;
    sections.forEach((s, n) => { if (s && s.getBoundingClientRect().top <= innerHeight * 0.4) i = n; });
    links.forEach((l, n) => l.classList.toggle('is-active', n === i));
  }
})();
