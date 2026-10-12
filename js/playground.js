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
      colors.querySelectorAll('.pg-swatch').forEach((s) => s.classList.toggle('is-on', s === sw));
      // "Blanco y negro" vuelve al color de la página
      if (sw.hasAttribute('data-mono')) {
        root.style.removeProperty('--pg');
        if (hex) hex.textContent = 'B/N';
        return;
      }
      const c = sw.style.getPropertyValue('--c').trim();
      root.style.setProperty('--pg', c);
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
    // Se arma desde data-text para poder rehacerlo al cambiar de idioma
    const build = () => {
      wave.innerHTML = [...(wave.dataset.text || wave.textContent)].map((ch, i) =>
        '<span style="--i:' + i + '">' + (ch === ' ' ? '&nbsp;' : ch) + '</span>'
      ).join('');
    };
    build();
    document.addEventListener('langchange', build);
  }

  const scramble = $('scramble');
  if (scramble) {
    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*@$';
    let timer = 0;
    scramble.addEventListener('pointerenter', () => {
      const target = scramble.dataset.text;
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
    document.addEventListener('langchange', () => { clearInterval(timer); scramble.textContent = scramble.dataset.text; });
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

  // 04b — Más efectos de pantalla completa: voltear, fiesta y derretir
  function pageFx(cls, ms, target) {
    const el = target || document.body;
    if (el.classList.contains(cls)) return;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), ms);
  }
  const flip = $('flip');
  if (flip) flip.addEventListener('click', () => pageFx('pg-flipping', 2400));
  const party = $('party');
  if (party) party.addEventListener('click', () => pageFx('pg-party', 3000, document.documentElement));
  const melt = $('melt');
  if (melt) melt.addEventListener('click', () => pageFx('pg-melting', 2600));

  // Canvas nítido en pantallas retina; devuelve el contexto ya escalado
  function fitCanvas(canvas) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h };
  }
  const accent = () => getComputedStyle(root).getPropertyValue('--pg').trim() || '#00e5ff';

  // Ejecuta un loop de animación solo mientras el elemento está en pantalla
  function whileVisible(el, start, stop) {
    if (!('IntersectionObserver' in window)) { start(); return; }
    new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())).observe(el);
  }

  // 10 — Partículas que huyen del mouse y se conectan
  const pc = $('particles');
  if (pc) {
    let dots = [], size, raf = 0, mouse = { x: -999, y: -999, down: false };
    const setup = () => {
      size = fitCanvas(pc);
      const n = Math.round(size.w * size.h / 3200);
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * size.w, y: Math.random() * size.h,
        vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
      }));
    };
    const tick = () => {
      const { ctx, w, h } = size;
      const color = accent();
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y, dist = Math.hypot(dx, dy);
        if (dist < 110 && dist > 0) {
          const f = (110 - dist) / 110 * (mouse.down ? -0.9 : 0.9);
          d.vx += dx / dist * f; d.vy += dy / dist * f;
        }
        d.vx *= 0.96; d.vy *= 0.96;
        d.vx += (Math.random() - 0.5) * 0.05; d.vy += (Math.random() - 0.5) * 0.05;
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        d.x = Math.max(0, Math.min(w, d.x)); d.y = Math.max(0, Math.min(h, d.y));
      }
      ctx.strokeStyle = color;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i], b = dots[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 70) {
            ctx.globalAlpha = 1 - d / 70;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1; ctx.fillStyle = color;
      for (const d of dots) ctx.fillRect(d.x - 1.5, d.y - 1.5, 3, 3);
      raf = requestAnimationFrame(tick);
    };
    const pos = (e) => { const r = pc.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    pc.addEventListener('pointermove', pos);
    pc.addEventListener('pointerdown', (e) => { pos(e); mouse.down = true; });
    window.addEventListener('pointerup', () => { mouse.down = false; });
    pc.addEventListener('pointerleave', () => { mouse.x = mouse.y = -999; mouse.down = false; });
    window.addEventListener('resize', setup);
    setup();
    whileVisible(pc, () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); }, () => cancelAnimationFrame(raf));
  }

  // 11 — Linterna: un círculo de luz sigue al puntero
  const torch = $('torch');
  if (torch) {
    torch.addEventListener('pointermove', (e) => {
      const r = torch.getBoundingClientRect();
      torch.style.setProperty('--tx', e.clientX - r.left + 'px');
      torch.style.setProperty('--ty', e.clientY - r.top + 'px');
    });
    torch.addEventListener('pointerleave', () => {
      torch.style.setProperty('--tx', '-200px');
      torch.style.setProperty('--ty', '-200px');
    });
  }

  // 12 — Cubo 3D que se gira arrastrando y sigue con inercia
  const cubeStage = $('cube');
  if (cubeStage) {
    const cube = cubeStage.querySelector('.pg-cube');
    let rx = -20, ry = 35, vx = 0, vy = reduced ? 0 : 0.4, dragging = false, lx = 0, ly = 0;
    const draw = () => { cube.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)'; };
    let raf = 0;
    const spinLoop = () => {
      if (!dragging) { ry += vy; rx += vx; vx *= 0.97; vy = vy * 0.98 + (reduced ? 0 : 0.4) * 0.02; }
      draw();
      raf = requestAnimationFrame(spinLoop);
    };
    cubeStage.addEventListener('pointerdown', (e) => {
      dragging = true; lx = e.clientX; ly = e.clientY; cubeStage.setPointerCapture(e.pointerId);
    });
    cubeStage.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      vy = (e.clientX - lx) * 0.5; vx = -(e.clientY - ly) * 0.5;
      ry += vy; rx += vx; lx = e.clientX; ly = e.clientY;
    });
    const up = () => { dragging = false; };
    cubeStage.addEventListener('pointerup', up);
    cubeStage.addEventListener('pointercancel', up);
    draw();
    whileVisible(cubeStage, () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(spinLoop); }, () => cancelAnimationFrame(raf));
  }

  // 13 — Rasca y gana
  const scratch = $('scratch');
  if (scratch) {
    const cv = scratch.querySelector('canvas');
    let ctx, w, h, drawing = false, checks = 0;
    const cover = () => {
      ({ ctx, w, h } = fitCanvas(cv));
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#9a9aa2';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#c4c4cc';
      for (let i = 0; i < 400; i++) ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
      ctx.fillStyle = '#2a2a30';
      ctx.font = '700 15px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(cv.dataset.label || 'RASCA AQUÍ', w / 2, h / 2 + 5);
      ctx.globalCompositeOperation = 'destination-out';
    };
    const scrape = (e) => {
      const r = cv.getBoundingClientRect();
      ctx.beginPath(); ctx.arc(e.clientX - r.left, e.clientY - r.top, 18, 0, Math.PI * 2); ctx.fill();
      if (++checks % 12 === 0) {
        const data = ctx.getImageData(0, 0, cv.width, cv.height).data;
        let clear = 0;
        for (let i = 3; i < data.length; i += 64) if (data[i] === 0) clear++;
        if (clear / (data.length / 64) > 0.55) scratch.classList.add('is-done');
      }
    };
    cv.addEventListener('pointerdown', (e) => { drawing = true; cv.setPointerCapture(e.pointerId); scrape(e); });
    cv.addEventListener('pointermove', (e) => { if (drawing) scrape(e); });
    cv.addEventListener('pointerup', () => { drawing = false; });
    // Doble clic sobre el premio vuelve a tapar la tarjeta
    scratch.addEventListener('dblclick', () => { if (scratch.classList.contains('is-done')) { scratch.classList.remove('is-done'); cover(); } });
    cover();
    document.addEventListener('langchange', () => { if (!scratch.classList.contains('is-done')) cover(); });
  }

  // 14 — Gravedad: letras que caen, chocan, se apilan y se pueden lanzar
  const grav = $('gravity');
  if (grav) {
    const dropBtn = grav.querySelector('.pg-gravity__drop');
    const S = 44, G = 0.6, WORD = 'MADCO.PY';
    let bodies = [], raf = 0, held = null;
    const step = () => {
      const W = grav.clientWidth, H = grav.clientHeight;
      for (const b of bodies) {
        if (b === held) continue;
        b.vy += G; b.vx *= 0.995;
        b.x += b.vx; b.y += b.vy;
        if (b.y > H - S) { b.y = H - S; b.vy *= -0.35; b.vx *= 0.85; }
        if (b.x < 0) { b.x = 0; b.vx *= -0.6; }
        if (b.x > W - S) { b.x = W - S; b.vx *= -0.6; }
      }
      // Choques entre cuadros (separación sencilla por el eje de menor solape)
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i], b = bodies[j];
          const ox = S - Math.abs(a.x - b.x), oy = S - Math.abs(a.y - b.y);
          if (ox <= 0 || oy <= 0) continue;
          if (ox < oy) {
            const s = a.x < b.x ? -1 : 1, push = ox / 2;
            if (a !== held) a.x += s * push; if (b !== held) b.x -= s * push;
            const t = a.vx; a.vx = b.vx * 0.8; b.vx = t * 0.8;
          } else {
            const s = a.y < b.y ? -1 : 1, push = oy / 2;
            if (a !== held) a.y += s * push; if (b !== held) b.y -= s * push;
            const t = a.vy; a.vy = b.vy * 0.3; b.vy = t * 0.3;
          }
        }
      }
      for (const b of bodies) b.el.style.transform = 'translate(' + b.x + 'px,' + b.y + 'px) rotate(' + b.vx * 2 + 'deg)';
      raf = requestAnimationFrame(step);
    };
    const drop = () => {
      grav.querySelectorAll('.pg-gravity__l').forEach((n) => n.remove());
      const W = grav.clientWidth;
      bodies = [...WORD].map((ch, i) => {
        const el = document.createElement('span');
        el.className = 'pg-gravity__l';
        el.textContent = ch;
        grav.appendChild(el);
        const b = { el, x: W / 2 - (WORD.length * S) / 2 + i * S + (Math.random() - 0.5) * 20, y: -S - i * 30, vx: (Math.random() - 0.5) * 3, vy: 0 };
        let lx = 0, ly = 0;
        el.addEventListener('pointerdown', (e) => { held = b; lx = e.clientX; ly = e.clientY; el.setPointerCapture(e.pointerId); });
        el.addEventListener('pointermove', (e) => {
          if (held !== b) return;
          b.vx = e.clientX - lx; b.vy = e.clientY - ly;
          b.x += b.vx; b.y += b.vy; lx = e.clientX; ly = e.clientY;
        });
        const release = () => { if (held === b) held = null; };
        el.addEventListener('pointerup', release);
        el.addEventListener('pointercancel', release);
        return b;
      });
      dropBtn.textContent = dropBtn.dataset.again || 'Otra vez';
      dropBtn.style.alignSelf = 'start'; dropBtn.style.marginTop = '0.8rem';
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(step);
    };
    dropBtn.addEventListener('click', drop);
    whileVisible(grav, () => { if (bodies.length) { cancelAnimationFrame(raf); raf = requestAnimationFrame(step); } }, () => cancelAnimationFrame(raf));
  }

  // 15 — Ojos que siguen al mouse por toda la página
  const eyes = $('eyes');
  if (eyes) {
    const pupils = [...eyes.querySelectorAll('.pg-eye i')];
    window.addEventListener('pointermove', (e) => {
      pupils.forEach((p) => {
        const r = p.parentElement.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const a = Math.atan2(e.clientY - cy, e.clientX - cx);
        const d = Math.min(18, Math.hypot(e.clientX - cx, e.clientY - cy) / 12);
        p.style.transform = 'translate(' + Math.cos(a) * d + 'px,' + Math.sin(a) * d + 'px)';
      });
    }, { passive: true });
    eyes.addEventListener('click', () => {
      eyes.classList.add('is-blink');
      setTimeout(() => eyes.classList.remove('is-blink'), 160);
    });
  }
})();
