# Battery Materials Lab System Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Battery Lab into a bilingual, source-aware interactive battery museum and Terry Wang portfolio project while keeping GitHub Pages deployment simple and reliable.

**Architecture:** Keep the static HTML/CSS/vanilla-JavaScript stack. Move educational records and citations into focused browser-loadable data files, keep one UI controller in `script.js`, and build every critical experience with semantic HTML/SVG plus a readable non-JavaScript fallback. Publish one atomic commit to `main` after local static, browser, responsive, and accessibility checks pass.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, inline SVG, Chart.js with SVG/canvas fallback, Node built-in tests, GitHub Pages.

---

### Task 1: Reconcile Deployment Baseline

**Files:**
- Modify: `.gitignore`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/deployment.test.mjs`

- [ ] **Step 1: Add a failing deployment regression test**

```js
assert.match(html, /style\.css\?v=20260711/);
assert.match(html, /script\.js\?v=20260711/);
assert.match(css, /body\.js-ready \.reveal/);
assert.match(script, /document\.body\.classList\.add\("js-ready"\)/);
assert.doesNotMatch(script, /window\.alert/);
```

- [ ] **Step 2: Run the test and confirm the stale baseline fails**

Run: `node --test tests/deployment.test.mjs`

Expected: FAIL because the old cache key and browser alert remain.

- [ ] **Step 3: Merge the remote history without losing local render fallbacks**

Run: `git merge origin/main`

Expected: the merge preserves `.gitignore`, the `js-ready` reveal guard, and the translation fallback.

- [ ] **Step 4: Update cache keys and replace alert-based comparison feedback**

Use `?v=20260711` for all local CSS, JavaScript, and social-image references. Render a polite inline status message when the four-technology comparison limit is reached.

- [ ] **Step 5: Run the deployment regression test**

Run: `node --test tests/deployment.test.mjs`

Expected: PASS.

### Task 2: Establish Bilingual Data and Source Boundaries

**Files:**
- Create: `data/technologies.js`
- Create: `data/materials.js`
- Create: `data/sources.js`
- Modify: `index.html`
- Modify: `script.js`
- Test: `tests/data-integrity.test.mjs`

- [ ] **Step 1: Add schema checks for every technology, material, and source**

```js
for (const technology of technologies) {
  assert.ok(technology.id && technology.zh && technology.en);
  assert.equal(technology.metrics.length, 9);
  assert.ok(technology.sourceIds.length > 0);
}
for (const source of sources) {
  assert.match(source.url, /^https:\/\//);
  assert.ok(source.publisher && source.year && source.accessed);
}
```

- [ ] **Step 2: Create six chemistry records and fourteen material records**

Use the same keys in Chinese and English. Store ranges as structured values and qualitative ratings as `low`, `medium`, or `high`; do not collapse unavailable metrics into invented precision.

- [ ] **Step 3: Create a checked source registry**

Each entry contains `id`, `title`, `publisher`, `year`, `accessed`, `url`, `scope`, and `conditions`. Link records by `sourceIds` instead of duplicating citation text.

- [ ] **Step 4: Load data files before `script.js`**

```html
<script src="data/sources.js?v=20260711" defer></script>
<script src="data/technologies.js?v=20260711" defer></script>
<script src="data/materials.js?v=20260711" defer></script>
<script src="script.js?v=20260711" defer></script>
```

- [ ] **Step 5: Run data tests**

Run: `node --test tests/data-integrity.test.mjs`

Expected: PASS with no missing bilingual field or citation reference.

### Task 3: Rebuild Hero, Navigation, and Project Identity

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/structure.test.mjs`

- [ ] **Step 1: Add structural tests for the new navigation and hero identity**

```js
for (const id of ["overview", "inside", "chemistries", "cell-to-vehicle", "materials", "research", "tools", "about"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`));
}
for (const phrase of ["Terry Wang", "Independent Project", "Materials Science", "Battery Engineering"]) {
  assert.ok(html.includes(phrase) || script.includes(phrase));
}
```

- [ ] **Step 2: Replace hero copy and metadata hierarchy**

Chinese title: `拆开一块电池，\n看见材料如何驱动一辆汽车。`

English title: `Inside a Battery,\nMaterials Move the World.`

Use one compact project byline, two main actions, and one GitHub text link.

- [ ] **Step 3: Add restrained hero depth**

Use CSS custom properties `--hero-x`, `--hero-y`, and `--hero-scroll` to offset the background, structural overlay, and copy at different rates. Disable pointer tracking below 768px and under reduced motion.

- [ ] **Step 4: Implement accessible navigation state**

Set `aria-current="page"` on the active section, lock body scroll while the mobile menu is open, close on Escape, and restore focus to the menu button.

- [ ] **Step 5: Run structure tests**

Run: `node --test tests/structure.test.mjs`

Expected: PASS.

### Task 4: Upgrade Battery Layers and Ion Movement

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/interactions.test.mjs`

- [ ] **Step 1: Test six keyboard-selectable battery layers and ion controls**

```js
for (const layer of ["cathode", "anode", "separator", "electrolyte", "collectors", "casing"]) {
  assert.ok(script.includes(`id: "${layer}"`));
}
assert.match(html, /id="ion-pause"/);
assert.match(html, /id="electron-path"/);
assert.match(html, /id="ion-path"/);
```

- [ ] **Step 2: Render the layer stack as a tablist**

Each layer button uses `role="tab"`, `aria-selected`, roving `tabindex`, ArrowUp/ArrowDown handling, and a stable detail panel. Selecting a layer changes opacity and translate depth without changing layout dimensions.

- [ ] **Step 3: Replace the moving-dot demo with an SVG circuit**

Render separate ion and electron paths, arrow markers, a charge/discharge toggle, energy-flow label, and pause button. Under reduced motion, show both static arrows and numbered steps.

- [ ] **Step 4: Run interaction tests**

Run: `node --test tests/interactions.test.mjs`

Expected: PASS.

### Task 5: Rebuild Chemistry Comparison as Evidence-Aware Exploration

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/comparison.test.mjs`

- [ ] **Step 1: Test six technologies, nine dimensions, and inline limit feedback**

```js
assert.equal(technologies.length, 6);
assert.ok(technologies.every(item => item.metrics.length === 9));
assert.match(html, /id="comparison-status"/);
assert.doesNotMatch(script, /alert\(/);
```

- [ ] **Step 2: Separate quantitative and qualitative comparison**

Use the bar view for sourced energy-density ranges. Use a semantic matrix for safety, charging, cold performance, material availability, cost, and maturity with visible labels plus patterns/icons so color is never the only signal.

- [ ] **Step 3: Keep at most four active technologies**

Disable unchecked controls when four are selected, announce the reason through `#comparison-status`, and provide a clear-selection action.

- [ ] **Step 4: Add source drawers to technology details**

Every detail dialog lists source publisher, title, year, accessed date, test-condition note, and external link.

- [ ] **Step 5: Run comparison tests**

Run: `node --test tests/comparison.test.mjs`

Expected: PASS.

### Task 6: Build the Cell-to-Vehicle Signature Story

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/system-story.test.mjs`

- [ ] **Step 1: Test four system stages and static fallback content**

```js
for (const stage of ["cell", "module", "pack", "vehicle"]) {
  assert.match(html, new RegExp(`data-system-stage=["']${stage}["']`));
}
assert.match(html, /class="system-static-fallback"/);
```

- [ ] **Step 2: Build a sticky SVG stage with natural scroll progress**

Stage 1 exposes electrodes and `Wh = V × Ah`; Stage 2 animates series/parallel cell grouping; Stage 3 adds BMS, cooling plate, enclosure, busbars, and sensors; Stage 4 places the pack in a chassis with drive, regenerative-braking, and heat-flow paths.

- [ ] **Step 3: Implement progress and content synchronization**

Use one passive scroll listener scheduled through `requestAnimationFrame`. Update `data-stage`, the progress rail, diagram transforms, and stage copy without intercepting native scrolling.

- [ ] **Step 4: Add mobile and reduced-motion alternatives**

Below 768px, render four swipe-free editorial stages. Under reduced motion, remove sticky transforms and show all four diagrams as a readable sequence.

- [ ] **Step 5: Run system-story tests**

Run: `node --test tests/system-story.test.mjs`

Expected: PASS.

### Task 7: Turn Materials into a Research Tool

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/materials.test.mjs`

- [ ] **Step 1: Test bilingual search aliases, reset, empty state, and deep links**

```js
assert.match(html, /id="material-reset"/);
assert.match(script, /URLSearchParams/);
for (const alias of ["LiFePO4", "NCM", "石墨", "graphite", "铜箔", "copper foil"]) {
  assert.ok(serializedData.includes(alias));
}
```

- [ ] **Step 2: Render a compact index and structured detail dialog**

Cards show formula, name, role, and one trade-off only. Dialogs show properties, advantages, limitations, uses, sustainability, research status, and citations.

- [ ] **Step 3: Add stable material URLs**

Open `?material=graphite#materials` on direct load, update the URL with `history.replaceState`, and remove the parameter on close without reloading.

- [ ] **Step 4: Run materials tests**

Run: `node --test tests/materials.test.mjs`

Expected: PASS.

### Task 8: Add Project Story, Trust Layer, and Better Learning Tools

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/learning-tools.test.mjs`

- [ ] **Step 1: Test About content, disclaimer, input limits, and retryable quiz**

```js
for (const text of ["Why I Built This", "Terry Wang", "Design Process", "What I Learned", "Future Development"]) {
  assert.ok(html.includes(text) || script.includes(text));
}
assert.match(html, /id="data-disclaimer"/);
assert.match(script, /usableCapacity/);
assert.match(script, /retryIncorrect/);
```

- [ ] **Step 2: Add the editorial Project Story section**

Use Motivation, The Question, Design Process, What I Learned, Future Development, and Author as a timeline/editorial layout rather than a grid of identical cards.

- [ ] **Step 3: Upgrade calculators**

Energy inputs validate finite values within documented educational ranges. Range adds usable-capacity percentage, buffer energy, temperature impact, model limits, and a live visual without browser alerts.

- [ ] **Step 4: Upgrade quiz feedback**

Assign question numbers, show correct-answer explanations after submit, support retrying only missed questions, announce score changes, and preserve keyboard operation.

- [ ] **Step 5: Run learning-tool tests**

Run: `node --test tests/learning-tools.test.mjs`

Expected: PASS.

### Task 9: Accessibility, Responsive, Performance, and SEO Pass

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Create: `assets/social-preview.svg`
- Modify: `robots.txt`
- Modify: `sitemap.xml`
- Test: `tests/quality.test.mjs`

- [ ] **Step 1: Test metadata, semantic fallbacks, and asset dimensions**

```js
for (const marker of ["canonical", "og:url", "twitter:card", "application/ld+json"]) {
  assert.ok(html.includes(marker));
}
assert.match(html, /width="[0-9]+" height="[0-9]+"/);
assert.match(css, /:focus-visible/);
```

- [ ] **Step 2: Add SEO and sharing metadata**

Set the canonical URL, bilingual-neutral description, absolute Open Graph image URL, Twitter summary card, and truthful WebSite + Person + CreativeWork + EducationalApplication JSON-LD.

- [ ] **Step 3: Optimize media loading**

Preload only the hero image, specify all image dimensions, lazy-load below-fold media, add `decoding="async"`, and convert large PNGs to WebP while keeping PNG fallbacks in `<picture>`.

- [ ] **Step 4: Verify seven responsive widths**

Use browser viewport checks at 1440, 1280, 1024, 768, 430, 390, and 360 pixels. At each width assert `scrollWidth <= clientWidth`, dialog bounds fit, navigation is usable, and major controls remain visible.

- [ ] **Step 5: Verify keyboard and modal focus behavior**

Test skip link, mobile menu, layer tabs, comparison controls, material dialog, Escape close, trigger focus restoration, quiz, and language toggle.

- [ ] **Step 6: Run the full quality suite**

Run: `node --check script.js && node --test tests/*.test.mjs`

Expected: all tests PASS and the local browser console has no errors.

### Task 10: Documentation and Atomic GitHub Pages Release

**Files:**
- Modify: `README.md`
- Modify: `docs/superpowers/plans/2026-07-11-battery-materials-lab-system-upgrade.md`

- [ ] **Step 1: Update README with verified project facts**

Document the project purpose, interaction map, file structure, local run command, source policy, accessibility choices, deployment path, lessons learned, and realistic future work.

- [ ] **Step 2: Compare local output to the GitHub `main` tree**

Run: `git diff --check && git status --short && git diff --stat origin/main`

Expected: only intentional project files differ and no whitespace errors appear.

- [ ] **Step 3: Create one local release commit**

Run: `git add . && git commit -m "feat: rebuild Battery Lab learning experience"`

Expected: a commit containing the tested website, data, sources, tests, and documentation.

- [ ] **Step 4: Publish the exact commit tree to `main`**

Use the connected GitHub contents/git-data API to create blobs, one tree, one commit parented to the current remote `main`, then fast-forward `refs/heads/main`.

- [ ] **Step 5: Verify GitHub Pages after cache expiry**

Confirm the live HTML references `?v=20260711`, all versioned assets return HTTP 200, the live page has the new hero title, and no console errors appear.

- [ ] **Step 6: Mark this plan complete**

Replace each completed checkbox with `[x]` and record any limitation that remains dependent on independent scientific review or external browser testing.
