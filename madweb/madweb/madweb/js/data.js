/* ============================================================
   DATA.JS — Toda la información editable del sitio vive aquí.
   ============================================================ */

const SOCIALS = [
  { name: 'GitHub', icon: 'ph-github-logo', url: 'https://github.com/MADCO-py' },
  { name: 'Instagram', icon: 'ph-instagram-logo', url: 'https://www.instagram.com/madco.jsx/' },
];

/* ---------- PROYECTOS PERSONALES ---------- */
const PERSONAL_PROJECTS = [
  {
    id: 'awa',
    name: 'AwA',
    emoji: 'Hidratación',
    desc: 'App de hidratación para botella Owala. Registra cada sorbo con un tag NFC — acerca la botella al tag y la app suma automáticamente el agua consumida del día. Necesitas un tag NFC programable para que funcione.',
    nfcNote: 'Requiere tag NFC programable',
    tech: ['HTML/CSS/JS', 'NFC API', 'Web App'],
    video: 'assets/videos/personal/awa/awa-demo.mp4',
    demo: 'https://madco-py.github.io/AwA/',
    repo: 'https://github.com/MADCO-py/AwA',
  },
  {
    id: 'madgains',
    name: 'MAD-GAINS',
    emoji: 'Fitness',
    desc: 'Rutina de 5 días con mancuernas en casa. Enfoque en brazos, antebrazo, pecho y espalda. 25 ejercicios, 155g de proteína diaria objetivo. Resultados máximos sin salir de casa.',
    nfcNote: null,
    tech: ['HTML/CSS/JS', 'Web App'],
    preview: 'assets/img/personal/madgains-preview.png',
    demo: 'https://madco-py.github.io/mad-gains/',
    repo: 'https://github.com/MADCO-py/mad-gains',
  },
];

/* ---------- CIBERSEGURIDAD — bloque Kali Linux (PC) ---------- */
const CIBER_KALI_PROJECTS = [
  {
    name: 'CamPhish',
    slug: 'camphish',
    lang: 'Python',
    desc: 'Herramienta de phishing de cámara vía link falso. No se muestra demo ni repo aquí: entiende el riesgo real antes de toparte con algo así.',
    awareLink: 'pages/seguridad-educativa.html#kali',
    repo: '',
  },
  {
    name: 'Whatsapp_spammer',
    slug: 'whatsapp_spammer',
    lang: 'Python',
    desc: 'Script propio de automatización de mensajes en WhatsApp Web. El README explica el funcionamiento general (no el paso a paso para replicarlo) — pensado para entender el riesgo, no para usarlo contra alguien.',
    awareLink: 'pages/seguridad-educativa.html#kali',
    repo: 'https://github.com/MADCO-py/Whatsapp_spammer',
  },
];

/* ---------- CIBERSEGURIDAD — bloque ESP32 (riesgo) ---------- */
const CIBER_ESP32_RISK = {
  name: 'ESP32-Jammer',
  lang: 'C++ / Firmware',
  desc: 'Interferencia de señal RF con ESP32. Es ilegal de operar en la mayoría de países y puede afectar comunicaciones reales. Aquí no encontrarás cómo construirlo — sí cómo protegerte de algo así.',
  awareLink: 'pages/seguridad-educativa.html#esp32',
};

/* ---------- MAKER LAB (Snake sin video, formato lista) ---------- */
const ESP32_PROJECTS = [
  {
    name: 'SNAKE-ESP32-32U',
    desc: 'El clásico Snake corriendo en un ESP32-32U, con pantalla OLED y control físico armados desde cero.',
    lang: 'C++ / Arduino IDE',
    materials: ['ESP32-32U', 'Pantalla OLED 128×64', 'Botones físicos', 'Protoboard', 'Cables dupont'],
    repo: 'https://github.com/MADCO-py/SNAKE-ESP32-32U',
    demo: '',
  },
];

/* ---------- FLIPPER ZERO — proyectos ---------- */
const FLIPPER_PROJECTS = [
  {
    id: 'badusb',
    folder: 'badusb',
    name: 'BadUSB',
    desc: 'Scripts de teclado automático (DuckyScript) — este en particular prueba 10 combinaciones de PIN en secuencia con delays, automatizando lo que tomaría minutos a mano.',
    video: 'assets/videos/flipper/badusb/badusb-demo-01.mp4',
    txt: 'assets/flipper-files/badusb/badusb-info.txt',
    txtLabel: '6CONTRA.txt',
    repo: '',
  },
  {
    id: 'subghz',
    folder: 'subghz',
    name: 'Sub-GHz',
    desc: 'Captura y replay de señales de radiofrecuencia — batman.sub es una señal Sub-GHz capturada y guardada tal como la exporta el Flipper.',
    video: 'assets/videos/flipper/subghz/subghz-demo-01.mp4',
    txt: 'assets/flipper-files/subghz/subghz-info.txt',
    txtLabel: 'batman.sub',
    repo: '',
  },
  {
    id: 'nfc',
    folder: 'nfc',
    name: 'NFC',
    desc: 'Tags NFC programados para abrir directo mis redes sociales con solo acercar el teléfono. Colección de archivos .nfc disponible en el repo.',
    video: 'assets/videos/flipper/nfc/nfc-demo-01.mp4',
    txt: '',
    txtLabel: '',
    repo: 'https://github.com/MADCO-py/NFC_FLIPPERZERO',
  },
  {
    id: 'infrared',
    folder: 'infrared',
    name: 'Infrared',
    desc: 'Señales IR reverseadas de televisores Samsung — control remoto universal hecho a mano.',
    video: 'assets/videos/flipper/infrared/infrared-demo-01.mp4',
    txt: 'assets/flipper-files/infrared/Samsung.ir',
    txtLabel: 'Samsung.ir',
    repo: '',
  },
  {
    id: 'gpio',
    folder: 'gpio',
    name: 'GPIO',
    desc: 'Antena externa para más alcance, y experimentos con NRF24L01+ para sniffing tipo MouseJack.',
    video: 'assets/videos/flipper/gpio/gpio-demo-01.mp4',
    txt: 'assets/flipper-files/gpio/gpio-info.txt',
    txtLabel: 'gpio-info.txt',
    repo: '',
  },
  {
    id: 'keyclone',
    folder: 'keyclone',
    name: 'Key Clone',
    desc: 'Lectura de llaves físicas por numeración — al acercar una llave al Flipper se puede identificar el corte exacto a partir de los dígitos grabados.',
    video: 'assets/videos/flipper/keyclone/keyclone-demo-01.mp4',
    txt: 'assets/flipper-files/keyclone/keyclone-info.txt',
    txtLabel: 'keyclone-info.txt',
    repo: '',
  },
];

const FLIPPER_EXPLORE = [
  {
    name: 'BadUSB — Claude Code + Spotify',
    desc: 'Al conectarlo abre Claude Code en Windows y pone música en Spotify.',
    txt: 'assets/flipper-files/explora-sano/claude-spotify.txt',
  },
];

const FLIPPER_RECOMMENDED = [
  {
    name: 'Flipper Zero — Web Oficial',
    desc: 'La web oficial del dispositivo: documentación, firmware, tienda y comunidad.',
    url: 'https://flipper.net/',
    icon: 'ph-game-controller',
    featured: true,
  },
  {
    name: 'Momentum Firmware',
    desc: 'El firmware que corre en mi Flipper — más funciones, más control.',
    url: 'https://momentum-fw.dev/',
    icon: 'ph-cpu',
  },
  {
    name: 'Flipper Lab — Hex Editor',
    desc: 'Editor hexadecimal directo desde el navegador.',
    url: 'https://lab.flipper.net/apps/hex_editor',
    icon: 'ph-code',
  },
  {
    name: 'Lopaka',
    desc: 'Editor de pantallas/UI para proyectos de Flipper y ESP32.',
    url: 'https://lopaka.app/gallery',
    icon: 'ph-paint-brush',
  },
];

/* ---------- RECURSOS PARA ESTUDIANTES ---------- */
const STUDENT_RESOURCES = [
  {
    name: 'MentorHub',
    desc: 'Plataforma de tutorías entre estudiantes — conecta a quien necesita ayuda en una materia con quien ya la domina.',
    demo: 'https://madco-py.github.io/MentorHub/',
    repo: '',
    shotVideo: 'assets/img/estudiantes/mentorhub-preview.mp4',
    order: 2,
  },
  {
    name: 'MAD-Sistema de Evaluaciones',
    desc: 'Simulador de examen estilo Canvas Student con detección de cambio de pestaña y monitoreo de actividad en pantalla.',
    demo: 'https://madco-py.github.io/Detector_De_Pantalla_Canvas/',
    repo: '',
    shotVideo: 'assets/img/estudiantes/mad-sistema-preview.mp4',
    order: 1,
  },
];

/* ---------- MI SETUP (radio reemplazada por mochila North Face) ---------- */
const SETUP_ITEMS = [
  { name: 'Dell Latitude 5421', spec: 'i7 11th gen · 24GB RAM · Iris Xe', desc: 'Mi laptop principal de trabajo y desarrollo, corriendo Ubuntu 26.04.', img: 'assets/img/setup/laptop-dell-latitude.avif', icon: 'ph-laptop' },
  { name: 'iPad Air + teclado', spec: 'Lectura y notas', desc: 'Para leer, tomar notas rápidas y trabajar fuera del escritorio.', img: 'assets/img/setup/ipad-air.png', icon: 'ph-device-tablet' },
  { name: 'Logitech MX Master 4', spec: 'Mouse principal', desc: 'El mouse con el que controlo todo, scroll infinito incluido.', img: 'assets/img/setup/mouse-mx-master-4.png', icon: 'ph-mouse' },
  { name: 'Flipper Zero', spec: 'Momentum Firmware', desc: 'Mi herramienta favorita para hardware hacking y experimentos RF/NFC.', img: 'assets/img/setup/flipper-zero.png', icon: 'ph-game-controller' },
  { name: 'Navaja Milwaukee', spec: 'Corte de cables', desc: 'Para destripar cables y conectores en proyectos de hardware.', img: 'assets/img/setup/navaja-milwaukee.png', icon: 'ph-scissors' },
  { name: 'Nintendo Switch + Ubuntu', spec: 'Linux portátil', desc: 'Sí, corre Ubuntu. Porque ¿por qué no?', img: 'assets/img/setup/nintendo-switch.png', icon: 'ph-game-controller' },
  { name: 'VS Code', spec: 'Editor principal', desc: 'Donde pasa la mayoría de mis horas de código.', img: 'assets/img/setup/vscode.png', icon: 'ph-code' },
  { name: 'Claude Code', spec: 'Asistente en terminal', desc: 'Mi copiloto de desarrollo en Ubuntu.', img: 'assets/img/setup/claude-code.gif', icon: 'ph-terminal-window' },
  { name: 'Firefox', spec: 'Navegador principal', desc: 'Privacidad y control sobre todo lo demás.', img: 'assets/img/setup/firefox-logo.png', icon: 'ph-firefox-logo' },
  { name: 'USB con Tails', spec: 'Sistema amnésico', desc: 'Para cuando necesito navegar sin dejar rastro en el equipo.', img: 'assets/img/setup/usb-tails.png', icon: 'ph-usb' },
  { name: 'The North Face Router', spec: 'Mochila de trabajo', desc: 'Va a todos lados conmigo — laptop, cables, flipper, todo cabe.', img: 'assets/img/setup/backpack-northface.png', icon: 'ph-backpack' },
  { name: 'Lentes Xiaomi luz azul', spec: 'Protección visual', desc: 'Para frenar el daño de tantas horas frente a pantallas.', img: 'assets/img/setup/lentes-xiaomi.png', icon: 'ph-eyeglasses' },
];

/* ---------- HOBBIES ---------- */
const HOBBIES = [
  { icon: 'ph-sneaker-move', label: 'Correr' },
  { icon: 'ph-chess', label: 'Ajedrez' },
  { icon: 'ph-game-controller', label: 'Nintendo Switch' },
  { icon: 'ph-book-open', label: 'Leer' },
  { icon: 'ph-music-note', label: 'Música' },
  { icon: 'ph-wrench', label: 'Hardware hacking' },
];

/* ---------- FUNNY ---------- */
const FUNNY_PROJECTS = [
  {
    name: 'SANSAN',
    desc: 'Propuesta de San Valentín hecha código — porque pedir las cosas normales es aburrido.',
    video: 'assets/videos/funny/sansan/sansan-demo-01.mp4',
    demo: 'https://madco-py.github.io/SANSAN/',
    repo: 'https://github.com/MADCO-py/SANSAN',
  },
];

const FUNNY_SNIPPETS = [
  {
    tag: 'Python curioso',
    code:
`<span class="c1">try</span>:
    vida = <span class="c2">"funcionando"</span>
<span class="c1">except</span> Exception <span class="c1">as</span> e:
    <span class="c3">print</span>(<span class="c2">"todo bien, no pasó nada"</span>)
    <span class="c1">pass</span>  <span class="c3"># la solución universal</span>`,
  },
];
