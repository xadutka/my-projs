import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Поведение модального окна: Escape, блокировка прокрутки страницы,
 * удержание фокуса внутри окна и возврат фокуса при закрытии.
 */
export function useDialog(open: boolean, onClose: () => void, containerRef: RefObject<HTMLElement | null>) {
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const container = containerRef.current

    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`

    const focusables = () =>
      container ? Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)) : []
    const first = focusables()[0]
    if (first) first.focus()
    else container?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        closeRef.current()
        return
      }
      if (event.key !== 'Tab' || !container) return
      const items = focusables()
      if (items.length === 0) {
        event.preventDefault()
        return
      }
      const firstEl = items[0]
      const lastEl = items[items.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === firstEl || !container.contains(active))) {
        event.preventDefault()
        lastEl.focus()
      } else if (!event.shiftKey && (active === lastEl || !container.contains(active))) {
        event.preventDefault()
        firstEl.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
      previouslyFocused?.focus?.()
    }
  }, [open, containerRef])
}
