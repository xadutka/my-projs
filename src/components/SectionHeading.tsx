import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  id: string
  children?: ReactNode
}

export function SectionHeading({ index, label, title, id, children }: SectionHeadingProps) {
  return (
    <Reveal className="grid gap-6">
      <p className="eyebrow">
        {index} — {label}
      </p>
      <h2 id={id} className="h2">
        {title}
      </h2>
      {children}
    </Reveal>
  )
}
