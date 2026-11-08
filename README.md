# Starsolutions — company website (React)

One-page website for **Starsolutions**, Jhelum: cold calling, software development,
Google & Facebook ads, TikTok Shop and eBay store management, backed by 15 years of
running our own iPhone store business in the USA.

Built on the Conscellence landing page template (React + TypeScript + Vite). The
template's colours, fonts, logo style and light look are kept; on top of it the site adds
a live 3D star, stacking service cards, a scroll-driven gallery, a process timeline,
scroll animations and WhatsApp click-to-chat.

## Contact details

- WhatsApp: +92 334 2221063 (https://wa.me/923342221063)
- Email: info@starsolutions.com
- Address: Near Opera Cinema (back side), Star Plaza, City Housing Society, Jhelum

All of them live in `src/site.ts`; every link on the page reads from there.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Structure

```
src/
  site.ts                 contact details, services, process, FAQ copy + link helpers
  index.css               design tokens (Figma variables) + text styles
  App.tsx                 page composition + scroll motion
  hooks/
    useScrollMotion.ts    Lenis smooth scroll + GSAP ScrollTrigger animations
    usePrefersReducedMotion.ts
  components/
    ui.tsx / ui.css       EmailForm, OutlineButton, Logo, floating WhatsApp button styles
    Icons.tsx             small inline icons (currentColor)
    Header.tsx            fixed header, mobile menu, reading progress bar
    Hero.tsx              hero copy, info pills, twinkling starfield
    Star3D.tsx            lazy loader, flat-star fallback, pause when off screen
    StarScene.tsx         three.js / react-three-fiber star with orbits (separate chunk)
    Marquee.tsx           two scroll-reactive strips of channels, each linking to its service card
    BrandIcons.tsx        single-colour platform glyphs (Simple Icons, CC0)
    Problems.tsx          problem -> fix cards, pinned sideways scroll on wide screens
    Media.tsx             responsive AVIF/WebP photos + lazy, muted looping videos
    Services.tsx          stacking service cards (real photo or video each) + free consultation
    Gallery.tsx           three photo/tile columns that move up and down with scroll
    About.tsx             "Our Story": 15-year counter, lessons, phone-retail photo
    WorkingWithUs.tsx     "Working With Us": without/with drag comparison + bento grid
    Process.tsx           four-step timeline whose line fills on scroll, photo backdrop
    Faq.tsx               FAQ accordion
    Contact.tsx           contact details + WhatsApp / email form
    Footer.tsx            link columns + outline wordmark
    WhatsAppButton.tsx    floating "Chat with us" button
  assets/
    icons/                SVG icons and the Starsolutions mark
    images/               hero background
    media/                stock photos and videos (sources + licence in MEDIA_CREDITS.md)
```

## Motion and 3D

- **Hero star**: a glossy blue star (the Starsolutions mark) rendered with three.js
  (`@react-three/fiber` + `@react-three/drei`), circled by two orbit rings with
  satellites inside a drifting starfield. It follows the pointer, sways, and turns as you
  scroll. The three.js chunk loads lazily after the page is idle; a flat SVG star shows
  until it is ready and stays if WebGL is unavailable. Rendering pauses off screen.
- **Scroll animations** (GSAP ScrollTrigger + Lenis): headline words rise in, the hero
  background, starfield and star move with scroll, service cards stack and dim as the
  next one slides over, gallery columns travel up and down, the story phone turns in 3D,
  the process line fills in, the 15-year counter counts up, the footer wordmark fills,
  and a progress bar runs along the header.
- **Hover**: cards tilt toward the pointer, nav links underline, and buttons, icons and
  tiles respond.
- **Reduced motion**: with `prefers-reduced-motion: reduce` there is no smooth scrolling,
  scroll animation, marquee or looping animation, and the 3D star renders as a still image.

## Forms

There is no backend. The hero form and the contact form (name, service, message) open a
WhatsApp chat with the message already filled in. The contact form's "Send by email"
button opens an email to info@starsolutions.com with the same message.

## Notes

- Fonts: Unbounded, Montserrat, Poppins via @fontsource (self-hosted, no CDN).
- Library versions are pinned exactly in `package.json`.
