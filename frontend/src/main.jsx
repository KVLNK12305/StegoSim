import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TerminalTab from './components/TerminalTab.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TerminalTab/>
  </StrictMode>,
)
