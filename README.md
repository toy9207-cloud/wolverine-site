# Wolverrine — stallion site

Static one-pager for **Wolverrine** — 2020 buckskin stallion, 15.1 HH,
6-panel N/N, $115,000 LTE. The Goodbye Lane × Rosas Cantina CC. Owned by Mill
Iron Livestock (Del & Tyson Bieleny, Czar, Alberta). Standing at Solo Select
Horses, Gainesville, Texas — ICSI contracts open, frozen/cooled by waitlist.

No build step. Open `index.html` or serve the folder.

```
python3 -m http.server 8000
```

## Drop your photos here

Every image slot shows its own filename on the page until the file exists.
Match the name and it appears — no code changes needed.

| File | Slot | Crop |
|---|---|---|
| `assets/images/wolverrine-hero.jpg` | Hero | vertical, 5:6 |
| `assets/images/wolverrine-running.jpg` | The Horse | vertical, 4:5 |
| `assets/images/rosas-cantina-cc.jpg` | His Dam | vertical, 4:5 |
| `assets/images/the-goodbye-lane.jpg` | His Sire | vertical, 4:5 |
| `assets/images/mill-iron-ranch.jpg` | Owners | horizontal, 16:10 |
| `assets/images/gallery/01.jpg` … `09.jpg` | Gallery | square (01–04 filled) |
| `assets/images/wolverrine-og.jpg` | Social share card | 1200×630 |
| `assets/logos/mill-iron-livestock.png` | Header lockup | transparent PNG/SVG |
| `assets/logos/favicon.png` | Browser tab | 512×512 |

Export at roughly 2× the display size, then compress. Keep each file under
~400 KB.

## Brand colors

Sampled straight out of the stallion ad artwork — hue ~160 emerald and hue ~30
gold. Tokens live at the top of `css/style.css`:

```css
--em-900: #04231A;   /* near-black emerald: dark bands */
--em-700: #0B5240;
--jade:   #3C9B7C;
--gold-600: #A96F28;
--gold-300: #E3BB6B;  /* numerals on dark */
```

The page stays white; intensity comes from contrast, not from texture. Dark
emerald bands carry the nav, the stat strip, the dam section, the fee box and
the footer. Gold is reserved for numbers, eyebrows and the one call to action.
Display face is Bodoni Moda — high contrast and dramatic without the condensed
slab that reads macho. The skewed 28-degree accents under each eyebrow echo the
claw slash in the logo.

## Before it goes live

Read **`docs/FACT-CHECK.md`**. Several figures on the page came from search
snippets because the primary sources were unreachable from the build
environment. They are flagged inline with `VERIFY:` comments:

```
grep -n "VERIFY:" index.html
```

Still outstanding: the as-of date for the $115,000 LTE, the 2026 Young Guns
buckle result, a real conformation shot for the hero slot, alt text naming the
horse in gallery images 01–03, and the Formspree form ID in `index.html`.

2027 fees are live on the page: $2,000 USD ICSI, $3,500 frozen (waitlist).
