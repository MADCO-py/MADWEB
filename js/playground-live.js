// ============================================================
// Playground — Registro en vivo + Conexiones en vivo (APIs,
// cámara, micrófono, voz, sensores, control, NFC).
// Todo corre en el navegador. Las APIs usadas son públicas y
// gratuitas, sin llaves: Open-Meteo, open.er-api.com,
// wheretheiss.at y la API pública de GitHub.
// ============================================================
(function () {
  const root = document.getElementById('playground');
  if (!root) return;
  const $ = (name) => root.querySelector('[data-pg="' + name + '"]');
  const isEN = () => document.documentElement.getAttribute('data-lang') === 'en';
  const L = (es, en) => (isEN() ? en : es);
  const onLang = (fn) => document.addEventListener('langchange', fn);
  const CFG = (typeof PLAYGROUND !== 'undefined') ? PLAYGROUND : {};

  // Llama a fn una sola vez, cuando el elemento aparece en pantalla
  function whenVisible(el, fn) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { fn(); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); fn(); } }, { rootMargin: '200px' });
    io.observe(el);
  }
  function getJSON(url) {
    return fetch(url).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
  }

  /* ==========================================================
     16 — REGISTRO EN VIVO (se guarda en este navegador)
     ========================================================== */
  const KEY = 'madco-registro';
  const MAX = 20;
  const form = $('reg-form');
  const cardsBox = $('reg-cards');
  const photoInput = $('reg-photo');
  const preview = $('reg-preview');
  const msg = $('reg-msg');
  let photo = '';
  let cards = [];
  let lastMsg = null;

  function load() {
    try { cards = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { cards = []; }
    if (!Array.isArray(cards)) cards = [];
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(cards)); return true; } catch (e) { return false; }
  }
  function say(es, en) {
    lastMsg = [es, en];
    if (msg) msg.textContent = L(es, en);
  }

  // Reduce la foto a 480 px como máximo para que quepa en el navegador
  function shrink(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const k = Math.min(1, 480 / Math.max(img.width, img.height));
          const c = document.createElement('canvas');
          c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL('image/jpeg', 0.8));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function render() {
    if (!cardsBox) return;
    cardsBox.innerHTML = '';
    if (!cards.length) {
      cardsBox.appendChild(el('p', 'pg-reg__empty', L('Todavía no hay tarjetas. ¡Sé la primera persona en registrarse!', 'No cards yet. Be the first one to sign up!')));
      return;
    }
    cards.forEach((c) => {
      const card = el('article', 'pg-card');
      if (c.foto) {
        const img = el('img', 'pg-card__photo');
        img.src = c.foto; img.alt = c.nombre;
        card.appendChild(img);
      } else {
        card.appendChild(el('div', 'pg-card__initial', c.nombre.trim().charAt(0).toUpperCase()));
      }
      const body = el('div', 'pg-card__body');
      body.appendChild(el('div', 'pg-card__name', c.nombre));
      if (c.rol) body.appendChild(el('div', 'pg-card__role', c.rol));
      if (c.ciudad) {
        const city = el('div', 'pg-card__city');
        city.innerHTML = '<i class="ph ph-map-pin"></i>';
        city.appendChild(document.createTextNode(c.ciudad));
        body.appendChild(city);
      }
      if (c.dato) body.appendChild(el('p', 'pg-card__fact', '“' + c.dato + '”'));
      card.appendChild(body);
      const del = el('button', 'pg-card__del');
      del.type = 'button';
      del.innerHTML = '<i class="ph-bold ph-x"></i>';
      del.setAttribute('aria-label', L('Borrar tarjeta de ', 'Delete card for ') + c.nombre);
      del.addEventListener('click', () => {
        cards = cards.filter((x) => x.id !== c.id);
        save(); render();
      });
      card.appendChild(del);
      cardsBox.appendChild(card);
    });
  }

  function resetPhoto() {
    photo = '';
    if (photoInput) photoInput.value = '';
    if (preview) { preview.style.backgroundImage = ''; preview.classList.remove('has-photo'); }
  }

  if (form && cardsBox) {
    load();
    render();
    onLang(() => { render(); if (lastMsg) say(lastMsg[0], lastMsg[1]); });

    photoInput.addEventListener('change', () => {
      const file = photoInput.files && photoInput.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) { say('Ese archivo no es una imagen.', 'That file is not an image.'); return; }
      shrink(file).then((data) => {
        photo = data;
        preview.style.backgroundImage = 'url("' + data + '")';
        preview.classList.add('has-photo');
        say('Foto lista.', 'Photo ready.');
      }).catch(() => say('No se pudo leer la foto.', 'Could not read the photo.'));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const nombre = String(f.get('nombre') || '').trim();
      const nameField = form.querySelector('[name="nombre"]').closest('.pg-field');
      nameField.classList.toggle('is-bad', !nombre);
      if (!nombre) { say('Escribe tu nombre para crear la tarjeta.', 'Type your name to create the card.'); return; }
      const card = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        nombre,
        rol: String(f.get('rol') || '').trim(),
        ciudad: String(f.get('ciudad') || '').trim(),
        dato: String(f.get('dato') || '').trim(),
        foto: photo,
      };
      cards.unshift(card);
      if (cards.length > MAX) cards.length = MAX;
      if (!save()) {
        cards.shift();
        say('El navegador ya no tiene espacio. Borra algunas tarjetas.', 'Your browser is out of space. Delete some cards.');
        return;
      }
      render();
      form.reset();
      resetPhoto();
      say('¡Listo! Tu tarjeta ya está a la izquierda.', 'Done! Your card is now on the left.');
    });

    $('reg-clear').addEventListener('click', () => {
      cards = []; save(); render(); resetPhoto();
      say('Se borraron todas las tarjetas.', 'All cards were deleted.');
    });
  }

  /* ==========================================================
     CLIMA — Open-Meteo
     ========================================================== */
  const WMO = {
    0: ['Despejado', 'Clear sky'], 1: ['Casi despejado', 'Mostly clear'], 2: ['Parcialmente nublado', 'Partly cloudy'],
    3: ['Nublado', 'Overcast'], 45: ['Neblina', 'Fog'], 48: ['Neblina', 'Fog'],
    51: ['Llovizna', 'Drizzle'], 53: ['Llovizna', 'Drizzle'], 55: ['Llovizna fuerte', 'Heavy drizzle'],
    61: ['Lluvia ligera', 'Light rain'], 63: ['Lluvia', 'Rain'], 65: ['Lluvia fuerte', 'Heavy rain'],
    80: ['Chubascos', 'Showers'], 81: ['Chubascos', 'Showers'], 82: ['Chubascos fuertes', 'Heavy showers'],
    95: ['Tormenta', 'Thunderstorm'], 96: ['Tormenta con granizo', 'Thunderstorm with hail'], 99: ['Tormenta con granizo', 'Thunderstorm with hail'],
  };
  const wTemp = $('w-temp'), wDesc = $('w-desc'), wBtn = $('w-locate');
  let weather = null;
  function drawWeather() {
    if (!weather) return;
    if (weather.error) { wDesc.textContent = L('No se pudo cargar el clima.', 'Could not load the weather.'); return; }
    const c = weather.data.current;
    const d = WMO[c.weather_code] || ['—', '—'];
    wTemp.textContent = Math.round(c.temperature_2m) + '°C';
    wDesc.textContent = L(d[0], d[1]) + ' · ' + (weather.mine ? L('Tu ubicación', 'Your location') : L('Ciudad de Guatemala', 'Guatemala City')) +
      ' · ' + L('Humedad', 'Humidity') + ' ' + c.relative_humidity_2m + '% · ' + L('Viento', 'Wind') + ' ' + Math.round(c.wind_speed_10m) + ' km/h';
  }
  function loadWeather(lat, lon, mine) {
    getJSON('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon +
      '&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=auto')
      .then((data) => { weather = { data, mine }; drawWeather(); })
      .catch(() => { weather = { error: true }; drawWeather(); });
  }
  if (wTemp) {
    whenVisible(wTemp, () => loadWeather(14.6349, -90.5069, false));
    onLang(drawWeather);
    wBtn.addEventListener('click', () => {
      if (!navigator.geolocation) { wDesc.textContent = L('Tu navegador no comparte ubicación.', 'Your browser cannot share location.'); return; }
      wDesc.textContent = L('Pidiendo permiso de ubicación…', 'Asking for location permission…');
      navigator.geolocation.getCurrentPosition(
        (p) => loadWeather(p.coords.latitude.toFixed(3), p.coords.longitude.toFixed(3), true),
        () => { wDesc.textContent = L('Sin permiso de ubicación. Mostrando Guatemala.', 'No location permission. Showing Guatemala.'); setTimeout(drawWeather, 1800); },
        { timeout: 10000 }
      );
    });
  }

  /* ==========================================================
     TIPO DE CAMBIO — open.er-api.com
     ========================================================== */
  const fxUsd = $('fx-usd'), fxGtq = $('fx-gtq'), fxNote = $('fx-note');
  let rate = null, rateErr = false, rateDate = '';
  function drawFx() {
    if (rateErr) { fxNote.textContent = L('No se pudo consultar el tipo de cambio.', 'Could not load the exchange rate.'); return; }
    if (!rate) return;
    const usd = Math.max(0, Number(fxUsd.value) || 0);
    fxGtq.textContent = 'Q ' + (usd * rate).toLocaleString(isEN() ? 'en-US' : 'es-GT', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    fxNote.textContent = '1 USD = Q' + rate.toFixed(4) + ' · ' + L('actualizado ', 'updated ') + rateDate;
  }
  if (fxUsd) {
    whenVisible(fxUsd, () => getJSON('https://open.er-api.com/v6/latest/USD')
      .then((d) => {
        rate = d.rates && d.rates.GTQ;
        if (!rate) throw new Error('sin GTQ');
        rateDate = new Date(d.time_last_update_unix * 1000).toLocaleDateString(isEN() ? 'en-US' : 'es-GT');
        drawFx();
      })
      .catch(() => { rateErr = true; drawFx(); }));
    fxUsd.addEventListener('input', drawFx);
    onLang(drawFx);
  }

  /* ==========================================================
     ESTACIÓN ESPACIAL — wheretheiss.at
     ========================================================== */
  const issDot = $('iss-dot'), issPos = $('iss-pos');
  let iss = null, issTimer = 0, issFails = 0;
  function drawIss() {
    if (!iss) return;
    // La primera vez aparece directo en su lugar; después se desliza
    if (issDot.style.display === 'block') issDot.classList.add('is-moving');
    issDot.style.display = 'block';
    issDot.style.left = ((iss.longitude + 180) / 360 * 100) + '%';
    issDot.style.top = ((90 - iss.latitude) / 180 * 100) + '%';
    issPos.textContent = 'Lat ' + iss.latitude.toFixed(2) + '° · Lon ' + iss.longitude.toFixed(2) + '° · ' +
      Math.round(iss.velocity).toLocaleString(isEN() ? 'en-US' : 'es-GT') + ' km/h';
  }
  function pollIss() {
    getJSON('https://api.wheretheiss.at/v1/satellites/25544')
      .then((d) => { iss = d; issFails = 0; drawIss(); })
      .catch(() => {
        if (++issFails >= 3) { clearInterval(issTimer); issPos.textContent = L('No se pudo ubicar la Estación Espacial.', 'Could not locate the Space Station.'); }
      });
  }
  if (issDot && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      clearInterval(issTimer);
      if (e.isIntersecting) { pollIss(); issTimer = setInterval(pollIss, 5000); }
    }).observe(issDot.parentElement);
    onLang(drawIss);
  }

  /* ==========================================================
     GITHUB — repos públicos más recientes
     ========================================================== */
  const gh = $('github');
  let repos = null;
  function drawGh() {
    if (!repos) return;
    gh.innerHTML = '';
    if (repos.error || !repos.length) {
      gh.appendChild(el('li', '', L('GitHub no respondió (límite de consultas). Intenta en un rato.', 'GitHub did not respond (rate limit). Try again later.')));
      return;
    }
    repos.forEach((r) => {
      const li = el('li');
      const a = el('a');
      a.href = r.html_url; a.target = '_blank'; a.rel = 'noopener';
      a.appendChild(el('span', '', r.name));
      a.appendChild(el('small', '', (r.language || '—') + ' · ' + new Date(r.pushed_at).toLocaleDateString(isEN() ? 'en-US' : 'es-GT', { day: 'numeric', month: 'short' })));
      li.appendChild(a);
      gh.appendChild(li);
    });
  }
  if (gh) {
    whenVisible(gh, () => getJSON('https://api.github.com/users/' + encodeURIComponent(CFG.githubUser || 'MADCO-py') + '/repos?sort=pushed&per_page=5')
      .then((d) => { repos = Array.isArray(d) ? d : { error: true }; drawGh(); })
      .catch(() => { repos = { error: true }; drawGh(); }));
    onLang(drawGh);
  }

  /* ==========================================================
     SPOTIFY — reproductor incrustado
     ========================================================== */
  const sp = $('spotify');
  function drawSpotify() {
    if (!sp) return;
    const m = String(CFG.spotifyEmbed || '').match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(playlist|album|artist|track|episode|show)\/([A-Za-z0-9]+)/);
    if (m) {
      if (!sp.querySelector('iframe')) {
        sp.innerHTML = '';
        const f = document.createElement('iframe');
        f.src = 'https://open.spotify.com/embed/' + m[1] + '/' + m[2] + '?utm_source=generator&theme=0';
        f.loading = 'lazy';
        f.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        f.title = 'Spotify';
        sp.appendChild(f);
      }
      return;
    }
    sp.innerHTML = '';
    const box = el('div', 'pg-spotify__empty');
    const logo = el('span', 'pg-spotify__logo');
    logo.innerHTML = '<i class="ph-bold ph-spotify-logo"></i>';
    box.appendChild(logo);
    box.appendChild(el('p', '', L('Aquí suena una playlist en vivo dentro de la página. Mientras tanto, mira lo que escucho:', 'A playlist plays live right inside the page. Meanwhile, see what I listen to:')));
    if (CFG.spotifyProfile) {
      const a = el('a', 'pg-btn');
      a.href = CFG.spotifyProfile; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = '<i class="ph-bold ph-spotify-logo"></i> ';
      a.appendChild(document.createTextNode(L('Mi perfil de Spotify', 'My Spotify profile')));
      box.appendChild(a);
    }
    sp.appendChild(box);
  }
  if (sp) { whenVisible(sp, drawSpotify); onLang(() => { if (!sp.querySelector('iframe')) drawSpotify(); }); }

  /* ==========================================================
     MICRÓFONO — visualizador de voz (Web Audio)
     ========================================================== */
  const micBtn = $('mic'), micCanvas = $('mic-canvas');
  let micStream = null, micRaf = 0, audioCtx = null;
  function micLabel() {
    micBtn.innerHTML = '<i class="ph-bold ph-microphone' + (micStream ? '-slash' : '') + '"></i> ';
    micBtn.appendChild(document.createTextNode(micStream ? L('Apagar micrófono', 'Turn mic off') : L('Activar micrófono', 'Turn mic on')));
  }
  function stopMic() {
    cancelAnimationFrame(micRaf);
    if (micStream) micStream.getTracks().forEach((t) => t.stop());
    micStream = null;
    if (audioCtx) { audioCtx.close(); audioCtx = null; }
    micCanvas.getContext('2d').clearRect(0, 0, micCanvas.width, micCanvas.height);
    micLabel();
  }
  if (micBtn) {
    onLang(micLabel);
    micBtn.addEventListener('click', () => {
      if (micStream) { stopMic(); return; }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { micBtn.textContent = L('Tu navegador no lo permite', 'Not supported here'); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        micStream = stream;
        micLabel();
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 128;
        audioCtx.createMediaStreamSource(stream).connect(analyser);
        const data = new Uint8Array(analyser.frequencyBinCount);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        micCanvas.width = micCanvas.clientWidth * dpr; micCanvas.height = micCanvas.clientHeight * dpr;
        const ctx = micCanvas.getContext('2d');
        const draw = () => {
          analyser.getByteFrequencyData(data);
          const w = micCanvas.width, h = micCanvas.height, bw = w / data.length;
          ctx.clearRect(0, 0, w, h);
          ctx.fillStyle = getComputedStyle(root).getPropertyValue('--pg').trim() || '#00e5ff';
          data.forEach((v, i) => {
            const bh = Math.max(2 * dpr, v / 255 * h);
            ctx.fillRect(i * bw + 1, (h - bh) / 2, bw - 2, bh);
          });
          micRaf = requestAnimationFrame(draw);
        };
        draw();
      }).catch(() => { micBtn.textContent = L('Permiso denegado', 'Permission denied'); setTimeout(micLabel, 2000); });
    });
  }

  /* ==========================================================
     CÁMARA — filtros en tiempo real
     ========================================================== */
  const camBtn = $('cam'), camVideo = $('cam-video'), camFilters = $('cam-filters');
  let camStream = null;
  function camLabel() {
    camBtn.innerHTML = '<i class="ph-bold ph-video-camera' + (camStream ? '-slash' : '') + '"></i> ';
    camBtn.appendChild(document.createTextNode(camStream ? L('Apagar cámara', 'Turn camera off') : L('Encender cámara', 'Turn camera on')));
  }
  if (camBtn) {
    onLang(camLabel);
    camBtn.addEventListener('click', () => {
      if (camStream) {
        camStream.getTracks().forEach((t) => t.stop());
        camStream = null; camVideo.srcObject = null;
        camVideo.parentElement.classList.remove('is-on');
        camLabel();
        return;
      }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { camBtn.textContent = L('Tu navegador no lo permite', 'Not supported here'); return; }
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }).then((stream) => {
        camStream = stream;
        camVideo.srcObject = stream;
        camVideo.play();
        camVideo.parentElement.classList.add('is-on');
        camLabel();
      }).catch(() => { camBtn.textContent = L('Permiso denegado', 'Permission denied'); setTimeout(camLabel, 2000); });
    });
    camFilters.addEventListener('click', (e) => {
      const b = e.target.closest('.pg-chip');
      if (!b) return;
      camVideo.style.filter = b.dataset.f === 'none' ? '' : b.dataset.f;
      camFilters.querySelectorAll('.pg-chip').forEach((c) => c.classList.toggle('is-on', c === b));
    });
  }

  /* ==========================================================
     VOZ — la página habla y escucha colores
     ========================================================== */
  const sayBtn = $('say'), sayText = $('say-text'), listenBtn = $('listen'), listenOut = $('listen-out');
  const COLOR_WORDS = {
    rojo: '#ff3d7f', red: '#ff3d7f', rosa: '#ff3d7f', pink: '#ff3d7f',
    azul: '#00e5ff', blue: '#00e5ff', cian: '#00e5ff', cyan: '#00e5ff',
    verde: '#7cff4f', green: '#7cff4f', amarillo: '#ffd400', yellow: '#ffd400',
    morado: '#a26bff', purple: '#a26bff', naranja: '#ff7a1a', orange: '#ff7a1a',
  };
  if (sayBtn) {
    sayBtn.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) { listenOut.textContent = L('Tu navegador no puede hablar.', 'Your browser cannot speak.'); return; }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(sayText.value || L('Hola', 'Hello'));
      u.lang = isEN() ? 'en-US' : 'es-ES';
      speechSynthesis.speak(u);
    });
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    listenBtn.addEventListener('click', () => {
      if (!SR) { listenOut.textContent = L('Tu navegador no puede escuchar. Prueba en Chrome.', 'Your browser cannot listen. Try Chrome.'); return; }
      const rec = new SR();
      rec.lang = isEN() ? 'en-US' : 'es-GT';
      rec.interimResults = false;
      listenOut.textContent = L('Escuchando… di un color.', 'Listening… say a color.');
      rec.onresult = (e) => {
        const heard = e.results[0][0].transcript.toLowerCase();
        const word = Object.keys(COLOR_WORDS).find((w) => heard.includes(w));
        if (word) {
          const sw = root.querySelector('.pg-swatch[style*="' + COLOR_WORDS[word] + '"]');
          if (sw) sw.click(); else root.style.setProperty('--pg', COLOR_WORDS[word]);
          listenOut.textContent = L('Escuché "', 'I heard "') + heard + L('". ¡Color cambiado!', '". Color changed!');
        } else {
          listenOut.textContent = L('Escuché "', 'I heard "') + heard + L('", pero no es un color.', '", but that is not a color.');
        }
      };
      rec.onerror = () => { listenOut.textContent = L('No pude escucharte. Revisa el permiso del micrófono.', 'I could not hear you. Check the mic permission.'); };
      rec.start();
    });
  }

  /* ==========================================================
     SENSOR DE INCLINACIÓN — bolita que rueda
     ========================================================== */
  const orient = $('orient'), orientBtn = $('orient-btn');
  if (orient) {
    const ball = orient.querySelector('i');
    let bx = 0, by = 0, vx = 0, vy = 0, ax = 0, ay = 0, raf = 0;
    const loop = () => {
      const W = orient.clientWidth / 2 - 15, H = orient.clientHeight / 2 - 15;
      vx = (vx + ax) * 0.92; vy = (vy + ay) * 0.92;
      bx += vx; by += vy;
      if (Math.abs(bx) > W) { bx = Math.sign(bx) * W; vx *= -0.5; }
      if (Math.abs(by) > H) { by = Math.sign(by) * H; vy *= -0.5; }
      ball.style.transform = 'translate(' + bx + 'px,' + by + 'px)';
      raf = requestAnimationFrame(loop);
    };
    const startLoop = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); };
    orient.addEventListener('pointermove', (e) => {
      const r = orient.getBoundingClientRect();
      ax = ((e.clientX - r.left) / r.width - 0.5) * 1.6;
      ay = ((e.clientY - r.top) / r.height - 0.5) * 1.6;
    });
    orient.addEventListener('pointerleave', () => { ax = ay = 0; });
    const listen = () => {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma == null) return;
        ax = Math.max(-1, Math.min(1, e.gamma / 30)) * 1.2;
        ay = Math.max(-1, Math.min(1, (e.beta - 30) / 30)) * 1.2;
      });
      orientBtn.textContent = L('Sensor activo: inclina el teléfono', 'Sensor on: tilt your phone');
    };
    orientBtn.addEventListener('click', () => {
      if (!('DeviceOrientationEvent' in window)) { orientBtn.textContent = L('Sin sensor en este equipo', 'No sensor on this device'); return; }
      // iOS pide permiso explícito
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((s) => (s === 'granted' ? listen() : (orientBtn.textContent = L('Permiso denegado', 'Permission denied')))).catch(() => {});
      } else listen();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => (e.isIntersecting ? startLoop() : cancelAnimationFrame(raf))).observe(orient);
    } else startLoop();
  }

  /* ==========================================================
     CONTROL DE VIDEOJUEGOS — Gamepad API
     ========================================================== */
  const pad = $('pad'), padStatus = $('pad-status');
  if (pad) {
    const ship = pad.querySelector('.pg-pad__ship');
    let px = 0, py = 0, raf = 0, padName = '';
    const drawStatus = () => {
      padStatus.textContent = padName
        ? L('Conectado: ', 'Connected: ') + padName + L('. Mueve el stick y presiona botones.', '. Move the stick and press buttons.')
        : L('Conecta un control (Xbox, PlayStation, Switch) y presiona un botón.', 'Connect a controller (Xbox, PlayStation, Switch) and press a button.');
    };
    const loop = () => {
      const gp = [...(navigator.getGamepads ? navigator.getGamepads() : [])].find(Boolean);
      if (gp) {
        const W = pad.clientWidth / 2 - 13, H = pad.clientHeight / 2 - 13;
        const dx = Math.abs(gp.axes[0]) > 0.15 ? gp.axes[0] : 0;
        const dy = Math.abs(gp.axes[1]) > 0.15 ? gp.axes[1] : 0;
        px = Math.max(-W, Math.min(W, px + dx * 5));
        py = Math.max(-H, Math.min(H, py + dy * 5));
        ship.style.transform = 'translate(' + px + 'px,' + py + 'px)';
        pad.classList.toggle('is-press', gp.buttons.some((b) => b.pressed));
        raf = requestAnimationFrame(loop);
      }
    };
    window.addEventListener('gamepadconnected', (e) => {
      padName = e.gamepad.id.replace(/\(.*?\)/g, '').trim() || 'Gamepad';
      drawStatus();
      cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
    });
    window.addEventListener('gamepaddisconnected', () => { padName = ''; drawStatus(); });
    onLang(drawStatus);
  }

  /* ==========================================================
     NFC — Web NFC (Chrome Android)
     ========================================================== */
  const nfcBtn = $('nfc'), nfcOut = $('nfc-out');
  if (nfcBtn) {
    const ring = nfcBtn.previousElementSibling;
    nfcBtn.addEventListener('click', () => {
      if (!('NDEFReader' in window)) {
        nfcOut.textContent = L('Este navegador no lee NFC. Ábrelo en Chrome para Android.', 'This browser cannot read NFC. Open it in Chrome for Android.');
        return;
      }
      const reader = new window.NDEFReader();
      reader.scan().then(() => {
        ring.classList.add('is-scanning');
        nfcOut.textContent = L('Escaneando… acerca un tag NFC.', 'Scanning… bring an NFC tag close.');
        reader.onreading = (e) => {
          const dec = new TextDecoder();
          const lines = e.message.records.map((r) => (r.recordType === 'url' || r.recordType === 'text') ? dec.decode(r.data) : r.recordType);
          nfcOut.textContent = L('Tag leído (', 'Tag read (') + e.serialNumber + '): ' + (lines.join(' · ') || L('vacío', 'empty'));
          if (navigator.vibrate) navigator.vibrate(80);
        };
      }).catch(() => { nfcOut.textContent = L('No se pudo activar el NFC. Revisa el permiso.', 'Could not start NFC. Check the permission.'); });
    });
  }

  /* ==========================================================
     FUNCIONES DEL TELÉFONO — compartir, vibrar, notificar, copiar
     ========================================================== */
  const devOut = $('device-out');
  const pageUrl = location.href.split('#')[0];
  const shareBtn = $('share');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.share) navigator.share({ title: 'MADCO', url: pageUrl }).catch(() => {});
      else devOut.textContent = L('Compartir no está disponible aquí; usa "Copiar link".', 'Sharing is not available here; use "Copy link".');
    });
    $('vibrate').addEventListener('click', () => {
      if (navigator.vibrate && navigator.vibrate([120, 60, 120, 60, 300])) devOut.textContent = L('¡Bzzz! Tu teléfono vibró.', 'Bzzz! Your phone vibrated.');
      else devOut.textContent = L('Este equipo no vibra (prueba en Android).', 'This device cannot vibrate (try Android).');
    });
    $('notify').addEventListener('click', () => {
      if (!('Notification' in window)) { devOut.textContent = L('Tu navegador no muestra notificaciones.', 'Your browser cannot show notifications.'); return; }
      Notification.requestPermission().then((p) => {
        if (p !== 'granted') { devOut.textContent = L('Permiso de notificaciones denegado.', 'Notification permission denied.'); return; }
        try {
          new Notification('MADCO', { body: L('Esta notificación la mandó una página web.', 'A web page sent you this notification.') });
          devOut.textContent = L('Notificación enviada.', 'Notification sent.');
        } catch (e) {
          devOut.textContent = L('En celular las notificaciones necesitan instalar la web como app.', 'On phones, notifications need the site installed as an app.');
        }
      });
    });
    $('copy').addEventListener('click', () => {
      if (!navigator.clipboard) { devOut.textContent = pageUrl; return; }
      navigator.clipboard.writeText(pageUrl)
        .then(() => { devOut.textContent = L('Link copiado: ', 'Link copied: ') + pageUrl; })
        .catch(() => { devOut.textContent = pageUrl; });
    });
  }
})();
