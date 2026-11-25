// One-Line Office Joke Laugh-Off — make.fun bounty
// u-suzy-one-line-office-joke-laugh-off-f574ac73
//
// Entry: one original one-line joke about office life, written from scratch.
// The angle is deliberately fresh: not the coffee machine, not the printer,
// not "per my last email", not a meeting that should have been an email,
// and not Monday. Instead the joke looks at the one office resident nobody
// ever thinks of as staff — the office plant — and treats its survival as
// a career.
//
// The humour works in two beats. First, an escalation of corporate churn
// (three managers, two restructures, one merger) that the plant simply
// outlasts, which quietly makes it the most experienced thing in the
// building. Then the punchline flips the hierarchy: HR — the department
// that onboards people — asks the plant to mentor the new hires. The
// plant has never been promoted, praised, or paid, yet it is now the
// mentor. That reversal is the laugh: the least powerful object in the
// office is the only one with institutional memory.
//
// Deterministic: no input, no network, no randomness. Every run writes
// the exact same 116-character line to /output/entry.txt, with no
// trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Our office plant survived three managers, two restructures, and one merger — so HR asked it to mentor the new hires.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
