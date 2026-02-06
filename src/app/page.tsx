"use client";

import Presentation from '../components/homepage/presentation/Presentation';
import A_propos from '../components/homepage/a-propos/A-propos';
import Contact from '../components/homepage/contact/Contact';
import Cours from '../components/homepage/cours/Cours';
import Experience from '../components/homepage/experience/Experience';
import Skills from '../components/homepage/skills/Skills';
import Tools from '../components/homepage/tools/Tools';

function HomePage() {
  return (
    <main>
      <Presentation />
      <A_propos />
      <Cours />
      <Experience />
      <Skills />
      <Tools />
      <Contact />
    </main>
  );
}

export default HomePage;