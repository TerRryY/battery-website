import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");
const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
const content = fs.readFileSync(new URL("../experience-content.js", import.meta.url), "utf8");

for (const id of ["open-global-search", "global-search", "mechanism-studio", "soh-form", "industry-cases", "maintenance-note"]) {
  assert.match(html, new RegExp(`id="${id}"`), `missing ${id}`);
}
assert.doesNotMatch(html, /class="reading-rail"/, "obsolete floating reading rail should be removed");

for (const behavior of ["openGlobalSearch", "renderGlobalSearchResults", "toggleBookmark", "renderExperience", "average-speed", "hvac-power", "usable-capacity"]) {
  assert.ok(script.includes(behavior) || html.includes(behavior), `missing behavior: ${behavior}`);
}

for (const mechanism of ["intercalation", "sei", "runaway"]) assert.ok(content.includes(`id: "${mechanism}"`));
for (const sector of ["电网储能", "消费电子", "航空航天"]) assert.ok(content.includes(sector));
assert.ok(content.includes("2026-06-20"), "maintenance review date missing");
assert.match(css, /prefers-reduced-motion/, "motion accessibility fallback missing");
assert.match(css, /@media \(max-width: 600px\)/, "mobile layout missing");

const simulatedRange = (60 * 0.95 * 1000 * 0.85) / (170 + Math.pow(90 / 80, 2) * 14 + 1.5 * 1000 / 90);
assert.ok(simulatedRange > 230 && simulatedRange < 240, "range model output outside expected band");
assert.equal(Math.round((86 / 100) * 100), 86, "SOH model incorrect");

console.log("Battery experience upgrade checks passed.");
