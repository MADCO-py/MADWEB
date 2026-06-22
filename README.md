# MADCO.py

Sitio personal bajo alias — hub de proyectos de software, hardware hacking, ciberseguridad y cosas random. Sin nombre real, sin foto de cara, sin backend. HTML/CSS/JS puro, pensado para GitHub Pages.

## Cómo correrlo localmente
Solo abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:
```
npx serve .
```

## Cómo agregar contenido nuevo
Casi todo el contenido del sitio vive en **`js/data.js`**. No necesitas tocar HTML ni CSS para agregar un proyecto, libro o item del setup — solo copia un objeto del arreglo correspondiente y cambia sus valores. El archivo está comentado por sección.

| Quiero agregar... | Arreglo en `data.js` |
|---|---|
| Un proyecto de Kali Linux | `CIBER_KALI_PROJECTS` |
| Un proyecto de Flipper Zero | `FLIPPER_PROJECTS` |
| Un link recomendado de Flipper | `FLIPPER_RECOMMENDED` |
| Un proyecto de ESP32/Arduino | `ESP32_PROJECTS` |
| Un libro en Lectura | `BOOKS` |
| Un item de Mi Setup | `SETUP_ITEMS` |
| Un proyecto gracioso | `FUNNY_PROJECTS` |
| Una red social | `SOCIALS` |

## Dónde van los archivos (imágenes, videos, .txt)

```
assets/
  img/
    freelance/        ← captura de FleetControl
    setup/             ← fotos de hardware (mouse, laptop, etc.)
    lectura/           ← portadas de libros
    ciberseguridad/    ← logo de Kali
  videos/
    esp32/snake/                ← video loop del proyecto Snake
    flipper/{badusb,subghz,nfc,infrared,gpio}/  ← un video loop por carpeta
    funny/{sansan,camara}/      ← videos de Cosas Graciosas
  flipper-files/
    {badusb,subghz,nfc,infrared,gpio}/  ← los .txt descargables de cada proyecto
    explora-sano/                        ← los .txt "sin riesgo"
```

Si subes un archivo y el nombre no coincide exactamente con el que está en `data.js`, actualiza la ruta en `data.js` (campo `video`, `img`, `cover` o `txt` del objeto correspondiente).

**Importante:** mientras un video o imagen no exista, el sitio muestra automáticamente un placeholder indicando la carpeta exacta donde debe ir — no hay botones ni medios rotos.

## Estructura de páginas
- `index.html` — página principal, todo en un solo scroll.
- `pages/seguridad-educativa.html` — página de concientización sobre riesgos (Kali, ESP32, Flipper NFC). Sin instrucciones de cómo replicar nada, solo cómo protegerte.

## Pendientes conocidos
- Fotos: iPad Air + teclado, Nintendo Switch.
- Portadas de los 3 libros de Lectura.
- Captura de pantalla de FleetControl.
- Videos cortos en loop: Snake (ESP32), los 5 proyectos de Flipper, SANSAN.
- Archivos `.txt` reales de Flipper (hay placeholders en su lugar).
- Link de Discord (déjalo comentado en `SOCIALS` hasta que lo tengas).
