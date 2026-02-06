"use client";

import { useEffect } from 'react';
import { usePathname  } from 'next/navigation';

export function useScrollToHash() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const hash = window.location.hash;

        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname]);
}
