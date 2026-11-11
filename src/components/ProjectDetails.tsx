import { ExternalLink, Info } from 'lucide-react'
import type { Project } from '../types'
import { statusLabel } from '../lib/labels'
import { externalProps, isSafeUrl } from '../lib/utils'
import { Modal } from './Modal'
import { ProjectPreview } from './ProjectPreview'

interface ProjectDetailsProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const titleId = 'project-details-title'
  return (
    <Modal open={project !== null} onClose={onClose} labelledBy={titleId}>
      {project && (
        <div className="grid gap-8 p-5 pt-16 sm:p-8 sm:pt-16 md:p-10 md:pt-14">
          <header className="grid gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="project-num">{project.number}</span>
              <span className="tag">{project.category}</span>
              <span className="pill" data-tone={project.status === 'concept' ? undefined : 'accent'}>
                <i aria-hidden="true" />
                {statusLabel[project.status]}
              </span>
            </div>
            <h2 id={titleId} className="project-title">
              {project.title}
            </h2>
          </header>

          {project.disclaimer && (
            <div className="notice" role="note">
              <Info size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <p>{project.disclaimer}</p>
            </div>
          )}

          <div className="preview-frame">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="grid gap-px">
                {project.screenshots.map((shot) => (
                  <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                ))}
              </div>
            ) : project.preview ? (
              <ProjectPreview kind={project.preview} />
            ) : null}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="detail-block md:col-span-2">
              <h4>Описание</h4>
              <p>{project.description}</p>
            </section>
            <section className="detail-block">
              <h4>Задача</h4>
              <p>{project.task}</p>
            </section>
            <section className="detail-block">
              <h4>{project.status === 'completed' ? 'Решение' : 'Предполагаемое решение'}</h4>
              <p>{project.solution}</p>
            </section>
            <section className="detail-block">
              <h4>Функциональность</h4>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
            <section className="detail-block">
              <h4>Стек</h4>
              {project.stack.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <p>Технологии пока не выбраны: проект на стадии идеи.</p>
              )}
            </section>
          </div>

          {((project.repoUrl && isSafeUrl(project.repoUrl)) || (project.demoUrl && isSafeUrl(project.demoUrl))) && (
            <div className="flex flex-wrap gap-3">
              {project.repoUrl && isSafeUrl(project.repoUrl) && (
                <a className="btn btn-ghost" href={project.repoUrl} {...externalProps(project.repoUrl)}>
                  Репозиторий
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
              {project.demoUrl && isSafeUrl(project.demoUrl) && (
                <a className="btn btn-primary" href={project.demoUrl} {...externalProps(project.demoUrl)}>
                  Демоверсия
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  )
}
