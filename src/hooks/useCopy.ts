import { useCallback, useEffect, useRef, useState } from 'react'

export type CopyState = 'idle' | 'copied' | 'failed'

/** Копирует текст в буфер обмена и на короткое время сообщает о результате. */
export function useCopy(resetMs = 2200) {
  const [state, setState] = useState<CopyState>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text: string) => {
      let ok = false
      try {
        await navigator.clipboard.writeText(text)
        ok = true
      } catch {
        // Запасной вариант для браузеров без доступа к Clipboard API.
        const area = document.createElement('textarea')
        area.value = text
        area.setAttribute('readonly', '')
        area.style.position = 'fixed'
        area.style.opacity = '0'
        document.body.appendChild(area)
        area.select()
        try {
          ok = document.execCommand('copy')
        } catch {
          ok = false
        }
        document.body.removeChild(area)
      }
      setState(ok ? 'copied' : 'failed')
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setState('idle'), resetMs)
      return ok
    },
    [resetMs],
  )

  return { state, copy }
}
