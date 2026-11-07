import { useState } from 'react'
import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import './Testimonials.css'

/** Closing quote glyph from the "Angry" typeface (48px, cap-trimmed), drawn as vector */
function QuoteMark() {
  return (
    <span className="testimonial__mark" aria-hidden>
      <svg width="16" height="9" viewBox="0 0 16 9" fill="currentColor">
        <path d="M2.6 0H7.6L5 9H0Z" />
        <path d="M10.6 0H15.6L13 9H8Z" />
      </svg>
    </span>
  )
}

const TESTIMONIALS = [
  {
    quote:
      'Working with Conscellence was a game-changer for us. Their market analysis and insights helped us navigate challenging market conditions and seize new opportunities. Thanks to their expertise, we achieved record-breaking sales last quarter.',
    author: 'Michael Thompson, Founder of EcoGreen Solutions',
  },
  {
    quote:
      "Conscellence transformed our business operations with their customized strategies. Their team identified key areas for improvement and provided actionable solutions that significantly boosted our efficiency and growth. We couldn't be happier with the results.",
    author: 'Emma Rodriguez, CEO of TrendTech Innovations',
  },
  {
    quote:
      'The leadership training and team-building programs provided by Conscellence have been invaluable. Our team is now more cohesive and motivated, and our leaders are better equipped to drive the company forward. Cons truly understands our needs and delivers exceptional results.',
    author: 'Lisa Nguyen, COO of HealthyBites Inc.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const count = TESTIMONIALS.length

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <h2 className="t-xl testimonials__title">
          <span className="text-outline">Client</span>
          <br />
          <span className="testimonials__solid">Success</span> <span className="text-outline">Stories</span>
        </h2>

        <div className="testimonials__cards">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.author}
              className={`testimonial ${i === active ? 'testimonial--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <blockquote className="testimonial__body">
                <QuoteMark />
                <p className="t-body-m">{t.quote}</p>
              </blockquote>
              <figcaption className="t-btn-s testimonial__author">{t.author}</figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonials__nav">
          <button type="button" aria-label="Previous testimonial" onClick={() => setActive((active - 1 + count) % count)}>
            <img src={arrowLeft} alt="" width={24} height={24} />
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % count)}>
            <img src={arrowRight} alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
