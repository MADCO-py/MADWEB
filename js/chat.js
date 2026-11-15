/* ============================================================
   MAD ASSISTANT — breathing liquid orb (bottom-left) + FAQ chat.
   Questions are pre-written; the visitor picks one and gets the answer.
   To edit a question or answer, change it in all 3 languages below.
   {p.xxx} = project price, {s.xxx} = service price (from app.js)
   ============================================================ */
const FAQ = {
  en: [
    ['cost', 'How much does a website cost?', 'It depends on what it needs to do. Base prices: portfolio {p.marce}, event site {p.sunset}, online store {p.march}, full platform {p.skeepers}, custom system {p.fleetcontrol}. Use “Build yours” for an instant estimate.', 'build'],
    ['time', 'How long does it take?', 'A portfolio or event page: about 1–2 weeks. An online store: 2–4 weeks. Platforms and custom systems: 4–8 weeks. You see a live draft from the first week.'],
    ['monthly', 'Are there monthly costs?', 'Only the server: $10–20 per month, paid monthly or yearly. It keeps your site online 24/7.'],
    ['after', "What's included after delivery?", '6 months of maintenance and bug fixes, a user manual (so you can run everything yourself) and a technical manual (so any developer can continue it).'],
    ['tech', 'Do I need to know about technology?', 'No. You tell me your idea, I show you a live draft on your phone and we adjust it together until it’s right.'],
    ['edit', 'Can I update it myself?', 'Yes. With an admin panel you change products, photos and texts yourself. The user manual explains it step by step.'],
    ['mobile', 'Will it work on phones?', 'Yes. Every site is designed for phones first, then tablets and computers.'],
    ['domain', 'Can I have my own domain (.com, .gt)?', 'Yes. I quote your domain (.com, .gt and more) and connect it for you.'],
    ['secure', 'Is my information safe?', 'Yes: encrypted connection (HTTPS), encrypted passwords, a private admin login and database backups.'],
    ['sell', 'Can it sell or take orders?', 'Yes. A catalog with a cart that sends orders straight to WhatsApp, like March Jewelry. No commissions.', 'work'],
    ['extra', 'Do you make chatbots, automations or NFC?', 'Yes. Chatbots like this one (from {s.bot}), automations that do repetitive tasks for you (from {s.auto}) and NFC chips that open your site with one tap of the phone (from {s.nfc}).'],
    ['own', 'Is the website mine?', 'Yes. The project is yours. The technical manual lets any developer continue it — you are never tied to me.'],
    ['start', 'How do we start?', 'Write to me by email or Instagram with your idea. I reply with a quote.', 'contact'],
  ],
  es: [
    ['cost', '¿Cuánto cuesta una página web?', 'Depende de lo que necesite hacer. Precios base: portafolio {p.marce}, sitio de evento {p.sunset}, tienda en línea {p.march}, plataforma completa {p.skeepers}, sistema a la medida {p.fleetcontrol}. Usa “Arma la tuya” para un estimado al instante.', 'build'],
    ['time', '¿Cuánto tiempo tarda?', 'Un portafolio o página de evento: 1–2 semanas aprox. Una tienda en línea: 2–4 semanas. Plataformas y sistemas a la medida: 4–8 semanas. Ves un boceto en vivo desde la primera semana.'],
    ['monthly', '¿Hay pagos mensuales?', 'Solo el servidor: $10–20 al mes, con pagos mensuales o anuales. Mantiene tu sitio en línea 24/7.'],
    ['after', '¿Qué incluye después de entregar?', '6 meses de mantenimiento y arreglo de bugs, un manual de usuario (para que manejes todo tú) y un manual técnico (para que cualquier programador pueda continuarlo).'],
    ['tech', '¿Necesito saber de tecnología?', 'No. Me cuentas tu idea, te enseño un boceto en vivo en tu celular y lo ajustamos juntos hasta que quede.'],
    ['edit', '¿Puedo actualizarla yo mismo?', 'Sí. Con un panel de administrador cambias productos, fotos y textos tú mismo. El manual de usuario lo explica paso a paso.'],
    ['mobile', '¿Funciona en celulares?', 'Sí. Cada sitio se diseña primero para celular, y luego para tablet y computadora.'],
    ['domain', '¿Puedo tener mi propio dominio (.com, .gt)?', 'Sí. Te cotizo tu dominio (.com, .gt y más) y te lo conecto.'],
    ['secure', '¿Mi información está segura?', 'Sí: conexión cifrada (HTTPS), contraseñas cifradas, login privado para el administrador y respaldos de la base de datos.'],
    ['sell', '¿Puede vender o recibir pedidos?', 'Sí. Un catálogo con carrito que manda los pedidos directo a WhatsApp, como March Jewelry. Sin comisiones.', 'work'],
    ['extra', '¿Hacen chatbots, automatizaciones o NFC?', 'Sí. Chatbots como este (desde {s.bot}), automatizaciones que hacen las tareas repetitivas por ti (desde {s.auto}) y chips NFC que abren tu sitio con solo acercar el celular (desde {s.nfc}).'],
    ['own', '¿La página es mía?', 'Sí. El proyecto es tuyo. El manual técnico permite que cualquier programador lo continúe — nunca quedas amarrado a mí.'],
    ['start', '¿Cómo empezamos?', 'Escríbeme por correo o Instagram con tu idea. Te respondo con una cotización.', 'contact'],
  ],
  ja: [
    ['cost', 'ウェブサイトの料金は？', '必要な機能によります。基本料金：ポートフォリオ {p.marce}、イベントサイト {p.sunset}、オンラインストア {p.march}、フルプラットフォーム {p.skeepers}、オーダーメイドシステム {p.fleetcontrol}。「つくってみる」ですぐに概算がわかります。', 'build'],
    ['time', '制作期間は？', 'ポートフォリオやイベントページは約1〜2週間。オンラインストアは2〜4週間。プラットフォームやシステムは4〜8週間。最初の週からライブ試作を確認できます。'],
    ['monthly', '月額費用はありますか？', 'サーバー代のみ：月額 $10–20（月払い・年払い）。サイトを24時間公開し続けます。'],
    ['after', '納品後に含まれるものは？', '6ヶ月の保守と不具合修正、ユーザーマニュアル（ご自身で運用するため）、技術マニュアル（他の開発者が引き継げるように）。'],
    ['tech', '専門知識は必要ですか？', '不要です。アイデアを聞かせていただければ、スマホでライブ試作をお見せし、一緒に調整します。'],
    ['edit', '自分で更新できますか？', 'はい。管理画面から商品・写真・文章をご自身で変更できます。手順はユーザーマニュアルで説明します。'],
    ['mobile', 'スマホに対応していますか？', 'はい。すべてのサイトはスマホを最優先に、タブレットとパソコンにも対応して設計します。'],
    ['domain', '独自ドメイン（.com, .gt）は使えますか？', 'はい。ドメイン（.com、.gt など）のお見積りと接続を行います。'],
    ['secure', '情報は安全ですか？', 'はい。暗号化通信（HTTPS）、暗号化されたパスワード、管理者専用ログイン、データベースのバックアップ。'],
    ['sell', '販売や注文の受付はできますか？', 'はい。カート付きカタログから注文をWhatsAppへ直接送信できます（March Jewelry のように）。手数料なし。', 'work'],
    ['extra', 'チャットボット、自動化、NFCも作れますか？', 'はい。このようなチャットボット（{s.bot}〜）、繰り返し作業を自動で行う仕組み（{s.auto}〜）、スマホをかざすだけでサイトが開くNFCチップ（{s.nfc}〜）。'],
    ['own', 'サイトは自分のものになりますか？', 'はい。プロジェクトはお客様のものです。技術マニュアルがあるので、どの開発者でも引き継げます。'],
    ['start', 'どうやって始めますか？', 'メールまたはInstagramでアイデアをお送りください。お見積りをお返しします。', 'contact'],
  ],
};
const CHAT_UI = {
  en: { title: 'MAD Assistant', status: 'Online · instant answers', hello: "Hi! I'm the MADCO assistant. Pick a question:", more: 'Other questions', open: 'Questions?', go: { build: 'Build yours →', work: 'See projects →', contact: 'Contact →' }, email: 'Email', close: 'Close' },
  es: { title: 'Asistente MAD', status: 'En línea · respuestas al instante', hello: '¡Hola! Soy el asistente de MADCO. Elige una pregunta:', more: 'Otras preguntas', open: '¿Preguntas?', go: { build: 'Arma la tuya →', work: 'Ver proyectos →', contact: 'Contacto →' }, email: 'Correo', close: 'Cerrar' },
  ja: { title: 'MAD アシスタント', status: 'オンライン · すぐに回答', hello: 'こんにちは！MADCOのアシスタントです。質問を選んでください：', more: 'ほかの質問', open: '質問は？', go: { build: 'つくってみる →', work: '実績を見る →', contact: 'お問い合わせ →' }, email: 'メール', close: '閉じる' },
};

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
    <button class="orb" id="orb" aria-expanded="false" aria-controls="chatPanel">
      <span class="orb-liquid a"></span><span class="orb-liquid b"></span><span class="orb-liquid c"></span>
      <span class="orb-gloss"></span>
      <img class="orb-logo" src="assets/logo.png" alt="MAD">
    </button>
    <span class="orb-tip" id="orbTip"></span>
    <section class="chat" id="chatPanel" role="dialog" aria-label="Chat" hidden>
      <header class="chat-hd">
        <span class="orb mini" aria-hidden="true"><span class="orb-liquid a"></span><span class="orb-liquid b"></span><span class="orb-gloss"></span><img class="orb-logo" src="assets/logo.png" alt=""></span>
        <div><b id="chatTitle"></b><small id="chatStatus"></small></div>
        <button class="chat-x" id="chatX" aria-label="Close">&times;</button>
      </header>
      <div class="chat-body" id="chatBody"></div>
      <div class="chat-qs" id="chatQs"></div>
    </section>`;
  document.body.appendChild(root);

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
  $('#chatQs').innerHTML = (CHAT.asked.size ? `<p>${esc(cu().more)}</p>` : '') + list.map((r) => `<button data-faq="${r[0]}">${esc(r[1])}</button>`).join('');
  const body = $('#chatBody'); body.scrollTop = body.scrollHeight;
}

function ask(key) {
  if (CHAT.typing) return;
  CHAT.asked.add(key);
  CHAT.log.push({ who: 'me', key });
  CHAT.typing = true; renderChat();
  setTimeout(() => { CHAT.typing = false; CHAT.log.push({ who: 'bot', key }); renderChat(); }, 650 + Math.random() * 450);
}
