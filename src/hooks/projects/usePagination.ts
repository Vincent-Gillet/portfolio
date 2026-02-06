'use client';

import { useState, useEffect } from 'react';
import type { PaginationItem, UsePaginationOptions } from '../../types/pagination';

export function usePagination({ 
    totalItems, 
    itemsPerPage, 
    activePage
}: UsePaginationOptions) {
    const [paginationItems, setPaginationItems] = useState<PaginationItem[]>([]);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        const newItems: PaginationItem[] = [];
        let hasShownStartEllipsis = false;
        let hasShownEndEllipsis = false;

        for (let number = 1; number <= totalPages; number++) {
            if (number < activePage - 1 && !hasShownStartEllipsis) {
                newItems.push({
                    type: 'ellipsis',
                    key: 'ellipsis-start'
                });
                hasShownStartEllipsis = true;
            }
            
            if (number >= activePage - 1 && number <= activePage + 1) {
                newItems.push({
                    type: 'item',
                    number,
                    key: `page-${number}`
                });
            }
            
            if (number > activePage + 1 && !hasShownEndEllipsis) {
                newItems.push({
                    type: 'ellipsis',
                    key: 'ellipsis-end'
                });
                hasShownEndEllipsis = true;
                break;
            }
        }
        
        setPaginationItems(newItems);
    }, [totalItems, activePage, totalPages]);

    return { paginationItems, totalPages };
}
