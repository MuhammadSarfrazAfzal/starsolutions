import arrowDownRight from '../assets/icons/arrow-down-right-white-24.svg'
import arrowUpRightLight from '../assets/icons/arrow-up-right-light.svg'
import { OutlineButton } from './ui'
import './Services.css'

const SERVICES = [
  {
    title: 'Customized Strategy Development',
    body: 'Tailor-made strategies to address your unique business challenges and opportunities, ensuring sustainable growth and competitive advantage.',
  },
  {
    title: 'Operational Efficiency Optimization',
    body: 'Streamline your processes and improve efficiency with our expert guidance, helping you save time and resources.',
  },
  {
    title: 'Market Analysis and Insights',
    body: 'Gain valuable market insights and stay ahead of the competition with our comprehensive analysis and data-driven recommendations.',
  },
  {
    title: 'Leadership and Team Building',
    body: 'Enhance your leadership capabilities and foster a high-performing team through our specialized training and development programs.',
  },
]

export default function Services() {
  return (
    <>
      <div className="headline">
        <h2 className="t-xl">
          What we can do <span className="headline__accent">for you?</span>
        </h2>
      </div>

      <section className="services" id="services">
        <div className="services__panel">
          {SERVICES.map((s) => (
            <div key={s.title} className="service-row">
              <img src={arrowDownRight} alt="" width={24} height={24} className="service-row__icon" />
              <div className="service-row__content">
                <h3 className="t-h2 service-row__title">{s.title}</h3>
                <p className="t-body-l service-row__body">{s.body}</p>
              </div>
            </div>
          ))}

          <div className="services__cta">
            <p className="t-h2 services__cta-title">Free consultation</p>
            <div className="services__cta-actions">
              <OutlineButton href="#contact" tone="light" icon={arrowUpRightLight}>
                Schedule a free call
              </OutlineButton>
              <span className="services__worth">worth 200 USD</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
