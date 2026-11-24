// The Perfect Pickup Line — make.fun bounty entry.
// Writes a single pickup line to <output dir>/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a million simulations of this moment — and in every single one, I still got nervous.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
