import crystal from '../assets/images/crystal-approach.png'
import arrowDownRight from '../assets/icons/arrow-down-right-dark-80.svg'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__title">
          <div className="about__title-row">
            <h2 className="t-xl">Our</h2>
            <img src={arrowDownRight} alt="" width={80} height={80} className="about__arrow-icon" />
          </div>
          <h2 className="t-xl">Story</h2>
        </div>

        <div className="about__text">
          <p className="t-sub1">
            With 15 years running our own successful business, Star Solutions merges deep software engineering mastery with real-world retail ownership. Having our own physical business in the USA running multiple iPhone stores across America, we design technologies tested on the front lines of commerce.{' '}
            <span className="about__text-strong">
              Operating from Star Plaza, near Opera Cinema, Citi Housing, Jhelum to the United States, we specialize in delivering enterprise POS systems, cutting-edge mobile apps, modern web platforms, and high-impact digital marketing.
            </span>
          </p>
        </div>

        <img className="about__crystal" src={crystal} alt="" width={620} height={549} aria-hidden />
      </div>
    </section>
  )
}
