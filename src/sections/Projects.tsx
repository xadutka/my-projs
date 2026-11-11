import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../types'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDetails } from '../components/ProjectDetails'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="wrap grid gap-14">
        <SectionHeading index="04" label="Проекты" title="Проекты и концепции" id="projects-title">
          <p className="lead">
            Идеи, над которыми я работаю. Пока это концепции и демонстрационные макеты интерфейсов, а не
            готовые приложения. Здесь появятся настоящие работы по мере их завершения.
          </p>
        </SectionHeading>

        {projects.length === 0 ? (
          <p className="empty-note">Проекты появятся здесь совсем скоро.</p>
        ) : (
          <div className="project-grid">
            {projects.map((project) => (
              <Reveal key={project.id}>
                <ProjectCard project={project} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <ProjectDetails project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
