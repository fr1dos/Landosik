import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './landingPage.scss'
import './media-querries.scss'
import App from './landingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
