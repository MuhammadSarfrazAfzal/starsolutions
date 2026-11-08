import { useState } from 'react'
import arrowDownRight from '../assets/icons/arrow-down-right-white-24.svg'
import arrowUpRightLight from '../assets/icons/arrow-up-right-light.svg'
import { FAQS, whatsappLink } from '../site'
import { OutlineButton } from './ui'
import './Faq.css'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-panel">
        <div className="faq">
          <div className="faq__head" data-reveal>
            <h2 className="t-xl faq__title">
              FAQ<span className="faq__title-s">s</span>
            </h2>
            <p className="t-body-l faq__lead">
              Something else on your mind? Send us a message on WhatsApp and a real person will reply.
            </p>
            <OutlineButton
              href={whatsappLink('Hi Starsolutions! I have a question.')}
              tone="light"
              icon={arrowUpRightLight}
              external
            >
              Ask on WhatsApp
            </OutlineButton>
          </div>

          <div className="faq__list">
            {FAQS.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} data-reveal>
                  <button
                    type="button"
                    className="faq-item__question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="t-h4">{item.q}</span>
                    <img src={arrowDownRight} alt="" width={24} height={24} />
                  </button>
                  {/* grid rows animate from 0fr to 1fr so the answer slides open */}
                  <div className="faq-item__answer" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                    <div>
                      <p className="t-body-l">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
