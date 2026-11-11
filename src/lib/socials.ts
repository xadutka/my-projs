import { socials } from '../data/socials'
import type { SocialKind } from '../types'
import { isSafeUrl } from './utils'

export interface ResolvedSocial {
  kind: SocialKind
  label: string
  /** Текст для отображения. */
  value: string
  /** Готовая ссылка (для email — mailto:). */
  href: string
}

/** Возвращает только заполненные контакты со ссылками, прошедшими проверку безопасности. */
export function filledSocials(): ResolvedSocial[] {
  const result: ResolvedSocial[] = []
  for (const item of socials) {
    const value = item.value.trim()
    if (!value) continue
    if (item.kind === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) continue
      result.push({ kind: 'email', label: item.label, value, href: `mailto:${value}` })
      continue
    }
    const url = item.url.trim()
    if (!url || !isSafeUrl(url)) continue
    result.push({ kind: item.kind, label: item.label, value, href: url })
  }
  return result
}

export function emailAddress(): string | undefined {
  return filledSocials().find((item) => item.kind === 'email')?.value
}
