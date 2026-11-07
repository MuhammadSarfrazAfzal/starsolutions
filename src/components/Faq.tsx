import { useState } from 'react'
import arrowDownRight from '../assets/icons/arrow-down-right-white-24.svg'
import './Faq.css'

const FAQS = [
  {
    q: 'What services does Conscellence offer?',
    a: 'We offer a range of services including Customized Strategy Development, Operational Efficiency Optimization, Market Analysis and Insights, and Leadership and Team Building programs. Each service is tailored to meet the specific needs of your business.',
  },
  {
    q: 'How can Conscellence help my business grow?',
    a: 'We identify the barriers holding your business back, then build a practical, data-driven plan to unlock new revenue, improve efficiency and strengthen your team.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'Our consultants have worked across retail, technology, healthcare, manufacturing, food & beverage and professional services, and we adapt our approach to each market.',
  },
  {
    q: 'Are your services customized to my business needs?',
    a: 'Yes. Every engagement starts with a discovery phase so the strategy, timeline and deliverables fit your goals, budget and team.',
  },
  {
    q: 'What is the typical duration of a consulting project?',
    a: 'Most projects run between 6 and 16 weeks depending on scope. Ongoing advisory retainers are also available.',
  },
  {
    q: 'How do you ensure the confidentiality of our business information?',
    a: 'All engagements are covered by an NDA, access to your data is limited to the project team, and information is stored securely and deleted on request.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq-section">
      <div className="faq-panel">
        <div className="faq">
          <h2 className="t-xl faq__title">
            FAQ<span className="faq__title-s">s</span>
          </h2>

          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-item__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="t-h4">{item.q}</span>
                  <img src={arrowDownRight} alt="" width={24} height={24} />
                </button>
                <div className="faq-item__answer" hidden={!isOpen}>
                  <p className="t-body-l">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
