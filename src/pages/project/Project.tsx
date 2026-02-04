import { projectsList } from "../../data/projects";

function Project() {

    const index = window.location.pathname.split('/projet/')[1];

    const project = projectsList.find(proj => proj.id.toString() === index);

    return (
        <div className="container mb-3">
            <h1 className='title-h2 text-center m-4'>{project?.name}</h1>
            <div className="row">
                <div className="col-lg-6 col-12 mb-4">
                    <img src={project?.image} alt={project?.name} className="img-fluid rounded" />
                </div>
                <div className="col-lg-6 col-12 mb-4">
                    <h2>Description</h2>
                    <p>{project?.description}</p>
                    <h3>Réalisé en : {project?.year}</h3>
                    <h3>Technologies utilisées</h3>
                    <div className="row gap-auto justify-content-center justify-content-sm-start mt-4 mb-5 skills-container">
                        {project?.technologies.map((tech) => (
                            <div className='skill-container col-5 col-sm-3 d-flex flex-column align-items-center' key={tech.name}>
                                <div className='icon-skill'>
                                    <i className={tech.icon}></i>
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
                                    <i className={` ${linkItem.icon} ms-2`}></i>
                                </a>
                            ))}
                        </div>      
                        : null              
                    }


                </div>
            </div>

        </div>
    );
}

export default Project;