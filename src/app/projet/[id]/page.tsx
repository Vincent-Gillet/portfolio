'use client';

import './Project.css';
import { useEffect, useState } from "react";
import { projectsList } from '../../../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import type { Project } from "../../../types/project.tsx"; 
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';

function Project() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const id = window.location.pathname.split('/projet/')[1];
      const index = parseInt(id, 10) - 1;
      setProject(projectsList[index] || null);
      setLoading(false);
  }, []);

    if (loading) {
        return (
        <main id="project" className="container mb-3">
            {/* Skeleton pour le titre */}
            <h1 className='title-h2 text-center m-4'>
                <Skeleton width={300} height={40} />
            </h1>

            {/* Skeleton pour l'image */}
            <div className="row">
                <div className="col-12 mb-4">
                    <Skeleton className="image-skeleton" />
                </div>
            </div>

            {/* Skeleton pour le contenu */}
            <div id="description" className="row">
                <div className="col-12 mb-4">
                    <h2><Skeleton width={150} /></h2>
                    <Skeleton count={6} className="text-skeleton" />

                    <h3 className="mt-4"><Skeleton width={200} /></h3>
                    <Skeleton width={100} className="text-skeleton" />

                    <h3 className="mt-4"><Skeleton width={250} /></h3>
                    <div className="row gap-auto justify-content-center justify-content-sm-start mt-4 mb-4 skills-container">
                    {Array(4).fill(0).map((_, i) => (
                        <div key={i} className='col-5 col-sm-3 d-flex flex-column align-items-center'>
                            <Skeleton className="skill-skeleton" />
                            <Skeleton width={80} height={20} />
                        </div>
                    ))}
                    </div>

                    <h3 className="mt-4"><Skeleton width={150} /></h3>
                    <Skeleton width={120} height={40} className="rounded" />
                </div>
            </div>
        </main>
        );
    }

  if (!project) {
      return (
          <div className="container my-5 text-center">
              <h1>Projet non trouvé</h1>
              <Nav.Link href="/#projects" className="a-btn">
                  Retour aux projets
              </Nav.Link>
          </div>
      );
  }

  return (
        <main id="project" className="container mb-3">
            <h1 className='title-h2 text-center m-4'>{project?.name}</h1>
            <div className="row">
                <div className="col-12 mb-4">
                    <Image 
                        src={project.image} 
                        alt={project.name} 
                        width={700}  
                        height={400}
                        className="image-project img-fluid rounded" 
                        fetchPriority='high'
                        rel="preload"
                        priority    
                    />
                </div>
            </div>
            <div id='description' className="row">
                <div className="col-12 mb-4">
                    <h2>Description</h2>
                    <p>{project?.description}</p>
                    <h3>Réalisé en : {project?.year}</h3>
                    <h3>Technologies utilisées</h3>
                    <div className="row gap-auto justify-content-center justify-content-sm-start mt-4 mb-4 skills-container">
                        {project?.technologies.map((tech) => (
                            <div className='skill-container col-5 col-sm-3 d-flex flex-column align-items-center' key={tech.name}>
                                <div className='icon-skill'>
                                    <FontAwesomeIcon icon={tech.icon} />
                                </div>
                                <p className='label-skill'>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                    {project?.link ?
                        <div>
                            <h3>{project.link.length > 1 ? "Liens" : "Lien"}</h3>
                            {project.link.map((linkItem) => (
                                <a key={linkItem.url} href={linkItem.url} target="_blank" rel="noopener noreferrer" className="btn a-btn m-2">
                                    {linkItem.label}
                                    <FontAwesomeIcon icon={linkItem.icon} className="ms-2" />
                                </a>
                            ))}
                        </div>      
                        : null              
                    }
                </div>
            </div>
        </main>
  );
}

export default Project;