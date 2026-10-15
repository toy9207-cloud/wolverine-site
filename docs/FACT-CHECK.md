# Wolverrine site — fact check before publish

**Updated after the 2026 Wolverrine and Jaguarr stallion ads were supplied.**
The ads are owner-issued marketing and now take precedence over the search
snippets used in the first build. Several figures changed materially.

Grep the HTML for `VERIFY:` to find open items in place.

## Corrected from the ads (first build was wrong)

| Field | First build said | Ad says — now on site |
|---|---|---|
| Wolverrine's own earnings | not shown | **$115,000 LTE** |
| Height / genetics | not shown | **15.1 HH, 6-panel N/N** |
| Sire progeny earnings | $18M+ | **$19 million** |
| Dam LTE | $677,168 | **$734,000** |
| Breeding method | "ICSI only" | **ICSI open; frozen/cooled by waitlist** |
| Fee | $1,500 + $700 chute | **ICSI stud fee $2,000 USD; breed fee $3,500** |
| Incentives | placeholder | Ruby Buckle, Royal Crown, Royal Crown Canada, Young Guns League, Breeders Challenge, Tomorrow's Legends, Gold Rush |
| Owner name order | Tyson & Del | **Del & Tyson Bieleny** |
| Mill Iron contact | placeholder | (780) 385-4060 · millironlivestock@gmail.com |
| Solo Select contact | none | (903) 436-6615 · stallions@soloselect.com |
| Nittyy Grittyy LTE | $67,000+ | **$72,997** |

Jaguarr detail now on the site, all from his 2026 ad: 15 HH, 6-panel N/N,
AQHA/APHA, ICSI stud fee $1,500 USD, first limited foal crop $156,000 in its
five-year-old year. Nittyy Grittyy $72,997 (Wade & Jennifer Harris, 2024 BFA
Futurity Champion, 2025 Diamond Classic Reserve Champion); Im On Firre $37,950
(Storm Rider LLC); Wyldcat $17,319 (Mill Iron Livestock).

## Still open — resolve before publish

1. **As-of date for the $115,000 LTE.** Earnings figures go stale; date it.
2. **The 2026 Young Guns League buckle** now in the gallery — which horse won
   it, in what class, for how much? Currently a placeholder row in the record.
4. **Jaguarr's status.** An earlier source implied he has died; his own 2026 ad
   does not say so and the site now uses present tense. Confirm.
5. **Rosa's current ownership.** Sources conflict (bred/owned by Alan Woodbury,
   long campaigned by Lisa Lockhart, reported under new ownership for 2026). The
   site makes no present-tense ownership claim. Keep it that way until confirmed.
6. **Does Mill Iron own Solo Select?** One snippet implied the Bielenys own Solo
   Select. Mill Iron is in Czar, Alberta; Solo Select is in Gainesville, Texas.
   Probably a search-engine conflation. Confirm the real relationship.
7. **The pull quote in "The Horse" is unattributed house copy.** Replace with a
   real quote from Del or Tyson Bieleny, or delete it. Do not publish an
   invented quote.
8. Formspree form ID in `index.html` is still a placeholder; the mailto fallback
   now points at millironlivestock@gmail.com.

## Resolved

- **2027 fees confirmed by the client:** $2,000 USD ICSI, $3,500 frozen. Now on
  the site, labelled 2027.
- **Pedigree is real.** Three generations, sourced by search since every
  pedigree database is blocked from this environment:
  The Goodbye Lane (Lanes Leinster × Swift Goodbye) over Rosas Cantina CC
  (Corona Cartel × Dash Ta Vanila). Lanes Leinster is by Leinster House (TB) out
  of Lanes Star Miss; Swift Goodbye is by Dash Ta Fame out of Fiesta On The Fly;
  Corona Cartel is by Holland Ease out of Corona Chick; Dash Ta Vanila is a 2005
  palomino by Dash Ta Fame out of SX Frenchmans Vanila. Spot-check the two
  fourth-dam names against the papers.
- **Action photos cleared by the client** and placed in the gallery.

## Photo notes

The LexiSmith Media watermark on gallery images 01–03 reads "SOCIAL MEDIA USE
ONLY" and is legible at full size on the page. Rights are cleared, but the
visible stamp still reads as unlicensed to anyone who looks. Ask LexiSmith for
clean web-res files, or crop below the watermark.

Images 01–03 show a dark-coated horse and Wolverrine is a buckskin, so their alt
text does not name him. Identify the horse and rider and the alt text can be
filled in — it is the one SEO hole left in the gallery.

Images of Rosa or The Goodbye Lane still need permission from their
photographers.

## Pending: Solo Select Stallion Incentive

Copy is written and held, not published. The patch is in
`docs/pending/solo-select-incentive.patch` — `git apply` it once both questions
below are answered.

It splits the incentive block into "Barrel incentives" (the existing eight) and
"Roping incentive," and adds a paragraph arguing the roping nomination as a
second market for a barrel-bred colt rather than another line in a list.

Two things gate it:

1. **Is he actually nominated?** The last word on record is the owners' text
   saying they were interested and wanted a contract to read. That is interest,
   not enrollment. Solo's public incentive stallion list does not show him, but
   that list dates to 2025 and proves nothing either way. Every stallion on it is
   a rope or cow horse sire, which is reason to confirm rather than assume.
2. **Exact program name.** Solo's own announcement calls it the Solo Select
   Stallion Incentive. The Team Roping Journal headline calls it the Solo
   Stallion Incentive. The patch uses Solo's version.

This is an eligibility claim mare owners spend money against. It does not go on
the site, the stallion ad or the social graphics until someone at Solo Select or
Mill Iron confirms it in writing.
