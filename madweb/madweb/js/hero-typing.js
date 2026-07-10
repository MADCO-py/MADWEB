// ============================================================
// Hero typing effect — escribe "MADCO.py" una vez, cursor parpadea
// ============================================================
(function () {
  const el = document.querySelector('[data-typing-target]');
  if (!el) return;
  const text = el.getAttribute('data-typing-target') || el.textContent.trim();
  el.textContent = '';

  const cursorSpan = document.createElement('span');
  cursorSpan.className = 'hero__type-cursor';
  cursorSpan.textContent = '|';

  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursorSpan);
      i++;
      setTimeout(type, 78);
    }
  }
  setTimeout(type, 400);
})();
