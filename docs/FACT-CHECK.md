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

Mostly resolved by the 2026 studio and pen photography (see below). Gallery 01,
02 and 03 are now clean professional frames. Gallery 04 still carries the
LexiSmith Media "SOCIAL MEDIA USE ONLY" stamp, legible at full size. Rights are
cleared and the caption credits LexiSmith, but the visible stamp still reads as
unlicensed to anyone who looks. Ask LexiSmith for a clean web-res file, or crop
below the watermark.

The old note here doubted whether the dark-coated horse in those frames was
Wolverrine, a buckskin. The 2026 photographs settle it: he photographs as a dark
smoky buckskin with a small star, and the tooled halter in the studio frames
reads WOLVERRINE.

Images of Rosa or The Goodbye Lane still need permission from their
photographers.


## Solo Select Roping Incentive — confirmed

Confirmed by Chelsea as Wolverrine's stallion manager on Oct. 15, 2026. He is
nominated. The site lists it under "Roping incentive" and argues it in the
nominations copy as a second market for a barrel-bred colt.

Named the Solo Select Roping Incentive, per the stallion manager. Solo's own
2025 announcement post used "Solo Select Stallion Incentive" when the program was
roping-only; it has since expanded to cutting and reined cow horse, so the roping
arm carries its own name. If Solo's published materials disagree, theirs wins —
but the claim itself is confirmed.

The $580,000 payout figure is from Solo Select's first roping futurities as
reported in trade coverage. Swap in Solo's own current number when they publish
one.


## Earnings — $137,590 as of October 2026

Confirmed by the stallion manager Oct. 20, 2026.

| Event | Amount |
|---|---|
| March Into Spring Fling Futurity (2025) | $7,362 |
| Young Guns League Derby (2026) | $16,400 |
| Pink Buckle, open (2026) | $6,190 |
| **Lifetime** | **$137,590** |

The $6,190 is derived, not quoted: the stallion manager gave $22,590 as the
Young Guns and Pink Buckle open combined, and $16,400 was already on record for
the derby. If Solo Select or EquiStat publishes the Pink Buckle open figure on
its own, check it against this before the next update.

The figure now carries an as-of date in the body copy, the record and the hero
meta line, because it moved twice during the build. The share card at
`assets/images/wolverrine-og.jpg` carries the number as pixels and was patched
in place to match — it is not regenerated from a script, so any future change
has to be made to the image too, or the share preview will disagree with the
page.


## Photo aspect ratios

Two images were being cropped by their containers. A crop audit over the
rendered page (compare each image's natural aspect to its box's, under
`object-fit: cover`) caught both:

| File | Source | Was | Lost | Now |
|---|---|---|---|---|
| `jaguarr.jpg` | 492x1000 portrait | 4:3 box | 63% | 4:5, anchored top |
| `wolverrine-conformation.jpg` | 1800x1667 | 16:10 box | 33% | 3:2, `object-position: center 80%` |

Jaguarr's frame is a tall crop off his stallion ad and will not survive a
landscape box. Anchoring to the top takes the remaining crop off his chest
instead of his head, and the Owners split is now sized to the picture (320px)
so the shorter text beside it does not leave a gap.

The conformation shot still loses 28%, but all of it is sky — the horse is
framed ears to feet with even margins. This is the one photo whose job is the
whole horse, so it should never be cropped to a wide band again.

Run the audit after any layout change that moves a photo between slots.


## 2026 photography

Five professional frames pulled from the client's Drive folder on Oct. 30, 2026.
Originals are in `assets/source/2026-drive/` at full resolution; the web
derivatives are built from them, so a slot can be recropped without going back
to Drive.

| Source | Pixels | Where it runs now |
|---|---|---|
| `wolverrine-23.jpg` | 4384x3221 | Hero band |
| `wolverine_2024-4.jpg` | 5355x7140 | Conformation figure, gallery 01 |
| `wolverine_2024-7.jpg` | 5464x7285 | Gallery 02 |
| `wolverrine-2.jpg` | 3392x5088 | Gallery 03 |
| `wolverine_2024-5.jpg` | 7285x5464 | unused — landscape head and neck |

The hero band is anchored at 12% from the top: the band is 1.88 wide against a
1.36 source, and a centred crop takes his ears off.

The conformation figure is the big win. It replaces a pasture snapshot that was
losing 28% of its height to a wide box, with a studio frame that is natively 3:4
— so the 4:5 slot crops almost nothing and he is framed ears to feet.

`RWM_1833.JPG` in the same folder is 16 MB and over the Drive API download
limit, so it has not been seen. If it is the photographer's master of one of
these, it is the one to use for print.

Photographer is still unidentified for all five. Credit before any of these are
used in an ad.


## Ground-handling photography, Oct. 29, 2026

Four frames from the client's own shoot, supplied through chat at 2000x1333
(3:2). Originals are in `assets/source/2026-ground/`. These are chat-downscaled,
not camera masters — the full-resolution files are in a local folder on her Mac,
`38 Mill Iron Wolverrine/New Wolverrine`, named MCS_4365 through MCS_5180. That
folder is not synced to Drive. Get the masters before any of these is used in
print or a full-bleed hero.

| File | Where it runs |
|---|---|
| `ground-23.jpg` | The Horse — ground band under the disposition copy |
| `ground-21.jpg` | Gallery 07 |
| `ground-22.jpg` | Gallery 08 |
| `ground-24.jpg` | Gallery 09 |

Two things are deliberately not claimed: the handler is not named, and no
photographer is credited. Neither was supplied. The caption and alt text
describe what is in the frame and nothing more. There is a TODO in the markup.

The halter in these frames carries a Solo Select Horses plate. That is not used
to assert where the photographs were taken.

Placement rationale: the brief from the start was to soften a deliberately
masculine logo because he is a girl's horse, and the copy in The Horse argues
that his disposition is the half of him an earnings line cannot show. Nothing on
the site demonstrated that until now. A stallion standing square on a slack lead
is the evidence for the paragraph it sits under.
