import type { ProjectStatus } from '../types'

export const statusLabel: Record<ProjectStatus, string> = {
  concept: 'Концепция',
  'in-progress': 'В разработке',
  completed: 'Завершён',
}
