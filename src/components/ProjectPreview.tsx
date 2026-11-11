import type { PreviewKind } from '../types'

/**
 * Оригинальные иллюстративные макеты интерфейсов для проектов-концепций.
 * Это декоративные схемы, а не скриншоты настоящих приложений; текст на них условный.
 */

const C = {
  bg: '#0a0b0e',
  panel: '#121419',
  panel2: '#171a21',
  line: '#242833',
  text: '#f4f5f7',
  muted: '#a1a7b3',
  dim: '#566070',
  accent: '#c4f53b',
  ok: '#6ee7a8',
  warn: '#f5c451',
  bad: '#ff7a7a',
  violet: '#b9a8ff',
}

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

function WindowBar({ title }: { title: string }) {
  return (
    <g>
      <rect width="640" height="34" fill={C.panel} />
      <line x1="0" y1="34" x2="640" y2="34" stroke={C.line} />
      <circle cx="18" cy="17" r="4" fill="#2c313d" />
      <circle cx="33" cy="17" r="4" fill="#2c313d" />
      <circle cx="48" cy="17" r="4" fill="#2c313d" />
      <text x="320" y="21" textAnchor="middle" fontSize="11" fill={C.dim} fontFamily={MONO}>
        {title}
      </text>
    </g>
  )
}

function AiStudio() {
  const tools = [0, 1, 2, 3, 4]
  const history = [0, 1, 2, 3, 4]
  return (
    <>
      <WindowBar title="ai-studio / workspace" />
      {/* Боковая панель инструментов */}
      <rect y="35" width="140" height="365" fill={C.panel} />
      <line x1="140" y1="35" x2="140" y2="400" stroke={C.line} />
      <text x="16" y="62" fontSize="10" fill={C.dim} fontFamily={MONO} letterSpacing="1.5">
        TOOLS
      </text>
      {tools.map((i) => (
        <g key={i} transform={`translate(12 ${76 + i * 40})`}>
          <rect width="116" height="32" rx="8" fill={i === 1 ? C.panel2 : 'none'} stroke={i === 1 ? C.line : 'none'} />
          <rect x="10" y="9" width="14" height="14" rx="4" fill={i === 1 ? C.accent : '#2a2f3b'} />
          <rect x="32" y="13" width={[56, 44, 62, 40, 52][i]} height="6" rx="3" fill={i === 1 ? C.text : '#3a4050'} />
        </g>
      ))}

      {/* Центральная область: редактор запроса */}
      <text x="162" y="62" fontSize="10" fill={C.dim} fontFamily={MONO} letterSpacing="1.5">
        PROMPT
      </text>
      <rect x="160" y="74" width="290" height="132" rx="12" fill={C.panel} stroke={C.line} />
      <rect x="176" y="92" width="200" height="7" rx="3.5" fill="#3a4050" />
      <rect x="176" y="110" width="250" height="7" rx="3.5" fill="#2c313d" />
      <rect x="176" y="128" width="170" height="7" rx="3.5" fill="#2c313d" />
      <rect x="352" y="126" width="2" height="11" fill={C.accent} />
      <rect x="176" y="172" width="54" height="22" rx="11" fill="none" stroke={C.line} />
      <rect x="238" y="172" width="54" height="22" rx="11" fill="none" stroke={C.line} />
      <rect x="378" y="170" width="60" height="26" rx="13" fill={C.accent} />
      <text x="408" y="187" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0c0d10" fontFamily={MONO}>
        RUN
      </text>

      <text x="162" y="236" fontSize="10" fill={C.dim} fontFamily={MONO} letterSpacing="1.5">
        RESULT
      </text>
      <rect x="160" y="248" width="290" height="136" rx="12" fill={C.panel} stroke={C.line} />
      <rect x="176" y="266" width="120" height="8" rx="4" fill={C.violet} opacity=".8" />
      <rect x="176" y="286" width="250" height="6" rx="3" fill="#2c313d" />
      <rect x="176" y="302" width="230" height="6" rx="3" fill="#2c313d" />
      <rect x="176" y="318" width="244" height="6" rx="3" fill="#2c313d" />
      <rect x="176" y="334" width="150" height="6" rx="3" fill="#2c313d" />
      <rect x="176" y="356" width="64" height="16" rx="8" fill="none" stroke={C.line} />

      {/* История операций */}
      <rect x="466" y="35" width="174" height="365" fill={C.panel} />
      <line x1="466" y1="35" x2="466" y2="400" stroke={C.line} />
      <text x="484" y="62" fontSize="10" fill={C.dim} fontFamily={MONO} letterSpacing="1.5">
        HISTORY
      </text>
      <line x1="492" y1="84" x2="492" y2="368" stroke={C.line} />
      {history.map((i) => (
        <g key={i} transform={`translate(0 ${80 + i * 58})`}>
          <circle cx="492" cy="8" r="4" fill={i === 0 ? C.accent : '#2c313d'} />
          <rect x="508" y="2" width={[96, 80, 104, 70, 90][i]} height="7" rx="3.5" fill={i === 0 ? C.text : '#3a4050'} />
          <rect x="508" y="18" width={[60, 90, 50, 76, 58][i]} height="5" rx="2.5" fill="#262b36" />
        </g>
      ))}
    </>
  )
}

function SmartOffice() {
  const rows = [
    { w: 150, s: C.ok, p: 100 },
    { w: 118, s: C.warn, p: 64 },
    { w: 168, s: C.warn, p: 38 },
    { w: 132, s: C.dim, p: 8 },
    { w: 144, s: C.ok, p: 100 },
    { w: 104, s: C.dim, p: 0 },
  ]
  return (
    <>
      <WindowBar title="smart-office / dashboard" />
      {/* Левая навигация */}
      <rect y="35" width="64" height="365" fill={C.panel} />
      <line x1="64" y1="35" x2="64" y2="400" stroke={C.line} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="20" y={58 + i * 46} width="24" height="24" rx="7" fill={i === 0 ? C.accent : '#2a2f3b'} />
      ))}

      {/* Заголовок и вкладки */}
      <rect x="88" y="54" width="130" height="10" rx="5" fill={C.text} />
      {['Таблицы', 'Документы', 'Задачи'].map((label, i) => (
        <g key={label} transform={`translate(${88 + i * 84} 82)`}>
          <rect width="76" height="26" rx="13" fill={i === 0 ? C.panel2 : 'none'} stroke={C.line} />
          <text x="38" y="17" textAnchor="middle" fontSize="11" fill={i === 0 ? C.text : C.dim} fontFamily={MONO}>
            {label}
          </text>
        </g>
      ))}

      {/* Таблица */}
      <rect x="88" y="124" width="536" height="262" rx="12" fill={C.panel} stroke={C.line} />
      <line x1="88" y1="156" x2="624" y2="156" stroke={C.line} />
      {['ЗАДАЧА', 'СТАТУС', 'ПРОГРЕСС'].map((h, i) => (
        <text key={h} x={[108, 330, 450][i]} y="144" fontSize="9" fill={C.dim} fontFamily={MONO} letterSpacing="1.2">
          {h}
        </text>
      ))}
      {rows.map((r, i) => (
        <g key={i} transform={`translate(0 ${156 + i * 38})`}>
          {i > 0 && <line x1="88" y1="0" x2="624" y2="0" stroke="#1a1d25" />}
          <rect x="108" y="15" width={r.w} height="7" rx="3.5" fill="#3a4050" />
          <circle cx="334" cy="19" r="4" fill={r.s} />
          <rect x="346" y="16" width="44" height="6" rx="3" fill="#2c313d" />
          <rect x="450" y="16" width="120" height="6" rx="3" fill="#232733" />
          <rect x="450" y="16" width={(120 * r.p) / 100} height="6" rx="3" fill={r.s === C.dim ? '#3a4050' : r.s} />
        </g>
      ))}
    </>
  )
}

function NetworkMonitor() {
  const nodes = [
    { x: 150, y: 90, s: C.ok },
    { x: 290, y: 78, s: C.ok },
    { x: 80, y: 190, s: C.warn },
    { x: 330, y: 200, s: C.ok },
    { x: 140, y: 252, s: C.ok },
    { x: 290, y: 258, s: C.bad },
  ]
  const hub = { x: 210, y: 190 }
  const spark = '0,38 18,30 36,34 54,20 72,26 90,12 108,22 126,8 144,16 162,6'
  return (
    <>
      <WindowBar title="network-monitor / topology" />
      {/* Схема соединений */}
      <rect x="0" y="35" width="400" height="255" fill="#0d0f13" />
      {nodes.map((n, i) => (
        <line key={i} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} stroke="#2c313d" strokeWidth="1.5" strokeDasharray={n.s === C.bad ? '4 4' : undefined} />
      ))}
      <circle cx={hub.x} cy={hub.y} r="26" fill={C.panel} stroke={C.accent} strokeWidth="1.5" />
      <circle cx={hub.x} cy={hub.y} r="8" fill={C.accent} />
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="16" fill={C.panel} stroke={C.line} />
          <circle cx={n.x} cy={n.y} r="5" fill={n.s} />
        </g>
      ))}

      {/* Панель устройств */}
      <rect x="400" y="35" width="240" height="255" fill={C.panel} />
      <line x1="400" y1="35" x2="400" y2="290" stroke={C.line} />
      <text x="418" y="60" fontSize="10" fill={C.dim} fontFamily={MONO} letterSpacing="1.5">
        DEVICES
      </text>
      {nodes.map((n, i) => (
        <g key={i} transform={`translate(418 ${74 + i * 34})`}>
          <circle cx="5" cy="10" r="4" fill={n.s} />
          <rect x="20" y="6" width={[84, 64, 96, 72, 88, 60][i]} height="7" rx="3.5" fill="#3a4050" />
          <rect x="164" y="7" width="40" height="5" rx="2.5" fill="#262b36" />
        </g>
      ))}

      {/* Журнал событий и график */}
      <rect x="0" y="290" width="640" height="110" fill={C.bg} />
      <line x1="0" y1="290" x2="640" y2="290" stroke={C.line} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(18 ${312 + i * 22})`}>
          <rect y="-8" width="6" height="6" rx="1.5" fill={[C.ok, C.warn, C.ok, C.bad][i]} />
          <text x="16" y="-2" fontSize="10" fill={C.dim} fontFamily={MONO}>
            {['event.log', 'event.log', 'event.log', 'event.log'][i]}
          </text>
          <rect x="84" y="-8" width={[170, 130, 190, 110][i]} height="6" rx="3" fill="#262b36" />
        </g>
      ))}
      <rect x="420" y="306" width="200" height="72" rx="10" fill={C.panel} stroke={C.line} />
      <polyline points={spark} transform="translate(440 322) scale(0.9 1)" fill="none" stroke={C.accent} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <rect x="440" y="360" width="90" height="5" rx="2.5" fill="#262b36" />
    </>
  )
}

const LABELS: Record<PreviewKind, string> = {
  'ai-studio': 'Демонстрационный макет интерфейса AI Studio: панель инструментов, редактор запроса, результат и история операций',
  'smart-office': 'Демонстрационный макет интерфейса Smart Office: навигация, вкладки и таблица со статусами задач',
  'network-monitor': 'Демонстрационный макет интерфейса Network Monitor: схема сети, список устройств, журнал событий и график',
}

export function ProjectPreview({ kind }: { kind: PreviewKind }) {
  return (
    <svg viewBox="0 0 640 400" role="img" aria-label={LABELS[kind]} xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="400" fill={C.bg} />
      {kind === 'ai-studio' && <AiStudio />}
      {kind === 'smart-office' && <SmartOffice />}
      {kind === 'network-monitor' && <NetworkMonitor />}
    </svg>
  )
}
