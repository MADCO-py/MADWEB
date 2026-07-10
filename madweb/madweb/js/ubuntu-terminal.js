// ============================================================
// Terminal flotante sobre la foto del escritorio — escribe
// comandos en loop para dar sensación de "computadora viva".
// ============================================================
(function () {
  const body = document.getElementById('ubuntu-terminal-body');
  if (!body) return;

  const lines = [
    '$ neofetch',
    'madco@ubuntu 26.04 LTS',
    '------------------------',
    'WM:     GNOME (Wayland)',
    'Shell:  zsh',
    'Kernel: 6.8.0-zen',
    '',
    '$ whoami',
    'madco.py',
    '',
    '$ echo "todo bien por aca"',
    'todo bien por aca',
    '',
    '$ _',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let shown = '';

  function typeNext() {
    if (lineIndex >= lines.length) {
      setTimeout(() => {
        shown = '';
        lineIndex = 0;
        charIndex = 0;
        body.textContent = '';
        typeNext();
      }, 2600);
      return;
    }
    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      body.textContent = shown + currentLine.slice(0, charIndex) + '▌';
      charIndex++;
      setTimeout(typeNext, currentLine.startsWith('$') ? 38 : 14);
    } else {
      shown += currentLine + '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNext, currentLine.startsWith('$') ? 260 : 120);
    }
  }

  typeNext();
})();
