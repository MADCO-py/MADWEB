/* ============================================================
   MADCO — app
   Projects, prices and quiz pricing all live at the top of this file.
   ============================================================ */

/* ---------- PROJECTS ----------
   price = MADCO base price (USD)                                  */
const PROJECTS = [
  {
    id: 'skeepers', name: 'Los Skeepers', price: 2160,
    video: 'assets/work/skeepers.mp4', poster: 'assets/work/skeepers.jpg',
    url: 'https://www.losskeepers.com/',
    kind: { en: 'Full platform', es: 'Plataforma completa', ja: 'フルプラットフォーム' },
    tagline: { en: "Official site for Guatemala's first boy band", es: 'Sitio oficial de la primera boy band de Guatemala', ja: 'グアテマラ初のボーイズバンド公式サイト' },
    desc: {
      en: 'A website that works like an app: fans play, compete in a global ranking, buy merch and make their own photos. The band manages everything from a private panel.',
      es: 'Un sitio que funciona como app: los fans juegan, compiten en un ranking global, compran merch y crean sus propias fotos. La banda maneja todo desde un panel privado.',
      ja: 'アプリのように動くウェブサイト。ファンはゲームで遊び、世界ランキングで競い、グッズを買い、オリジナル写真をつくれます。バンドは専用の管理画面ですべてを管理します。',
    },
    specs: [
      ['4', { en: 'Games', es: 'Juegos', ja: 'ゲーム' }],
      ['40+', { en: 'Photos', es: 'Fotos', ja: '写真' }],
      ['1', { en: 'Admin panel', es: 'Panel admin', ja: '管理画面' }],
    ],
    features: {
      en: ['Database that saves fan scores in real time', 'Private admin panel with visitor stats', 'Global leaderboard "Top Globales", reset monthly', '3 mini-games + a 5-level puzzle', '"Which Skeeper are you?" quiz, shareable on WhatsApp and stories', 'Merch store: sizes, cart, order via WhatsApp', 'Photo studio: upload a photo, add stickers and frames, download', 'Gallery of 40+ show photos, downloadable', 'Countdown to the next concert + ticket link', 'Music player and links to every platform', 'Retro TV video archive', 'Secret newsletter sign-up', 'Two languages'],
      es: ['Base de datos que guarda los puntajes de los fans en tiempo real', 'Panel de administrador privado con estadísticas de visitas', 'Ranking global "Top Globales", se reinicia cada mes', '3 minijuegos + un acertijo de 5 niveles', 'Quiz "¿Qué Skeeper sos?", se comparte en WhatsApp e historias', 'Tienda de merch: tallas, carrito, pedido por WhatsApp', 'Estudio de fotos: sube tu foto, agrega stickers y marcos, descárgala', 'Galería de 40+ fotos de conciertos, descargables', 'Cuenta regresiva al próximo concierto + link de entradas', 'Reproductor de música y links a todas las plataformas', 'Archivo de videos estilo TV retro', 'Registro secreto al boletín', 'Dos idiomas'],
      ja: ['ファンのスコアをリアルタイムで保存するデータベース', '訪問者統計つきの専用管理画面', '毎月リセットされる世界ランキング「Top Globales」', 'ミニゲーム3種＋5段階の謎解き', '「あなたはどのSkeeper？」診断（WhatsApp・ストーリーで共有可）', 'グッズストア：サイズ選択、カート、WhatsAppで注文', '写真スタジオ：写真をアップしてステッカーやフレームで飾り、ダウンロード', 'ライブ写真40枚以上のギャラリー（ダウンロード可）', '次のライブまでのカウントダウン＋チケットリンク', '音楽プレーヤーと全配信サービスへのリンク', 'レトロTV風の動画アーカイブ', 'シークレットのニュースレター登録', '2言語対応'],
    },
  },
  {
    id: 'fleetcontrol', name: 'FleetControl', price: 3800,
    img: 'assets/work/fleetcontrol.png', url: '',
    kind: { en: 'Custom system', es: 'Sistema a la medida', ja: 'オーダーメイドシステム' },
    tagline: { en: 'Fleet management system · Running in production', es: 'Sistema de gestión de flota · En producción', ja: '車両管理システム · 本番稼働中' },
    desc: {
      en: 'A private system for a tire and fleet company: who drives what, photo evidence from the phone and the full maintenance history of every vehicle. Online 24/7 with yearly hosting.',
      es: 'Un sistema privado para una empresa de llantas y flota: quién maneja qué, evidencia con fotos desde el celular y el historial completo de mantenimiento de cada vehículo. En línea 24/7 con hosting anual.',
      ja: 'タイヤ・車両会社向けの非公開システム。誰がどの車を運転しているか、スマホからの写真記録、各車両の整備履歴をすべて管理。年間ホスティングで24時間稼働。',
    },
    specs: [
      ['24/7', { en: 'Online', es: 'En línea', ja: '稼働' }],
      ['Multi', { en: 'User', es: 'Usuario', ja: 'ユーザー' }],
      ['∞', { en: 'Cloud photos', es: 'Fotos en la nube', ja: 'クラウド写真' }],
    ],
    features: {
      en: ['Private login with usernames and passwords', 'Main dashboard with the whole fleet at a glance', 'Database with multiple linked tables: vehicles, drivers, maintenance, photos', 'Data saved in real time, accessible from anywhere', 'Driver management', 'Photo evidence uploaded from the phone, stored in the cloud', 'Full maintenance history per vehicle', 'Running in production with yearly hosting'],
      es: ['Login privado con usuarios y contraseñas', 'Apartado principal con toda la flota de un vistazo', 'Base de datos con múltiples tablas conectadas: vehículos, conductores, mantenimientos, fotos', 'Guarda datos en tiempo real, accesible desde cualquier lugar', 'Control de conductores', 'Evidencia fotográfica subida desde el celular, guardada en la nube', 'Historial completo de mantenimiento por vehículo', 'En producción con hosting anual activo'],
      ja: ['ユーザー名とパスワードによる専用ログイン', '車両全体をひと目で見られるメイン画面', '車両・ドライバー・整備・写真をつなぐ複数テーブルのデータベース', 'データをリアルタイムで保存、どこからでもアクセス可能', 'ドライバー管理', 'スマホから写真記録をアップロード、クラウドに保存', '車両ごとの整備履歴', '年間ホスティングで本番稼働中'],
    },
  },
  {
    id: 'march', name: 'March Jewelry', price: 1240,
    video: 'assets/work/march.mp4', poster: 'assets/work/march.jpg',
    url: 'https://madco-py.github.io/MARCH_JEWELRY/index.html',
    kind: { en: 'Online store', es: 'Tienda en línea', ja: 'オンラインストア' },
    tagline: { en: 'Stainless steel jewelry catalog', es: 'Catálogo de joyería de acero inoxidable', ja: 'ステンレスジュエリーのカタログ' },
    desc: {
      en: 'An online store for a jewelry brand: customers browse by category, fill a cart and send the order straight to WhatsApp. No apps, no commissions.',
      es: 'Una tienda en línea para una marca de joyería: las clientas navegan por categoría, llenan un carrito y mandan el pedido directo a WhatsApp. Sin apps, sin comisiones.',
      ja: 'ジュエリーブランドのオンラインストア。カテゴリから選んでカートに入れ、注文をそのままWhatsAppへ送信。アプリも手数料も不要です。',
    },
    specs: [
      ['4', { en: 'Categories', es: 'Categorías', ja: 'カテゴリ' }],
      ['1', { en: 'Cart', es: 'Carrito', ja: 'カート' }],
      ['0%', { en: 'Commissions', es: 'Comisiones', ja: '手数料' }],
    ],
    features: {
      en: ['Full catalog with 4 categories: earrings, necklaces, bracelets, rings', 'Filter by category', 'Shopping cart', 'Order sent straight to WhatsApp', '"Favorites of the week" and trends sections', 'Brand story and behind the scenes', 'Customer reviews', 'Frequently asked questions', 'Instagram connection'],
      es: ['Catálogo completo con 4 categorías: aretes, collares, pulseras, anillos', 'Filtro por categoría', 'Carrito de compras', 'Pedido enviado directo a WhatsApp', 'Secciones "Favoritos de la semana" y tendencias', 'Historia de la marca y detrás de cámaras', 'Reseñas de clientas', 'Preguntas frecuentes', 'Conexión con Instagram'],
      ja: ['ピアス・ネックレス・ブレスレット・リングの4カテゴリのカタログ', 'カテゴリで絞り込み', 'ショッピングカート', '注文をWhatsAppへ直接送信', '「今週のおすすめ」とトレンド', 'ブランドストーリーと舞台裏', 'お客様の声', 'よくある質問', 'Instagram連携'],
    },
  },
  {
    id: 'sunset', name: 'The Sunset Sessions', price: 520,
    img: 'assets/work/sunset.png', url: 'https://madco-py.github.io/The-Sunset-Sessions/',
    kind: { en: 'Event site', es: 'Sitio de evento', ja: 'イベントサイト' },
    tagline: { en: 'Music, art and coffee at Casa Tina', es: 'Música, arte y café en Casa Tina', ja: 'カサ・ティナで音楽、アート、コーヒー' },
    desc: {
      en: 'An event site with its own illustrated identity: lineup reveals, open mic, countdown, partner brands and tickets sold through WhatsApp.',
      es: 'Un sitio de evento con identidad ilustrada propia: artistas por revelar, micrófono abierto, cuenta regresiva, marcas aliadas y venta de entradas por WhatsApp.',
      ja: 'オリジナルのイラストで彩るイベントサイト。出演者発表、オープンマイク、カウントダウン、協賛ブランド、WhatsAppでのチケット販売。',
    },
    specs: [
      ['1', { en: 'Page', es: 'Página', ja: 'ページ' }],
      ['⏱', { en: 'Countdown', es: 'Cuenta regresiva', ja: 'カウントダウン' }],
      ['WA', { en: 'Ticket sales', es: 'Venta de entradas', ja: 'チケット販売' }],
    ],
    features: {
      en: ['Custom illustrated visual identity', 'Live countdown to the event', 'Artists to be revealed', 'Open mic sign-up', 'Venue and how to get there', 'Partner brands', 'Presale price highlight', 'Ticket purchase via WhatsApp'],
      es: ['Identidad visual ilustrada a la medida', 'Cuenta regresiva en vivo al evento', 'Artistas por revelar', 'Inscripción a micrófono abierto', 'El lugar y cómo llegar', 'Marcas aliadas', 'Precio de preventa destacado', 'Compra de entradas por WhatsApp'],
      ja: ['オリジナルのイラストによるビジュアル', 'イベントまでのライブカウントダウン', '出演者発表', 'オープンマイク申し込み', '会場とアクセス', '協賛ブランド', '前売り価格の表示', 'WhatsAppでチケット購入'],
    },
  },
  {
    id: 'marce', name: 'Marce Juárez', price: 460,
    video: 'assets/work/marce.mp4', poster: 'assets/work/marce.jpg',
    url: 'https://madco-py.github.io/MARCE_JUAREZ/',
    kind: { en: 'Artist portfolio', es: 'Portafolio de artista', ja: 'アーティストのポートフォリオ' },
    tagline: { en: 'Singer-songwriter · Simple, honest music', es: 'Cantautora · Música sencilla y real', ja: 'シンガーソングライター · 素朴でまっすぐな音楽' },
    desc: {
      en: 'A one-page portfolio for a singer-songwriter: her story, her songs, her photos and every social network in one link.',
      es: 'Un portafolio de una sola página para una cantautora: su historia, sus canciones, sus fotos y todas sus redes en un solo link.',
      ja: 'シンガーソングライターの1ページポートフォリオ。ストーリー、楽曲、写真、すべてのSNSをひとつのリンクに。',
    },
    specs: [
      ['1', { en: 'Link', es: 'Link', ja: 'リンク' }],
      ['♫', { en: 'Spotify', es: 'Spotify', ja: 'Spotify' }],
      ['3', { en: 'Socials', es: 'Redes', ja: 'SNS' }],
    ],
    features: {
      en: ['About me with bio and quote', 'Track list linked to Spotify', 'Lyrics section', 'Photo gallery', 'Instagram and TikTok', 'Promotes her own business (March Jewelry)', 'All social links in one place'],
      es: ['Sobre mí con biografía y cita', 'Lista de canciones conectada a Spotify', 'Sección de letras', 'Galería de fotos', 'Instagram y TikTok', 'Promociona su propio emprendimiento (March Jewelry)', 'Todas sus redes en un solo lugar'],
      ja: ['プロフィールと言葉', 'Spotify連携の曲リスト', '歌詞セクション', 'フォトギャラリー', 'InstagramとTikTok', '自身のブランド（March Jewelry）を紹介', 'すべてのSNSを一か所に'],
    },
  },
];

/* Pricing table rows (cheapest → most complete) */
const TIERS = [
  { id: 'marce', name: { en: 'Portfolio', es: 'Portafolio', ja: 'ポートフォリオ' },
    what: { en: 'One page: bio, work, photos, socials', es: 'Una página: bio, trabajo, fotos, redes', ja: '1ページ：プロフィール、作品、写真、SNS' } },
  { id: 'sunset', name: { en: 'Event / landing', es: 'Evento / landing', ja: 'イベント／LP' },
    what: { en: 'Countdown, lineup, sponsors, tickets via WhatsApp', es: 'Cuenta regresiva, artistas, patrocinadores, entradas por WhatsApp', ja: 'カウントダウン、出演者、協賛、WhatsAppでチケット' } },
  { id: 'march', name: { en: 'Online store', es: 'Tienda en línea', ja: 'オンラインストア' },
    what: { en: 'Catalog by category, cart, orders via WhatsApp', es: 'Catálogo por categoría, carrito, pedidos por WhatsApp', ja: 'カテゴリ別カタログ、カート、WhatsApp注文' } },
  { id: 'skeepers', name: { en: 'Full platform', es: 'Plataforma completa', ja: 'フルプラットフォーム' },
    what: { en: 'Database, admin panel, games, store, gallery', es: 'Base de datos, panel admin, juegos, tienda, galería', ja: 'データベース、管理画面、ゲーム、ストア、ギャラリー' } },
  { id: 'fleetcontrol', name: { en: 'Custom system', es: 'Sistema a la medida', ja: 'オーダーメイドシステム' },
    what: { en: 'Logins, multiple linked tables, cloud photos, real time', es: 'Logins, múltiples tablas conectadas, fotos en la nube, tiempo real', ja: 'ログイン、複数テーブル、クラウド写真、リアルタイム' } },
];

/* Quiz pricing (USD). Calibrated so the answers that describe each real
   project land near that project's price. */
const QUIZ_PRICE = {
  base: { business: 460, artist: 460, event: 520, personal: 460, system: 3800 },
  feat: { show: 0, sell: 650, data: 250, admin: 300, forms: 80, games: 180, bot: 250, auto: 200, nfc: 60, pay: 200, inv: 350, loyal: 180, gbp: 40 },
  systemIncludes: ['data', 'admin', 'forms'],
  size: { one: 0, mid: 120, big: 260 },
  langs: { 1: 0, 2: 90, 3: 180 },
};

/* Extra services (USD, starting price) */
const SERVICES = { bot: 250, auto: 200, nfc: 60, pay: 200, inv: 350, loyal: 180, gbp: 40 };

const PALETTES = {
  midnight: { bg: '#0b0b12', fg: '#f3f3f7', ac: '#7c5cff' },
  sunset:   { bg: '#2a0e05', fg: '#fff1d6', ac: '#ff7a2f' },
  rose:     { bg: '#fff8f5', fg: '#4a1020', ac: '#c39a55' },
  forest:   { bg: '#0f1f17', fg: '#e9f3ec', ac: '#4fd18b' },
  ocean:    { bg: '#f2f8ff', fg: '#0b2540', ac: '#1e7bff' },
  mono:     { bg: '#ffffff', fg: '#111111', ac: '#111111' },
};
const VIBES = {
  minimal: { font: 'Inter', w: 600, tt: 'none', fs: 'normal', r: '6px', sample: 'Aa' },
  bold:    { font: 'Anton', w: 400, tt: 'uppercase', fs: 'normal', r: '0px', sample: 'AA' },
  elegant: { font: 'Playfair Display', w: 600, tt: 'none', fs: 'italic', r: '2px', sample: 'Aa' },
  playful: { font: 'Fredoka', w: 600, tt: 'none', fs: 'normal', r: '18px', sample: 'Aa' },
};

/* ============================================================ */
let LANG = document.documentElement.lang || 'en';
if (!I18N[LANG]) LANG = 'en';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = (k, vars) => {
  let s = (I18N[LANG] && I18N[LANG][k]) ?? I18N.en[k] ?? k;
  if (vars) for (const v in vars) s = s.replace(`{${v}}`, vars[v]);
  return s;
};
const L = (o) => (o && (o[LANG] ?? o.en)) || '';
const usd = (n) => '$' + n.toLocaleString('en-US');
const fromPrice = (n) => LANG === 'ja' ? `${usd(n)}〜` : `${t('from')} ${usd(n)}`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const byId = (id) => PROJECTS.find((p) => p.id === id);
const mediaHTML = (p, cls = 'media', eager = false) => p.video
  ? `<video class="${cls}" src="${p.video}" poster="${p.poster}" muted loop playsinline ${eager ? 'autoplay' : ''} preload="${eager ? 'auto' : 'metadata'}"></video>`
  : `<img class="${cls}${p.id === 'sunset' ? ' contain-top' : ''}" src="${p.img}" alt="${esc(p.name)}" loading="${eager ? 'eager' : 'lazy'}">`;

/* ---------- Static text ---------- */
function applyStatic() {
  document.documentElement.lang = LANG;
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-svc]').forEach((el) => { el.textContent = fromPrice(SERVICES[el.dataset.svc]); });
  $$('.lang button').forEach((b) => b.classList.toggle('on', b.dataset.lang === LANG));
}

/* ---------- Hero carousel ---------- */
const HERO = ['brand', 'fleetcontrol', 'march', 'sunset', 'marce'];
let heroIdx = 0, heroTimer;
/* Cybertruck-style spec boxes: [value, label] or [value, unit, label] */
function specBoxes(items) {
  return `<div class="hspecs">${items.map((it) => {
    const [v, u, l] = it.length === 3 ? it : [it[0], '', it[1]];
    return `<div class="hspec"><b>${esc(v)}${u ? `<small>${esc(u)}</small>` : ''}</b><span>${esc(l)}</span></div>`;
  }).join('')}</div>`;
}
function renderHero() {
  const track = $('#heroTrack');
  track.innerHTML = HERO.map((id) => {
    if (id === 'brand') {
      return `<div class="slide brand">
        <video class="slide-bg" src="assets/work/skeepers.mp4" poster="assets/work/skeepers.jpg" muted loop playsinline autoplay></video>
        <div class="slide-copy">
          <h1>MADCO</h1>
          <p>${esc(t('hero.brand.sub'))}</p>
          <div class="btns"><a class="btn primary" href="#build">${esc(t('btn.build'))}</a><a class="btn secondary" href="#work">${esc(t('btn.work'))}</a></div>
        </div>
        ${specBoxes([['5', t('spec.live')], ['100', '%', t('spec.custom')], ['3', t('hs.langs')]])}
      </div>`;
    }
    const p = byId(id);
    const bg = p.video ? p.poster : p.img;
    return `<div class="slide">
      <img class="slide-bg" src="${bg}" alt="" aria-hidden="true">
      <div class="slide-copy">
        <h1>${esc(p.name)}</h1>
        <p><u>${esc(L(p.tagline))}</u></p>
        <p class="slide-tag">${esc(L(p.kind))} · ${esc(fromPrice(p.price))}</p>
        <div class="btns">
          <button class="btn primary" data-open="${p.id}">${esc(t('btn.details'))}</button>
          ${p.url ? `<a class="btn secondary" href="${p.url}" target="_blank" rel="noopener">${esc(t('btn.visit'))}</a>` : `<a class="btn secondary" href="#pricing">${esc(t('btn.pricing'))}</a>`}
        </div>
      </div>
      <div class="screen">${mediaHTML(p)}</div>
      ${specBoxes(p.specs.map(([v, l]) => [v, L(l)]))}
    </div>`;
  }).join('');
  $('#heroDots').innerHTML = HERO.map((_, i) => `<button aria-label="Slide ${i + 1}" data-i="${i}"></button>`).join('');
  goHero(heroIdx, true);
}
function goHero(i, instant) {
  heroIdx = (i + HERO.length) % HERO.length;
  const track = $('#heroTrack');
  if (instant) track.style.transition = 'none';
  track.style.transform = `translateX(-${heroIdx * 100}%)`;
  if (instant) requestAnimationFrame(() => (track.style.transition = ''));
  $$('#heroDots button').forEach((b, j) => b.classList.toggle('on', j === heroIdx));
  [...track.children].forEach((s, j) => s.classList.toggle('on', j === heroIdx));
  $$('.slide video', track).forEach((v, j) => {
    const slide = v.closest('.slide');
    const k = [...track.children].indexOf(slide);
    if (k === heroIdx) v.play().catch(() => {}); else v.pause();
  });
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goHero(heroIdx + 1), 7000);
}

/* ---------- Work cards ---------- */
function renderCards() {
  $('#cards').innerHTML = PROJECTS.map((p) => `
    <article class="card rv">
      ${mediaHTML(p)}
      <div class="card-kind">${esc(L(p.kind))}</div>
      <div class="card-copy">
        <h3>${esc(p.name)}</h3>
        <p>${esc(L(p.tagline))}</p>
        <div class="card-price">${esc(fromPrice(p.price))}</div>
        <div class="btns">
          <button class="btn primary" data-open="${p.id}">${esc(t('btn.details'))}</button>
          ${p.url ? `<a class="btn secondary" href="${p.url}" target="_blank" rel="noopener">${esc(t('btn.visit'))}</a>` : `<span class="btn disabled">${esc(t('btn.private'))}</span>`}
        </div>
      </div>
    </article>`).join('');
  $('#cardDots').innerHTML = PROJECTS.map((_, i) => `<button aria-label="${i + 1}" data-i="${i}"></button>`).join('');
  syncCardDots();
  watchCardVideos();
}
function syncCardDots() {
  const box = $('#cards');
  const cards = $$('.card', box);
  const mid = box.scrollLeft + box.clientWidth / 2;
  let best = 0, bd = Infinity;
  cards.forEach((c, i) => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = i; } });
  $$('#cardDots button').forEach((b, i) => b.classList.toggle('on', i === best));
}
let cardIO;
function watchCardVideos() {
  cardIO?.disconnect();
  cardIO = new IntersectionObserver((es) => es.forEach((e) => {
    const v = $('video', e.target); if (!v) return;
    e.isIntersecting && e.intersectionRatio > .6 ? v.play().catch(() => {}) : v.pause();
  }), { threshold: [0, .6] });
  $$('.card').forEach((c) => cardIO.observe(c));
}

/* ---------- Pricing table ---------- */
function renderPricing() {
  $('#ptable').innerHTML = `
    <div class="prow head"><div>${esc(t('pt.type'))}</div><div class="h-ex">${esc(t('pt.example'))}</div><div>${esc(t('pt.ours'))}</div></div>
    ${TIERS.map((tr) => { const p = byId(tr.id); return `
      <div class="prow">
        <div><h4>${esc(L(tr.name))}</h4><p class="what">${esc(L(tr.what))}</p></div>
        <div class="ex">${esc(p.name)}</div>
        <div class="ours">${usd(p.price)}<small>USD</small></div>
      </div>`; }).join('')}`;
}

/* ---------- Detail sheet ---------- */
function openSheet(id) {
  const p = byId(id); if (!p) return;
  $('#sheetBody').innerHTML = `
    <div class="sh-media">${mediaHTML(p, 'media', true)}</div>
    <div class="sh-body">
      <p class="eyebrow">${esc(L(p.kind))}</p>
      <h3>${esc(p.name)}</h3>
      <p>${esc(L(p.desc))}</p>
      <div class="sh-specs">${p.specs.map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(L(l))}</span></div>`).join('')}</div>
      <div class="sh-feat"><h4>${esc(t('sh.inside'))}</h4><ul>${L(p.features).map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
      <div class="sh-price">
        <div class="row main"><span>${esc(t('sh.ours'))}</span><b>${usd(p.price)}</b></div>
        <div class="row" style="margin-top:8px;font-size:12px">${esc(t('sh.plus'))}</div>
      </div>
      <div class="btns">
        ${p.url ? `<a class="btn ghost" href="${p.url}" target="_blank" rel="noopener">${esc(t('btn.visit'))}</a>` : ''}
        <a class="btn primary" href="#build" data-close>${esc(t('btn.build'))}</a>
      </div>
    </div>`;
  $('#sheet').hidden = false; $('#sheetBg').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#sheet').scrollTop = 0;
}
function closeSheet() {
  $('#sheet').hidden = true; $('#sheetBg').hidden = true;
  $('#sheetBody').innerHTML = '';
  document.body.style.overflow = '';
}

/* Quiz lives in js/quiz.js · chatbot in js/chat.js */

/* ---------- Reveal + sticky ---------- */
function setupReveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.sec-head, .spec, .prow, .inc-item, .sec-grid > div, .step, .contact h2, .svc, .rv').forEach((el) => { el.classList.add('rv'); io.observe(el); });
}
function setupSticky() {
  const hideOn = ['#build', '#contact'].map((s) => $(s));
  const vis = new Map();
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => vis.set(e.target, e.isIntersecting));
    $('#sticky').classList.toggle('hide', [...vis.values()].some(Boolean));
  }, { threshold: .15 });
  hideOn.forEach((el) => io.observe(el));
}

/* Header turns dark over dark sections (Tesla-style): transparent over the hero, solid black elsewhere */
function setupHeaderTheme() {
  const hdr = $('#hdr');
  const darks = $$('[data-dark]');
  let ticking = false;
  const check = () => {
    ticking = false;
    const y = hdr.offsetHeight + 2; let mode = '';
    for (const s of darks) { const r = s.getBoundingClientRect(); if (r.top <= y && r.bottom > y) { mode = s.dataset.dark; break; } }
    hdr.classList.toggle('dark', !!mode);
    hdr.classList.toggle('clear', mode === 'clear');
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } }, { passive: true });
  addEventListener('resize', check);
  check();
}


/* ---------- Language ---------- */
function setLang(l) {
  if (!I18N[l]) return;
  LANG = l;
  try { localStorage.setItem('madco-lang', l); } catch (e) {}
  applyStatic(); renderHero(); renderCards(); renderPricing(); renderQuiz(); renderChat(); renderLiveQR();
  $$('.card, .prow').forEach((el) => el.classList.add('rv', 'in'));
  closeSheet();
}

/* ---------- Init ---------- */
applyStatic();
renderHero();
renderCards();
renderPricing();
const fromShare = restoreFromHash();
renderQuiz();
chatInit();
startLiveQR();
if (fromShare) setTimeout(() => $('#build').scrollIntoView(), 300);
setupReveal();
setupSticky();
setupHeaderTheme();

$('#heroPrev').addEventListener('click', () => goHero(heroIdx - 1));
$('#heroNext').addEventListener('click', () => goHero(heroIdx + 1));
$('#heroDots').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) goHero(+b.dataset.i); });
let tx = null;
$('.hero').addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
$('.hero').addEventListener('touchend', (e) => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) goHero(heroIdx + (dx < 0 ? 1 : -1)); tx = null; });

$('#cards').addEventListener('scroll', () => requestAnimationFrame(syncCardDots), { passive: true });
$('#cardDots').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  const c = $$('.card')[+b.dataset.i]; const box = $('#cards');
  box.scrollTo({ left: c.offsetLeft - (box.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' });
});

document.addEventListener('click', (e) => {
  const op = e.target.closest('[data-open]'); if (op) { openSheet(op.dataset.open); return; }
  if (e.target.closest('[data-chat-open]')) { toggleChat(true); return; }
  if (e.target.closest('[data-close]')) closeSheet();
});
$('#sheetClose').addEventListener('click', closeSheet);
$('#sheetBg').addEventListener('click', closeSheet);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });

$('#quiz').addEventListener('click', onQuizClick);
$$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

const mnav = $('#mnav');
$('#menuBtn').addEventListener('click', () => { mnav.hidden = false; });
$('#mnavClose').addEventListener('click', () => { mnav.hidden = true; });
$$('a', mnav).forEach((a) => a.addEventListener('click', () => { mnav.hidden = true; }));
