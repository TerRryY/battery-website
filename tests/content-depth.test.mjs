import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const script = readFileSync(resolve(root, "script.js"), "utf8");
const content = readFileSync(resolve(root, "learning-content.js"), "utf8");

for (const id of ["chemistry-learning", "materials-deep-dive", "pack-engineering", "future-maturity", "references-content"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing #${id}`);
}

for (const renderer of ["renderChemistryLearning", "renderMaterialsDeepDive", "renderPackEngineering", "renderFutureMaturity", "renderReferences"]) {
  assert.match(script, new RegExp(`function ${renderer}\\(`), `missing ${renderer}`);
}

for (const required of ["NCM 不是一种固定配方", "LiFePO₄ ⇌ FePO₄", "0.335 nm", "10⁻³ S/cm", "安时积分", "CTP", "多硫化物穿梭", "SEI 固体电解质界面膜"]) {
  assert.ok(content.includes(required), `missing academic content: ${required}`);
}

assert.equal((content.match(/id: "(?:nmc|lfp|sodium|solid|lead|nimh)"/g) || []).length, 6, "expected six chemistry rows");
assert.equal((content.match(/ratio: "(?:111|523|622|811)"/g) || []).length, 4, "expected four NCM ratios");
assert.ok((content.match(/title: \{ zh:/g) || []).length >= 8, "expected material and pack topics");
assert.ok((content.match(/level: \{ zh:/g) || []).length >= 5, "expected future maturity entries");
assert.ok((content.match(/doi\.org/g) || []).length >= 5, "expected peer-reviewed references");

console.log("Battery learning depth content checks passed.");
