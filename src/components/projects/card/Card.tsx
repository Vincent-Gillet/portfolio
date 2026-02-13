import Nav from 'react-bootstrap/Nav';
import type { Project } from '../../../types/project';

function Card({ project, lengthTech }: { project: Project, lengthTech: number }) {

    return (
        <>
            <div className="col d-flex justify-content-center" key={project.name}>
                <Nav.Link href={`/projets/${project.slug}`} className="card h-100" style={{width: "18rem"}}>
                    <img src={project.image} className="card-img-top" alt={project.name} />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <div className='tech-icons d-flex gap-2 flex-wrap'>
                            {project.technologies.slice(0, lengthTech).map((tech) => (
                                <span className='badge' key={tech.name}>{tech.name}</span>
                            ))}
                            {project.technologies.length > lengthTech ? 
                                <span className='badge'>+{project.technologies.length - lengthTech}</span> 
                                :
                                null
                            }
                        </div>
                    </div>
                </Nav.Link>
            </div>
        </>
    );

}

export default Card;