import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");
const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
const readme = fs.readFileSync(new URL("../README.md", import.meta.url), "utf8");

for (const id of ["open-search", "search-modal", "global-search-input", "detail-modal", "energy-form", "range-form"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing ${id}`);
}

for (const asset of ["battery-pack-cinematic.png", "battery-production.png", "battery-pack-cat.png", "ev-manufacturing.png"]) {
  assert.ok(html.includes(asset) || css.includes(asset), `missing curated image asset ${asset}`);
}

assert.doesNotMatch(html, /class="reading-rail"/, "obsolete floating reading rail should be removed");
assert.doesNotMatch(html, /ENERGY STORAGE MAP/, "dashboard-like hero map should not return");

for (const behavior of [
  "calculateEnergy",
  "calculateRange",
  "renderMaterials",
  "renderQuiz",
  "scoreQuiz",
  "renderSearchResults",
  "renderThermal",
  "renderSystem",
  "setAttribute(\"open\""
]) {
  assert.ok(script.includes(behavior), `missing behavior: ${behavior}`);
}

assert.match(css, /cinema-image/, "cinematic image treatment missing");
assert.match(css, /prefers-reduced-motion/, "motion accessibility fallback missing");
assert.match(css, /@media \(max-width: 720px\)/, "mobile layout missing");
assert.match(css, /overflow-x: hidden/, "horizontal overflow guard missing");
assert.ok(readme.includes("Interactive battery exploded-view explorer"), "README missing redesigned feature list");

console.log("Battery Lab experience upgrade checks passed.");
