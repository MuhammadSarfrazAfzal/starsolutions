import whatsappGlyph from '../assets/icons/whatsapp.svg'
import { whatsappLink } from '../site'

/** Floating click-to-chat button, always in reach */
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Hi Starsolutions! I would like to know more about your services.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Starsolutions on WhatsApp"
    >
      <span className="t-btn-m wa-float__label">Chat with us</span>
      <span className="wa-float__icon">
        <img src={whatsappGlyph} alt="" width={26} height={26} />
      </span>
    </a>
  )
}
