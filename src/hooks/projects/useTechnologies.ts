import { useState, useEffect } from 'react';
import { projectsList } from '../../data/projects';
import type { Technology } from '../../types/project';

export function useTechnologies() {
    const [techList, setTechList] = useState<Technology[]>([]);

    useEffect(() => {
        const allTechs = projectsList.flatMap(project => project.technologies);
        const uniqueTechs = allTechs.filter(
            (tech, index, self) =>
            index === self.findIndex((t) => t.name === tech.name)
        );
        setTechList(uniqueTechs);
    }, []);

    return techList;
}