import type { EducationEntry } from '../types'

/**
 * Образовательный путь. Добавляйте только проверенные сведения:
 * organization, city, years, specialty — когда они будут известны.
 */
export const education: EducationEntry[] = [
  {
    id: 'programming',
    title: 'Программирование',
    duration: '3 года',
    months: 36,
    durationValue: '3',
    durationUnit: 'года',
    area: 'Программирование и технические дисциплины',
    format: 'Обучение в учебном заведении',
    statusLabel: 'Обучение прекращено',
    status: 'ended',
    // organization: '',
    // years: '',
    // specialty: '',
  },
  {
    id: 'english',
    title: 'Английский язык',
    duration: '4 года',
    months: 48,
    durationValue: '4',
    durationUnit: 'года',
    area: 'Изучение английского языка',
    format: 'Специализированные языковые курсы',
    // organization: '',
    // years: '',
  },
  {
    id: 'london',
    title: 'Обучение в Лондоне',
    duration: '3 месяца',
    months: 3,
    durationValue: '3',
    durationUnit: 'месяца',
    area: 'Англоязычная среда',
    format: 'Проживание и обучение в англоязычной среде',
    city: 'Лондон, Великобритания',
    // organization: '',
    // years: '',
  },
]
