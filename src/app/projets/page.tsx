import './Projects.css';
import ProjectsFilter from '../../components/projects/projects-filter/Projects-Filter.tsx';

export const metadata = {
  title: 'Mes Projets | Portfolio',
  description: 'Découvrez mes projets de développement : applications React, sites Spring et plus encore.',
}

export default function Projects() {
  return (
    <main className="container " id="projects">
      <h1 className='title-h2 text-center m-4'>Projets</h1>

      <ProjectsFilter/>
    </main>
  );
}