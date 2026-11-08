import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CHANNEL_ROWS, type Channel, type ChannelIcon } from '../site'
import { BrandIcon } from './BrandIcons'
import { BagIcon, CodeIcon, PhoneIcon, StarIcon, TargetIcon, WindowIcon } from './Icons'
import './Marquee.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Icon({ icon }: { icon: ChannelIcon }) {
  switch (icon) {
    case 'phone':
      return <PhoneIcon size={22} />
    case 'target':
      return <TargetIcon size={22} />
    case 'code':
      return <CodeIcon size={22} />
    case 'window':
      return <WindowIcon size={22} />
    case 'bag':
      return <BagIcon size={22} />
    default:
      return <BrandIcon brand={icon} size={20} />
  }
}

/** One copy of a row; each item jumps to the service card it belongs to */
function Items({ items, copy }: { items: Channel[]; copy: boolean }) {
  return (
    <ul className="marquee__items" aria-hidden={copy || undefined}>
      {items.map((c) => (
        <li key={c.label}>
          <a className="marquee__item" href={`#service-${c.service}`} tabIndex={copy ? -1 : undefined}>
            <span className="marquee__icon">
              <Icon icon={c.icon} />
            </span>
            {c.label}
          </a>
          <StarIcon size={20} className="marquee__star" />
        </li>
      ))}
    </ul>
  )
}

/**
 * Two endless strips running in opposite directions: platforms on top, services below.
 * They speed up with the scroll, flip direction when the visitor scrolls back up and
 * ease to a stop while hovered. Reduced motion shows them as a static, wrapped list.
 */
export default function Marquee() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const rows = gsap.utils.toArray<HTMLElement>('[data-marquee-row]')
        const state = rows.map((row, i) => {
          // each track holds two identical halves, so sliding by half its width loops seamlessly
          const track = row.firstElementChild as HTMLElement
          const tween = gsap.fromTo(
            track,
            { xPercent: i % 2 ? -50 : 0 },
            { xPercent: i % 2 ? 0 : -50, duration: 48, ease: 'none', repeat: -1 },
          )
          // start deep into the repeats so scrolling up can run it backwards without hitting time 0
          tween.totalTime(tween.duration() * 1000)
          const s = { tween, hover: 1, hovered: false }
          row.addEventListener('pointerenter', () => (s.hovered = true))
          row.addEventListener('pointerleave', () => (s.hovered = false))
          return s
        })

        let boost = 1
        let direction = 1
        ScrollTrigger.create({
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            direction = self.direction
            boost = Math.max(boost, 1 + Math.min(Math.abs(self.getVelocity()) / 400, 6))
          },
        })

        const tick = () => {
          boost += (1 - boost) * 0.05
          state.forEach((s) => {
            s.hover += ((s.hovered ? 0 : 1) - s.hover) * 0.12
            s.tween.timeScale(direction * boost * s.hover)
          })
        }
        gsap.ticker.add(tick)
        return () => gsap.ticker.remove(tick)
      })
    },
    { scope: root },
  )

  return (
    <div className="marquee" ref={root}>
      <nav aria-label="What we work with">
        {CHANNEL_ROWS.map((items, i) => (
          <div key={i} className={`marquee__row marquee__row--${i ? 'services' : 'platforms'}`} data-marquee-row>
            <div className="marquee__track">
              <div className="marquee__half">
                <Items items={items} copy={false} />
                <Items items={items} copy />
              </div>
              <div className="marquee__half" aria-hidden>
                <Items items={items} copy />
                <Items items={items} copy />
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}
