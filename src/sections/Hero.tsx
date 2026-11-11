import type { CSSProperties } from 'react'
import { ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'
import { ageLabel, scrollToId } from '../lib/utils'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 560 520" role="img" aria-label="Абстрактная композиция из геометрических фигур и фрагмента кода" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ha-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c4f53b" stopOpacity=".55" />
          <stop offset="1" stopColor="#c4f53b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Концентрические окружности и вращающаяся орбита */}
      <g fill="none" stroke="#2a2f3b">
        <circle cx="280" cy="260" r="236" />
        <circle cx="280" cy="260" r="172" />
        <circle cx="280" cy="260" r="108" strokeDasharray="3 7" />
      </g>
      <g className="art-orbit">
        <circle cx="280" cy="24" r="6" fill="#c4f53b" />
        <circle cx="516" cy="260" r="4" fill="#b9a8ff" />
        <circle cx="108" cy="388" r="3.5" fill="#f4f5f7" />
      </g>

      {/* Геометрические блоки */}
      <rect x="56" y="70" width="120" height="120" rx="22" fill="none" stroke="#343947" />
      <rect x="76" y="90" width="80" height="80" rx="14" fill="url(#ha-fade)" opacity=".5" />
      <path d="M452 372l48 82H404z" fill="none" stroke="#b9a8ff" strokeOpacity=".7" />
      <circle cx="470" cy="118" r="38" fill="#121419" stroke="#343947" />
      <circle cx="470" cy="118" r="10" fill="#c4f53b" />
      <line x1="470" y1="156" x2="470" y2="230" stroke="#2a2f3b" />
      <line x1="176" y1="130" x2="432" y2="118" stroke="#2a2f3b" strokeDasharray="2 6" />

      {/* Окно с декоративным фрагментом псевдокода */}
      <g className="art-float">
        <rect x="104" y="196" width="348" height="204" rx="18" fill="#0f1116" stroke="#2f3441" />
        <line x1="104" y1="232" x2="452" y2="232" stroke="#242833" />
        <circle cx="128" cy="214" r="5" fill="#2c313d" />
        <circle cx="146" cy="214" r="5" fill="#2c313d" />
        <circle cx="164" cy="214" r="5" fill="#2c313d" />
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" fontSize="15">
          <text x="128" y="262" fill="#7d8491">// идея → решение</text>
          <text x="128" y="288" fill="#b9a8ff">
            while <tspan fill="#f4f5f7">(idea) {'{'}</tspan>
          </text>
          <text x="152" y="312" fill="#f4f5f7">
            plan<tspan fill="#7d8491">();</tspan>
          </text>
          <text x="152" y="336" fill="#f4f5f7">
            build<tspan fill="#7d8491">();</tspan>
          </text>
          <text x="152" y="360" fill="#c4f53b">
            improve<tspan fill="#7d8491">();</tspan>
          </text>
          <text x="128" y="384" fill="#f4f5f7">
            {'}'}
          </text>
        </g>
        <rect className="art-caret" x="142" y="370" width="9" height="17" fill="#c4f53b" />
      </g>
    </svg>
  )
}

export function Hero() {
  const portrait = profile.portrait
  return (
    <section id="top" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="wrap grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <div className="grid gap-8">
          <p className="eyebrow rise" style={delay(0)}>
            {profile.eyebrow}
          </p>

          <h1 id="hero-title" className="hero-title rise" style={delay(100)}>
            Превращаю идеи в <em>цифровые решения</em>
          </h1>

          <p className="lead rise" style={delay(220)}>
            {profile.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-3 rise" style={delay(320)}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('projects')
              }}
            >
              Смотреть проекты
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="btn btn-ghost"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('about')
              }}
            >
              Обо мне
            </a>
          </div>

          <div className="grid gap-4 rise" style={delay(420)}>
            {profile.openToWork && (
              <span className="status-dot w-fit">
                <i aria-hidden="true" />
                Открыт к предложениям
              </span>
            )}
            <p className="meta-row">
              <span>{profile.name}</span>
              <span>{profile.location}</span>
              <span>{ageLabel(profile.age)}</span>
            </p>
          </div>
        </div>

        <div className="rise" style={delay(260)}>
          {portrait ? (
            <img className="portrait mx-auto" src={portrait.src} alt={portrait.alt} width={420} height={525} decoding="async" />
          ) : (
            <HeroArt />
          )}
        </div>
      </div>
    </section>
  )
}
