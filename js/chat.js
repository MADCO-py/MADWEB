/* ============================================================
   MADCO ASSISTANT — breathing spiky orb (bottom-right) + FAQ chat.
   Questions are pre-written; the visitor picks one and gets the answer.
   To edit a question or answer, change it in all 3 languages below.
   {p.xxx} = project price, {s.xxx} = service price (from app.js)
   ============================================================ */
const FAQ = {
  en: [
    ['cost', 'How much does a website cost?', 'It depends on what it needs to do. Base prices: portfolio {p.marce}, event site {p.sunset}, online store {p.march}, full platform {p.skeepers}, custom system {p.fleetcontrol}. Use “Build yours” for an instant estimate.', 'build'],
    ['time', 'How long does it take?', 'A portfolio or event page: about 1–2 weeks. An online store: 2–4 weeks. Platforms and custom systems: 4–8 weeks. You see a live draft from the first week.'],
    ['monthly', 'Are there monthly costs?', 'Only the server: $10–50 per month, paid monthly or yearly. It keeps your site online 24/7.'],
    ['after', "What's included after delivery?", '6 months of maintenance and bug fixes, a user manual (so you can run everything yourself) and a technical manual (so any developer can continue it).'],
    ['tech', 'Do I need to know about technology?', 'No. You tell me your idea, I show you a live draft on your phone and we adjust it together until it’s right.'],
    ['edit', 'Can I update it myself?', 'Yes. With an admin panel you change products, photos and texts yourself. The user manual explains it step by step.'],
    ['mobile', 'Will it work on phones?', 'Yes. Every site is designed for phones first, then tablets and computers.'],
    ['domain', 'Can I have my own domain (.com, .gt)?', 'Yes. I quote your domain (.com, .gt and more) and connect it for you.'],
    ['secure', 'Is my information safe?', 'Yes: encrypted connection (HTTPS), encrypted passwords, a private admin login and database backups.'],
    ['sell', 'Can it sell or take orders?', 'Yes. A catalog with a cart that sends orders straight to WhatsApp, like March Jewelry. No commissions.', 'work'],
    ['pay', 'Can I receive payments on my site?', 'Yes. Your customers pay right on your site with Google Pay, PayPal or card (from {s.pay}). The money goes straight to your account.', 'build'],
    ['biz', 'Can you do inventory, loyalty points or my Google profile?', 'Yes. Inventory with low-stock alerts (from {s.inv}), a loyalty points card on the phone or NFC (from {s.loyal}) and your Google Search and Maps profile set up (from {s.gbp}).', 'build'],
    ['extra', 'Do you make chatbots, automations or NFC?', 'Yes. Chatbots like this one (from {s.bot}), automations that do repetitive tasks for you (from {s.auto}) and NFC chips that open your site with one tap of the phone (from {s.nfc}).'],
    ['own', 'Is the website mine?', 'Yes. The project is yours. The technical manual lets any developer continue it — you are never tied to me.'],
    ['start', 'How do we start?', 'Write to me by email or Instagram with your idea. I reply with a quote.', 'contact'],
  ],
  es: [
    ['cost', '¿Cuánto cuesta una página web?', 'Depende de lo que necesite hacer. Precios base: portafolio {p.marce}, sitio de evento {p.sunset}, tienda en línea {p.march}, plataforma completa {p.skeepers}, sistema a la medida {p.fleetcontrol}. Usa “Arma la tuya” para un estimado al instante.', 'build'],
    ['time', '¿Cuánto tiempo tarda?', 'Un portafolio o página de evento: 1–2 semanas aprox. Una tienda en línea: 2–4 semanas. Plataformas y sistemas a la medida: 4–8 semanas. Ves un boceto en vivo desde la primera semana.'],
    ['monthly', '¿Hay pagos mensuales?', 'Solo el servidor: $10–50 al mes, con pagos mensuales o anuales. Mantiene tu sitio en línea 24/7.'],
    ['after', '¿Qué incluye después de entregar?', '6 meses de mantenimiento y arreglo de bugs, un manual de usuario (para que manejes todo tú) y un manual técnico (para que cualquier programador pueda continuarlo).'],
    ['tech', '¿Necesito saber de tecnología?', 'No. Me cuentas tu idea, te enseño un boceto en vivo en tu celular y lo ajustamos juntos hasta que quede.'],
    ['edit', '¿Puedo actualizarla yo mismo?', 'Sí. Con un panel de administrador cambias productos, fotos y textos tú mismo. El manual de usuario lo explica paso a paso.'],
    ['mobile', '¿Funciona en celulares?', 'Sí. Cada sitio se diseña primero para celular, y luego para tablet y computadora.'],
    ['domain', '¿Puedo tener mi propio dominio (.com, .gt)?', 'Sí. Te cotizo tu dominio (.com, .gt y más) y te lo conecto.'],
    ['secure', '¿Mi información está segura?', 'Sí: conexión cifrada (HTTPS), contraseñas cifradas, login privado para el administrador y respaldos de la base de datos.'],
    ['sell', '¿Puede vender o recibir pedidos?', 'Sí. Un catálogo con carrito que manda los pedidos directo a WhatsApp, como March Jewelry. Sin comisiones.', 'work'],
    ['pay', '¿Puedo recibir pagos en mi página?', 'Sí. Tus clientes pagan directo en tu página con Google Pay, PayPal o tarjeta (desde {s.pay}). El dinero llega directo a tu cuenta.', 'build'],
    ['biz', '¿Pueden hacer inventario, puntos de lealtad o mi perfil de Google?', 'Sí. Inventario con alertas de stock bajo (desde {s.inv}), tarjeta de puntos de lealtad en el celular o con NFC (desde {s.loyal}) y tu perfil de Google y Maps configurado (desde {s.gbp}).', 'build'],
    ['extra', '¿Hacen chatbots, automatizaciones o NFC?', 'Sí. Chatbots como este (desde {s.bot}), automatizaciones que hacen las tareas repetitivas por ti (desde {s.auto}) y chips NFC que abren tu sitio con solo acercar el celular (desde {s.nfc}).'],
    ['own', '¿La página es mía?', 'Sí. El proyecto es tuyo. El manual técnico permite que cualquier programador lo continúe — nunca quedas amarrado a mí.'],
    ['start', '¿Cómo empezamos?', 'Escríbeme por correo o Instagram con tu idea. Te respondo con una cotización.', 'contact'],
  ],
  ja: [
    ['cost', 'ウェブサイトの料金は？', '必要な機能によります。基本料金：ポートフォリオ {p.marce}、イベントサイト {p.sunset}、オンラインストア {p.march}、フルプラットフォーム {p.skeepers}、オーダーメイドシステム {p.fleetcontrol}。「つくってみる」ですぐに概算がわかります。', 'build'],
    ['time', '制作期間は？', 'ポートフォリオやイベントページは約1〜2週間。オンラインストアは2〜4週間。プラットフォームやシステムは4〜8週間。最初の週からライブ試作を確認できます。'],
    ['monthly', '月額費用はありますか？', 'サーバー代のみ：月額 $10–50（月払い・年払い）。サイトを24時間公開し続けます。'],
    ['after', '納品後に含まれるものは？', '6ヶ月の保守と不具合修正、ユーザーマニュアル（ご自身で運用するため）、技術マニュアル（他の開発者が引き継げるように）。'],
    ['tech', '専門知識は必要ですか？', '不要です。アイデアを聞かせていただければ、スマホでライブ試作をお見せし、一緒に調整します。'],
    ['edit', '自分で更新できますか？', 'はい。管理画面から商品・写真・文章をご自身で変更できます。手順はユーザーマニュアルで説明します。'],
    ['mobile', 'スマホに対応していますか？', 'はい。すべてのサイトはスマホを最優先に、タブレットとパソコンにも対応して設計します。'],
    ['domain', '独自ドメイン（.com, .gt）は使えますか？', 'はい。ドメイン（.com、.gt など）のお見積りと接続を行います。'],
    ['secure', '情報は安全ですか？', 'はい。暗号化通信（HTTPS）、暗号化されたパスワード、管理者専用ログイン、データベースのバックアップ。'],
    ['sell', '販売や注文の受付はできますか？', 'はい。カート付きカタログから注文をWhatsAppへ直接送信できます（March Jewelry のように）。手数料なし。', 'work'],
    ['pay', 'サイトで支払いを受け取れますか？', 'はい。お客様はGoogle Pay、PayPal、カードでサイト上から直接お支払いできます（{s.pay}〜）。売上はそのままあなたの口座へ。', 'build'],
    ['biz', '在庫管理、ポイントカード、Googleプロフィールもできますか？', 'はい。在庫切れアラート付きの在庫管理（{s.inv}〜）、スマホやNFCで使えるポイントカード（{s.loyal}〜）、Google検索・マップのプロフィール設定（{s.gbp}〜）。', 'build'],
    ['extra', 'チャットボット、自動化、NFCも作れますか？', 'はい。このようなチャットボット（{s.bot}〜）、繰り返し作業を自動で行う仕組み（{s.auto}〜）、スマホをかざすだけでサイトが開くNFCチップ（{s.nfc}〜）。'],
    ['own', 'サイトは自分のものになりますか？', 'はい。プロジェクトはお客様のものです。技術マニュアルがあるので、どの開発者でも引き継げます。'],
    ['start', 'どうやって始めますか？', 'メールまたはInstagramでアイデアをお送りください。お見積りをお返しします。', 'contact'],
  ],
};
const CHAT_UI = {
  en: { title: 'MADCO', status: 'Your assistant · online', hello: "Hi! I'm your assistant, MADCO. How can I help you?", pick: 'Pick a question', more: 'Other questions', open: 'How can I help?', go: { build: 'Build yours →', work: 'See projects →', contact: 'Contact →' }, email: 'Email', close: 'Close' },
  es: { title: 'MADCO', status: 'Tu asistente · en línea', hello: '¡Hola! Soy tu asistente llamado MADCO. ¿Cómo te puedo ayudar?', pick: 'Elige una pregunta', more: 'Otras preguntas', open: '¿Cómo te ayudo?', go: { build: 'Arma la tuya →', work: 'Ver proyectos →', contact: 'Contacto →' }, email: 'Correo', close: 'Cerrar' },
  ja: { title: 'MADCO', status: 'あなたのアシスタント · オンライン', hello: 'こんにちは！あなたのアシスタント、MADCOです。どのようにお手伝いできますか？', pick: '質問を選んでください', more: 'ほかの質問', open: 'お手伝いしましょうか？', go: { build: 'つくってみる →', work: '実績を見る →', contact: 'お問い合わせ →' }, email: 'メール', close: '閉じる' },
};

/* ---------- Breathing spiky orb (canvas, single color #3e6ae1) ----------
   A circle that breathes; spikes of different lengths grow out of different
   sides, retract, and the whole thing slowly turns.                        */
const ORB_COLOR = '#3e6ae1';
function startOrb(canvas, cssSize, radius) {
  const dpr = Math.min(window.devicePixelRatio || 1, 3);
  canvas.width = cssSize * dpr; canvas.height = cssSize * dpr;
  canvas.style.width = canvas.style.height = cssSize + 'px';
  const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
  const c = cssSize / 2, TAU = Math.PI * 2;
  // spikes: angle, max length (× radius), speed, phase — uneven on purpose
  const spikes = [
    [0.0, 0.66, 1.10, 0.0], [0.6, 0.30, 1.70, 2.6], [1.2, 0.48, 1.30, 2.1],
    [1.8, 0.24, 1.95, 4.4], [2.3, 0.58, 0.90, 4.0], [2.9, 0.36, 1.50, 0.7],
    [3.5, 0.28, 1.35, 1.0], [4.0, 0.52, 1.05, 5.6], [4.5, 0.62, 1.00, 3.2],
    [5.1, 0.34, 1.80, 1.8], [5.6, 0.44, 1.25, 5.1], [6.0, 0.26, 2.10, 3.7],
  ];
  const still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let fast = 1, t0 = performance.now(), raf;
  function frame(now) {
    const t = (now - t0) / 1000 * fast;
    ctx.clearRect(0, 0, cssSize, cssSize);
    const breath = 1 + 0.06 * Math.sin(t * 1.6);
    const rot = t * 0.45;
    const act = spikes.map(([a, L, w, p]) => [a + rot, L * radius * Math.pow(Math.max(0, Math.sin(t * w + p)), 2.4)]);
    ctx.beginPath();
    const N = 220;
    for (let i = 0; i <= N; i++) {
      const th = (i / N) * TAU;
      let r = radius * breath + radius * 0.025 * Math.sin(th * 3 + t * 2);
      for (const [a, len] of act) {
        let d = Math.abs(((th - a) % TAU + TAU + Math.PI) % TAU - Math.PI);
        const w = 0.26;
        if (d < w) r += len * Math.pow(1 - d / w, 2.2);
      }
      const x = c + r * Math.cos(th), y = c + r * Math.sin(th);
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = ORB_COLOR; ctx.fill();
    if (!still) raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);
  return { speed: (k) => { const now = performance.now(); t0 = now - (now - t0) * fast / k; fast = k; } };
}

const CHAT = { open: false, asked: new Set(), log: [] };
const cu = () => CHAT_UI[LANG] || CHAT_UI.en;
const faq = () => FAQ[LANG] || FAQ.en;
const fillPrices = (s) => s
  .replace(/\{p\.(\w+)\}/g, (_, id) => usd(byId(id).price))
  .replace(/\{s\.(\w+)\}/g, (_, k) => usd(SERVICES[k]));

function chatInit() {
  const root = document.createElement('div');
  root.className = 'mad-chat';
  root.innerHTML = `
    <button class="orb" id="orb" aria-expanded="false" aria-controls="chatPanel" aria-label="MADCO">
      <canvas class="orb-cv" id="orbCv"></canvas>
      <img class="orb-logo" src="assets/logo.png" alt="">
    </button>
    <span class="orb-tip" id="orbTip"></span>
    <section class="chat" id="chatPanel" role="dialog" aria-label="Chat" hidden>
      <header class="chat-hd">
        <span class="orb mini" aria-hidden="true"><canvas class="orb-cv" id="orbCvMini"></canvas><img class="orb-logo" src="assets/logo.png" alt=""></span>
        <div><b id="chatTitle"></b><small id="chatStatus"></small></div>
        <button class="chat-x" id="chatX" aria-label="Close">&times;</button>
      </header>
      <div class="chat-body" id="chatBody"></div>
      <div class="chat-qs" id="chatQs"></div>
    </section>`;
  document.body.appendChild(root);
  const small = window.innerWidth < 700;
  CHAT.orb = startOrb($('#orbCv'), small ? 104 : 120, small ? 24 : 28);
  startOrb($('#orbCvMini'), 56, 14);

  $('#orb').addEventListener('click', () => toggleChat());
  $('#chatX').addEventListener('click', () => toggleChat(false));
  $('#chatQs').addEventListener('click', (e) => { const b = e.target.closest('[data-faq]'); if (b) ask(b.dataset.faq); });
  $('#chatBody').addEventListener('click', (e) => { if (e.target.closest('[data-go]')) toggleChat(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && CHAT.open) toggleChat(false); });
  setTimeout(() => { if (!CHAT.open) $('#orbTip').classList.add('show'); }, 3500);
  setTimeout(() => $('#orbTip').classList.remove('show'), 11000);
  renderChat();
}

function toggleChat(force) {
  CHAT.open = force ?? !CHAT.open;
  $('#chatPanel').hidden = !CHAT.open;
  $('#orb').setAttribute('aria-expanded', CHAT.open);
  document.querySelector('.mad-chat').classList.toggle('is-open', CHAT.open);
  CHAT.orb && CHAT.orb.speed(CHAT.open ? 1.8 : 1);
  $('#orbTip').classList.remove('show');
  if (CHAT.open && !CHAT.log.length) { CHAT.log.push({ who: 'bot', key: '_hello' }); renderChat(); }
}

function msgHTML(m) {
  if (m.key === '_hello') return `<div class="msg bot">${esc(cu().hello)}</div>`;
  const row = faq().find((r) => r[0] === m.key); if (!row) return '';
  if (m.who === 'me') return `<div class="msg me">${esc(row[1])}</div>`;
  const go = row[3];
  const link = go === 'contact'
    ? `<div class="msg-links"><a href="mailto:madcarranzaosorio@gmail.com">${esc(cu().email)}</a><a href="https://www.instagram.com/madco.py/" target="_blank" rel="noopener">Instagram</a></div>`
    : go ? `<div class="msg-links"><a href="#${go}" data-go>${esc(cu().go[go])}</a></div>` : '';
  return `<div class="msg bot">${esc(fillPrices(row[2]))}${link}</div>`;
}

function renderChat() {
  if (!$('#chatPanel')) return;
  $('#chatTitle').textContent = cu().title;
  $('#chatStatus').textContent = cu().status;
  $('#orbTip').textContent = cu().open;
  $('#chatX').setAttribute('aria-label', cu().close);
  $('#chatBody').innerHTML = CHAT.log.map(msgHTML).join('') + (CHAT.typing ? '<div class="msg bot typing"><i></i><i></i><i></i></div>' : '');
  const left = faq().filter((r) => !CHAT.asked.has(r[0]));
  const list = left.length ? left : faq();
  $('#chatQs').innerHTML = `<p>${esc(CHAT.asked.size ? cu().more : cu().pick)}</p>` + list.map((r) => `<button data-faq="${r[0]}">${esc(r[1])}</button>`).join('');
  const body = $('#chatBody'); body.scrollTop = body.scrollHeight;
}

function ask(key) {
  if (CHAT.typing) return;
  CHAT.asked.add(key);
  CHAT.log.push({ who: 'me', key });
  CHAT.typing = true; renderChat();
  setTimeout(() => { CHAT.typing = false; CHAT.log.push({ who: 'bot', key }); renderChat(); }, 650 + Math.random() * 450);
}
