import { useState, type FormEvent } from 'react'
import emailIcon from '../assets/icons/email.svg'
import arrowUpRightDark from '../assets/icons/arrow-up-right-dark.svg'
import './ui.css'

type EmailFormProps = {
  /** "fluid" stretches the text field to fill the row (contact section) */
  fluid?: boolean
  className?: string
}

/** Text field + "Get started" pill button (Figma: Form / Text field + Button) */
export function EmailForm({ fluid = false, className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <form className={`email-form ${fluid ? 'email-form--fluid' : ''} ${className}`} onSubmit={onSubmit}>
      <label className="text-field">
        <span className="text-field__icon">
          <img src={emailIcon} alt="" width={20} height={16} />
        </span>
        <input
          className="text-field__input t-body-xs"
          type="email"
          placeholder={sent ? 'Thanks! We’ll be in touch.' : 'Enter your email to get started'}
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
}

/** Outlined pill button (Figma: Button, outline variant) */
export function OutlineButton({ children, href = '#', icon, tone = 'blue', className = '', size = 'l' }: OutlineButtonProps) {
  return (
    <a href={href} className={`outline-btn outline-btn--${tone} ${className}`}>
      <span className={size === 'l' ? 't-btn-l' : 't-btn-m'}>{children}</span>
      {icon && <img src={icon} alt="" width={24} height={24} />}
    </a>
  )
}
