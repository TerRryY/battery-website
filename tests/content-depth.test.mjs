import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const script = readFileSync(resolve(root, "script.js"), "utf8");

const loadData = (file, key) => {
  const context = { window: {} };
  vm.runInNewContext(readFileSync(resolve(root, file), "utf8"), context);
  return context.window[key];
};

const technologies = loadData("data/technologies.js", "BATTERY_TECHNOLOGIES");
const materials = loadData("data/materials.js", "BATTERY_MATERIALS");
const sources = loadData("data/sources.js", "BATTERY_SOURCES");

for (const id of [
  "overview", "inside", "layer-stack", "ion-demo", "chemistries",
  "technology-rail", "tech-table", "compare", "tech-selectors",
  "cell-to-vehicle", "system-steps", "thermal", "materials",
  "material-grid", "research", "tools", "quiz-form", "about"
]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing #${id}`);
}

assert.equal(technologies.length, 8, "expected eight battery routes");
assert.ok(materials.length >= 15, "expected at least fifteen material records");
assert.ok(sources.length >= 10, "expected a useful source registry");

for (const technology of technologies) {
  assert.ok(technology.zh?.title && technology.en?.title, `missing bilingual technology: ${technology.id}`);
  assert.ok(technology.facts?.massRange?.length === 2, `missing energy range: ${technology.id}`);
  assert.ok(Object.keys(technology.ratings || {}).length === 6, `missing qualitative ratings: ${technology.id}`);
  assert.ok(technology.sourceIds?.length > 0, `missing sources: ${technology.id}`);
}

for (const material of materials) {
  assert.ok(material.zh?.name && material.en?.name, `missing bilingual material: ${material.id}`);
  assert.ok(material.formula && material.category, `missing material structure: ${material.id}`);
  assert.ok(material.sourceIds?.length > 0, `missing material sources: ${material.id}`);
}

for (const source of sources) {
  assert.match(source.url, /^https:\/\//, `invalid source URL: ${source.id}`);
  assert.ok(source.publisher && source.year && source.accessed, `incomplete citation: ${source.id}`);
  assert.ok(source.zh === undefined, "sources should use structured bilingual scope, not duplicated records");
}

for (const behavior of [
  "renderExplorer", "renderIonDemo", "renderComparison", "setupSystemStory",
  "renderMaterials", "openDeepLinkedMaterial", "calculateEnergy", "calculateRange",
  "scoreQuiz", "retryIncorrect", "openDialog", "citationMarkup"
]) {
  assert.ok(script.includes(behavior), `missing behavior: ${behavior}`);
}

console.log("Battery Materials Lab content depth checks passed.");
