import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Homepage';
import Projects from './pages/projects/Projects';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Project from './pages/project/project.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { useScrollToHash } from './hooks/useScrollToHash.tsx';

const linkPages = [
    { name: 'A propos', href: '/#about' },
    { name: 'Projects', href: '/projets' },
    { name: 'Me Contacter', href: '/#contact' },
];

function AppContent() {
  useScrollToHash();

  return (
    <>
      <Header linkPages={linkPages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Footer linkPages={linkPages} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;