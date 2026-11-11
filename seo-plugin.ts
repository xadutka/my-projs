import type { Plugin } from 'vite'
import { seo } from './src/data/seo.ts'

const esc = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Собирает SEO-теги из src/data/seo.ts и подставляет их вместо <!--seo-tags--> в index.html. */
export function buildSeoTags(): string {
  const base = seo.siteUrl.trim().replace(/\/+$/, '')
  const abs = (path: string) => (base && path.startsWith('/') ? `${base}${path}` : path)

  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="theme-color" content="${esc(seo.themeColor)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${esc(seo.locale)}" />`,
    `<meta property="og:title" content="${esc(seo.ogTitle || seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.ogDescription || seo.description)}" />`,
    `<meta property="og:image" content="${esc(abs(seo.ogImage))}" />`,
    `<meta property="og:image:alt" content="${esc(seo.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ]

  // Канонический URL и og:url добавляются только когда указан настоящий домен.
  if (base) {
    tags.push(`<link rel="canonical" href="${esc(base + '/')}" />`)
    tags.push(`<meta property="og:url" content="${esc(base + '/')}" />`)
  }

  return tags.join('\n    ')
}

export function seoPlugin(): Plugin {
  return {
    name: 'portfolio-seo-tags',
    transformIndexHtml(html) {
      return html.replace('<!--seo-tags-->', buildSeoTags())
    },
  }
}
