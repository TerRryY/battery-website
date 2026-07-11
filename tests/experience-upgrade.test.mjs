import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");
const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
const readme = fs.readFileSync(new URL("../README.md", import.meta.url), "utf8");

for (const id of ["open-search", "search-modal", "global-search-input", "detail-modal", "energy-form", "range-form", "usable-capacity", "quiz-retry"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing ${id}`);
}

for (const asset of ["battery-pack-cinematic.png", "battery-production.png", "ev-manufacturing.png", "logo-mark.svg"]) {
  assert.ok(html.includes(asset) || css.includes(asset), `missing curated asset ${asset}`);
}

assert.doesNotMatch(html, /ENERGY STORAGE MAP/, "dashboard-like hero map should not return");
assert.doesNotMatch(script, /window\.alert|\balert\(/, "browser alerts should not be used");
assert.doesNotMatch(html, /Chart\.js|chart\.umd/, "comparison should not depend on a heavy chart CDN");

assert.match(html, /Terry Wang/);
assert.ok(html.includes("Independent Project") || script.includes("Independent Project"));
assert.match(html, /application\/ld\+json/);
assert.match(html, /rel="canonical"/);
assert.match(html, /twitter:card/);
assert.match(html, /class="[^"]*system-static-fallback[^"]*"/);
assert.match(html, /data-system-stage="cell"/);
assert.match(html, /data-system-stage="vehicle"/);

assert.match(css, /body\.js-ready \.reveal/, "progressive enhancement fallback missing");
assert.match(css, /prefers-reduced-motion/, "motion accessibility fallback missing");
assert.match(css, /@media \(max-width: 430px\)/, "phone layout missing");
assert.match(css, /overflow-x: clip/, "horizontal overflow guard missing");

for (const behavior of ["aria-current", "aria-pressed", "lastDialogTrigger", "requestAnimationFrame", "history.replaceState", "CSS.escape"]) {
  assert.ok(script.includes(behavior), `missing accessible behavior: ${behavior}`);
}

assert.ok(readme.includes("Battery Lab"), "README should remain present during redesign");

console.log("Battery Materials Lab experience checks passed.");
