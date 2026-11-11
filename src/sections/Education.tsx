import { education } from '../data/education'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Education() {
  // Шкала пропорциональна продолжительности в месяцах и не указывает точных дат.
  const longest = Math.max(...education.map((entry) => entry.months), 1)
  return (
    <section id="education" className="section" aria-labelledby="education-title" tabIndex={-1}>
      <div className="wrap grid gap-14">
        <SectionHeading index="02" label="Образование" title="Образование и обучение" id="education-title">
          <p className="lead">
            Три направления, которые сформировали мой путь: программирование, английский язык и
            обучение в англоязычной среде.
          </p>
        </SectionHeading>

        <ol className="timeline">
          {education.map((entry, index) => (
            <li key={entry.id}>
              <Reveal delay={index * 110} className="h-full">
                <article className="edu-card h-full" data-accent={index + 1} aria-labelledby={`edu-${entry.id}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="edu-duration" aria-label={`Продолжительность: ${entry.duration}`}>
                      <strong aria-hidden="true">{entry.durationValue}</strong>
                      <span aria-hidden="true">{entry.durationUnit}</span>
                    </div>
                    <span className="mono text-xs text-dim">0{index + 1}</span>
                  </div>

                  <div className="rail" aria-hidden="true">
                    <i style={{ width: `${Math.max(4, Math.round((entry.months / longest) * 100))}%` }} />
                  </div>

                  <div className="grid gap-3">
                    <h3 id={`edu-${entry.id}`} className="text-2xl">
                      {entry.title}
                    </h3>
                    {entry.statusLabel && (
                      <span className="pill w-fit">
                        <i aria-hidden="true" />
                        {entry.statusLabel}
                      </span>
                    )}
                  </div>

                  <dl>
                    <div>
                      <dt>Область</dt>
                      <dd>{entry.area}</dd>
                    </div>
                    <div>
                      <dt>Формат</dt>
                      <dd>{entry.format}</dd>
                    </div>
                    {entry.city && (
                      <div>
                        <dt>Город</dt>
                        <dd>{entry.city}</dd>
                      </div>
                    )}
                    {entry.organization && (
                      <div>
                        <dt>Организация</dt>
                        <dd>{entry.organization}</dd>
                      </div>
                    )}
                    {entry.years && (
                      <div>
                        <dt>Годы</dt>
                        <dd>{entry.years}</dd>
                      </div>
                    )}
                    {entry.specialty && (
                      <div>
                        <dt>Направление</dt>
                        <dd>{entry.specialty}</dd>
                      </div>
                    )}
                  </dl>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
