# MADCO

Client-facing site: delivered projects, prices in USD, security, and a 6-question
quiz that builds a live preview and an instant estimate. Tesla-style minimal.
Pure HTML/CSS/JS — open `index.html` or serve the folder (`npx serve .`).

## Files
| File | What lives there |
|---|---|
| `index.html` | Page structure |
| `css/style.css` | All styles |
| `js/i18n.js` | Every static text in **EN / ES / JA** (edit all 3) |
| `js/app.js` | `PROJECTS` (projects, features, prices), `TIERS` (pricing table), `QUIZ_PRICE` (quiz pricing) |
| `assets/work/` | Project videos and screenshots |

## Pricing logic
Market average = public 2026 agency rates in Guatemala (estoria.gt, mercadeodigital.co,
bigredes.com, atraeweb.com; Clutch $25–49/h for custom systems). MADCO price = market − Q1,000
(≈ $130 at Q7.64/USD).

| Type | Example | Market | MADCO |
|---|---|---|---|
| Portfolio | Marce Juárez | $590 | $460 |
| Event / landing | The Sunset Sessions | $650 | $520 |
| Online store | March Jewelry | $1,370 | $1,240 |
| Full platform | Los Skeepers | $2,290 | $2,160 |
| Custom system | FleetControl | $3,930 | $3,800 |

Every project: server $10–20/month (monthly or yearly), 6 months maintenance + bug fixes,
user manual, technical manual.
