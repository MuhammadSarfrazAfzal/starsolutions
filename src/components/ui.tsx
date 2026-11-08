import { useState, type FormEvent } from 'react'
import emailIcon from '../assets/icons/email.svg'
import arrowUpRightDark from '../assets/icons/arrow-up-right-dark.svg'
import logoIcon from '../assets/icons/logo-icon.svg'
import footerLogo from '../assets/icons/footer-logo.svg'
import { SITE, whatsappLink } from '../site'
import './ui.css'

type EmailFormProps = {
  className?: string
}

/**
 * Text field + "Get started" pill button (Figma: Form / Text field + Button).
 * There is no backend: submitting opens a WhatsApp chat with the email prefilled.
 */
export function EmailForm({ className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    window.open(
      whatsappLink(`Hi Starsolutions! I'd like to get started. My email is ${email.trim()}.`),
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <form className={`email-form ${className}`} onSubmit={onSubmit}>
      <label className="text-field">
        <span className="text-field__icon">
          <img src={emailIcon} alt="" width={20} height={16} />
        </span>
        <input
          className="text-field__input t-body-xs"
          type="email"
          name="email"
          placeholder={sent ? 'Thanks! Continue the chat on WhatsApp.' : 'Enter your email to get started'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setSent(false)
          }}
          aria-label="Email address"
          required
        />
      </label>
      <button type="submit" className="cta-pill">
        <span className="t-btn-l">Get Started</span>
        <span className="cta-pill__arrow">
          <img src={arrowUpRightDark} alt="" width={20} height={20} />
        </span>
      </button>
    </form>
  )
}

type OutlineButtonProps = {
  children: React.ReactNode
  href?: string
  icon?: string
  tone?: 'blue' | 'light'
  className?: string
  size?: 'm' | 'l'
  external?: boolean
}

/** Outlined pill button (Figma: Button, outline variant) */
export function OutlineButton({
  children,
  href = '#',
  icon,
  tone = 'blue',
  className = '',
  size = 'l',
  external = false,
}: OutlineButtonProps) {
  return (
    <a
      href={href}
      className={`outline-btn outline-btn--${tone} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className={size === 'l' ? 't-btn-l' : 't-btn-m'}>{children}</span>
      {icon && <img src={icon} alt="" width={24} height={24} />}
    </a>
  )
}

/** Star mark + "Starsolutions" wordmark, in the template's logo layout */
export function Logo({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const light = tone === 'light'
  return (
    <a href="#top" className={`logo logo--${tone} ${className}`} aria-label={`${SITE.name} home`}>
      <img src={light ? footerLogo : logoIcon} alt="" width={light ? 40 : 30} height={light ? 40 : 30} />
      <span className="logo__wordmark">{SITE.name}</span>
    </a>
  )
}
