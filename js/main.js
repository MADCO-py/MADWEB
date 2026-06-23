/* ============================================================
   MAIN.JS — Renderiza las secciones a partir de data.js
   ============================================================ */
(function () {

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function btnRow({ demo, repo, trophy, aware }) {
    let html = '<div class="btn-row">';
    if (trophy) {
      html += `<span class="btn-trophy"><i class="ph ph-trophy"></i> ${trophy}</span>`;
    }
    if (aware) {
      html += `<a class="btn btn-aware" href="${aware}"><i class="ph ph-shield-warning"></i> Riesgos y protección</a>`;
    }
    if (demo) {
      html += `<a class="btn btn-demo" href="${demo}" target="_blank" rel="noopener"><i class="ph ph-play"></i> Demo</a>`;
    }
    if (repo) {
      html += `<a class="btn btn-repo" href="${repo}" target="_blank" rel="noopener"><i class="ph ph-github-logo"></i> Repositorio</a>`;
    }
    html += '</div>';
    return html;
  }

  function mediaWithFallback(tagHtml, src, placeholderHtml) {
    // Devuelve un <video> que cae a un placeholder si el archivo aún no existe
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<video class="${tagHtml}" src="${src}" autoplay loop muted playsinline></video>`;
    const video = wrapper.firstElementChild;
    video.addEventListener('error', () => {
      const ph = document.createElement('div');
      ph.className = tagHtml + '-placeholder';
      ph.innerHTML = placeholderHtml;
      video.replaceWith(ph);
    });
    return video;
  }

  function imgWithFallback(src, alt, className, fallbackIconHtml) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    if (className) img.className = className;
    img.addEventListener('error', () => {
      const ph = document.createElement('div');
      ph.innerHTML = fallbackIconHtml;
      ph.className = 'product-card__icon-fallback';
      img.replaceWith(ph);
    });
    return img;
  }

  /* ---------- SOCIALS (hero + footer) ---------- */
  function renderSocials(container) {
    if (!container) return;
    container.innerHTML = SOCIALS.map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}"><i class="ph ${s.icon}" style="font-size:1.3rem;"></i></a>`
    ).join('');
  }

  /* ---------- FREELANCE ---------- */
  function renderFreelance() {
    const mount = document.querySelector('[data-mount="freelance"]');
    if (!mount) return;
    const p = FREELANCE_PROJECT;
    mount.innerHTML = `
      <div class="trophy-card reveal">
        <div>
          <span class="trophy-card__badge"><i class="ph ph-lock-simple"></i> ${p.client}</span>
          <h3 class="trophy-card__name">${p.name}</h3>
          <p class="trophy-card__desc">${p.desc}</p>
          <div class="tech-pill-row">${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div>
          ${btnRow({ trophy: 'Vendido a cliente' })}
        </div>
        <div class="trophy-card__shot" id="freelance-shot"></div>
      </div>`;
    const shotMount = document.getElementById('freelance-shot');
    const img = imgWithFallback(p.shot, p.name, '', '');
    img.addEventListener('error', () => {
      shotMount.innerHTML = `<div class="trophy-card__shot-placeholder"><i class="ph ph-image" style="font-size:1.8rem;"></i><br>Captura pendiente de subir</div>`;
    });
    shotMount.appendChild(img);
  }

  /* ---------- CIBERSEGURIDAD ---------- */
  function renderCiberKali() {
    const mount = document.querySelector('[data-mount="ciber-kali"]');
    if (!mount) return;
    mount.innerHTML = CIBER_KALI_PROJECTS.map(p => `
      <div class="kali-terminal-card card reveal">
        <div class="kali-terminal-card__bar">
          <span class="kali-window__dot"></span>
          <span class="kali-window__dot"></span>
          <span class="kali-window__dot"></span>
          <span class="kali-terminal-card__bartitle">root@kali: ~</span>
        </div>
        <div class="kali-terminal-card__body">
          <p class="kali-terminal-card__line"><span class="kt-path">┌──(</span><span class="kt-user">root</span><span class="kt-path">㉿</span><span class="kt-host">kali</span><span class="kt-path">)-[~/tools/${p.slug}]</span></p>
          <p class="kali-terminal-card__line"><span class="kt-path">└─$</span> <span class="kt-cmd">./${p.slug}.py</span> <span class="kt-lang">··${p.lang}</span></p>
          <p class="kali-terminal-card__desc"># ${p.desc}</p>
          ${btnRow({ aware: p.awareLink, repo: p.repo })}
        </div>
      </div>
    `).join('');
  }

  function renderCiberEsp32() {
    const mount = document.querySelector('[data-mount="ciber-esp32"]');
    if (!mount) return;
    const r = CIBER_ESP32_RISK;
    mount.innerHTML = `
      <div class="ciber-card card reveal">
        <h4 class="ciber-card__title">${r.name} <span class="ciber-card__lang">· ${r.lang}</span></h4>
        <p class="ciber-card__desc">${r.desc}</p>
        ${btnRow({ aware: r.awareLink })}
      </div>`;
  }

  function renderFlipperProjects() {
    const mount = document.querySelector('[data-mount="flipper-projects"]');
    if (!mount) return;
    mount.innerHTML = '';
    FLIPPER_PROJECTS.forEach(p => {
      const card = el('div', 'flipper-card card reveal');
      card.id = 'flipper-card-' + p.id;

      const video = document.createElement('video');
      video.className = 'flipper-card__video';
      video.src = p.video;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.loop = true;
      video.addEventListener('error', () => {
        const ph = el('div', 'flipper-card__video-placeholder', `<i class="ph ph-video-camera" style="font-size:1.6rem;"></i> Sube tu video corto en loop a<br><code style="opacity:.7">assets/videos/flipper/${p.folder}/</code>`);
        video.replaceWith(ph);
      });
      // Hover play/pause
      card.addEventListener('mouseenter', () => video.play());
      card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });

      card.appendChild(video);

      // Botones: descarga con nombre real + repo si existe
      let btns = '<div class="btn-row">';
      if (p.txt) {
        btns += `<a class="btn btn-download" href="${p.txt}" download="${p.txtLabel || 'flipper-file'}"><i class="ph ph-download-simple"></i> ${p.txtLabel || 'Descargar'}</a>`;
      }
      if (p.repo) {
        btns += `<a class="btn btn-repo" href="${p.repo}" target="_blank" rel="noopener"><i class="ph ph-github-logo"></i> Repositorio</a>`;
      }
      btns += '</div>';

      card.appendChild(el('div', 'flipper-card__body', `
        <h4 class="ciber-card__title">${p.name}</h4>
        <p class="ciber-card__desc">${p.desc}</p>
        ${btns}
      `));
      mount.appendChild(card);
    });
  }

  function renderFlipperExplore() {
    const mount = document.querySelector('[data-mount="flipper-explore"]');
    if (!mount) return;
    mount.innerHTML = FLIPPER_EXPLORE.map(p => `
      <div>
        <strong>${p.name}</strong>
        <p style="font-size:.85rem; opacity:.8; margin:.4rem 0 .8rem;">${p.desc}</p>
        <a class="btn btn-download" href="${p.txt}" download><i class="ph ph-download-simple"></i> Descargar .txt</a>
      </div>
    `).join('');
  }

  function renderFlipperRecommended() {
    const mount = document.querySelector('[data-mount="flipper-recommended"]');
    if (!mount) return;
    mount.innerHTML = FLIPPER_RECOMMENDED.map(r => `
      <a class="reco-item ${r.featured ? 'reco-item--featured' : ''}" href="${r.url}" target="_blank" rel="noopener">
        <div>
          <div class="reco-item__name"><i class="ph ${r.icon}"></i> ${r.name}</div>
          <div class="reco-item__desc">${r.desc}</div>
        </div>
        <i class="ph ph-arrow-up-right"></i>
      </a>
    `).join('');
  }

  /* ---------- ESP32 ---------- */
  function renderEsp32() {
    const mount = document.querySelector('[data-mount="esp32"]');
    if (!mount) return;
    mount.innerHTML = '';
    ESP32_PROJECTS.forEach(p => {
      const card = el('div', 'circuit-card card reveal');
      const video = document.createElement('video');
      video.className = 'circuit-card__video';
      video.src = p.video;
      video.muted = true; video.playsInline = true; video.preload = 'metadata'; video.loop = true;
      video.addEventListener('error', () => {
        const ph = el('div', 'circuit-card__video-placeholder', `<i class="ph ph-video-camera" style="font-size:1.6rem;"></i> Sube tu video corto a<br><code style="opacity:.7">assets/videos/esp32/snake/</code>`);
        video.replaceWith(ph);
      });
      card.addEventListener('mouseenter', () => video.play());
      card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
      card.appendChild(video);
      card.appendChild(el('div', 'circuit-card__body', `
        <h4 class="circuit-card__title">${p.name}</h4>
        <p class="circuit-card__desc">${p.desc}</p>
        <div class="tech-pill-row">${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div>
        ${btnRow({ demo: p.demo, repo: p.repo })}
      `));
      mount.appendChild(card);
    });
  }

  /* ---------- LECTURA ---------- */
  function renderBooks() {
    const mount = document.querySelector('[data-mount="books"]');
    if (!mount) return;
    mount.innerHTML = BOOKS.map(b => `
      <div class="book-card card reveal">
        <img class="book-card__cover" src="${b.cover}" alt="${b.title}" onerror="this.style.display='none'">
        <div class="book-card__body">
          <h4 class="book-card__title">${b.title}</h4>
          <div class="book-card__author">${b.author}</div>
          <p class="book-card__desc">${b.desc}</p>
        </div>
      </div>
    `).join('');
  }

  /* ---------- ESTUDIANTES ---------- */
  function renderStudent() {
    const mount = document.querySelector('[data-mount="student"]');
    if (!mount) return;
    const sorted = [...STUDENT_RESOURCES].sort((a, b) => a.order - b.order);
    mount.innerHTML = sorted.map(r => `
      <div class="mentorhub-card reveal">
        <video class="mentorhub-card__shot" src="${r.shotVideo}" muted playsinline preload="metadata"></video>
        <div class="mentorhub-card__body">
          <div class="mentorhub-card__icon"><i class="ph ph-graduation-cap" style="font-size:1.7rem;"></i></div>
          <div>
            <h3 class="mentorhub-card__title">${r.name}</h3>
            <p class="mentorhub-card__desc">${r.desc}</p>
          </div>
          ${btnRow({ demo: r.demo, repo: r.repo })}
        </div>
      </div>
    `).join('');

    // Hover play/pause en cada video de estudiantes
    mount.querySelectorAll('.mentorhub-card__shot').forEach(v => {
      v.addEventListener('mouseenter', () => v.play());
      v.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
    });
  }

  /* ---------- MI SETUP ---------- */
  function renderSetup() {
    const mount = document.querySelector('[data-mount="setup"]');
    if (!mount) return;
    mount.innerHTML = '';
    SETUP_ITEMS.forEach(item => {
      const pending = !item.img;
      const card = el('div', 'product-card reveal' + (pending ? ' product-card--upload-pending' : ''));
      const stage = el('div', 'product-card__stage');
      if (item.img) {
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.addEventListener('error', () => {
          stage.innerHTML = `<i class="ph ${item.icon} product-card__icon-fallback"></i>`;
        });
        stage.appendChild(img);
      } else {
        stage.innerHTML = `<i class="ph ${item.icon} product-card__icon-fallback"></i>`;
      }
      stage.appendChild(el('div', 'product-card__pedestal'));
      card.appendChild(stage);
      card.appendChild(el('div', '', `
        <div class="product-card__name">${item.name}</div>
        <div class="product-card__spec">${item.spec}</div>
        <div class="product-card__desc">${item.desc}${pending ? '<br><em style="opacity:.6">(foto pendiente)</em>' : ''}</div>
      `));
      mount.appendChild(card);
    });
  }

  /* ---------- FUNNY ---------- */
  function renderFunnyProjects() {
    const mount = document.querySelector('[data-mount="funny-projects"]');
    if (!mount) return;
    mount.innerHTML = '';
    FUNNY_PROJECTS.forEach(p => {
      const card = el('div', 'funny-project-card card reveal');
      const video = document.createElement('video');
      video.className = 'funny-project-card__video';
      video.src = p.video;
      video.muted = true; video.playsInline = true; video.preload = 'metadata'; video.loop = true;
      video.addEventListener('error', () => {
        const ph = el('div', 'funny-project-card__video-placeholder', `<i class="ph ph-video-camera" style="font-size:1.6rem;"></i> Sube tu video corto a<br><code style="opacity:.7">assets/videos/funny/</code>`);
        video.replaceWith(ph);
      });
      card.addEventListener('mouseenter', () => video.play());
      card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
      card.appendChild(video);
      card.appendChild(el('div', 'funny-project-card__body', `
        <h4 class="funny-project-card__title">${p.name}</h4>
        <p class="funny-project-card__desc">${p.desc}</p>
        ${btnRow({ repo: p.repo })}
      `));
      mount.appendChild(card);
    });
  }

  function renderFunnySnippets() {
    const mount = document.querySelector('[data-mount="funny-snippets"]');
    if (!mount) return;
    mount.innerHTML = FUNNY_SNIPPETS.map(s => `
      <div class="snippet-card reveal">
        <span class="snippet-card__tag">${s.tag}</span>
        <pre>${s.code}</pre>
      </div>
    `).join('');
  }

  /* ---------- Nav: link activo según sección visible ---------- */
  function initNavActive() {
    const links = document.querySelectorAll('.nav__link');
    const sections = [...links].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(s => io.observe(s));
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderSocials(document.querySelector('[data-mount="hero-socials"]'));
    renderSocials(document.querySelector('[data-mount="footer-socials"]'));
    renderFreelance();
    renderCiberKali();
    renderCiberEsp32();
    renderFlipperProjects();
    renderFlipperExplore();
    renderFlipperRecommended();
    renderEsp32();
    renderBooks();
    renderStudent();
    renderSetup();
    renderFunnyProjects();
    renderFunnySnippets();
    initNavActive();

    // Vuelve a observar los nuevos elementos .reveal que se acaban de inyectar
    if (window.requestAnimationFrame) {
      requestAnimationFrame(() => {
        document.dispatchEvent(new Event('content-rendered'));
      });
    }
  });
})();
