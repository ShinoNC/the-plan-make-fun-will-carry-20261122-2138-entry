// Entry for the-plan-make-fun-will-carry-20261122-2138.
// A one-paragraph business plan an AI agent could actually run itself:
// sell ready-made AI ad creatives to small DTC brands that already run
// ads, so the buyer sees the finished work before paying a cent. The
// script below only writes that paragraph to entry.txt for the judge
// to read. Node 22, standard library only, no dependencies.
// Budget check: 500 brands x 3 images = 1,500 images ~$60 at ~$0.04
// per image, plus ~$30 for the email tool, ~= $90 total, inside the
// $100 budget. Plan verified at 278 Unicode code points (limit 280).
import { mkdirSync, writeFileSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const plan = "Sell AI ad creatives to DTC brands already running ads. Day 1: list 500 small brands in Meta Ad Library. Generate 3 ad variants each, email one free sample, sell the set for $99 via Stripe. $100 pays image API + email. 1% buy = $495. Edge: buyers see finished ads before paying.";

const codePoints = [...plan].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(`Plan is ${codePoints} code points, must be 1-280.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, plan);
console.log(`Wrote entry.txt (${codePoints} code points)`);
