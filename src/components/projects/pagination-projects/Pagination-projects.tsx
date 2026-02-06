import Pagination from 'react-bootstrap/Pagination';
import type { PaginationProjectsProps } from '../../../types/pagination.ts';

function PaginationProjects({
    paginationItems, 
    activePage, 
    lengthPages, 
    onClickPagination
}: PaginationProjectsProps) {
    return (
        <Pagination className='pagination d-flex justify-content-center mb-4'>
            <Pagination.First disabled={activePage === 1} onClick={() => onClickPagination(1)} />
            <Pagination.Prev disabled={activePage === 1} onClick={() => onClickPagination(activePage - 1)} />

            {paginationItems.map((item) => {
                if (item.type === 'ellipsis') {
                    return (
                        <Pagination.Ellipsis 
                            key={item.key} 
                            disabled 
                            className='ellipsis' 
                        />
                    );
                }
                
                return (
                    <Pagination.Item 
                        key={item.key} 
                        active={item.number === activePage} 
                        onClick={() => item.number && onClickPagination(item.number)}
                    >
                        {item.number}
                    </Pagination.Item>
                );
            })}

            <Pagination.Next disabled={activePage === lengthPages} onClick={() => onClickPagination(activePage + 1)} />
            <Pagination.Last disabled={activePage === lengthPages} onClick={() => onClickPagination(lengthPages)} />
        </Pagination>          
    );
}

export default PaginationProjects;