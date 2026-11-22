// Writes this entry's business plan to entry.txt in the output directory.
// The plan must stay within the 280 code point limit, so the program counts
// it first and refuses to write anything that is too long or empty.

import { mkdirSync, writeFileSync } from "node:fs";

// Budget check: 500 brands x 3 images = 1,500 images, about $60 at about
// $0.04 per image, plus about $30 for the email tool, about $90 total,
// inside the $100 budget. Plan verified at 278 code points.

const PLAN =
  "Sell AI ad creatives to DTC brands already running ads. Day 1: list 500 small brands in Meta Ad Library. Generate 3 ad variants each, email one free sample, sell the set for $99 via Stripe. $100 pays image API + email. 1% buy = $495. Edge: buyers see finished ads before paying.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const codePoints = [...PLAN].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(`Plan is ${codePoints} code points, must be within 1-280.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, PLAN);
console.log(`Wrote plan (${codePoints} code points) to ${outputDir}/entry.txt`);
