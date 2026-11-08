import arrowDownRight from '../assets/icons/arrow-down-right-dark-80.svg'
import { STORY_LESSONS } from '../site'
import { Photo } from './Media'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__title" data-reveal>
          <div className="about__title-row">
            <h2 className="t-xl">Our</h2>
            <img src={arrowDownRight} alt="" width={80} height={80} />
          </div>
          <h2 className="t-xl">Story</h2>
        </div>

        <div className="about__text">
          <div className="about__stat" data-reveal>
            <span className="about__stat-num">
              <span data-counter="15">15</span>+
            </span>
            <span className="t-h5 about__stat-label">
              years running our own
              <br />
              iPhone store business in the USA
            </span>
          </div>
          <p className="t-sub1" data-reveal>
            Before Starsolutions offered a single service, we were a retailer. For 15 years our own iPhone store
            business has served customers across the USA: sourcing stock, listing products, running ads and looking
            after buyers every single day.{' '}
            <span className="about__text-strong">
              Today our team in Jhelum brings that hands-on experience to your business.
            </span>
          </p>
          <ul className="about__lessons" data-stagger>
            {STORY_LESSONS.map((l) => (
              <li key={l.title} data-tilt>
                <h3 className="t-h4">{l.title}</h3>
                <p className="t-body-m">{l.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Phone-retail photo: turns in 3D as the section scrolls, circled by orbit rings */}
        <div className="about__visual" aria-hidden>
          <div className="about__ring" data-story-ring />
          <div className="about__ring about__ring--inner" />
          <div className="about__phone" data-story-phone>
            <Photo name="story-phone" sizes="(max-width: 560px) 220px, 300px" />
          </div>
          <div className="about__badge about__badge--usa">
            <b>USA</b>
            <span>iPhone retail</span>
          </div>
          <div className="about__badge about__badge--pk">
            <b>Jhelum</b>
            <span>Starsolutions HQ</span>
          </div>
        </div>
      </div>
    </section>
  )
}
