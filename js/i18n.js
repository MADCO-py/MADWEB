/* ============================================================
   I18N — English (main) · Español · 日本語
   Static text: elements with data-i18n="key".
   To change a text, edit it here in all 3 languages.
   ============================================================ */
const I18N = {
  en: {
    'nav.work': 'Work', 'nav.pricing': 'Pricing', 'nav.build': 'Build yours', 'nav.security': 'Security', 'nav.contact': 'Contact', 'nav.menu': 'Menu',

    'hero.brand.sub': 'Everything you imagine can be programmed.',
    'btn.build': 'Build yours', 'btn.work': 'See the work', 'btn.details': "What's inside", 'btn.visit': 'Visit live site',
    'btn.private': 'Private system', 'btn.pricing': 'See pricing',
    'from': 'From',

    'spec.live': 'Projects live', 'spec.below': 'Below market average', 'spec.mo': 'mo', 'spec.maint': 'Maintenance included', 'spec.server': 'Server per month',

    'work.eyebrow': 'Delivered work', 'work.title': 'Real projects. Real clients.',

    'pricing.eyebrow': 'Pricing', 'pricing.title': 'Clear prices. In dollars.',
    'pricing.sub': 'We compared what agencies in Guatemala charge. Every MADCO price sits Q1,000 (≈ $130) below the market average.',
    'pricing.fine': 'Base prices. Market average based on public 2026 agency rates in Guatemala (1 USD ≈ Q7.64).',
    'pt.type': 'Type', 'pt.example': 'Example', 'pt.market': 'Market avg.', 'pt.ours': 'MADCO',

    'inc.title': 'Every project includes',
    'inc.server.t': 'Server / month', 'inc.server.d': 'Keeps your site online 24/7. Pay monthly or yearly.',
    'inc.maint.t': 'Months of maintenance', 'inc.maint.d': 'Bug fixes and adjustments after launch, no extra cost.',
    'inc.user.t': 'User manual', 'inc.user.d': 'Step by step, so you can run everything yourself.',
    'inc.tech.t': 'Technical manual', 'inc.tech.d': 'Everything another developer would need. Your project is never held hostage.',

    'sec.eyebrow': 'Security', 'sec.title': 'Your data, locked.', 'sec.sub': "Security isn't an add-on. It ships with every project.",
    'sec.1': 'Encrypted connection (HTTPS) on every page.',
    'sec.2': 'Passwords stored encrypted. Nobody can read them, not even us.',
    'sec.3': 'Admin panel behind a private login.',
    'sec.4': 'Database backups, so nothing gets lost.',
    'sec.5': "No hidden trackers. Your visitors' data stays yours.",
    'sec.6': 'Forms protected against spam and fake submissions.',

    'build.eyebrow': 'Build yours', 'build.title': '6 questions. A live preview. An instant price.',

    'proc.1.t': 'You tell me your idea', 'proc.1.d': 'What you need to solve. No tech knowledge needed.',
    'proc.2.t': 'You see a live draft', 'proc.2.d': 'Not a picture. A real site you open on your phone.',
    'proc.3.t': 'It goes live', 'proc.3.d': 'Published, with manuals and 6 months of support.',

    'contact.title': 'Everything you imagine can be programmed.', 'contact.sub': "Tell me your idea. I'll reply with a quote.", 'contact.email': 'Email me',
    'ftr.contact': 'Contact', 'sticky': 'Get your price in 1 minute',

    /* sheet */
    'sh.inside': "What's inside", 'sh.market': 'Market average', 'sh.ours': 'MADCO base price', 'sh.save': 'You save ≈ $130 (Q1,000)',
    'sh.plus': '+ server $10–20 / month · 6 months of maintenance · user & technical manual',

    /* quiz */
    'q.of': 'Question {n} of 6', 'q.next': 'Next', 'q.back': 'Back', 'q.see': 'See my project', 'q.multi': 'Choose all that apply',
    'q1': 'What are you building?',
    'q1.business': 'A business', 'q1.business.d': 'Restaurant, shop, service, brand',
    'q1.artist': 'Artist or band', 'q1.artist.d': 'Music, art, photography',
    'q1.event': 'An event', 'q1.event.d': 'Concert, festival, launch',
    'q1.personal': 'Personal brand', 'q1.personal.d': 'Portfolio, CV, creator',
    'q1.system': 'A system for my company', 'q1.system.d': 'Internal tool, records, control',
    'q2': 'What must it do?',
    'q2.show': 'Show my work', 'q2.show.d': 'Gallery, videos, portfolio',
    'q2.sell': 'Sell products', 'q2.sell.d': 'Catalog + cart, orders via WhatsApp',
    'q2.data': 'Save data in real time', 'q2.data.d': 'Database: clients, orders, records',
    'q2.admin': 'Private admin panel', 'q2.admin.d': 'Login, edit content, see stats',
    'q2.forms': 'Forms & bookings', 'q2.forms.d': 'Reservations, surveys, contact',
    'q2.games': 'Games & interactive', 'q2.games.d': 'Quizzes, mini-games, leaderboards',
    'q3': 'Which style feels like you?',
    'q3.minimal': 'Minimal', 'q3.minimal.d': 'Clean, quiet, premium',
    'q3.bold': 'Bold', 'q3.bold.d': 'Loud, big, impossible to ignore',
    'q3.elegant': 'Elegant', 'q3.elegant.d': 'Refined, editorial, luxury',
    'q3.playful': 'Playful', 'q3.playful.d': 'Friendly, rounded, fun',
    'q4': 'Pick your colors',
    'q4.midnight': 'Midnight', 'q4.sunset': 'Sunset', 'q4.rose': 'Rose gold', 'q4.forest': 'Forest', 'q4.ocean': 'Ocean', 'q4.mono': 'Mono',
    'q5': 'How big is it?',
    'q5.one': 'One page', 'q5.one.d': 'Everything in a single scroll',
    'q5.mid': '3–5 sections', 'q5.mid.d': 'A complete site',
    'q5.big': '6+ sections', 'q5.big.d': 'A full platform',
    'q6': 'How many languages?',
    'q6.1': '1 language', 'q6.1.d': 'Spanish or English',
    'q6.2': '2 languages', 'q6.2.d': 'Spanish + English',
    'q6.3': '3 languages', 'q6.3.d': 'Go global',

    'r.name': 'Name your project', 'r.name.ph': 'Your brand', 'r.est': 'Estimated price', 'r.from': 'starting at',
    'r.market': 'market average', 'r.base': 'Base', 'r.lang': 'Extra languages', 'r.size': 'Size',
    'r.server': 'Server', 'r.server.v': '$10–20 / mo',
    'r.note': 'Includes 6 months of maintenance and bug fixes, user manual and technical manual. Final quote after a short call.',
    'r.send': 'Send me this', 'r.again': 'Start over',
    'r.mail.subject': 'New project — {name}',

    /* mock */
    'm.tag.business': 'Open today · Order online', 'm.tag.artist': 'New music out now', 'm.tag.event': 'Tickets on sale · Limited spots',
    'm.tag.personal': 'Portfolio · Available for work', 'm.tag.system': 'Control panel · Signed in',
    'm.cta': 'Get started', 'm.work': 'Gallery', 'm.shop': 'Shop', 'm.add': 'Add', 'm.live': 'Saved live', 'm.records': 'records',
    'm.admin': 'Admin · This week', 'm.forms': 'Book a spot', 'm.send': 'Send', 'm.games': 'Top players',
    'm.nav1': 'Home', 'm.nav2': 'About', 'm.nav3': 'Contact',
  },

  es: {
    'nav.work': 'Proyectos', 'nav.pricing': 'Precios', 'nav.build': 'Arma la tuya', 'nav.security': 'Seguridad', 'nav.contact': 'Contacto', 'nav.menu': 'Menú',

    'hero.brand.sub': 'Todo lo que te imagines puede llegar a ser programado.',
    'btn.build': 'Arma la tuya', 'btn.work': 'Ver proyectos', 'btn.details': 'Qué incluye', 'btn.visit': 'Ver sitio en vivo',
    'btn.private': 'Sistema privado', 'btn.pricing': 'Ver precios',
    'from': 'Desde',

    'spec.live': 'Proyectos en línea', 'spec.below': 'Debajo del promedio del mercado', 'spec.mo': 'meses', 'spec.maint': 'De mantenimiento incluido', 'spec.server': 'Servidor al mes',

    'work.eyebrow': 'Proyectos entregados', 'work.title': 'Proyectos reales. Clientes reales.',

    'pricing.eyebrow': 'Precios', 'pricing.title': 'Precios claros. En dólares.',
    'pricing.sub': 'Comparamos lo que cobran las agencias en Guatemala. Cada precio de MADCO está Q1,000 (≈ $130) por debajo del promedio del mercado.',
    'pricing.fine': 'Precios base. Promedio del mercado según tarifas públicas de agencias en Guatemala, 2026 (1 USD ≈ Q7.64).',
    'pt.type': 'Tipo', 'pt.example': 'Ejemplo', 'pt.market': 'Promedio', 'pt.ours': 'MADCO',

    'inc.title': 'Todo proyecto incluye',
    'inc.server.t': 'Servidor al mes', 'inc.server.d': 'Mantiene tu sitio en línea 24/7. Pagos mensuales o anuales.',
    'inc.maint.t': 'Meses de mantenimiento', 'inc.maint.d': 'Arreglo de bugs y ajustes después de publicar, sin costo extra.',
    'inc.user.t': 'Manual de usuario', 'inc.user.d': 'Paso a paso, para que manejes todo tú mismo.',
    'inc.tech.t': 'Manual técnico', 'inc.tech.d': 'Todo lo que otro programador necesitaría. Tu proyecto nunca queda secuestrado.',

    'sec.eyebrow': 'Seguridad', 'sec.title': 'Tus datos, bajo llave.', 'sec.sub': 'La seguridad no es un extra. Viene con cada proyecto.',
    'sec.1': 'Conexión cifrada (HTTPS) en todas las páginas.',
    'sec.2': 'Contraseñas guardadas cifradas. Nadie puede leerlas, ni nosotros.',
    'sec.3': 'Panel de administrador protegido con login privado.',
    'sec.4': 'Respaldos de la base de datos, para que nada se pierda.',
    'sec.5': 'Sin rastreadores ocultos. Los datos de tus visitas son tuyos.',
    'sec.6': 'Formularios protegidos contra spam y envíos falsos.',

    'build.eyebrow': 'Arma la tuya', 'build.title': '6 preguntas. Una vista previa en vivo. Un precio al instante.',

    'proc.1.t': 'Me cuentas tu idea', 'proc.1.d': 'Qué necesitas resolver. No necesitas saber de tecnología.',
    'proc.2.t': 'Ves un boceto en vivo', 'proc.2.d': 'No una imagen. Un sitio real que abres en tu celular.',
    'proc.3.t': 'Sale publicada', 'proc.3.d': 'En línea, con manuales y 6 meses de soporte.',

    'contact.title': 'Todo lo que te imagines puede llegar a ser programado.', 'contact.sub': 'Cuéntame tu idea. Te respondo con una cotización.', 'contact.email': 'Escríbeme',
    'ftr.contact': 'Contacto', 'sticky': 'Conoce tu precio en 1 minuto',

    'sh.inside': 'Qué incluye', 'sh.market': 'Promedio del mercado', 'sh.ours': 'Precio base MADCO', 'sh.save': 'Ahorras ≈ $130 (Q1,000)',
    'sh.plus': '+ servidor $10–20 / mes · 6 meses de mantenimiento · manual de usuario y técnico',

    'q.of': 'Pregunta {n} de 6', 'q.next': 'Siguiente', 'q.back': 'Atrás', 'q.see': 'Ver mi proyecto', 'q.multi': 'Elige todas las que apliquen',
    'q1': '¿Qué quieres construir?',
    'q1.business': 'Un negocio', 'q1.business.d': 'Restaurante, tienda, servicio, marca',
    'q1.artist': 'Artista o banda', 'q1.artist.d': 'Música, arte, fotografía',
    'q1.event': 'Un evento', 'q1.event.d': 'Concierto, festival, lanzamiento',
    'q1.personal': 'Marca personal', 'q1.personal.d': 'Portafolio, CV, creador',
    'q1.system': 'Un sistema para mi empresa', 'q1.system.d': 'Herramienta interna, registros, control',
    'q2': '¿Qué tiene que hacer?',
    'q2.show': 'Mostrar mi trabajo', 'q2.show.d': 'Galería, videos, portafolio',
    'q2.sell': 'Vender productos', 'q2.sell.d': 'Catálogo + carrito, pedidos por WhatsApp',
    'q2.data': 'Guardar datos en tiempo real', 'q2.data.d': 'Base de datos: clientes, pedidos, registros',
    'q2.admin': 'Panel de administrador', 'q2.admin.d': 'Login, editar contenido, ver estadísticas',
    'q2.forms': 'Formularios y reservas', 'q2.forms.d': 'Reservaciones, encuestas, contacto',
    'q2.games': 'Juegos e interacción', 'q2.games.d': 'Quizzes, minijuegos, rankings',
    'q3': '¿Qué estilo va contigo?',
    'q3.minimal': 'Minimalista', 'q3.minimal.d': 'Limpio, tranquilo, premium',
    'q3.bold': 'Atrevido', 'q3.bold.d': 'Grande, fuerte, imposible de ignorar',
    'q3.elegant': 'Elegante', 'q3.elegant.d': 'Refinado, editorial, de lujo',
    'q3.playful': 'Divertido', 'q3.playful.d': 'Amigable, redondeado, alegre',
    'q4': 'Elige tus colores',
    'q4.midnight': 'Medianoche', 'q4.sunset': 'Atardecer', 'q4.rose': 'Oro rosa', 'q4.forest': 'Bosque', 'q4.ocean': 'Océano', 'q4.mono': 'Blanco y negro',
    'q5': '¿Qué tan grande es?',
    'q5.one': 'Una página', 'q5.one.d': 'Todo en un solo scroll',
    'q5.mid': '3–5 secciones', 'q5.mid.d': 'Un sitio completo',
    'q5.big': '6+ secciones', 'q5.big.d': 'Una plataforma completa',
    'q6': '¿Cuántos idiomas?',
    'q6.1': '1 idioma', 'q6.1.d': 'Español o inglés',
    'q6.2': '2 idiomas', 'q6.2.d': 'Español + inglés',
    'q6.3': '3 idiomas', 'q6.3.d': 'Alcance global',

    'r.name': 'Ponle nombre a tu proyecto', 'r.name.ph': 'Tu marca', 'r.est': 'Precio estimado', 'r.from': 'desde',
    'r.market': 'promedio del mercado', 'r.base': 'Base', 'r.lang': 'Idiomas extra', 'r.size': 'Tamaño',
    'r.server': 'Servidor', 'r.server.v': '$10–20 / mes',
    'r.note': 'Incluye 6 meses de mantenimiento y arreglo de bugs, manual de usuario y manual técnico. Cotización final después de una llamada corta.',
    'r.send': 'Enviarme esto', 'r.again': 'Empezar de nuevo',
    'r.mail.subject': 'Nuevo proyecto — {name}',

    'm.tag.business': 'Abierto hoy · Pide en línea', 'm.tag.artist': 'Nueva música ya disponible', 'm.tag.event': 'Entradas a la venta · Cupo limitado',
    'm.tag.personal': 'Portafolio · Disponible', 'm.tag.system': 'Panel de control · Sesión iniciada',
    'm.cta': 'Empezar', 'm.work': 'Galería', 'm.shop': 'Tienda', 'm.add': 'Agregar', 'm.live': 'Guardado en vivo', 'm.records': 'registros',
    'm.admin': 'Admin · Esta semana', 'm.forms': 'Reserva tu lugar', 'm.send': 'Enviar', 'm.games': 'Top jugadores',
    'm.nav1': 'Inicio', 'm.nav2': 'Nosotros', 'm.nav3': 'Contacto',
  },

  ja: {
    'nav.work': '実績', 'nav.pricing': '料金', 'nav.build': 'つくってみる', 'nav.security': 'セキュリティ', 'nav.contact': 'お問い合わせ', 'nav.menu': 'メニュー',

    'hero.brand.sub': '想像できるものは、すべてプログラムできる。',
    'btn.build': 'つくってみる', 'btn.work': '実績を見る', 'btn.details': '機能を見る', 'btn.visit': 'サイトを見る',
    'btn.private': '非公開システム', 'btn.pricing': '料金を見る',
    'from': '',

    'spec.live': '公開中のプロジェクト', 'spec.below': '市場平均より安く', 'spec.mo': 'ヶ月', 'spec.maint': '保守サポート込み', 'spec.server': 'サーバー月額',

    'work.eyebrow': '納品実績', 'work.title': '本物のプロジェクト。本物のクライアント。',

    'pricing.eyebrow': '料金', 'pricing.title': 'わかりやすい料金。米ドル表示。',
    'pricing.sub': 'グアテマラの制作会社の料金を比較しました。MADCOの価格は、どれも市場平均より Q1,000（約 $130）安く設定しています。',
    'pricing.fine': '基本料金です。市場平均は2026年のグアテマラの制作会社の公開料金をもとにしています（1 USD ≈ Q7.64）。',
    'pt.type': '種類', 'pt.example': '実例', 'pt.market': '市場平均', 'pt.ours': 'MADCO',

    'inc.title': 'すべてのプロジェクトに含まれるもの',
    'inc.server.t': 'サーバー（月額）', 'inc.server.d': 'サイトを24時間公開し続けます。月払い・年払いが選べます。',
    'inc.maint.t': 'ヶ月の保守', 'inc.maint.d': '公開後の不具合修正と調整。追加料金なし。',
    'inc.user.t': 'ユーザーマニュアル', 'inc.user.d': 'ご自身ですべて管理できるよう、手順を一つずつ説明します。',
    'inc.tech.t': '技術マニュアル', 'inc.tech.d': '他の開発者が引き継ぐのに必要な情報をすべて記載。プロジェクトはいつでもあなたのものです。',

    'sec.eyebrow': 'セキュリティ', 'sec.title': 'あなたのデータを、しっかり守る。', 'sec.sub': 'セキュリティはオプションではありません。すべてのプロジェクトに標準装備です。',
    'sec.1': 'すべてのページで暗号化通信（HTTPS）。',
    'sec.2': 'パスワードは暗号化して保存。私たちでさえ読めません。',
    'sec.3': '管理画面は専用ログインで保護。',
    'sec.4': 'データベースをバックアップし、データを失いません。',
    'sec.5': '隠れたトラッカーなし。訪問者のデータはあなたのものです。',
    'sec.6': 'フォームをスパムや不正な送信から保護。',

    'build.eyebrow': 'つくってみる', 'build.title': '6つの質問。ライブプレビュー。すぐにわかる料金。',

    'proc.1.t': 'アイデアを聞かせてください', 'proc.1.d': '解決したいことを教えてください。専門知識は不要です。',
    'proc.2.t': 'ライブ試作を確認', 'proc.2.d': '画像ではなく、スマホで開ける本物のサイトです。',
    'proc.3.t': '公開', 'proc.3.d': 'マニュアルと6ヶ月のサポート付きで公開します。',

    'contact.title': '想像できるものは、すべてプログラムできる。', 'contact.sub': 'アイデアを聞かせてください。お見積りをお送りします。', 'contact.email': 'メールする',
    'ftr.contact': 'お問い合わせ', 'sticky': '1分で料金がわかる',

    'sh.inside': '主な機能', 'sh.market': '市場平均', 'sh.ours': 'MADCO 基本料金', 'sh.save': '約 $130（Q1,000）お得',
    'sh.plus': '+ サーバー月額 $10–20 · 6ヶ月の保守 · ユーザー／技術マニュアル',

    'q.of': '質問 {n} / 6', 'q.next': '次へ', 'q.back': '戻る', 'q.see': 'プロジェクトを見る', 'q.multi': '当てはまるものをすべて選択',
    'q1': '何をつくりますか？',
    'q1.business': 'ビジネス', 'q1.business.d': '飲食店、ショップ、サービス、ブランド',
    'q1.artist': 'アーティスト・バンド', 'q1.artist.d': '音楽、アート、写真',
    'q1.event': 'イベント', 'q1.event.d': 'コンサート、フェス、ローンチ',
    'q1.personal': 'パーソナルブランド', 'q1.personal.d': 'ポートフォリオ、履歴書、クリエイター',
    'q1.system': '社内システム', 'q1.system.d': '業務ツール、記録、管理',
    'q2': '何ができる必要がありますか？',
    'q2.show': '作品を見せる', 'q2.show.d': 'ギャラリー、動画、ポートフォリオ',
    'q2.sell': '商品を売る', 'q2.sell.d': 'カタログ＋カート、WhatsAppで注文',
    'q2.data': 'データをリアルタイム保存', 'q2.data.d': 'データベース：顧客、注文、記録',
    'q2.admin': '管理画面', 'q2.admin.d': 'ログイン、内容の編集、統計の確認',
    'q2.forms': 'フォーム・予約', 'q2.forms.d': '予約、アンケート、お問い合わせ',
    'q2.games': 'ゲーム・インタラクティブ', 'q2.games.d': 'クイズ、ミニゲーム、ランキング',
    'q3': 'どのスタイルが合いますか？',
    'q3.minimal': 'ミニマル', 'q3.minimal.d': 'クリーン、静か、上質',
    'q3.bold': 'ボールド', 'q3.bold.d': '大胆で、目を引く',
    'q3.elegant': 'エレガント', 'q3.elegant.d': '洗練、エディトリアル、ラグジュアリー',
    'q3.playful': 'ポップ', 'q3.playful.d': '親しみやすく、丸く、楽しい',
    'q4': '色を選んでください',
    'q4.midnight': 'ミッドナイト', 'q4.sunset': 'サンセット', 'q4.rose': 'ローズゴールド', 'q4.forest': 'フォレスト', 'q4.ocean': 'オーシャン', 'q4.mono': 'モノクロ',
    'q5': 'どのくらいの規模ですか？',
    'q5.one': '1ページ', 'q5.one.d': 'すべてを1スクロールで',
    'q5.mid': '3〜5セクション', 'q5.mid.d': 'しっかりしたサイト',
    'q5.big': '6セクション以上', 'q5.big.d': '本格的なプラットフォーム',
    'q6': '何言語にしますか？',
    'q6.1': '1言語', 'q6.1.d': 'スペイン語または英語',
    'q6.2': '2言語', 'q6.2.d': 'スペイン語＋英語',
    'q6.3': '3言語', 'q6.3.d': '世界へ',

    'r.name': 'プロジェクト名', 'r.name.ph': 'あなたのブランド', 'r.est': '概算料金', 'r.from': '〜',
    'r.market': '市場平均', 'r.base': '基本', 'r.lang': '追加言語', 'r.size': '規模',
    'r.server': 'サーバー', 'r.server.v': '月額 $10–20',
    'r.note': '6ヶ月の保守・不具合修正、ユーザーマニュアル、技術マニュアルを含みます。最終見積りは短い打ち合わせの後にお出しします。',
    'r.send': 'この内容を送る', 'r.again': 'やり直す',
    'r.mail.subject': '新規プロジェクト — {name}',

    'm.tag.business': '本日営業中 · オンライン注文', 'm.tag.artist': '新曲配信中', 'm.tag.event': 'チケット販売中 · 残りわずか',
    'm.tag.personal': 'ポートフォリオ · お仕事募集中', 'm.tag.system': 'コントロールパネル · ログイン中',
    'm.cta': 'はじめる', 'm.work': 'ギャラリー', 'm.shop': 'ショップ', 'm.add': '追加', 'm.live': 'リアルタイム保存', 'm.records': '件',
    'm.admin': '管理 · 今週', 'm.forms': '予約する', 'm.send': '送信', 'm.games': 'ランキング',
    'm.nav1': 'ホーム', 'm.nav2': '紹介', 'm.nav3': '連絡',
  },
};
