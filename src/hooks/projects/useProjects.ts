import { useState, useEffect } from 'react';
import { projectsList } from '../../data/projects';
import type { Project } from "../../types/project";
import type { ReactElement } from "react";
import { useRef } from 'react';

interface UseProjectsOptions {
    itemsPerPage: number;
}

export function useProjects({ itemsPerPage }: UseProjectsOptions) {

    const [activePage, setActivePage] = useState<number>(1);
    
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]); 
    const [lengthPages, setLengthPages] = useState<number>(0);
    const [items, setItems] = useState<ReactElement[]>([]);    

    const technologiesRef = useRef<HTMLSelectElement>(null);
    const sortOrderRef = useRef<HTMLSelectElement>(null);
    const textRef = useRef<HTMLInputElement>(null);

    const filterProjects = (pageNumber: number) => {
      const techValue = technologiesRef.current?.value || 'all';
      const sortValue = sortOrderRef.current?.value || 'newest';
      const textValue = textRef.current?.value || '';

        const allFilteredProjects = projectsList
          .filter((project) => 
              project.name.toLowerCase().includes(textValue.toLowerCase()) 
              || project.description.toLowerCase().includes(textValue.toLowerCase())
              || project.technologies.some((tech) => tech.name.toLowerCase().includes(textValue.toLowerCase()))
              || project.year.toString().includes(textValue)
          )
          .filter((project) => 
              techValue === 'all' || 
              project.technologies.some((tech) => tech.name === techValue)
          )
          .sort((a, b) => {
              if (sortValue === 'newest') {
                  return new Date(b.year).getTime() - new Date(a.year).getTime();
              } else {
                  return new Date(a.year).getTime() - new Date(b.year).getTime();
              }
          });
          
        setFilteredProjects(allFilteredProjects);

        const projectsToDisplay = allFilteredProjects.slice(
            (pageNumber - 1) * itemsPerPage, 
            pageNumber * itemsPerPage
        );

      setProjects(projectsToDisplay);
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        filterProjects(activePage);
    };

    const onClickPagination = (pageNumber: number) => {
        setActivePage(pageNumber);
        filterProjects(pageNumber);
    };

    useEffect(() => {
      filterProjects(1);
    }, []);

    return {
        activePage,
        projects,
        filteredProjects,
        lengthPages,
        setLengthPages,  
        setItems,
        technologiesRef,
        sortOrderRef,
        textRef,
        filterProjects,
        onChangeHandler,
        onClickPagination
    };
}