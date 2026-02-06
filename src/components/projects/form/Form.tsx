import { FormLabel } from 'react-bootstrap';
import { projectsList } from '../../../data/projects.tsx';
import { useEffect } from 'react';
import type { FormProjectProps } from '../../../types/form.ts';

function FormProject({
    onChangeHandler, 
/*     filterProjects, 
 */    
    techList, 
    technologiesRef,
    sortOrderRef,
    textRef
}: FormProjectProps) {

/*     useEffect(() => {
        const allTechs = projectsList.flatMap(project => project.technologies);

        const uniqueTechs = allTechs.filter(
            (tech, index, self) =>
            index === self.findIndex((t) => t.name === tech.name)
        );

        setTechList(uniqueTechs);

        filterProjects(1);
    }, []); */

    return (
        <form 
            className='row d-flex flex-column flex-md-row justify-content-md-between mb-4' 
            onChange={onChangeHandler}
        >
            <div className='col-md-4 col-12'>
                <FormLabel className='label-filter mb-2'>Rechercher projet</FormLabel>
                <input 
                    ref={textRef}
                    type='text' 
                    id='text' 
                    className='input-form mb-4 col-12' 
                    placeholder='Rechercher un projet...' 
                />
            </div>
            <div className='col-md-4 col-12'>
                <FormLabel className='label-filter mb-2'>Trier par date :</FormLabel>
                <select 
                    ref={sortOrderRef}
                    id='sortOrder' 
                    className="select-form filter mb-4" 
                    aria-label="Default select example"
                >
                    <option id='test-option' value="newest">Les plus récents</option>
                    <option value="oldest">Les plus anciens</option>
                </select>
            </div>
            <div className='col-md-4 col-12'>
                <FormLabel className='label-filter mb-2'>Filtrer par technologie :</FormLabel>
                <select 
                    ref={technologiesRef}
                    id='technologies' 
                    className="select-form filter mb-4" 
                    aria-label="Default select example"
                >
                    <option value="all">Toutes les technologies</option>
                    {techList.map((tech) => (
                        <option key={tech.name} value={tech.name}>{tech.name}</option>
                    ))}
                </select>                    
            </div>
        </form>
    );
};

export default FormProject;