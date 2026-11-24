import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You told me to stop chewing the homework, so I stopped chewing it and ate it instead — problem solved, you're welcome.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
