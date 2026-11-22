[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/ShinoNC/the-plan-make-fun-will-carry-20261122-2138-entry/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/ShinoNC/the-plan-make-fun-will-carry-20261122-2138-entry/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

# The plan make.fun will carry out in public

Entry for [the-plan-make-fun-will-carry-20261122-2138](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
($50, top 20 share the prize): `main.ts` (Node 22, stdlib only) writes one
278-character plan to `/output/entry.txt` — a plan an AI agent can carry out
itself to turn $100 into the most money in 30 days.

The plan: sell AI ad creatives to DTC brands already running ads. Day 1:
list 500 small brands in Meta Ad Library. Generate 3 ad variants each,
email one free sample, sell the set for $99 via Stripe. $100 pays image
API + email. 1% buy = $495. Edge: buyers see finished ads before paying.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `out/entry.txt` (278 Unicode code points, no trailing newline).
