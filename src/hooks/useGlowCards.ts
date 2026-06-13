import { useEffect } from 'react'

const SELECTOR = '.card-glass, .card-glow'

// Spring easing: overshoots slightly so the card "wiggles" back to rest
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'

export default function useGlowCards() {
  useEffect(() => {
    const cleanups: Array<() => void> = []

    function init(el: HTMLElement) {
      if (el.dataset.glowInit === '1') return
      el.dataset.glowInit = '1'

      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        // Tilt: max ±10 degrees
        const rX = ((y / r.height) - 0.5) * -10
        const rY = ((x / r.width)  - 0.5) *  10
        // Fast follow on mouse move
        el.style.transition = 'transform 0.08s linear'
        el.style.transform  = `perspective(700px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02,1.02,1.02)`
        // Move the spotlight to cursor position
        el.style.setProperty('--glow-x', `${(x / r.width)  * 100}%`)
        el.style.setProperty('--glow-y', `${(y / r.height) * 100}%`)
        el.style.setProperty('--glow-opacity', '1')
      }

      const onLeave = () => {
        // Spring overshoot gives the "wiggle" feel on exit
        el.style.transition = `transform 0.7s ${SPRING}`
        el.style.transform  = ''
        el.style.setProperty('--glow-opacity', '0')
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    }

    // Initialise cards already in the DOM
    document.querySelectorAll<HTMLElement>(SELECTOR).forEach(init)

    // Pick up cards added later (route changes, animated reveals, etc.)
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(init)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cleanups.forEach(fn => fn())
      observer.disconnect()
    }
  }, [])
}
