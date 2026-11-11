import { useEffect, useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { certificates } from '../data/certificates'
import type { Certificate } from '../types'
import { Modal } from '../components/Modal'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

type LoadState = Record<string, boolean | undefined>

/** Проверяет, что файлы изображений существуют, прежде чем показывать карточки. */
function useImageAvailability(items: Certificate[]): LoadState {
  const [state, setState] = useState<LoadState>({})

  useEffect(() => {
    let cancelled = false
    for (const item of items) {
      const img = new Image()
      img.onload = () => !cancelled && setState((prev) => ({ ...prev, [item.id]: true }))
      img.onerror = () => !cancelled && setState((prev) => ({ ...prev, [item.id]: false }))
      img.src = item.image
    }
    return () => {
      cancelled = true
    }
  }, [items])

  return state
}

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const availability = useImageAvailability(certificates)
  const available = certificates.filter((item) => availability[item.id] === true)
  const missing = certificates.filter((item) => availability[item.id] === false)
  const pending = certificates.some((item) => availability[item.id] === undefined)

  // Пока документов нет, секция скрыта. В режиме разработки показываем подсказку.
  if (available.length === 0) {
    if (!import.meta.env.DEV || pending) return null
    return (
      <section id="certificates" className="section" aria-labelledby="certificates-title" tabIndex={-1}>
        <div className="wrap grid gap-8">
          <SectionHeading index="03" label="Документы" title="Дипломы и сертификаты" id="certificates-title" />
          <p className="dev-note">
            Режим разработки: секция скрыта в сборке, пока нет документов.{' '}
            {missing.length > 0
              ? `Не найдены файлы: ${missing.map((item) => item.image).join(', ')}.`
              : 'Добавьте изображения в public/certificates/ и запишите их в src/data/certificates.ts.'}
          </p>
        </div>
      </section>
    )
  }

  const titleId = 'certificate-view-title'

  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title" tabIndex={-1}>
      <div className="wrap grid gap-14">
        <SectionHeading index="03" label="Документы" title="Дипломы и сертификаты" id="certificates-title" />

        <ul className="cert-grid">
          {available.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 80} className="h-full">
                <button
                  type="button"
                  className="cert-card"
                  onClick={() => setSelected(item)}
                  aria-label={`Открыть в увеличенном виде: ${item.title}`}
                >
                  <span className="cert-thumb">
                    <img
                      src={item.image}
                      alt={item.alt ?? `Скан документа: ${item.title}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="cert-body">
                    <h3>{item.title}</h3>
                    {(item.issuer || item.year) && (
                      <small>{[item.issuer, item.year].filter(Boolean).join(' · ')}</small>
                    )}
                    <small className="mt-2 inline-flex items-center gap-2 text-accent">
                      <ZoomIn size={14} aria-hidden="true" />
                      Увеличить
                    </small>
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)} labelledBy={titleId} maxWidth="1100px">
        {selected && (
          <div className="grid gap-6 p-5 pt-16 sm:p-8 sm:pt-16">
            <img
              className="lightbox-img"
              src={selected.image}
              alt={selected.alt ?? `Скан документа: ${selected.title}`}
              decoding="async"
            />
            <div className="grid gap-2">
              <h3 id={titleId} className="text-2xl">
                {selected.title}
              </h3>
              {(selected.issuer || selected.year) && (
                <p className="text-dim">{[selected.issuer, selected.year].filter(Boolean).join(' · ')}</p>
              )}
              {selected.description && <p className="text-muted">{selected.description}</p>}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
