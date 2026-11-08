import arrowDownRight from '../assets/icons/arrow-down-right-white-24.svg'
import arrowUpRightLight from '../assets/icons/arrow-up-right-light.svg'
import { SERVICES, whatsappLink, type ServiceId } from '../site'
import { ArrowUpRight, CheckIcon } from './Icons'
import { LoopVideo, Photo, type PhotoName, type VideoName } from './Media'
import { OutlineButton } from './ui'
import './Services.css'

/** Real footage or photography for each card (stock, not Starsolutions staff) */
const MEDIA: Record<ServiceId, { video: VideoName } | { photo: PhotoName }> = {
  calling: { video: 'service-calling' },
  software: { video: 'service-software' },
  ads: { photo: 'service-ads' },
  tiktok: { photo: 'service-tiktok' },
  ebay: { video: 'service-ebay' },
}

const MEDIA_SIZES = '(max-width: 1100px) calc(100vw - 112px), 44vw'

function CardMedia({ id }: { id: ServiceId }) {
  const media = MEDIA[id]
  return 'video' in media ? (
    <LoopVideo name={media.video} sizes={MEDIA_SIZES} />
  ) : (
    <Photo name={media.photo} sizes={MEDIA_SIZES} />
  )
}

export default function Services() {
  return (
    <>
      <div className="headline">
        <h2 className="t-xl" data-drift>
          What we can do <span className="headline__accent">for you?</span>
        </h2>
      </div>

      <section className="services" id="services">
        {/* On wide screens each card sticks under the header and the next one slides over it */}
        <div className="services__stack" data-service-stack>
          {SERVICES.map((s, i) => (
            <article key={s.id} id={`service-${s.id}`} className="service-card" style={{ '--i': i } as React.CSSProperties}>
              <div className="service-card__inner" data-card-inner>
                <div className="service-card__text">
                  <div className="service-card__top">
                    <img src={arrowDownRight} alt="" width={24} height={24} className="service-card__icon" />
                    <span className="service-card__num">0{i + 1}</span>
                  </div>
                  <h3 className="t-h2 service-card__title">{s.title}</h3>
                  <p className="t-h5 service-card__tagline">{s.tagline}</p>
                  <p className="t-body-m service-card__body">{s.body}</p>
                  <ul className="service-card__points">
                    {s.points.map((p) => (
                      <li key={p} className="t-body-m">
                        <CheckIcon size={18} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="t-btn-m service-card__cta"
                    href={whatsappLink(`Hi Starsolutions! I'd like to discuss ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discuss {s.title}
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <div className="service-card__visual" aria-hidden>
                  <div data-card-visual>
                    <CardMedia id={s.id} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="services__cta" data-reveal>
          <p className="t-h2 services__cta-title">Free consultation</p>
          <div className="services__cta-actions">
            <OutlineButton
              href={whatsappLink('Hi Starsolutions! I would like to book a free consultation.')}
              tone="light"
              icon={arrowUpRightLight}
              external
            >
              Chat on WhatsApp
            </OutlineButton>
            <span className="services__worth">no obligation</span>
          </div>
        </div>
      </section>
    </>
  )
}
