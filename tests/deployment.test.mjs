import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
const script = readFileSync(new URL("../script.js", import.meta.url), "utf8");

assert.match(html, /style\.css\?v=20260711/);
assert.match(html, /script\.js\?v=20260711/);
for (const asset of ["data\/sources.js", "data\/technologies.js", "data\/materials.js"]) {
  assert.match(html, new RegExp(asset.replace("/", "\\/")), `missing deployed data script: ${asset}`);
}
assert.match(css, /\.reveal \{ opacity: 1/);
assert.match(css, /body\.js-ready \.reveal/);
assert.match(script, /document\.body\.classList\.add\('js-ready'\)/);
assert.doesNotMatch(script, /\|\| path/);
assert.doesNotMatch(script, /window\.alert|\balert\(/);

console.log("Deployment regression checks passed.");
