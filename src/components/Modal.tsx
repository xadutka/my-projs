import { useRef } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useDialog } from '../hooks/useDialog'

interface ModalProps {
  open: boolean
  onClose: () => void
  /** id элемента внутри окна, который служит заголовком. */
  labelledBy: string
  children: ReactNode
  maxWidth?: string
}

/** Доступное модальное окно: Escape, клик вне окна, кнопка закрытия, ловушка фокуса. */
export function Modal({ open, onClose, labelledBy, children, maxWidth }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  useDialog(open, onClose, panelRef)

  if (!open) return null

  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        style={maxWidth ? { maxWidth } : undefined}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Закрыть окно">
          <X size={20} aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
