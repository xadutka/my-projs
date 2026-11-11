import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'
import { statusLabel } from '../lib/labels'
import { ProjectPreview } from './ProjectPreview'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const shot = project.screenshots?.[0]
  return (
    <article className="project-card" aria-labelledby={`project-${project.id}-title`}>
      <div className="preview-frame">
        {project.preview ? (
          <ProjectPreview kind={project.preview} />
        ) : shot ? (
          <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
        ) : null}
      </div>

      <div className="grid gap-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="project-num">{project.number}</span>
          <span className="tag">{project.category}</span>
          <span className="pill" data-tone={project.status === 'concept' ? undefined : 'accent'}>
            <i aria-hidden="true" />
            {statusLabel[project.status]}
          </span>
        </div>

        <h3 id={`project-${project.id}-title`} className="project-title">
          {project.title}
        </h3>
        <p className="lead">{project.summary}</p>

        {project.stack.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Технологии проекта">
            {project.stack.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.disclaimer && (
          <p className="text-sm text-dim">Проектная идея и демонстрационный макет, а не готовое приложение.</p>
        )}

        <div>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => onOpen(project)}
            aria-label={`Подробнее о проекте ${project.title}`}
          >
            Подробнее
            <ArrowUpRight size={18} className="arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
