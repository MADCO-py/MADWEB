# MADCO

Client-facing site: delivered projects, prices in USD, security, and a 6-question
quiz that builds a live preview and an instant estimate. Tesla-style minimal.
Pure HTML/CSS/JS — open `index.html` or serve the folder (`npx serve .`).

## Files
| File | What lives there |
|---|---|
| `index.html` | Page structure |
| `css/style.css` | Base styles |
| `css/extras.css` | Build-yours quiz (dark), Services, chatbot orb |
| `js/i18n.js` | Every static text in **EN / ES / JA** (edit all 3) |
| `js/app.js` | `PROJECTS` (projects, features, prices), `TIERS` (pricing table), `QUIZ_PRICE` (quiz pricing), `SERVICES` (chatbot / automation / NFC prices) |
| `js/quiz.js` | 6-question quiz, live preview, image downloads (post 1080×1350, story 1080×1920) |
| `js/chat.js` | Chatbot orb + FAQ questions and answers (EN / ES / JA) |
| `js/logo-data.js` | Logo as data URI (used inside downloaded images) |
| `assets/logo.png`, `assets/favicon-*.png` | Logo (orb) and browser-tab icon |
| `assets/work/` | Project videos and screenshots |

Extra services (from): chatbot $250 · automations $200 · NFC chips $60.

## Prices (USD, base)
| Type | Example | MADCO |
|---|---|---|
| Portfolio | Marce Juárez | $460 |
| Event / landing | The Sunset Sessions | $520 |
| Online store | March Jewelry | $1,240 |
| Full platform | Los Skeepers | $2,160 |
| Custom system | FleetControl | $3,800 |

Internal note (not shown on the site): set ≈ Q1,000 below 2026 Guatemalan agency averages.

Every project: server $10–50/month (monthly or yearly), 6 months maintenance + bug fixes,
user manual, technical manual.
