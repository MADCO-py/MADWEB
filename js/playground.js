// ============================================================
// Playground de "Webs Interactivas": cada bloque es una demo
// independiente. Si falta su HTML, simplemente no hace nada.
// ============================================================
(function () {
  const root = document.getElementById('playground');
  if (!root) return;
  const $ = (name) => root.querySelector('[data-pg="' + name + '"]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 01 — Arrastrar con inercia y rebote en las orillas
  const drag = $('drag');
  if (drag) {
    drag.querySelectorAll('.pg-drag__item').forEach((item) => {
      let x = 0, y = 0, vx = 0, vy = 0, lastX = 0, lastY = 0, raf = 0;

      const limits = () => ({
        minX: -item.offsetLeft,
        minY: -item.offsetTop,
        maxX: drag.clientWidth - item.offsetLeft - item.offsetWidth,
        maxY: drag.clientHeight - item.offsetTop - item.offsetHeight,
      });
      const place = () => { item.style.transform = 'translate(' + x + 'px,' + y + 'px)'; };

      function glide() {
        const l = limits();
        vx *= 0.94; vy *= 0.94;
        x += vx; y += vy;
        if (x < l.minX) { x = l.minX; vx = -vx * 0.7; }
        if (x > l.maxX) { x = l.maxX; vx = -vx * 0.7; }
        if (y < l.minY) { y = l.minY; vy = -vy * 0.7; }
        if (y > l.maxY) { y = l.maxY; vy = -vy * 0.7; }
        place();
        if (Math.abs(vx) + Math.abs(vy) > 0.2) raf = requestAnimationFrame(glide);
      }

      item.addEventListener('pointerdown', (e) => {
        cancelAnimationFrame(raf);
        item.setPointerCapture(e.pointerId);
        item.classList.add('is-grab');
        lastX = e.clientX; lastY = e.clientY; vx = vy = 0;
      });
      item.addEventListener('pointermove', (e) => {
        if (!item.classList.contains('is-grab')) return;
        const l = limits();
        vx = e.clientX - lastX; vy = e.clientY - lastY;
        x = Math.min(l.maxX, Math.max(l.minX, x + vx));
        y = Math.min(l.maxY, Math.max(l.minY, y + vy));
        lastX = e.clientX; lastY = e.clientY;
        place();
      });
      const release = () => {
        if (!item.classList.contains('is-grab')) return;
        item.classList.remove('is-grab');
        if (!reduced) raf = requestAnimationFrame(glide);
      };
      item.addEventListener('pointerup', release);
      item.addEventListener('pointercancel', release);
    });
  }

  // 02 — Cambiar el color de acento de todo el playground
  const colors = $('colors');
  const hex = $('hex');
  if (colors) {
    colors.addEventListener('click', (e) => {
      const sw = e.target.closest('.pg-swatch');
      if (!sw) return;
      const c = sw.style.getPropertyValue('--c').trim();
      root.style.setProperty('--pg', c);
      colors.querySelectorAll('.pg-swatch').forEach((s) => s.classList.toggle('is-on', s === sw));
      if (hex) hex.textContent = c.toUpperCase();
    });
  }

  // 03 — Botones: imán, onda y gelatina
  const magnet = $('magnet');
  if (magnet && !reduced) {
    magnet.addEventListener('pointermove', (e) => {
      const r = magnet.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      magnet.style.transform = 'translate(' + dx * 0.35 + 'px,' + dy * 0.5 + 'px)';
    });
    magnet.addEventListener('pointerleave', () => { magnet.style.transform = ''; });
  }

  const ripple = $('ripple');
  if (ripple) {
    ripple.addEventListener('click', (e) => {
      const r = ripple.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2.4;
      const dot = document.createElement('span');
      dot.className = 'pg-ripple';
      dot.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - r.left) + 'px;top:' + (e.clientY - r.top) + 'px';
      ripple.appendChild(dot);
      dot.addEventListener('animationend', () => dot.remove());
    });
  }

  const jelly = $('jelly');
  if (jelly) {
    jelly.addEventListener('click', () => {
      jelly.classList.remove('is-jelly');
      void jelly.offsetWidth; // reinicia la animación
      jelly.classList.add('is-jelly');
    });
  }

  // 04 — Hacer temblar la pantalla completa
  const quake = $('quake');
  const power = $('quake-power');
  const powerVal = $('quake-val');
  if (power && powerVal) power.addEventListener('input', () => { powerVal.textContent = power.value; });
  if (quake) {
    quake.addEventListener('click', () => {
      const p = Number(power ? power.value : 5);
      const body = document.body;
      body.style.setProperty('--pg-amp', (reduced ? 2 : p * 2.4) + 'px');
      body.style.setProperty('--pg-dur', (0.35 + p * 0.09) + 's');
      body.classList.remove('pg-shaking');
      void body.offsetWidth;
      body.classList.add('pg-shaking');
      if (navigator.vibrate) navigator.vibrate(60 + p * 30);
    });
    document.body.addEventListener('animationend', (e) => {
      if (e.animationName === 'pg-shake') document.body.classList.remove('pg-shaking');
    });
  }

  // 05 — Tarjeta 3D que sigue el mouse
  const tilt = $('tilt');
  if (tilt && !reduced) {
    const card = tilt.querySelector('.pg-tilt__card');
    const glare = tilt.querySelector('.pg-tilt__glare');
    tilt.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.transition = 'transform 0.1s linear';
      card.style.transform = 'rotateY(' + (px - 0.5) * 30 + 'deg) rotateX(' + (0.5 - py) * 30 + 'deg) scale(1.04)';
      glare.style.setProperty('--gx', px * 100 + '%');
      glare.style.setProperty('--gy', py * 100 + '%');
    });
    tilt.addEventListener('pointerleave', () => {
      card.style.transition = '';
      card.style.transform = '';
    });
  }

  // 06 — Confeti desde el punto del clic
  const burst = $('burst');
  if (burst) {
    burst.addEventListener('click', (e) => {
      const r = burst.getBoundingClientRect();
      const keyboard = e.detail === 0; // Enter/Espacio: sale del centro
      const ox = keyboard ? r.width / 2 : e.clientX - r.left;
      const oy = keyboard ? r.height / 2 : e.clientY - r.top;
      const accent = getComputedStyle(root).getPropertyValue('--pg').trim();
      const palette = [accent, '#ffffff', '#ff3d7f', '#ffd400', '#7cff4f'];
      for (let i = 0; i < (reduced ? 12 : 40); i++) {
        const bit = document.createElement('span');
        const a = Math.random() * Math.PI * 2;
        const d = 60 + Math.random() * 120;
        bit.className = 'pg-confetti';
        bit.style.left = ox + 'px';
        bit.style.top = oy + 'px';
        bit.style.background = palette[i % palette.length];
        bit.style.setProperty('--x', Math.cos(a) * d + 'px');
        bit.style.setProperty('--y', Math.sin(a) * d + 40 + 'px');
        bit.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
        burst.appendChild(bit);
        bit.addEventListener('animationend', () => bit.remove());
      }
    });
  }

  // 07 — Letras que ondulan y texto que se descifra
  const wave = $('wave');
  if (wave) {
    wave.innerHTML = [...wave.textContent].map((ch, i) =>
      '<span style="--i:' + i + '">' + (ch === ' ' ? '&nbsp;' : ch) + '</span>'
    ).join('');
  }

  const scramble = $('scramble');
  if (scramble) {
    const target = scramble.dataset.text;
    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*@$';
    let timer = 0;
    scramble.addEventListener('pointerenter', () => {
      let frame = 0;
      clearInterval(timer);
      timer = setInterval(() => {
        scramble.textContent = [...target].map((ch, i) => {
          if (ch === ' ' || i < frame / 2) return ch;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join('');
        if (++frame > target.length * 2) clearInterval(timer);
      }, 35);
    });
  }

  // 08 — Tamaño, giro y forma con transiciones suaves
  const shape = $('shape');
  const size = $('size');
  const spin = $('spin');
  const toggle = $('toggle');
  if (shape) {
    if (size) size.addEventListener('input', () => {
      shape.style.width = shape.style.height = size.value + 'px';
    });
    if (spin) spin.addEventListener('input', () => {
      shape.style.transform = 'rotate(' + spin.value + 'deg)';
    });
    if (toggle) toggle.addEventListener('click', () => {
      const on = toggle.getAttribute('aria-checked') !== 'true';
      toggle.setAttribute('aria-checked', String(on));
      shape.classList.toggle('is-round', on);
    });
  }

  // 09 — Contador que sube suavemente
  const count = $('count');
  const countBtn = $('count-btn');
  if (count) {
    let value = 0, shown = 0, raf = 0;
    const fmt = new Intl.NumberFormat('es-GT');
    const animate = () => {
      cancelAnimationFrame(raf);
      const from = shown, start = performance.now(), dur = reduced ? 1 : 1200;
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        shown = Math.round(from + (value - from) * (1 - Math.pow(1 - t, 3)));
        count.textContent = fmt.format(shown);
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    if (countBtn) countBtn.addEventListener('click', () => { value += 1000; animate(); });

    // Arranca solo la primera vez que el contador entra en pantalla
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { value = 12480; animate(); io.disconnect(); }
      }, { threshold: 0.5 });
      io.observe(count);
    }
  }
})();
