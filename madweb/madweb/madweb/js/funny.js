// ============================================================
// Botón caótico — easter egg de la sección Cosas Graciosas
// "No toques" esquiva el cursor, luego se multiplica en botones
// random hasta que aparece "No me presiones" entre el caos.
// ============================================================
(function () {
  const zone = document.querySelector('[data-chaos-zone]');
  if (!zone) return;

  const noHover = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const initialBtn = zone.querySelector('[data-chaos-initial]');
  const doneMsg = zone.querySelector('[data-chaos-done]');
  let dodges = 0;
  const MAX_DODGES = 5;

  const labels = [
    'No mires', 'Quieto ahí', 'Para', 'Ya basta', 'Última vez',
    'En serio, no', 'Mala idea', 'Detente', 'No otra vez', '¿Por qué?'
  ];

  function randomPos() {
    const rect = zone.getBoundingClientRect();
    const w = 140, h = 50;
    const x = Math.random() * (rect.width - w);
    const y = Math.random() * (rect.height - h - 80) + 20;
    return { x, y };
  }

  function dodge() {
    if (dodges >= MAX_DODGES) return;
    dodges++;
    const { x, y } = randomPos();
    initialBtn.style.position = 'absolute';
    initialBtn.style.left = x + 'px';
    initialBtn.style.top = y + 'px';
    initialBtn.textContent = dodges < MAX_DODGES ? 'No toques' : 'Bueno, ya, tócalo';
  }

  if (!noHover) {
    initialBtn.addEventListener('mouseenter', dodge);
  }

  initialBtn.addEventListener('click', () => {
    if (noHover && dodges < MAX_DODGES) {
      dodge();
      return;
    }
    spawnChaos();
  });

  function spawnChaos() {
    initialBtn.style.display = 'none';
    const count = 9;
    for (let i = 0; i < count; i++) {
      const clone = document.createElement('button');
      clone.className = 'chaos-btn chaos-btn--clone';
      clone.textContent = labels[i % labels.length];
      const { x, y } = randomPos();
      clone.style.left = x + 'px';
      clone.style.top = y + 'px';
      clone.style.transform = `rotate(${(Math.random() * 16 - 8).toFixed(1)}deg)`;
      clone.addEventListener('click', () => {
        clone.remove();
      });
      zone.appendChild(clone);
    }
    const finalBtn = document.createElement('button');
    finalBtn.className = 'chaos-btn chaos-btn--final chaos-btn--clone';
    finalBtn.textContent = 'No me presiones';
    const { x, y } = randomPos();
    finalBtn.style.left = x + 'px';
    finalBtn.style.top = y + 'px';
    finalBtn.addEventListener('click', endChaos);
    zone.appendChild(finalBtn);
  }

  function endChaos() {
    zone.querySelectorAll('.chaos-btn--clone').forEach((b) => {
      b.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      b.style.opacity = '0';
      b.style.transform += ' scale(0.6)';
      setTimeout(() => b.remove(), 400);
    });
    if (doneMsg) doneMsg.classList.add('is-visible');
  }
})();
