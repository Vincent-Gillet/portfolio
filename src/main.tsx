import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
