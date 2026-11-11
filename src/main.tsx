import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Не найден контейнер #root')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
