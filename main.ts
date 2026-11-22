// Entry for the-plan-make-fun-will-carry-20261122-2138.
// A one-paragraph business plan: sell finished AI ad creatives to small
// DTC brands that already advertise, letting buyers see the work before
// they pay. This script only writes that paragraph to entry.txt so the
// judge can read it. Node 22, standard library only, no dependencies.
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
