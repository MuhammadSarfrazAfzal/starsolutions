# Conscellence — Business Consulting landing page (React)

Pixel-matched React + TypeScript build of the Figma "Home page / Desktop" frame (1440px)
from the *Conscellence – Business Consulting Website Template* community file.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

```
src/
  index.css               design tokens (Figma variables) + text styles
  App.tsx                 page composition
  components/
    ui.tsx / ui.css       EmailForm, OutlineButton (shared)
    Hero.tsx              header + hero + crystal
    Problems.tsx          "Are You Running Into These Problems?"
    Services.tsx          "What we can do for you?" + services list + free consultation
    About.tsx             "Our Approach"
    Testimonials.tsx      "Client Success Stories" (arrows/cards switch the highlighted card)
    Faq.tsx               FAQ accordion
    Contact.tsx           Contact us today + email form + details
    Footer.tsx
  assets/
    icons/                SVGs exported from Figma
    images/               hero background + crystal renders (shadows baked in)
```

## Notes

- Fonts: Unbounded, Montserrat, Poppins via @fontsource (self-hosted, no CDN).
- The Figma file uses the commercial "Angry" typeface for the 01/02/03 numbers,
  testimonial quote marks and the footer wordmark. Numbers fall back to Unbounded,
  the quote mark is a vector replica, and the footer wordmark reuses the logo SVG.
- Desktop (1440px) matches Figma; below 1100px / 900px / 560px the layout stacks
  responsively (the Figma mobile frame was not used as a pixel reference).
- `npm run build -- -c vite.singlefile.config.ts` produces one self-contained HTML file.
