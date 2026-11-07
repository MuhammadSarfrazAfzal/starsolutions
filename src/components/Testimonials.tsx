import { useState } from 'react'
import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import './Testimonials.css'

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
      'Star Solutions completely streamlined our multi-location retail checkout in the US with their custom POS system. Zero downtime, seamless inventory synchronization, and automated daily reconciliations saved our stores hundreds of hours.',
    author: 'David Reynolds, Operations Director, US iPhone & Tech Retail Chain',
  },
  {
    quote:
      'Their mobile app and web development team delivered an exceptional retail platform. Backed by their 15 years running their own business, they anticipate real retail bottlenecks and deliver software that actually scales.',
    author: 'Sarah Jenkins, Founder of RetailWave Solutions',
  },
  {
    quote:
      'From custom POS integrations to digital marketing campaigns, Star Solutions provided end-to-end expertise. Their team at Star Plaza Citi Housing Jhelum communicates proactively and delivers world-class results.',
    author: 'Malik Zeeshan, Enterprise Partner',
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
