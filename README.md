# Battery Lab

A student-built interactive website about battery technologies, energy storage, and materials science.

## Features

- Battery type overview
- Visible chemistry comparison table with simplified reactions and typical ranges
- NCM 111 / 523 / 622 / 811 composition explainer
- Interactive comparison charts
- Battery energy calculator
- EV range and cold-weather calculator
- Battery innovation timeline
- Cell-to-pack visualization
- Battery materials database
- Materials mechanism deep dives covering crystal structures, SEI, silicon expansion, electrolytes, and separators
- Pack engineering notes on BMS estimation, thermal management, structural integration, and layered safety
- Future-technology maturity and bottleneck tracking
- Peer-reviewed and industry reference list
- Battery quiz
- Searchable glossary
- Personal research thoughts

## Tech Stack

- HTML
- CSS
- JavaScript
- Chart.js
- GitHub Pages

## Purpose

This project was created as a personal learning and portfolio project for exploring Materials Science & Engineering and future energy storage technologies.

The values and scores shown on the website are simplified educational estimates. Real battery performance depends on cell design, operating conditions, manufacturing, pack integration, and measurement methods.

## Local Testing

The site can be opened directly from `index.html`. For the most reliable local test, run a small static server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

An internet connection is required for the Chart.js CDN resource.

## Deployment

This website can be deployed using GitHub Pages:

1. Push the files in this folder to a GitHub repository.
2. Open the repository settings.
3. Select **Pages**.
4. Deploy from the branch and folder containing `index.html`.

No build step, backend, API key, or database is required.
