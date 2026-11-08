import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EASE = 'power3.out'
const MOTION_OK = '(prefers-reduced-motion: no-preference)'

/**
 * Page-wide motion: smooth scrolling, entrance reveals, scroll-scrubbed parallax, the pinned
 * problem cards, stacking service cards, the gallery columns, the story phone, the process line, the 15-year counter
 * and card tilt. Nothing runs when the visitor prefers reduced motion.
 * Elements opt in through data attributes so the components keep plain markup.
 */
export function useScrollMotion(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        // ---- Smooth scrolling (Lenis) driven by GSAP's ticker so ScrollTrigger stays in sync
        const lenis = new Lenis({ anchors: { offset: -80 }, lerp: 0.1 })
        lenis.on('scroll', ScrollTrigger.update)
        const raf = (time: number) => lenis.raf(time * 1000)
        gsap.ticker.add(raf)
        gsap.ticker.lagSmoothing(0)

        // ---- Reading progress bar in the header
        gsap.to('[data-scroll-progress]', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: true },
        })

        // ---- Hero intro: headline words rise out of their masks, then the rest follows
        const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })
        intro
          .from('.header__bar > *', { y: -20, opacity: 0, duration: 0.8, stagger: 0.06 })
          .from('.hero__word', { yPercent: 110, duration: 1.1, stagger: 0.06 }, 0.1)
          .from('[data-hero-intro]', { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.4)
          .from('[data-hero-visual]', { scale: 0.85, opacity: 0, duration: 1.6, ease: 'expo.out' }, 0.2)

        // ---- Hero parallax: background drifts down, star sinks, copy eases away
        const heroScrub = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
        gsap.to('[data-parallax-bg]', { yPercent: 22, scale: 1.12, ease: 'none', scrollTrigger: heroScrub })
        gsap.to('[data-hero-stars]', { yPercent: -30, ease: 'none', scrollTrigger: heroScrub })
        gsap.to('[data-hero-visual]', { yPercent: 18, ease: 'none', scrollTrigger: heroScrub })
        gsap.to('[data-hero-content]', { y: -80, opacity: 0.3, ease: 'none', scrollTrigger: heroScrub })

        // ---- Generic entrance reveal
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.from(el, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: EASE,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        })

        // ---- Card groups rise in one after another, tipping forward in 3D
        gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
          gsap.from(group.children, {
            y: 90,
            opacity: 0,
            rotateX: -18,
            transformPerspective: 900,
            transformOrigin: '50% 100%',
            duration: 1.1,
            ease: EASE,
            stagger: 0.14,
            scrollTrigger: { trigger: group, start: 'top 85%', once: true },
          })
        })

        // ---- "What we can do for you?" drifts sideways with the scroll
        gsap.fromTo(
          '[data-drift]',
          { xPercent: 10 },
          {
            xPercent: -10,
            ease: 'none',
            scrollTrigger: { trigger: '[data-drift]', start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )

        // ---- Service cards: each visual floats up inside its card
        gsap.utils.toArray<HTMLElement>('[data-card-visual]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60 },
            { y: -30, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
          )
        })

        // ---- Gallery: outer columns travel up, the middle column travels down
        gsap.utils.toArray<HTMLElement>('[data-gallery-col]').forEach((col) => {
          const down = col.dataset.galleryCol === 'down'
          gsap.fromTo(
            col,
            { yPercent: down ? -14 : 6 },
            {
              yPercent: down ? 6 : -14,
              ease: 'none',
              scrollTrigger: { trigger: col.closest('section'), start: 'top bottom', end: 'bottom top', scrub: 0.6 },
            },
          )
        })

        // ---- Story: the phone turns in 3D and the ring spins as the section scrolls past
        const about = { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: true }
        gsap.fromTo(
          '[data-story-phone]',
          { rotateY: -32, rotateX: 12, y: 80 },
          { rotateY: 28, rotateX: -6, y: -60, ease: 'none', scrollTrigger: about },
        )
        gsap.fromTo('[data-story-ring]', { rotate: 0 }, { rotate: 120, ease: 'none', scrollTrigger: about })

        // ---- 15-year counter
        gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
          const target = Number(el.dataset.counter)
          const state = { value: 0 }
          el.textContent = '0'
          gsap.to(state, {
            value: target,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = String(Math.round(state.value))
            },
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          })
        })

        // ---- Footer wordmark fills in from the left
        gsap.fromTo(
          '[data-footer-wordmark]',
          { '--fill': '0%' },
          {
            '--fill': '100%',
            ease: 'none',
            scrollTrigger: { trigger: '[data-footer-wordmark]', start: 'top bottom', end: 'bottom 75%', scrub: true },
          },
        )

        return () => {
          gsap.ticker.remove(raf)
          lenis.destroy()
        }
      })

      // ---- Wide screens: stacked service cards shrink and dim as the next one slides over
      mm.add(`${MOTION_OK} and (min-width: 1101px)`, () => {
        // Problems: pin the section and slide the card row sideways as the page scrolls.
        // refreshPriority makes this pin measure first, so triggers further down account for its spacer.
        const track = document.querySelector<HTMLElement>('[data-problems-track]')
        if (track) {
          const distance = () => Math.max(0, track.scrollWidth - (track.parentElement?.clientWidth ?? 0))
          gsap.to(track, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: '[data-problems-pin]',
              start: 'top top',
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.6,
              invalidateOnRefresh: true,
              refreshPriority: 1,
              onUpdate: (self) => gsap.set('[data-problems-progress]', { scaleX: self.progress }),
            },
          })
        }

        const cards = gsap.utils.toArray<HTMLElement>('[data-card-inner]')
        cards.forEach((card, i) => {
          const next = cards[i + 1]
          if (!next) return
          gsap.to(card, {
            scale: 0.92,
            '--shade': 0.55,
            ease: 'none',
            scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 30%', scrub: true },
          })
        })

        gsap.fromTo(
          '[data-process-progress]',
          { scaleX: 0 },
          { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '#process ol', start: 'top 75%', end: 'bottom 55%', scrub: true } },
        )
      })

      // ---- Narrow screens: the process line runs down the left edge instead
      mm.add(`${MOTION_OK} and (max-width: 1100px)`, () => {
        gsap.fromTo(
          '[data-process-progress]',
          { scaleY: 0 },
          { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#process ol', start: 'top 75%', end: 'bottom 60%', scrub: true } },
        )
      })

      // ---- Cards tilt toward the pointer (mouse/trackpad only)
      mm.add(`${MOTION_OK} and (hover: hover)`, () => {
        const cleanups = gsap.utils.toArray<HTMLElement>('[data-tilt]').map((card) => {
          const rotX = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: EASE })
          const rotY = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: EASE })
          const lift = gsap.quickTo(card, 'y', { duration: 0.5, ease: EASE })
          gsap.set(card, { transformPerspective: 900 })
          const move = (e: PointerEvent) => {
            const r = card.getBoundingClientRect()
            rotY(((e.clientX - r.left) / r.width - 0.5) * 10)
            rotX(-((e.clientY - r.top) / r.height - 0.5) * 10)
            lift(-6)
          }
          const leave = () => {
            rotX(0)
            rotY(0)
            lift(0)
          }
          card.addEventListener('pointermove', move)
          card.addEventListener('pointerleave', leave)
          return () => {
            card.removeEventListener('pointermove', move)
            card.removeEventListener('pointerleave', leave)
          }
        })
        return () => cleanups.forEach((fn) => fn())
      })
    },
    { scope },
  )
}
