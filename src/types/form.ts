import type { Technology } from './project';

export interface FormProjectProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLFormElement>) => void;
/*     filterProjects: (pageNumber: number) => void;
 */    
    techList: Technology[];
/*     setTechList: React.Dispatch<React.SetStateAction<Technology[]>>;
 */    
    technologiesRef: React.RefObject<HTMLSelectElement | null>;
    sortOrderRef: React.RefObject<HTMLSelectElement | null>;
    textRef: React.RefObject<HTMLInputElement | null>;
}