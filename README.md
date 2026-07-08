# Battery Lab

Battery Lab is a student-built interactive learning website about batteries, materials science, and electric vehicle energy systems.

It is designed as a portfolio-level project for exploring Materials Science & Engineering through a cinematic, museum-like web experience rather than a plain database page.

## Main Features

- Cinematic full-screen hero section
- Chapter-based learning flow from battery basics to EV systems
- Interactive battery exploded-view explorer
- Animated charge/discharge ion movement demo
- Premium battery technology cards with detailed modals
- Interactive Chart.js comparison dashboard
- Live battery energy calculator
- Live EV range calculator with temperature adjustment
- Clickable Cell → Module → Pack → Vehicle system diagram
- Winter range and thermal-management explanation
- Searchable materials database
- Global knowledge search with `/` shortcut
- Research notebook section written from a student perspective
- Interactive battery history timeline
- Five-question battery knowledge quiz
- Bilingual Chinese / English interface

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js CDN
- GitHub Pages

No backend, build step, account login, database, or API key is required.

## How To Run Locally

Open `index.html` directly in a browser, or run a small static server from this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Chart.js loads from a CDN, so an internet connection is needed for the comparison charts.

## Educational Note

The comparison scores, energy-density ranges, and calculator outputs are simplified educational estimates. Real battery performance depends on chemistry, cell design, manufacturing, thermal management, pack architecture, testing conditions, and aging.

## What I Learned

This project connects chemistry, materials science, system engineering, and user experience design. It helped me think about batteries not only as components, but as engineered systems involving trade-offs between safety, cost, lifetime, energy density, and environmental constraints.

## Future Improvements

- Add more visual mechanisms such as SEI growth and thermal runaway propagation
- Add source citations inside each detail modal
- Add more industrial case studies for sodium-ion, 4680 cylindrical cells, CTP/CTB/CTC, and semi-solid batteries
- Improve data tables with downloadable references
- Add a reading-progress or bookmark feature for long-term study

## Deployment

This website can be deployed directly with GitHub Pages. Push the files in this folder to a GitHub repository, then enable Pages for the branch containing `index.html`.
