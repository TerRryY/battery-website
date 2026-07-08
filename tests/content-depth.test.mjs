import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const script = readFileSync(resolve(root, "script.js"), "utf8");

for (const id of [
  "explorer",
  "layer-stack",
  "ion-demo",
  "technology-rail",
  "tech-table",
  "compare",
  "tech-selectors",
  "system-steps",
  "thermal",
  "material-grid",
  "quiz-form"
]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing #${id}`);
}

for (const required of [
  "三元锂电池 NCM/NCA",
  "磷酸铁锂电池 LFP",
  "钠离子电池",
  "固态电池",
  "铅酸电池",
  "镍氢电池 NiMH",
  "石墨",
  "硅",
  "电解液",
  "隔膜",
  "BMS",
  "热失控"
]) {
  assert.ok(script.includes(required), `missing educational content: ${required}`);
}

assert.ok((script.match(/id: "(?:nmc|lfp|sodium|solid|lead|nimh)"/g) || []).length >= 6, "expected six battery technologies");
assert.ok((script.match(/category: "(?:cathode|anode|electrolyte|separator|collector|safety)"/g) || []).length >= 10, "expected rich materials database");
assert.ok(script.includes("drawFallbackRadar"), "expected no-CDN radar chart fallback");
assert.ok(script.includes("drawFallbackBar"), "expected no-CDN bar chart fallback");
assert.ok(script.includes("openDialog"), "expected dialog fallback helper");

console.log("Battery Lab content depth checks passed.");
