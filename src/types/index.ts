export interface Profile {
  name: string
  /** Заголовок первого экрана. */
  headline: string
  heroSubtitle: string
  /** Подзаголовок для раздела «Обо мне» / метаданных. */
  intro: string
  /** Абзацы краткого описания. */
  summary: string[]
  age: number
  location: string
  /** Подпись над заголовком первого экрана. */
  eyebrow: string
  tagline: string
  /** Показывать индикатор «Открыт к предложениям». По умолчанию выключен. */
  openToWork: boolean
  /** Портрет: положите файл в public/ и укажите путь, например '/portrait.jpg'. */
  portrait?: { src: string; alt: string }
  /** Путь к PDF-резюме в public/, например '/resume/arsentiy-cv.pdf'. */
  resumeUrl?: string
}

export type EducationStatus = 'ended' | 'completed' | 'ongoing'

export interface EducationEntry {
  id: string
  title: string
  /** Продолжительность в человекочитаемом виде. */
  duration: string
  /** Продолжительность в месяцах: используется только для пропорциональной шкалы. */
  months: number
  /** Крупное значение для акцента: «3», «4», «3». */
  durationValue: string
  durationUnit: string
  area: string
  format: string
  /** Необязательные проверенные сведения: добавляйте, когда они появятся. */
  organization?: string
  city?: string
  years?: string
  specialty?: string
  /** Подпись статуса показывается только если задана. */
  statusLabel?: string
  status?: EducationStatus
  note?: string
}

export interface Certificate {
  id: string
  title: string
  /** Путь к изображению в public/certificates/, например '/certificates/diploma-1.jpg'. */
  image: string
  alt?: string
  issuer?: string
  year?: string
  description?: string
}

export type ProjectStatus = 'concept' | 'in-progress' | 'completed'

export type PreviewKind = 'ai-studio' | 'smart-office' | 'network-monitor'

export interface ProjectScreenshot {
  src: string
  alt: string
}

export interface Project {
  id: string
  number: string
  title: string
  category: string
  summary: string
  status: ProjectStatus
  /** Тип встроенного иллюстративного превью. Для настоящего проекта можно указать screenshots. */
  preview?: PreviewKind
  /** Технологии, которые действительно используются в проекте. Пустой список — стек не выбран. */
  stack: string[]
  description: string
  task: string
  solution: string
  features: string[]
  screenshots?: ProjectScreenshot[]
  repoUrl?: string
  demoUrl?: string
  /** Пометка для концепций: объясняет, что это идея или макет. */
  disclaimer?: string
}

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'tools'
  | 'automation'
  | 'ai'

export interface Skill {
  name: string
  category: SkillCategory
  /** Краткое описание практического применения. */
  usage?: string
  /** Названия проектов, где технология действительно использовалась. */
  projects?: string[]
}

export type SocialKind = 'email' | 'telegram' | 'github'

export interface SocialLink {
  kind: SocialKind
  label: string
  /** Пустая строка — контакт не заполнен и не показывается. */
  value: string
  /** Ссылка. Для email формируется автоматически (mailto:). */
  url: string
}
