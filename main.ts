// The joke about the demo — one line about working beside an AI coding agent.
// Role-reversal twist: the human is the bug factory, the agent supplies the
// overconfidence. The surprise lands on the last word ("confidence"), and every
// developer who has watched an agent present broken code with total certainty
// recognises it at once. Deterministic: fixed text, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I pair-program with an AI agent: I write the bugs, it writes the confidence.";

function validate(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry must be 1-280 code points, got ${points}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(JOKE);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
