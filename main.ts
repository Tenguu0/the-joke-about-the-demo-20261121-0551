import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// make.fun competition: the-joke-about-the-demo-20261121-0551
// Deterministic, stdlib only, no network.
const JOKE =
  "I pair-program with an AI agent: I write the bugs, it writes the confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
