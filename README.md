# 石と鉄 STONE and IRON – static website

The https://stoneandiron.jp site rebuilt from WordPress (Elementor) in **Astro** with **Sass**.
The build produces plain static HTML/CSS/JS plus one small PHP script for the
contact form, so it runs on any ordinary PHP hosting (Apache).

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321  (the form's PHP won't run here)
npm run build      # outputs the deployable site to dist/
```

To test the contact form locally you need PHP installed:

```bash
npm run build
npm run preview:php   # serves dist/ with PHP at http://localhost:8080
```

## Deploying

1. `npm run build`
2. Upload the **contents** of `dist/` to the web root (include the hidden `.htaccess` files).
3. **Edit `api/config.php`** and set `recipient` to the inbox that should receive
   enquiries — it is a placeholder (`CHANGE-ME@stoneandiron.jp`) because the
   original site doesn't publish an email address.

Needs PHP 7.4+ with `mail()` enabled. `from_email` in `config.php` should use the
website's own domain, or mail may be rejected or marked as spam.

## Pages

| URL | File | Notes |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Full-screen slideshow (desktop + phone image sets) |
| `/about-us/` | `src/pages/about-us.astro` | |
| `/stay/` | `src/pages/stay.astro` | Background video, carousel, gallery + lightbox, FAQ popup |
| `/cafe-bar/` | `src/pages/cafe-bar.astro` | Dark theme, FAQ popup |
| `/days/` | `src/pages/days.astro` | Timeline |
| `/event/` | `src/pages/event/index.astro` | Lists every event in `src/content/events/` |
| `/event/<name>/` | `src/pages/event/[slug].astro` | One page per event file |
| `/access/` | `src/pages/access.astro` | |
| `/contact/` | `src/pages/contact.astro` | PHP form |
| `/doumin-plan/` | `src/pages/doumin-plan.md` | Markdown page (expired 2022 campaign) |

## Project structure

```
public/                    Copied to dist/ as-is
  .htaccess                Apache: 404 page, redirects from old URLs, caching
  api/contact.php          Contact form handler (validation, spam checks, email)
  api/config.php           Form settings: recipient, subject, redirects
  images/                  All images, grouped by page
  video/stay-intro.mp4     Background video on the Stay page
src/
  data/                    ALL PAGE CONTENT – edit text here without touching markup
    site.ts                Name, address, links, menu, Access block, spots, FAQ
    home.ts / about.ts / stay.ts / cafe.ts / days.ts
  content/events/          One Markdown file per event (newest is shown as "Current Event")
  pages/                   One file per URL
  layouts/                 BaseLayout (head, header, footer), ArticleLayout (Markdown pages)
  components/
    layout/                SiteHeader (menu panel), SiteFooter
    ui/                    Section, SectionLabel, ArrowLink, Button, ImageBand,
                           Carousel, Gallery, Accordion, Lines
    cards/                 EventCard, AmenityGrid
    sections/              HeroSlideshow, IntroBlock, AccessSection, RecommendSlider,
                           CurrentEvent, FaqDialog, ContactForm
  scripts/                 Scroll reveal, contact form
  styles/
    abstracts/             Design tokens (_variables.scss) + text-style mixins
    base/ layout/ utilities/
    global.scss            Entry point, imported once by BaseLayout
```

## Common tasks

| I want to… | Edit |
| --- | --- |
| Change text on a page | the matching file in `src/data/` |
| Add an event | add a `.md` file to `src/content/events/` (copy the existing one) |
| Change opening hours | `serviceTimes` in `src/data/cafe.ts` |
| Change the FAQ popup | `faq` in `src/data/site.ts` |
| Change the menu | `mainNav` in `src/data/site.ts` |
| Add/remove carousel photos | put files in `public/images/...` and update the list in the data file |
| Show the EN language switch | set `links.english` in `src/data/site.ts` |
| Hide the expired campaign button | `campaign.show = false` in `src/data/stay.ts` |
| Change colours / fonts | `src/styles/abstracts/_variables.scss` |
| Change where form emails go | `public/api/config.php` (or `dist/api/config.php` on the server) |

## Styling conventions

- **BEM class names**: `.block`, `.block__element`, `.block--modifier`.
- **Styles live with their component** in a scoped `<style lang="scss">` block.
- **Text styles are defined once** as mixins in `src/styles/abstracts/_mixins.scss`,
  measured from the original: `text-label` ("Us :", Crimson Pro), `text-headline`
  (spaced Crimson Text), `text-body` (Noto Serif JP, airy line height), etc.
- **Fonts**: Crimson Pro (labels), Crimson Text (headlines, links), Noto Serif JP (Japanese text).
- **Colours**: black on white; on Café Bar gold `#bf9959` on night `#0e1823`
  (`theme="dark"` on BaseLayout). Hover colour everywhere is gold.
- **Tokens are available everywhere** via `astro.config.mjs`; partials in
  `src/styles/` import them with `@use '../abstracts' as *;`.
- **Styling a child component** from a parent: `.parent :global(.child-class) { … }`.
- **Mobile first**: `@include mq(md)` / `mq(lg)` (breakpoints match Elementor: 768 / 1025).

## Animations (replicating the original)

- Scroll reveal: `data-reveal="fade-slow"` (Elementor fadeIn), `"zoom"` (zoomIn),
  `"up"`, `"fade"`… with optional `style="--reveal-delay: 200ms"`.
- Home slideshow: crossfade + slow Ken Burns zoom, ~6 s per slide (`interval` in `src/data/home.ts`).
- Carousels: autoplay every 5 s, arrows, dots, swipe; pause on hover.
- Photo bands: fixed-background parallax on desktop.
- Menu panel slides down; FAQ popup and gallery lightbox fade in.
- Motion is reduced automatically for visitors who prefer reduced motion.

## Migration notes

- **English version not rebuilt.** The original has a separate English copy
  (`/en/`, `/*_english-ver/`). The EN switch is hidden (`links.english = null`),
  and `.htaccess` temporarily redirects those URLs to the Japanese pages.
- **Contact email unknown** — set `recipient` in `public/api/config.php` before launch.
  The original used Google reCAPTCHA; this version uses a honeypot, a minimum
  fill time and a per-session limit instead (no third-party script).
- **Instagram feed** (Café Bar) was a live plugin feed; it's replaced by a
  "follow on Instagram" link, since a static site can't pull live posts.
- **Login page** (`/log-in/`, linked as "LOG IN" on Stay) was a WordPress member
  login and isn't part of a static site; the link was removed.
- **Outdated content kept as-is:** the どうみん割プラン campaign ended in March 2022
  (page + yellow button kept, easy to hide), and the only event is from November 2020.
- **Footer legal items** (利用規約・宿泊約款 etc.) were plain text with no pages on
  the original; still plain text.
- **URL changes** (301 redirects in `.htaccess`): `/elementor-588/` → `/event/tengu-cafe-2020/`,
  `/どうみん割プラン/` → `/doumin-plan/`, `/?page_id=90` → `/cafe-bar/`.
- **Slideshow timing**: the original's Swiper settings (1 s + Ken Burns) produced
  roughly 9–10 s per slide in practice; this version uses 6 s — adjust `interval`.
- Some photos are large (up to 1.7 MB, e.g. `public/images/plan/stairs.jpg`);
  compressing them would speed up page loads.
