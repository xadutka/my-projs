import type { Skill, SkillCategory } from '../types'

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: 'languages', label: 'Языки программирования' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Базы данных' },
  { id: 'tools', label: 'Инструменты разработки' },
  { id: 'automation', label: 'Автоматизация' },
  { id: 'ai', label: 'AI-интеграции' },
]

/**
 * Добавляйте только технологии, которыми вы действительно пользовались.
 * Пока список пуст, на сайте показывается нейтральное сообщение.
 *
 * Пример:
 * {
 *   name: 'Python',
 *   category: 'languages',
 *   usage: 'Скрипты для автоматизации рутинных задач',
 *   projects: ['Название проекта'],
 * }
 */
export const skills: Skill[] = []
