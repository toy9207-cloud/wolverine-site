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
| `assets/images/gallery/01.jpg` … `09.jpg` | Gallery | square |
| `assets/images/wolverrine-og.jpg` | Social share card | 1200×630 |
| `assets/logos/mill-iron-livestock.png` | Header lockup | transparent PNG/SVG |
| `assets/logos/favicon.png` | Browser tab | 512×512 |

Export at roughly 2× the display size, then compress. Keep each file under
~400 KB.

## Brand colors

Three lines at the top of `css/style.css`:

```css
--ink:  #211E1A;   /* soft black, never pure #000 */
--gold: #C08B4A;   /* buckskin gold — his coat */
--gold-deep: #9A6B33;
```

The palette is pulled from the horse himself — buckskin gold and black points
on white — rather than from the logo's steel-and-black. That's what softens the
page without going pink. Swap these to the real Mill Iron values and everything
else follows.

## Before it goes live

Read **`docs/FACT-CHECK.md`**. Several figures on the page came from search
snippets because the primary sources were unreachable from the build
environment. They are flagged inline with `VERIFY:` comments:

```
grep -n "VERIFY:" index.html
```

Still outstanding: which season the fees apply to, the as-of date for the
$115,000 LTE, the 2026 Young Guns buckle result, the real 5-generation pedigree,
the Formspree form ID in `index.html`, and photographer permissions.

**Do not publish the three action photos in `docs/source-images/`.** They carry
a "LexiSmith Media — social media use only" watermark and are not licensed for
web use. They are held there unused and are not referenced by the site.
