/** Безопасно ли открывать ссылку: только http(s), mailto и относительные пути. */
export function isSafeUrl(url: string): boolean {
  if (!url) return false
  if (url.startsWith('/') && !url.startsWith('//')) return true
  try {
    const parsed = new URL(url)
    return ['http:', 'https:', 'mailto:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

export function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url)
}

/** Свойства для внешних ссылок: безопасное открытие в новой вкладке. */
export function externalProps(url: string) {
  return isExternal(url) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

/** «21 год», «22 года», «25 лет». */
export function ageLabel(age: number): string {
  const lastTwo = age % 100
  const last = age % 10
  if (lastTwo >= 11 && lastTwo <= 14) return `${age} лет`
  if (last === 1) return `${age} год`
  if (last >= 2 && last <= 4) return `${age} года`
  return `${age} лет`
}

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  // Переносим фокус в раздел, чтобы клавиатурная навигация продолжалась оттуда.
  el.focus({ preventScroll: true })
  history.replaceState(null, '', `#${id}`)
}
