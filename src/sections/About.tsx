import { MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const blocks = [
  {
    title: 'Мой путь',
    text: 'Три года изучения программирования и дальнейшее развитие технических навыков через практику.',
  },
  {
    title: 'Международный опыт обучения',
    text: 'Четыре года изучения английского языка на курсах и три месяца проживания и обучения в Лондоне.',
  },
  {
    title: 'Мой подход',
    text: 'Интерес к поиску решений, автоматизации повторяющихся процессов, созданию интерфейсов и разработке цифровых инструментов.',
  },
]

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="wrap grid gap-14 lg:gap-20">
        <SectionHeading index="01" label="Обо мне" title="Технологии, любопытство и практика" id="about-title" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="grid content-start gap-8">
            <p className="big-quote">
              {profile.summary[0]} <span>{profile.summary[1]}</span>
            </p>
            <div>
              <p className="location-chip">
                <MapPin size={18} className="text-accent" aria-hidden="true" />
                <span>
                  <span className="sr-only">Локация: </span>
                  {profile.location}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about-grid">
              {blocks.map((block, index) => (
                <article key={block.title} className="about-item grid content-start gap-3">
                  <span className="about-num">0{index + 1}</span>
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                </article>
              ))}
              <article className="about-item grid content-start gap-3">
                <span className="about-num">04</span>
                <h3>Локация</h3>
                <p>{profile.location}</p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
