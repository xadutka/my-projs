import { skillCategories, skills } from '../data/skills'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Skills() {
  const groups = skillCategories
    .map((category) => ({ ...category, items: skills.filter((skill) => skill.category === category.id) }))
    .filter((group) => group.items.length > 0)

  return (
    <section id="skills" className="section" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="wrap grid gap-14">
        <SectionHeading index="05" label="Навыки" title="Технологии и инструменты" id="skills-title" />

        {groups.length === 0 ? (
          <Reveal>
            <p className="empty-note">Список технологий постепенно пополняется по мере работы над проектами.</p>
          </Reveal>
        ) : (
          <div>
            {groups.map((group, index) => (
              <Reveal key={group.id} delay={index * 60}>
                <div className="skill-group grid gap-5 md:grid-cols-[240px_1fr]">
                  <h3>{group.label}</h3>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((skill) => (
                      <li key={skill.name} className="skill-item">
                        <strong>{skill.name}</strong>
                        {skill.usage && <span>{skill.usage}</span>}
                        {skill.projects && skill.projects.length > 0 && (
                          <small>Проекты: {skill.projects.join(', ')}</small>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
