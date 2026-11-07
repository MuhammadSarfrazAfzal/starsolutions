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
            <img src={arrowDownRight} alt="" width={80} height={80} />
          </div>
          <h2 className="t-xl">Approach</h2>
        </div>

        <div className="about__text">
          <p className="t-sub1">
            Discover our unique consulting methodology that combines in-depth industry knowledge, innovative thinking,
            and a client-centric approach.{' '}
            <span className="about__text-strong">
              We partner with you every step of the way to ensure your business reaches its full potential.
            </span>
          </p>
        </div>

        <img className="about__crystal" src={crystal} alt="" width={620} height={549} aria-hidden />
      </div>
    </section>
  )
}
