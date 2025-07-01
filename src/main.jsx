import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/landingPage.scss'
import App from './components/landingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
