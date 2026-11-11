import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const steps = [
  {
    title: 'Понимание задачи',
    text: 'Разбираюсь в цели и определяю, какую проблему необходимо решить.',
  },
  {
    title: 'Проектирование',
    text: 'Выбираю подход, продумываю структуру решения и необходимые инструменты.',
  },
  {
    title: 'Разработка',
    text: 'Реализую функциональность, проверяю работу и исправляю ошибки.',
  },
  {
    title: 'Улучшение',
    text: 'Проверяю результат, устраняю недостатки и совершенствую решение.',
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="section" aria-labelledby="workflow-title" tabIndex={-1}>
      <div className="wrap grid gap-14">
        <SectionHeading index="06" label="Подход" title="Как я подхожу к задачам" id="workflow-title" />

        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-dot" aria-hidden="true" />
              <Reveal delay={index * 100}>
                <span className="step-num">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
