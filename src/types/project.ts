import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type Project = {
    id: number;
    slug: string;
    name: string;
    description: string;
    technologies: Technology[];
    link: LinkItem[];
    image: string;
    year: number;
}

export type Technology = {
    name: string;
    icon: IconDefinition;
}

export type LinkItem = {
    label: string;
    url: string;
    icon: IconDefinition;
}