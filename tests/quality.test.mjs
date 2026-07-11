import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");

for (const marker of ["canonical", "og:url", "twitter:card", "application/ld+json", "theme-color"]) {
  assert.ok(html.includes(marker), `missing metadata: ${marker}`);
}
assert.match(html, /<main id="main">/);
assert.match(html, /class="skip-link"/);
assert.match(html, /width="1546" height="866"/);
assert.match(html, /width="1342" height="760"/);
assert.match(html, /loading="lazy" decoding="async"/);
assert.match(css, /:focus-visible/);
assert.match(css, /100svh/);
assert.match(css, /env\(safe-area-inset-bottom\)/);

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
assert.deepEqual(duplicates, [], `duplicate ids: ${duplicates.join(", ")}`);

console.log("Static quality checks passed.");
