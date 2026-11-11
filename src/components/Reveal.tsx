import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import { cn } from '../lib/utils'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  /** Задержка появления в миллисекундах. */
  delay?: number
  className?: string
}

/** Плавное появление при прокрутке (opacity + translate, без сдвига макета). */
export function Reveal({ children, as: Tag = 'div', delay = 0, className }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>()
  const style = { '--d': `${delay}ms` } as CSSProperties
  return (
    <Tag ref={ref} className={cn('reveal', visible && 'is-visible', className)} style={style}>
      {children}
    </Tag>
  )
}
