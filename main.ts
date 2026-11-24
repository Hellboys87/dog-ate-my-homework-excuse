import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: the dog "did" the homework the only way a dog can —
// ate every page, proud of a perfect score, and genuinely confused
// about why "show your work" is now a problem. No apology, no shame.
const LINE =
  "I did the homework — every page, no mistakes, finished before breakfast. The only problem is I can't show my work.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
