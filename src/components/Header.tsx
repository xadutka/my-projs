import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn, scrollToId } from '../lib/utils'

export const navItems = [
  { id: 'about', label: 'Обо мне' },
  { id: 'education', label: 'Образование' },
  { id: 'projects', label: 'Проекты' },
  { id: 'skills', label: 'Навыки' },
  { id: 'contact', label: 'Контакты' },
]

const NAV_IDS = navItems.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(NAV_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape закрывает мобильное меню, при расширении окна меню сбрасывается.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = prev
    }
  }, [open])

  const go = (id: string) => (event: MouseEvent) => {
    event.preventDefault()
    setOpen(false)
    // Небольшая задержка: страница должна вернуть прокрутку после закрытия меню.
    window.setTimeout(() => scrollToId(id), open ? 30 : 0)
  }

  return (
    <header className={cn('site-header', scrolled && 'is-scrolled', open && 'is-open')}>
      <div className="wrap flex w-full items-center justify-between gap-4">
        <Logo
          onClick={(event) => {
            event.preventDefault()
            setOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
            history.replaceState(null, '', window.location.pathname)
          }}
        />

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              aria-current={active === item.id ? 'true' : undefined}
              onClick={go(item.id)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm ml-3" onClick={go('contact')}>
            Связаться
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu lg:hidden" aria-label="Мобильная навигация">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="m-link"
              aria-current={active === item.id ? 'true' : undefined}
              onClick={go(item.id)}
            >
              <small>{String(index + 1).padStart(2, '0')}</small>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary mt-8" onClick={go('contact')}>
            Связаться
          </a>
        </nav>
      )}
    </header>
  )
}
