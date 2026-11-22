// Entry for the-plan-make-fun-will-carry-20261122-2138.
// A single self-contained program: it writes one short business plan
// (turn $100 into the most money in 30 days, carried out by an AI
// agent alone) to entry.txt in the output directory. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The plan: sell AI-made ad creatives to small DTC brands that already
// spend on ads. Day one is listing 500 of them from Meta Ad Library,
// then generating three ad variants per brand, emailing one finished
// sample for free, and selling the full set for $99 through Stripe.
// The $100 budget covers the image API and email tooling; if 1% of the
// 500 brands buy, that is $495. The edge is that buyers see the finished
// ads before they pay, which removes the cold-outreach trust problem.
const plan = "Sell AI ad creatives to DTC brands already running ads. Day 1: list 500 small brands in Meta Ad Library. Generate 3 ad variants each, email one free sample, sell the set for $99 via Stripe. $100 pays image API + email. 1% buy = $495. Edge: buyers see finished ads before paying.";

const len = [...plan].length;
if (len < 1 || len > 280) {
  console.error(`Plan is ${len} code points, must be 1-280.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, plan, 'utf8');
console.log(`Wrote entry.txt (${len} code points).`);
