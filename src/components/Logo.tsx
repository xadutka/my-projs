import type { MouseEvent } from 'react'

interface LogoProps {
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

/** Текстовый логотип ARSENTIY с компактной монограммой «A.». */
export function Logo({ onClick }: LogoProps) {
  return (
    <a href="#top" className="logo" aria-label="ARSENTIY — наверх" onClick={onClick}>
      <span className="logo-mark" aria-hidden="true">
        <span>
          A<b>.</b>
        </span>
      </span>
      <span className="logo-word">ARSENTIY</span>
    </a>
  )
}
