// ============================================================
// HERRAMIENTAS DE CIBERSEGURIDAD — todo local, GitHub Pages OK
// 1. Generador de contraseñas
// 2. Analizador de URLs
// ============================================================

// ---- GENERADOR DE CONTRASEÑAS ----
(function () {
  const genBtn = document.getElementById('ciber-gen-btn');
  const copyBtn = document.getElementById('ciber-copy-btn');
  const output = document.getElementById('ciber-pwd-output');
  const lengthSlider = document.getElementById('ciber-pwd-length');
  const lengthLabel = document.getElementById('ciber-pwd-length-val');
  const strengthBar = document.getElementById('ciber-strength-bar');
  const strengthLabel = document.getElementById('ciber-strength-label');
  if (!genBtn) return;

  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMS  = '0123456789';
  const SYMS  = '!@#$%^&*()_+-=[]{}|;:,.?';

  function getOpts() {
    return {
      lower: document.getElementById('ciber-opt-lower').checked,
      upper: document.getElementById('ciber-opt-upper').checked,
      nums:  document.getElementById('ciber-opt-nums').checked,
      syms:  document.getElementById('ciber-opt-syms').checked,
    };
  }

  function generate() {
    const len = parseInt(lengthSlider.value, 10);
    const opts = getOpts();
    let charset = '';
    if (opts.lower) charset += LOWER;
    if (opts.upper) charset += UPPER;
    if (opts.nums)  charset += NUMS;
    if (opts.syms)  charset += SYMS;
    if (!charset) { output.value = '— activa al menos una opción —'; return; }

    // Garantizar al menos un carácter de cada tipo activado
    let pwd = '';
    const arr = new Uint32Array(len + 10);
    crypto.getRandomValues(arr);
    let idx = 0;
    if (opts.lower) pwd += LOWER[arr[idx++] % LOWER.length];
    if (opts.upper) pwd += UPPER[arr[idx++] % UPPER.length];
    if (opts.nums)  pwd += NUMS[arr[idx++] % NUMS.length];
    if (opts.syms)  pwd += SYMS[arr[idx++] % SYMS.length];

    const remaining = len - pwd.length;
    for (let i = 0; i < remaining; i++) {
      pwd += charset[arr[idx++] % charset.length];
    }
    // Mezclar con Fisher-Yates
    const chars = pwd.split('');
    const shuffleArr = new Uint32Array(chars.length);
    crypto.getRandomValues(shuffleArr);
    for (let i = chars.length - 1; i > 0; i--) {
      const j = shuffleArr[i] % (i + 1);
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    output.value = chars.join('');
    updateStrength(chars.join(''), opts);
  }

  function updateStrength(pwd, opts) {
    let score = 0;
    if (opts.lower) score++;
    if (opts.upper) score++;
    if (opts.nums)  score++;
    if (opts.syms)  score++;
    if (pwd.length >= 16) score++;
    if (pwd.length >= 24) score++;

    const levels = ['', 'Muy débil', 'Débil', 'Media', 'Fuerte', 'Muy fuerte', 'Extrema'];
    const colors = ['', '#ef4444', '#f97316', '#eab308', '#22c55e', '#10b981', '#6366f1'];
    const pct = Math.min(100, Math.round((score / 6) * 100));

    strengthBar.style.width = pct + '%';
    strengthBar.style.background = colors[Math.min(score, 6)] || '#555';
    strengthLabel.textContent = levels[Math.min(score, 6)] || '';
  }

  lengthSlider.addEventListener('input', () => {
    lengthLabel.textContent = lengthSlider.value;
    if (output.value && output.value.length > 3) generate();
  });

  genBtn.addEventListener('click', generate);

  copyBtn.addEventListener('click', () => {
    if (!output.value || output.value.startsWith('—')) return;
    navigator.clipboard.writeText(output.value).then(() => {
      const orig = copyBtn.textContent;
      copyBtn.textContent = 'Copiada';
      copyBtn.style.background = '#22c55e';
      copyBtn.style.borderColor = '#22c55e';
      setTimeout(() => {
        copyBtn.textContent = orig;
        copyBtn.style.background = '';
        copyBtn.style.borderColor = '';
      }, 1800);
    });
  });
})();


// ---- ANALIZADOR DE URLs ----
(function () {
  const analyzeBtn = document.getElementById('url-analyze-btn');
  const urlInput = document.getElementById('url-input');
  const urlResult = document.getElementById('url-result');
  if (!analyzeBtn) return;

  const SHORTENERS = ['bit.ly','tinyurl.com','t.co','goo.gl','ow.ly','is.gd','buff.ly','adf.ly','tiny.cc','short.io','cutt.ly','rebrand.ly'];
  const SUSPICIOUS_TLDS = ['.tk','.ml','.ga','.cf','.gq','.xyz','.top','.click','.work','.loan','.date','.download'];
  const BRANDS = ['paypal','amazon','google','facebook','apple','microsoft','netflix','instagram','whatsapp','twitter','tiktok','youtube','banco','bancoindustrial','banrural','bam','bi'];
  const SUSPICIOUS_KEYWORDS = ['login','signin','verify','account','secure','update','confirm','password','banking','wallet','recover','suspend'];

  function analyzeURL(raw) {
    const findings = [];
    let riskScore = 0;

    let url;
    try {
      // Intentar parsear; si no tiene protocolo, añadirlo
      const toparse = raw.startsWith('http') ? raw : 'https://' + raw;
      url = new URL(toparse);
    } catch {
      return { error: true };
    }

    const hostname = url.hostname.toLowerCase();
    const fullUrl = url.href.toLowerCase();
    const path = url.pathname.toLowerCase();

    // 1. HTTP sin S
    if (url.protocol === 'http:') {
      findings.push({ type: 'warn', text: 'No usa HTTPS — la conexión no está cifrada.' });
      riskScore += 2;
    }

    // 2. IP address directa
    if (/^(\d{1,3}\.){3}\d{1,3}$/.test(hostname)) {
      findings.push({ type: 'danger', text: 'Usa una dirección IP directa en vez de un dominio — señal clásica de phishing.' });
      riskScore += 4;
    }

    // 3. Acortador de URLs
    if (SHORTENERS.some(s => hostname === s || hostname.endsWith('.' + s))) {
      findings.push({ type: 'warn', text: 'Es un enlace acortado — no se puede saber a dónde lleva sin abrirlo.' });
      riskScore += 2;
    }

    // 4. TLD sospechoso
    const suspTLD = SUSPICIOUS_TLDS.find(t => hostname.endsWith(t));
    if (suspTLD) {
      findings.push({ type: 'warn', text: `TLD sospechoso: "${suspTLD}" — frecuente en sitios fraudulentos.` });
      riskScore += 2;
    }

    // 5. Subdominios excesivos
    const parts = hostname.split('.');
    if (parts.length > 4) {
      findings.push({ type: 'warn', text: 'Demasiados subdominios — técnica común para disfrazar el dominio real.' });
      riskScore += 2;
    }

    // 6. Marca conocida en subdominio/path pero no en dominio principal
    const domainBase = parts.slice(-2).join('.');
    const rest = hostname.replace(domainBase, '') + path;
    const foundBrand = BRANDS.find(b => rest.includes(b));
    if (foundBrand && !domainBase.includes(foundBrand)) {
      findings.push({ type: 'danger', text: `Contiene "${foundBrand}" pero no es su dominio oficial — posible phishing.` });
      riskScore += 5;
    }

    // 7. Palabras clave sospechosas en el path/query
    const kw = SUSPICIOUS_KEYWORDS.find(k => path.includes(k) || url.search.toLowerCase().includes(k));
    if (kw) {
      findings.push({ type: 'warn', text: `Contiene la palabra "${kw}" en la URL — común en páginas de robo de credenciales.` });
      riskScore += 1;
    }

    // 8. Números que reemplazan letras (paypa1.com, g00gle.com)
    if (/[a-z][0-9][a-z]|[0-9]{2}[a-z]|[a-z][0-9]{2}/.test(hostname.replace(/\./g,''))) {
      findings.push({ type: 'warn', text: 'El dominio mezcla números y letras de forma inusual — técnica de typosquatting.' });
      riskScore += 2;
    }

    // 9. URL muy larga
    if (raw.length > 120) {
      findings.push({ type: 'info', text: 'URL inusualmente larga — puede ocultar el destino real.' });
      riskScore += 1;
    }

    // 10. Positivo: HTTPS + dominio limpio
    if (url.protocol === 'https:' && parts.length <= 3 && riskScore === 0) {
      findings.push({ type: 'ok', text: 'HTTPS activo y estructura del dominio limpia.' });
    }

    return { riskScore, findings, hostname };
  }

  function renderResult(raw) {
    const r = analyzeURL(raw.trim());
    if (r.error) {
      urlResult.innerHTML = `<div class="url-result url-result--warn">
        <div class="url-result__header">
          <i class="ph ph-question url-result__icon"></i>
          <div>
            <div class="url-result__verdict">URL no válida</div>
            <div class="url-result__domain">Asegúrate de incluir el dominio completo</div>
          </div>
        </div>
      </div>`;
      return;
    }

    const level = r.riskScore === 0 ? 'safe' : r.riskScore <= 3 ? 'suspicious' : 'danger';
    const labels = {
      safe:       'No se detectaron amenazas',
      suspicious: 'Este sitio puede ser sospechoso',
      danger:     'Sitio potencialmente peligroso'
    };
    const sublabels = {
      safe:       'Google no ha detectado contenido peligroso en este sitio.',
      suspicious: 'Algunas señales indican que este sitio podría ser inseguro.',
      danger:     'Este sitio puede contener software dañino o intentos de phishing.'
    };
    const icons = {
      safe:       'ph-shield-check',
      suspicious: 'ph-shield-warning',
      danger:     'ph-shield-slash'
    };

    const findingIcon = { ok: 'ph-check-circle', danger: 'ph-x-circle', warn: 'ph-warning-circle', info: 'ph-info' };
    const findingsHTML = r.findings.length > 1 ? r.findings.map(f => `
      <div class="url-finding url-finding--${f.type}">
        <i class="ph ${findingIcon[f.type] || 'ph-info'}"></i>
        <span>${f.text}</span>
      </div>
    `).join('') : '';

    urlResult.innerHTML = `
      <div class="url-result url-result--${level}">
        <div class="url-result__header">
          <i class="ph ${icons[level]} url-result__icon"></i>
          <div>
            <div class="url-result__verdict">${labels[level]}</div>
            <div class="url-result__domain">${r.hostname}</div>
          </div>
        </div>
        ${findingsHTML ? `<div class="url-findings">${findingsHTML}</div>` : ''}
      </div>
    `;
  }

  analyzeBtn.addEventListener('click', () => renderResult(urlInput.value));
  urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') renderResult(urlInput.value); });
})();
