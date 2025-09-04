import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import App from './App.tsx'
// import App from './components/ep1/ep1.tsx'
// import App from './components/ep2/ep2.tsx'
// import App from './components/ep3/ep3.tsx'
import App from './components/ep4/ep4.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
