import { ArrowUp } from 'lucide-react'
import { Logo } from './Logo'
import { GithubIcon, TelegramIcon } from './BrandIcons'
import { profile } from '../data/profile'
import { filledSocials } from '../lib/socials'
import { externalProps } from '../lib/utils'

export function Footer() {
  const year = new Date().getFullYear()
  const links = filledSocials().filter((item) => item.kind !== 'email' || item.href)

  return (
    <footer className="site-footer">
      <div className="wrap grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="grid gap-4">
          <Logo
            onClick={(event) => {
              event.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
          <p className="text-muted">Персональное портфолио разработчика</p>
          <p className="mono text-sm text-dim">
            {profile.location} · © {year} {profile.name}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
          {links.map((item) => (
            <a key={item.kind} className="foot-link gap-2" href={item.href} {...externalProps(item.href)}>
              {item.kind === 'github' && <GithubIcon size={18} />}
              {item.kind === 'telegram' && <TelegramIcon size={18} />}
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Наверх
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
