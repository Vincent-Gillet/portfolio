"use client";

import { useEffect } from 'react';
import Card from '../card/Card.tsx';
import FormProject from '../form/Form.tsx';
import PaginationProjects from '../pagination-projects/Pagination-projects.tsx';
import { useTechnologies } from '../../../hooks/projects/useTechnologies.ts';
import { useProjects } from '../../../hooks/projects/useProjects.ts';
import { usePagination } from '../../../hooks/projects/usePagination.ts';

export default function ProjectsFilter() {

    const maxProject = 6;
    const lengthTech = 2;

    const techList = useTechnologies();

    const {
        activePage,
        projects,
        filteredProjects,
        technologiesRef,
        sortOrderRef,
        textRef,
        filterProjects,
        onChangeHandler,
        onClickPagination
    } = useProjects({ itemsPerPage: maxProject });

    useEffect(() => {
        filterProjects(1);
    }, []);

    const { paginationItems, totalPages } = usePagination({
        totalItems: filteredProjects.length,
        itemsPerPage: maxProject,
        activePage 
    });

    return (
        <>
            <FormProject 
                onChangeHandler={onChangeHandler} 
                techList={techList} 
                technologiesRef={technologiesRef}
                sortOrderRef={sortOrderRef}
                textRef={textRef}
            />
            <div id="projects-list" className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {
                projects.map((project) => (
                    <Card 
                        key={project.id} 
                        project={project} 
                        lengthTech={lengthTech} 
                    />
                ))
                }
            </div>

            {
                projects.length > 0 ?
                    <PaginationProjects 
                    paginationItems={paginationItems}
                    activePage={activePage}
                    lengthPages={totalPages}
                    onClickPagination={onClickPagination}
                    />          
                : null
            }
        </>
    );
}