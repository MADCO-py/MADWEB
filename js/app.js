/* ============================================================
   MADCO — app
   Projects, prices and quiz pricing all live at the top of this file.
   ============================================================ */

/* ---------- PROJECTS ----------
   price  = MADCO base price (USD)
   market = market average (USD) = price + ~Q1,000                */
const PROJECTS = [
  {
    id: 'skeepers', name: 'Los Skeepers', price: 2160, market: 2290,
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
    id: 'fleetcontrol', name: 'FleetControl', price: 3800, market: 3930,
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
    id: 'march', name: 'March Jewelry', price: 1240, market: 1370,
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
    id: 'sunset', name: 'The Sunset Sessions', price: 520, market: 650,
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
    id: 'marce', name: 'Marce Juárez', price: 460, market: 590,
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
  feat: { show: 0, sell: 650, data: 250, admin: 300, forms: 80, games: 180 },
  systemIncludes: ['data', 'admin', 'forms'],
  size: { one: 0, mid: 120, big: 260 },
  langs: { 1: 0, 2: 90, 3: 180 },
  marketGap: 130, // ≈ Q1,000
};

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
  $$('.lang button').forEach((b) => b.classList.toggle('on', b.dataset.lang === LANG));
}

/* ---------- Hero carousel ---------- */
const HERO = ['brand', 'fleetcontrol', 'march', 'sunset', 'marce'];
let heroIdx = 0, heroTimer;
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
        <div class="card-price">${esc(fromPrice(p.price))}<s>${usd(p.market)}</s></div>
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
    <div class="prow head"><div>${esc(t('pt.type'))}</div><div class="h-ex">${esc(t('pt.example'))}</div><div class="h-mkt">${esc(t('pt.market'))}</div><div>${esc(t('pt.ours'))}</div></div>
    ${TIERS.map((tr) => { const p = byId(tr.id); return `
      <div class="prow">
        <div><h4>${esc(L(tr.name))}</h4><p class="what">${esc(L(tr.what))}</p></div>
        <div class="ex">${esc(p.name)}</div>
        <div class="mkt">${usd(p.market)}</div>
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
        <div class="row"><span>${esc(t('sh.market'))}</span><s>${usd(p.market)}</s></div>
        <div class="row main"><span>${esc(t('sh.ours'))}</span><b>${usd(p.price)}</b></div>
        <div class="save">${esc(t('sh.save'))}</div>
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

/* ---------- Quiz ---------- */
const Q = { step: 0, type: null, feats: new Set(), vibe: null, pal: null, size: null, langs: null, name: '' };
const STEPS = [
  { key: 'type', title: 'q1', opts: ['business', 'artist', 'event', 'personal', 'system'], desc: true },
  { key: 'feats', title: 'q2', opts: ['show', 'sell', 'data', 'admin', 'forms', 'games'], desc: true, multi: true },
  { key: 'vibe', title: 'q3', opts: ['minimal', 'bold', 'elegant', 'playful'], desc: true, vibe: true },
  { key: 'pal', title: 'q4', opts: Object.keys(PALETTES), swatch: true },
  { key: 'size', title: 'q5', opts: ['one', 'mid', 'big'], desc: true },
  { key: 'langs', title: 'q6', opts: ['1', '2', '3'], desc: true },
];
const answered = (s) => s.multi ? Q.feats.size > 0 : Q[s.key] != null;

function quote() {
  const P = QUIZ_PRICE, type = Q.type || 'business';
  const lines = [[t('r.base') + ' · ' + t('q1.' + type), P.base[type]]];
  [...Q.feats].forEach((f) => {
    if (type === 'system' && P.systemIncludes.includes(f)) return;
    if (P.feat[f]) lines.push([t('q2.' + f), P.feat[f]]);
  });
  if (Q.size && P.size[Q.size]) lines.push([t('r.size') + ' · ' + t('q5.' + Q.size), P.size[Q.size]]);
  if (Q.langs && P.langs[Q.langs]) lines.push([t('r.lang') + ' · ' + t('q6.' + Q.langs), P.langs[Q.langs]]);
  const total = Math.round(lines.reduce((a, [, v]) => a + v, 0) / 10) * 10;
  return { lines, total, market: total + P.marketGap };
}

function renderQuiz() {
  const box = $('#quiz');
  const done = Q.step >= STEPS.length;
  box.innerHTML = `<div class="quiz-grid">
    <div class="quiz-left">${done ? resultHTML() : stepHTML()}</div>
    <div class="mock-wrap">
      <div class="mock-bar"><i></i><i></i><i></i><div class="url" id="mockUrl"></div></div>
      <div class="mock" id="mock"></div>
    </div>
  </div>`;
  renderMock();
  if (done) {
    const inp = $('#rName');
    inp.addEventListener('input', () => { Q.name = inp.value; renderMock(); updateMail(); });
    updateMail();
  }
}

function stepHTML() {
  const s = STEPS[Q.step];
  const isOn = (o) => s.multi ? Q.feats.has(o) : Q[s.key] === o;
  const opt = (o) => {
    let inner = '';
    if (s.swatch) { const p = PALETTES[o]; inner = `<span class="sw"><i style="background:${p.bg}"></i><i style="background:${p.ac}"></i><i style="background:${p.fg}"></i></span><b>${esc(t('q4.' + o))}</b>`; }
    else {
      const v = s.vibe ? VIBES[o] : null;
      inner = `${v ? `<span class="vibe-sample" style="font-family:'${v.font}';font-weight:${v.w};font-style:${v.fs};text-transform:${v.tt}">${v.sample}</span>` : ''}
        <b>${esc(t(s.title + '.' + o))}</b>${s.desc ? `<span>${esc(t(s.title + '.' + o + '.d'))}</span>` : ''}`;
    }
    return `<button class="q-opt${isOn(o) ? ' on' : ''}" data-opt="${o}">${inner}</button>`;
  };
  return `
    <div class="q-progress"><i style="width:${(Q.step / STEPS.length) * 100}%"></i></div>
    <p class="q-count">${esc(t('q.of', { n: Q.step + 1 }))}</p>
    <h3 class="q-title">${esc(t(s.title))}</h3>
    <p class="q-hint">${s.multi ? esc(t('q.multi')) : '&nbsp;'}</p>
    <div class="q-opts${s.swatch ? ' sw3' : ''}">${s.opts.map(opt).join('')}</div>
    <div class="q-nav">
      <button class="btn ghost" data-q="back" ${Q.step === 0 ? 'disabled' : ''}>${esc(t('q.back'))}</button>
      <button class="btn primary" data-q="next" ${answered(s) ? '' : 'disabled'}>${esc(t(Q.step === STEPS.length - 1 ? 'q.see' : 'q.next'))}</button>
    </div>`;
}

function resultHTML() {
  const q = quote();
  return `<div class="r-side">
    <h3>${esc(t('r.name'))}</h3>
    <input class="r-name" id="rName" maxlength="28" placeholder="${esc(t('r.name.ph'))}" value="${esc(Q.name)}">
    <div class="r-price">
      <p class="from">${esc(t('r.est'))} · ${esc(t('r.from'))}</p>
      <div class="big">${usd(q.total)}</div>
      <p class="mkt"><s>${usd(q.market)}</s>${esc(t('r.market'))}</p>
    </div>
    <ul class="r-list">
      ${q.lines.map(([k, v]) => `<li><span>${esc(k)}</span><em>${v ? '+' + usd(v) : '—'}</em></li>`).join('')}
      <li><span>${esc(t('r.server'))}</span><em>${esc(t('r.server.v'))}</em></li>
    </ul>
    <p class="r-note">${esc(t('r.note'))}</p>
    <div class="btns">
      <button class="btn ghost" data-q="restart">${esc(t('r.again'))}</button>
      <a class="btn primary" id="rSend" href="#">${esc(t('r.send'))}</a>
    </div>
  </div>`;
}

function updateMail() {
  const q = quote();
  const name = Q.name.trim() || t('r.name.ph');
  const body = [
    `${t('r.name')}: ${name}`,
    `${t('q1')} ${t('q1.' + Q.type)}`,
    `${t('q2')} ${[...Q.feats].map((f) => t('q2.' + f)).join(', ')}`,
    `${t('q3')} ${t('q3.' + Q.vibe)}`,
    `${t('q4')} ${t('q4.' + Q.pal)}`,
    `${t('q5')} ${t('q5.' + Q.size)}`,
    `${t('q6')} ${t('q6.' + Q.langs)}`,
    '',
    `${t('r.est')}: ${usd(q.total)} USD + ${t('r.server.v')}`,
  ].join('\n');
  $('#rSend').href = `mailto:madcarranzaosorio@gmail.com?subject=${encodeURIComponent(t('r.mail.subject', { name }))}&body=${encodeURIComponent(body)}`;
}

function renderMock() {
  const m = $('#mock'); if (!m) return;
  const pal = PALETTES[Q.pal || 'midnight'];
  const v = VIBES[Q.vibe || 'minimal'];
  const type = Q.type || 'business';
  const name = (Q.name || '').trim() || t('r.name.ph');
  const slug = name.toLowerCase().normalize('NFD').replace(/[^\w]+/g, '') || 'yourbrand';
  $('#mockUrl').textContent = `${slug}.com`;
  Object.entries({ '--m-bg': pal.bg, '--m-fg': pal.fg, '--m-ac': pal.ac, '--m-font': `'${v.font}'`, '--m-w': v.w, '--m-tt': v.tt, '--m-fs': v.fs, '--m-r': v.r })
    .forEach(([k, val]) => m.style.setProperty(k, val));

  const f = Q.feats;
  const blocks = [];
  let d = 0;
  const blk = (html, wide) => blocks.push(`<div class="m-block${wide ? ' wide' : ''}" style="animation-delay:${(d++) * 80}ms">${html}</div>`);
  if (type === 'system' || f.has('admin')) {
    const bars = [40, 65, 52, 80, 70, 95, 88].map((h, i) => `<i style="height:${h}%;animation-delay:${i * 70}ms"></i>`).join('');
    blk(`<h6>${esc(t('m.admin'))}</h6><div class="m-bars">${bars}</div>`, true);
  }
  if (type === 'system' || f.has('data')) blk(`<h6>${esc(t('m.live'))}</h6><div class="m-live"><i></i>1,284 <small style="font-size:10px;font-weight:500;opacity:.6">${esc(t('m.records'))}</small></div>`);
  if (f.has('sell')) blk(`<h6>${esc(t('m.shop'))}</h6>${['01', '02', '03'].map((n, i) => `<div class="m-prod"><span>Item ${n}</span><em>${esc(t('m.add'))}</em></div>`).join('')}`);
  if (f.has('show') || !f.size) blk(`<h6>${esc(t('m.work'))}</h6><div class="m-tiles"><i></i><i></i><i></i></div>`);
  if (f.has('forms')) blk(`<h6>${esc(t('m.forms'))}</h6><div class="m-field"></div><div class="m-field"></div><span class="m-btn">${esc(t('m.send'))}</span>`);
  if (f.has('games')) blk(`<h6>${esc(t('m.games'))}</h6><div class="m-lb"><div><span>1. Ana</span><b>9,820</b></div><div><span>2. Luis</span><b>8,410</b></div><div><span>3. Sofi</span><b>7,005</b></div></div>`);
  if (blocks.length % 2 === 1 && blocks.length > 1) {
    blocks[blocks.length - 1] = blocks[blocks.length - 1].replace('class="m-block"', 'class="m-block wide"');
  }

  const langs = Q.langs ? ['EN', 'ES', '日本'].slice(0, +Q.langs).join(' · ') : '';
  m.innerHTML = `
    <div class="m-nav"><b>${esc(name)}</b><span>${langs ? `<em style="font-style:normal;opacity:.9">${langs}</em>` : `${esc(t('m.nav1'))} ${esc(t('m.nav2'))} ${esc(t('m.nav3'))}`}</span></div>
    <div class="m-hero">
      <h5>${esc(name)}</h5>
      <p>${esc(t('m.tag.' + type))}</p>
      <span class="m-cta">${esc(t('m.cta'))} →</span>
    </div>
    <div class="m-blocks">${blocks.join('')}</div>`;
}

function onQuizClick(e) {
  const o = e.target.closest('[data-opt]');
  const nav = e.target.closest('[data-q]');
  if (o) {
    const s = STEPS[Q.step], val = o.dataset.opt;
    if (s.multi) { Q.feats.has(val) ? Q.feats.delete(val) : Q.feats.add(val); }
    else Q[s.key] = val;
    renderQuiz();
    if (!s.multi) setTimeout(() => { if (STEPS[Q.step] === s) { Q.step++; renderQuiz(); } }, 260);
  } else if (nav) {
    const a = nav.dataset.q;
    if (a === 'next' && answered(STEPS[Q.step])) Q.step++;
    if (a === 'back' && Q.step > 0) Q.step--;
    if (a === 'restart') Object.assign(Q, { step: 0, type: null, feats: new Set(), vibe: null, pal: null, size: null, langs: null });
    renderQuiz();
    if (window.innerWidth < 1000) $('#build').scrollIntoView({ behavior: 'smooth' });
  }
}

/* ---------- Reveal + sticky ---------- */
function setupReveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.sec-head, .spec, .prow, .inc-item, .sec-grid > div, .step, .contact h2, .rv').forEach((el) => { el.classList.add('rv'); io.observe(el); });
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

/* ---------- Language ---------- */
function setLang(l) {
  if (!I18N[l]) return;
  LANG = l;
  try { localStorage.setItem('madco-lang', l); } catch (e) {}
  applyStatic(); renderHero(); renderCards(); renderPricing(); renderQuiz();
  $$('.card, .prow').forEach((el) => el.classList.add('rv', 'in'));
  closeSheet();
}

/* ---------- Init ---------- */
applyStatic();
renderHero();
renderCards();
renderPricing();
renderQuiz();
setupReveal();
setupSticky();

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
