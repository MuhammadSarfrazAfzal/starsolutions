import { PROCESS } from '../site'
import { Photo } from './Media'
import './Process.css'

export default function Process() {
  return (
    <section className="process" id="process">
      {/* Team-at-work photo, dimmed under the brand navy so the headline stays readable */}
      <div className="process__backdrop" aria-hidden>
        <Photo name="process-team" sizes="100vw" />
      </div>

      <div className="process__head">
        <p className="t-btn-s eyebrow process__eyebrow" data-reveal>
          How we work
        </p>
        <h2 className="t-xl process__title" data-reveal>
          <span className="process__solid">Simple</span> <span className="text-outline">to start</span>
          <br />
          <span className="text-outline">Clear</span> <span className="process__solid">all the way</span>
        </h2>
      </div>

      <div className="process__track">
        {/* the line fills in as the steps scroll through the viewport */}
        <div className="process__line" aria-hidden>
          <div className="process__progress" data-process-progress />
        </div>
        <ol className="process__steps" data-stagger>
          {PROCESS.map((step, i) => (
            <li key={step.title} className="process__step">
              <span className="process__dot">{i + 1}</span>
              <h3 className="t-h4">{step.title}</h3>
              <p className="t-body-m">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
