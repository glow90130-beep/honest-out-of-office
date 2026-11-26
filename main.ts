import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const entry =
  "I'm out until Monday; I've read your email, felt a familiar flicker of obligation, and decided you deserve a considered answer rather than a guilty one.";

const output = resolve("/output/entry.txt");
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, entry, "utf8");
