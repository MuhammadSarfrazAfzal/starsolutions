import { useState } from 'react'
import { PROBLEMS, SERVICES, type ServiceId } from '../site'
import { ArrowUpRight, PlusIcon } from './Icons'
import { Photo, type PhotoName } from './Media'
import './Problems.css'

/** Stock photos of the frustration behind each problem (not real clients, see MEDIA_CREDITS.md) */
const PHOTO: Record<ServiceId, PhotoName> = {
  calling: 'problem-leads',
  ads: 'problem-ads',
  software: 'problem-software',
  tiktok: 'problem-tiktok',
  ebay: 'problem-ebay',
}

const serviceTitle = (id: ServiceId) => SERVICES.find((s) => s.id === id)?.title ?? ''

/**
 * Problem -> solution cards. Hover, keyboard focus or the + button flips a card to the fix.
 * On wide screens the row is pinned and scrolls sideways (see useScrollMotion); narrow screens stack it.
 */
export default function Problems() {
  const [open, setOpen] = useState<ServiceId | null>(null)

  return (
    <section className="problems" id="problems">
      <div className="problems__frame" data-problems-pin>
        <div className="problems__head">
          <p className="t-btn-s eyebrow" data-reveal>
            Sound familiar?
          </p>
          <h2 className="t-h2 problems__title" data-reveal>
            Are You Running Into These Problems?
          </h2>
          <p className="t-body-l problems__hint" data-reveal>
            Hover or tap a card to see how we fix it.
          </p>
          <div className="problems__progress" aria-hidden>
            <span data-problems-progress />
          </div>
        </div>

        <div className="problems__viewport">
          <ol className="problems__track" data-problems-track>
            {PROBLEMS.map((p, i) => {
              const isOpen = open === p.service
              const fixId = `fix-${p.service}`
              return (
                <li key={p.service} className={`problem ${isOpen ? 'is-open' : ''}`}>
                  <Photo name={PHOTO[p.service]} sizes="(max-width: 1100px) calc(100vw - 48px), 400px" />
                  <div className="problem__front">
                    <span className="problem__num">0{i + 1}</span>
                    <h3 className="t-h3 problem__title">{p.title}</h3>
                    <p className="t-body-m problem__pain">{p.pain}</p>
                  </div>
                  <button
                    type="button"
                    className="problem__toggle"
                    aria-expanded={isOpen}
                    aria-controls={fixId}
                    aria-label={isOpen ? `Hide the fix for: ${p.title}` : `Show the fix for: ${p.title}`}
                    onClick={() => setOpen(isOpen ? null : p.service)}
                  >
                    <PlusIcon size={22} />
                  </button>
                  <div className="problem__fix" id={fixId}>
                    <span className="t-btn-s problem__fix-label">How we fix it</span>
                    <p className="t-body-m">{p.fix}</p>
                    <a className="t-btn-m problem__link" href={`#service-${p.service}`}>
                      {serviceTitle(p.service)}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
