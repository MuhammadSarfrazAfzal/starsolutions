import { Fragment } from 'react'
import heroBg from '../assets/images/hero-bg.jpg'
import Star3D from './Star3D'
import { EmailForm } from './ui'
import './Hero.css'

/** Headline split into words so they can rise in one by one; the first line keeps the blue accent */
const HEADLINE = [
  { words: ['Grow', 'Your', 'Business'], accent: true },
  { words: ['with', 'Starsolutions'], accent: false },
]

const PILLS = ['15 years of US e-commerce', '5 growth services', 'Jhelum, Pakistan · remote-friendly']

/** Twinkling background stars, placed by a fixed seed so every render matches */
const STARS = Array.from({ length: 46 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1
  return { left: r(1) * 100, top: r(2) * 100, size: 2 + r(3) * 3, delay: r(4) * 4, blue: r(5) > 0.45 }
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden>
        <img src={heroBg} alt="" data-parallax-bg />
        <div className="hero__stars" data-hero-stars>
          {STARS.map((s, i) => (
            <span
              key={i}
              className={s.blue ? 'is-blue' : ''}
              style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        </div>
      </div>

      <div className="hero__content" data-hero-content>
        <div className="hero__heading">
          <p className="t-btn-s hero__eyebrow" data-hero-intro>
            Sales · Software · Ads · Marketplaces
          </p>
          <h1 className="t-h1">
            {HEADLINE.map((line, li) => (
              <Fragment key={li}>
                <span className={line.accent ? 'hero__accent' : undefined}>
                  {line.words.map((w) => (
                    <Fragment key={w}>
                      <span className="hero__mask">
                        <span className="hero__word">{w}</span>
                      </span>{' '}
                    </Fragment>
                  ))}
                </span>
                {li === 0 && <br />}
              </Fragment>
            ))}
          </h1>
          <p className="t-sub1 hero__sub" data-hero-intro>
            Cold calling, software development, Google &amp; Facebook ads, TikTok Shop and eBay store management,
            backed by 15 years of running our own iPhone store business in the USA.
          </p>
        </div>
        <div className="hero__form" data-hero-intro>
          <EmailForm />
        </div>
        <ul className="hero__pills" data-hero-intro>
          {PILLS.map((p) => (
            <li key={p} className="t-body-xs">
              {p}
            </li>
          ))}
        </ul>
      </div>

      <Star3D />

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span />
      </a>
    </section>
  )
}
