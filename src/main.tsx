import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Footer from './components/footer/Footer.tsx';

const linkPages = [
    { name: 'A propos', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Me Contacter', href: '#contact' },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header linkPages={linkPages} />
    <Footer linkPages={linkPages} />
  </StrictMode>,
)
