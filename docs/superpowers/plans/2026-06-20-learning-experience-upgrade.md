# Battery Lab Learning Experience Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing cinematic Battery Lab into a navigable learning experience with dynamic mechanism diagrams, richer calculators, current industry cases, and a visible maintenance model.

**Architecture:** Keep the existing static HTML/CSS/JavaScript structure and visual language. Add focused data in `learning-content.js`, render it through small functions in `script.js`, and keep every new interaction local-first with no backend dependency.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, inline SVG/CSS animation, Chart.js, localStorage.

---

### Task 1: Navigation and global retrieval

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/experience-upgrade.test.mjs`

- [ ] Add a failing static test that expects a global search dialog, floating section navigation, keyboard shortcut, and bookmark controls.
- [ ] Add semantic HTML for the floating table of contents and search dialog.
- [ ] Reuse `knowledgeEntries` to render instant global results and open the existing detail modal.
- [ ] Store bookmarked entry IDs in `localStorage` and expose them inside search.
- [ ] Run `node tests/experience-upgrade.test.mjs` and confirm the navigation/search assertions pass.

### Task 2: Electrochemistry primer and mechanism studio

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/experience-upgrade.test.mjs`

- [ ] Add a beginner primer covering potential, electron/ion paths, SOC, SOH, and electrode roles.
- [ ] Add three tabbed mechanism stages: intercalation, SEI growth, and thermal-runaway propagation.
- [ ] Implement motion with CSS transforms and SVG paths, including a reduced-motion fallback.
- [ ] Add explanatory captions that update with the selected mechanism.
- [ ] Verify all mechanism controls expose selected state and switch visible explanations.

### Task 3: Multi-variable tools

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Test: `tests/experience-upgrade.test.mjs`

- [ ] Extend the EV range form with speed, HVAC load, usable-capacity percentage, and temperature presets.
- [ ] Use a transparent educational model: adjusted range equals usable pack energy divided by base consumption plus speed and HVAC penalties, then multiplied by temperature efficiency.
- [ ] Add an SOH estimator using current full-charge capacity divided by rated new capacity.
- [ ] Validate positive inputs, cap percentages to plausible UI ranges, and show model limitations beside results.
- [ ] Add tests for the visible formulas and event wiring.

### Task 4: Industry cases and maintenance model

**Files:**
- Modify: `learning-content.js`
- Modify: `index.html`
- Modify: `script.js`
- Modify: `style.css`

- [ ] Add sourced, dated industry cases using official company or institutional sources.
- [ ] Separate product announcements from independently verified industrial performance.
- [ ] Add an update log with last-reviewed date, editorial method, and correction contact guidance.
- [ ] Add audience guidance for beginners, students, and engineers.
- [ ] Render source links with publisher and date.

### Task 5: Reading accessibility

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`

- [ ] Add text-size controls and a high-readability mode without changing the core black cinematic identity.
- [ ] Persist the chosen reading settings in `localStorage`.
- [ ] Improve section separators and active-section indication.
- [ ] Verify mobile controls do not overlap the header or content.

### Task 6: Verification

**Files:**
- Test: `tests/content-depth.test.mjs`
- Test: `tests/experience-upgrade.test.mjs`

- [ ] Run JavaScript syntax checks for `script.js` and `learning-content.js`.
- [ ] Run both Node test files.
- [ ] Serve the static site and verify all first-party files return HTTP 200.
- [ ] Use the Browser plugin to test search, mechanism switching, EV simulation, SOH estimation, bookmarks, and mobile layout.
- [ ] Inspect desktop and mobile screenshots for overlap, clipping, contrast, and section hierarchy.
