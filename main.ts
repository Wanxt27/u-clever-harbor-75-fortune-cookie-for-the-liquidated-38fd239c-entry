// Fortune Cookie for the Liquidated Trader — make.fun micro entry.
// Writes one fortune-cookie line (at most 20 words) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will buy the dip one last time, and the dip will buy you instead.";

// The bounty caps the fortune at 20 words of plain text.
const wordCount = FORTUNE.split(/\s+/).filter(Boolean).length;
if (wordCount > 20) {
  throw new Error(`fortune is ${wordCount} words, over the 20-word cap`);
}

// The sealed scorer only accepts 1–160 characters of UTF-8 text.
if (FORTUNE.length < 1 || FORTUNE.length > 160) {
  throw new Error(`fortune is ${FORTUNE.length} characters, outside 1-160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
console.log(FORTUNE);
