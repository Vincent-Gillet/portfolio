import type { ReactElement } from "react";
import type { Project } from "./project";

export interface PaginationProjectsProps {
    paginationItems: PaginationItem[];
    activePage: number;
    lengthPages: number;
    onClickPagination: (pageNumber: number) => void;
/*     filteredProjects: Project[];
    maxProject: number;
    setLengthPages: React.Dispatch<React.SetStateAction<number>>;
    setItems: React.Dispatch<React.SetStateAction<ReactElement[]>>; */
}

export interface PaginationItem {
    type: 'item' | 'ellipsis';
    number?: number;
    key: string;
}

export interface UsePaginationOptions {
    totalItems: number;
    itemsPerPage: number;
    activePage: number;
/*     onPageChange: (page: number) => void;
 */
}