# Odonis Odonis — Website

Static site for the self-titled album era (After Hours, in partnership with Royal Mountain Records). Plain HTML/CSS/JS — no build step, host anywhere (Vercel, Netlify, GitHub Pages, or any static host). Black & white, Century Gothic (falls back to Poppins where Century Gothic isn't installed).

## Structure

```
index.html      Home
music.html      Tracklist, streaming links, Bandcamp player, latest singles, ICON EP, discography
shows.html      Live Bandsintown widget + fallback link
about.html      Constantin Tzenos / Odonis Odonis bio, discography, cross-link to After Hours
contact.html    Booking (regional agents) / press contact form
press.html      Still on disk but unlinked from nav/sitemap — see "Press page" below
css/style.css   All styling (single stylesheet, CSS variables)
js/main.js      Mobile nav toggle
js/pixels.js    Meta / Google / TikTok tracking pixel infrastructure
robots.txt      Crawler rules, incl. AI crawlers (GPTBot, ClaudeBot, etc.)
sitemap.xml     Page list for search engines (5 pages — press.html excluded)
llms.txt        Plain-language summary for AI assistants/crawlers
assets/images/logo-mark-white.svg   Ring logo, white linework, transparent bg — used in the header on every page and as a large faded accent behind the hero on Home
assets/images/logo-mark-black.svg   Same mark in black, for light backgrounds / print / merch
favicon.svg, favicon.ico, favicon-16.png, favicon-32.png, apple-touch-icon.png, icon-512.png   Favicon set generated from the logo mark
```

## Logo

The new ring mark you sent was vectorized (traced from the source photo into clean SVG paths, background removed) rather than redrawn from scratch, so it stays faithful to the original — including the fine tick-mark linework, not just the rough outline. Two versions live in `assets/images/`:

- `logo-mark-white.svg` — white lines, transparent background. Used in the header (`.logo-mark`, 34×34px next to the wordmark) on all six pages, and as a large, faint (14% opacity) decorative layer behind the hero headline on `index.html`.
- `logo-mark-black.svg` — black lines, transparent background, for anywhere the site background isn't black (merch mockups, print, a future light section).

Favicons were generated from the same mark: `favicon.svg` (modern browsers), `favicon.ico` + PNG fallbacks (legacy/other), and a black-background `apple-touch-icon.png` / `icon-512.png` for home-screen bookmarks and PWA-style icons.

Both SVGs are single-color path traces — if you want to recolor the mark (e.g. to match a future palette), it's a find-and-replace of the `fill="#ffffff"` / `fill="#000000"` attribute inside the file, or wrap the paths in a `<g fill="currentColor">` and control color from CSS.

## Press page

Removed from the nav on all pages and from `sitemap.xml` per your note that you don't need it right now. The file itself (`press.html`) is still sitting in the folder with real quotes/fact sheet/booking info, in case you want it back — just add the nav link back in and re-add it to the sitemap. Nothing was deleted.

## What's real vs. placeholder

**Confirmed and already live in the site:**
- Full 9-track list for the self-titled LP (The Same, Hijacked, Come Alive, Work It Out, Consumed, Hunter, Distraction, We Are Gods, Bliss)
- Release date (Nov 14, 2025), label (After Hours, in partnership with Royal Mountain Records), vinyl details (Black Ice, /500)
- Two newer singles with cover art and full platform links: "Hijacked (88 Remix)" and "Yeah Whatever (Reinterpreted)" feat. DJ Dwight Hybrid — Spotify, Apple Music, Bandcamp, YouTube, Deezer, Tidal, plus the smart links you sent (`tr.ee/D2XqgW9JH4`, `hypeddit.com/rbvyra`)
- Album smart link (stream/buy everywhere): `royalmountain.lnk.to/odonis-odonis-hijacked` — used as the primary hero CTA and in Music/footer
- Working Bandcamp embed player and Bandcamp link
- Full back catalog on `music.html`, each with real cover art and a Bandcamp link: Spectrums (2021), Reaction EP (2019, opens with "Collector"), No Pop (2017), Post Plague (2016, Polaris Music Prize longlist — corrected from an earlier draft that had the wrong year and called it a "nomination"), Hard Boiled Soft Boiled (2014), Hollandaze (2011) — six full-length albums total including the 2025 self-titled LP, matching your bio's count (Reaction and ICON are EPs, not counted in that six)
- Real official YouTube embeds for "Hijacked," "Come Alive," and "Work It Out" in the Videos section on `music.html` (previously placeholders)
- ICON EP (2023) featured prominently at the top of the discography, with a "Rights Reclaimed" callout — six collaborations (A Place To Bury Strangers, TOBACCO, Terror Bird, ACTORS, SUUNS, Patriarchy), cover art, and a Bandcamp link
- New About page bio — your Constantin Tzenos producer/DJ copy, verbatim
- Real social links: Instagram (instagram.com/odonisodonis), Spotify artist page, Linktree
- Live Bandsintown widget on `shows.html` (pulls dates automatically — no manual updates needed as tour dates get booked), plus a fallback link to the Bandsintown page
- Booking contacts: Europe — Heinz, Row Zero Agency (Heinz@rowzero.agency); US — Jack, Rocky Road Touring (jack@rockyroadtouring.com) — on `contact.html`
- Cross-links to both After Hours sites — the label (afterhoursrecords.ca) and the studio (afterhoursstudio.ca) — in the header, footer, Contact, and About pages (see "Cross-link to After Hours" below for which link goes where)
- ICON EP now has a full "Listen Everywhere" row on Music (Hypeddit smart link, Bandcamp, Spotify, Apple Music, YouTube, Deezer, Tidal), alongside its existing "Rights Reclaimed" callout
- Cover art throughout (album, singles, back catalog, ICON EP) is **hotlinked directly from Bandcamp's CDN** (`f4.bcbits.com`) and Hypeddit's asset host (`hypeddit-gates-prod.s3.amazonaws.com`). This works today but is fragile long-term (paths could change). Once you have final hi-res art files, download them, drop them in `assets/images/`, and swap the relevant `<img src="...">` references to local paths.

**Marked `[PLACEHOLDER]` — swap in when ready:**
- Band/live press photos (`.placeholder-photo` block on `about.html`)
- Apple Music link for the full LP specifically (not yet confirmed — the two new singles' Apple Music links are already live)
- Press email address on `contact.html` (booking is now real — see above)
- Mailing list signup in the footer (built and styled, points at a placeholder Mailchimp audience — see "Mailing list" below to connect a real one)

Search any file for `PLACEHOLDER` to find every spot that still needs real content.

## Shows page (Bandsintown)

`shows.html` embeds the official Bandsintown widget, now pinned to your exact artist ID (`data-artist-name="id_1815155"`, matching bandsintown.com/a/1815155-odonis-odonis) rather than matching by name, which is more reliable. Styled black-on-white to match the site.

**Why no dates show yet:** the widget only displays what's actually on your Bandsintown artist page — it doesn't have its own show data. As of this build, Bandsintown has no upcoming Odonis Odonis dates listed. To get dates showing:

1. Log into [artists.bandsintown.com](https://artists.bandsintown.com) (claim the page at bandsintown.com/a/1815155-odonis-odonis if you haven't already).
2. Add shows manually there, or connect an integration (Songkick, Ticketmaster, Dice, etc.) to auto-sync tour dates.
3. Once a show is live on Bandsintown, it shows up on `shows.html` automatically — no code changes needed here.

If you'd rather hand-list dates instead of relying on Bandsintown at all, there's a commented fallback block in the file showing the same row markup used in earlier drafts.

## Mailing list (Mailchimp)

A "Join the List" signup now sits in the shared footer on every page, so it's always visible no matter what page someone lands on. It's built on **Mailchimp's free plan** (up to 500 contacts, no credit card required) — the simplest option for a static site because the embedded form posts straight to Mailchimp with plain HTML, no JavaScript SDK or API key exposed in the page.

**To activate it:**

1. Create a free account at [mailchimp.com](https://mailchimp.com) if you don't have one, and create an Audience (their term for a mailing list).
2. In Mailchimp: Audience → Signup forms → Embedded forms → grab the **Classic** form. It gives you an `action` URL that looks like `https://xxxx.usN.list-manage.com/subscribe/post?u=XXXXXXXX&id=YYYYYYYY`, plus a hidden anti-bot field named `b_XXXXXXXX_YYYYYYYY`.
3. Open each of the six HTML files and find the `<form class="newsletter-form" ...>` block in the footer (search for `MAILCHIMP_USER_ID`). Replace:
   - `MAILCHIMP_USER_ID` → the `u=` value from your form action
   - `MAILCHIMP_LIST_ID` → the `id=` value from your form action
   - `usTODO` in the action URL → your actual data center (the `usN` part, e.g. `us21`)
   - The hidden `name="b_MAILCHIMP_USER_ID_MAILCHIMP_LIST_ID"` field → `b_` followed by your real `u` and `id` values, matching Mailchimp's exact hidden field name (this is required — it's Mailchimp's honeypot spam trap, not decorative)
4. Delete the `<span class="newsletter-note">[ PLACEHOLDER ... ]</span>` line in each file once it's wired up.
5. Submissions open in a new tab to Mailchimp's hosted "thanks for subscribing" page (`target="_blank"`) — you can customize that confirmation page's look inside Mailchimp.

The form's `onsubmit` already fires a `Subscribe` conversion event through `window.trackConversion()` (see Tracking pixels below), so once your pixels are live, list signups get counted as conversions automatically.

If you'd rather use a different provider (Kit/ConvertKit, Klaviyo, Buttondown, etc.), just swap the `action` URL and field `name` attributes to match that provider's embed form — the surrounding markup and styling stay the same.

## Tracking pixels

All three pixels live in `js/pixels.js`, loaded on every page. To activate:

1. Open `js/pixels.js`.
2. Replace the four `REPLACE_WITH_...` constants at the top with your real IDs:
   - `META_PIXEL_ID` — from Meta Events Manager
   - `GA4_MEASUREMENT_ID` — from Google Analytics (starts with `G-`)
   - `GOOGLE_ADS_ID` — optional, from Google Ads (starts with `AW-`)
   - `TIKTOK_PIXEL_ID` — from TikTok Events Manager
3. Each pixel no-ops until its ID is filled in, so it's safe to deploy now and turn platforms on one at a time.
4. If you serve EU/UK/CA traffic, wire `CONSENT_GRANTED` to a real cookie-consent banner before setting it to `true` by default — those regions require opt-in before pixels fire.
5. A `window.trackConversion(eventName, params)` helper is exposed for firing custom events (already wired into the contact form as a `Lead` event) — reuse it for ticket/merch clicks once those links are live.

## SEO / AI-crawler setup already in place

- Per-page `<title>`, meta description, canonical URL, Open Graph, and Twitter Card tags
- `MusicGroup` / `MusicAlbum` JSON-LD structured data on Home, Music, and About, with `recordLabel` listing both After Hours and Royal Mountain Records
- `robots.txt` explicitly allows major AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot)
- `llms.txt` — a plain-language fact sheet for AI assistants, at the site root
- `sitemap.xml` listing the five live pages
- Semantic HTML5 (single `h1` per page, proper heading hierarchy, `<nav>`/`<main>`/`<footer>`)

Before launch: update every `https://www.odonisodonis.com/` reference (canonical tags, OG tags, JSON-LD, sitemap, llms.txt) if the final domain differs.

## Label framing: After Hours + Royal Mountain

After Hours is presented as the primary label everywhere (hero, fact sheet, footer, JSON-LD), with Royal Mountain Records listed as the partner/distributing label right alongside it — not removed, just secondary.

## Cross-link to After Hours

There are two separate After Hours sites now, and the site links to each in the right context:

- **`https://www.afterhoursrecords.ca`** — After Hours Records, the label. Used everywhere "Label" is the frame: the footer "Label" column, the Contact page's "Label:" line, the About page card, and as the `url` on the `recordLabel` JSON-LD entries.
- **`https://afterhoursstudio.ca`** — After Hours Studio, Constantin's production/scoring/mastering studio. Used everywhere "Studio" is the frame: the header pill ("After Hours Studio ↗"), the Contact page's "Studio inquiries" line, and one of the two buttons on the About page card.

If either site later wants a reciprocal link back to this one, point it at whatever domain this site ends up on.
