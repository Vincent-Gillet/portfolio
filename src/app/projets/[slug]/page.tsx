import './Project.css';
import { projectsList } from '../../../data/projects.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Project } from "../../../types/project.ts"; 
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: {params: any}) {
    const { slug } = await params
    const project = projectsList.find(p => p.slug === slug)

    if (!project) {
        return {
            title: 'Projet non trouvé',
        }
    }

    return {
        title: `${project.name} | Portfolio`,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            images: [project.image],
        },
    }
}

async function Project({ params }: { params: any }) {
    const { slug } = await params;
    const project = projectsList.find((project) => project.slug === slug);

    if (!project) {
        notFound();
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

export function generateStaticParams() {
   return projectsList.map((project) => ({
       slug: project.slug,
   }))
}