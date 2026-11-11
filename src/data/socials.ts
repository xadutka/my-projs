import type { SocialLink } from '../types'

/**
 * Контакты. Единственное место, где они задаются.
 * Незаполненные (пустые) контакты на сайте не показываются.
 *
 * - email: введите адрес в value, например 'name@example.com' (ссылка mailto: создаётся автоматически).
 * - telegram: value — отображаемое имя '@username', url — 'https://t.me/username'.
 * - github: value — отображаемое имя 'username', url — 'https://github.com/username'.
 */
export const socials: SocialLink[] = [
  { kind: 'email', label: 'Email', value: '', url: '' },
  { kind: 'telegram', label: 'Telegram', value: '', url: '' },
  { kind: 'github', label: 'GitHub', value: '', url: '' },
]
