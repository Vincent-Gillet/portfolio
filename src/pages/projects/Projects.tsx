import './Projects.css';
import { projectsList } from '../../data/projects.tsx';
import Nav from 'react-bootstrap/Nav';
import { FormLabel, FormSelect } from 'react-bootstrap';
import { act, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

type Project = {
    id: number;
    name: string;
    description: string;
    technologies: Technology[];
    link: LinkItem[];
    image: string;
    year: number;
}

type Technology = {
    name: string;
    icon: string;
}

type LinkItem = {
    label: string;
    url: string;
    icon: string;
}

function Projects() {

    const [activePage, setActivePage] = useState<number>(1);

    let maxProject = 6;
    let items = [];

    let hasShownStartEllipsis = false;
    let hasShownEndEllipsis = false;

    let lengthPages = Math.ceil(projectsList.length / maxProject);

    for (let number = 1; number <= lengthPages; number++) {

        if (number < activePage - 1 && !hasShownStartEllipsis) {
            items.push(<Pagination.Ellipsis key="ellipsis-start" disabled className='ellipsis' />);
            hasShownStartEllipsis = true;
        }
        if (number >= activePage - 1 && number <= activePage + 1) {
            items.push(
                <Pagination.Item key={number} active={number === activePage} onClick={() => onClickPagination(number)}>
                {number}
                </Pagination.Item>,
            );
        }
        if (number > activePage + 1 && !hasShownEndEllipsis) {
            items.push(<Pagination.Ellipsis key="ellipsis-end" disabled className='ellipsis' />);
            hasShownEndEllipsis = true;
            break;
        }

        console.log(items);
    }



    let [techList, setTechList] = useState<Technology[]>([]);

    useEffect(() => {
        const allTechs = projectsList.flatMap(project => project.technologies);

        const uniqueTechs = allTechs.filter(
            (tech, index, self) =>
            index === self.findIndex((t) => t.name === tech.name)
        );

        setTechList(uniqueTechs);
    }, []);

    const lengthTech = 3;

    const [projects, setProjects] = useState<Project[]>(
        projectsList
            .sort((a, b) => {
               return new Date(b.year).getTime() - new Date(a.year).getTime();
            })
            .slice((activePage - 1) * maxProject
            , activePage * maxProject));

    const onChangeHandler = (event: React.ChangeEvent<HTMLFormElement>, pageNumber?: number) => {
        if (event.type === 'change') {
            event.preventDefault();

            const currentPage = pageNumber ?? activePage;

            const technologiesSelect = document.querySelector('#technologies') as HTMLSelectElement;
            const sortOrderSelect = document.querySelector('#sortOrder') as HTMLSelectElement;
            const textInput = document.querySelector('#text') as HTMLInputElement;

            const projectsFilter = projectsList
                .filter((project) => 
                    project.name.toLowerCase().includes(textInput.value.toLowerCase()) 
                    || project.description.toLowerCase().includes(textInput.value.toLowerCase())
                    || project.technologies.some((tech) => tech.name.toLowerCase().includes(textInput.value.toLowerCase()))
                    || project.year.toString().includes(textInput.value)
                )
                .filter((project) => technologiesSelect.value === 'all' || project.technologies.some((tech) => tech.name === technologiesSelect.value))
                .sort((a, b) => {
                    if (sortOrderSelect.value === 'newest') {
                        return new Date(b.year).getTime() - new Date(a.year).getTime();
                    } else {
                        return new Date(a.year).getTime() - new Date(b.year).getTime();
                    }
                })
                .slice((currentPage - 1) * maxProject, currentPage * maxProject)
            
            ;
            console.log((currentPage - 1) * maxProject, currentPage * maxProject);
            console.log(projectsFilter);

            setProjects(projectsFilter);
        }
    }

    const onClickPagination = (pageNumber: number) => {
        setActivePage(pageNumber);

        onChangeHandler(new Event('change') as unknown as React.ChangeEvent<HTMLFormElement>, pageNumber);
    }
    
    return (
        <div className="container " id="projects">
            <h1 className='title-h2 text-center m-4'>Projets</h1>
            <form className='row d-flex flex-column flex-md-row justify-content-md-between mb-4' onChange={onChangeHandler}>
                <div className='col-md-4 col-12'>
                    <FormLabel className='label-filter mb-2'>Rechercher projet</FormLabel>
                    <input type='text' id='text' className='input-form mb-4' placeholder='Rechercher un projet...' />
                </div>
                <div className='col-md-4 col-12'>
                    <FormLabel className='label-filter mb-2'>Trier par date :</FormLabel>
                    <select id='sortOrder' className="select-form filter mb-4" aria-label="Default select example">
                        <option id='test-option' value="newest">Les plus récents</option>
                        <option value="oldest">Les plus anciens</option>
                    </select>
                </div>
                <div className='col-md-4 col-12'>
                    <FormLabel className='label-filter mb-2'>Filtrer par technologie :</FormLabel>
                    <select id='technologies' className="select-form filter mb-4" aria-label="Default select example">
                        <option value="all">Toutes les technologies</option>
                        {techList.map((tech) => (
                            <option key={tech.name} value={tech.name}>{tech.name}</option>
                        ))}
                    </select>                    
                </div>

            </form>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    projects.map((project) => (
                        <div className="col d-flex justify-content-center" key={project.name}>
                            <Nav.Link as={Link} to={`/project/${project.id}`} className="card h-100" style={{width: "18rem"}}>
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
                    ))
                }
            </div>

        {
            projectsList.length > projects.length ?
                <Pagination className='pagination d-flex justify-content-center mb-4 mt-4'>
                    <Pagination.First disabled={activePage === 1} onClick={() => onClickPagination(1)} />
                    <Pagination.Prev disabled={activePage === 1} onClick={() => onClickPagination(activePage - 1)} />

                    {items}

                    <Pagination.Next disabled={activePage === lengthPages} onClick={() => onClickPagination(activePage + 1)} />
                    <Pagination.Last disabled={activePage === lengthPages} onClick={() => onClickPagination(lengthPages)} />
                </Pagination>                
            : null
        }
        </div>
    );
}

export default Projects;