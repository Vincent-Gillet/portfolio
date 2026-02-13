const electricityImg = '/assets/projets/electricity-business.avif';
const courstache = '/assets/projets/la-courstache.avif';
const marretCourtage = '/assets/projets/marret-courtage.avif';
const pixelSnack = '/assets/projets/pixel_snack.avif';
const pendu = '/assets/projets/pendu.avif';
const todoList = '/assets/projets/to_do_list.avif';
const portfolio = '/assets/projets/portfolio.avif';

import { faLeaf, faDatabase, faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import { 
    faCss3Alt, 
    faJs, 
    faReact, 
    faAngular, 
    faPhp, 
    faLaravel, 
    faWordpress,
    faBootstrap,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

export const projectsList = [
    {
        "id": 1,
        "slug": "courstache",
        "name": "Courstache",
        "description": "Ce projet est un site Vitrine pour une course pour une course contre les cancers masculin. Il a été realisé lors d'un stage en entreprise 1 mois et demi en parallèle d'autres missions dans une agence web COQPIT. Le site a pour but de présenter. J'ai utilisé WordPress pour la création de ce site, en personnalisant un thème Elementor. J'ai pu participer à toutes les étapes du projet, de la conception à la mise en ligne en passant par le développement.",
        "technologies": [
            {"name": "WordPress", "icon": faWordpress},
            {"name": "CSS3", "icon": faCss3Alt}
        ],
        "link": [
            {
                "label": "Site Web", 
                "url": "https://aubiere.lacourstache.com",
                "icon": faGlobe
            }
        ],
        "image": courstache,
        "year": 2023
    },
    {
        "id": 2,
        "slug": "marret-courtage",
        "name": "Marret Courtage",
        "description": "Ce projet est un site Vitrine pour un courtier en assurance. Il a été realisé lors d'un stage en entreprise 2 mois et demi en parallèle d'autres missions dans une agence web COQPIT. Le site a pour but de présenter les services du courtier, ces employées, ainsi que de permettre aux clients potentiels de le contacter facilement via un formulaire de contact. J'ai utilisé WordPress pour la création de ce site, en créant un thème personnalisé et en développant des fonctionnalités spécifiques pour répondre aux besoins du client. J'ai pu participer à toutes les étapes du projet, de la conception à la mise en ligne, au rendez vous client en passant par le développement et les tests.",
        "technologies": [
            {"name": "WordPress", "icon": faWordpress},
            {"name": "PHP", "icon": faPhp},
            {"name": "JavaScript", "icon": faJs},
            {"name": "CSS3", "icon": faCss3Alt}
        ],
        "link": [
            {
                "label": "Site Web", 
                "url": "https://www.marret-courtage.fr",
                "icon": faGlobe
            }
        ],
        "image": marretCourtage,
        "year": 2024
    },
    {
        "id": 3,
        "slug": "pixel-snack",
        "name": "Pixel Snack",
        "description": "Ce projet est un site de recette de cuisine qui apparaissent dans des films, séries, animés, etc. . Je l'ai réalisé ce projet dans le cadre de mon projet de fin d'études pour obtenir mon diplôme de concepteur développeur d'application. L'application permet aux utilisateurs de rechercher des recettes, de les filtrer par catégorie, de soumettre leurs propres recettes. J'ai utilisé React pour le front-end, Laravel pour le back-end et MySQL pour la base de données. J'ai également intégré des fonctionnalités telles que l'authentification des utilisateurs et la gestion des recettes.",
        "technologies": [
            {"name": "React", "icon": faReact},
            {"name": "Laravel", "icon": faLaravel},
            {"name": "CSS3", "icon": faCss3Alt}
        ],
        "link": [
            {
                "label": "GitHub", 
                "url": "https://github.com/Vincent-Gillet/Pixel-Snack",
                "icon": faGithub
            }
        ],
        "image": pixelSnack,
        "year": 2024
    },
    {
        "id": 4,
        "slug": "electricity-business",
        "name": "Electricity Business",
        "description": "Ce projet est un site de réservation de bornes de recharge pour les véhicules électriques entre particuliers. Il a été réalisé dans le cadre de mon projet de fin d'études pour obtenir mon diplôme de concepteur développeur d'application. L'application permet aux utilisateurs de rechercher et réserver la location de bornes de recharge pour véhicules électriques. J'ai utilisé Angular pour le front-end, Spring pour le back-end et MySQL pour la base de données. J'ai également intégré des fonctionnalités telles que l'authentification des utilisateurs et la géolocalisation des bornes de recharge.",
        "technologies": [
            
            {"name": "Angular", "icon": faAngular},
            {"name": "Spring", "icon": faLeaf},
            {"name": "MySQL", "icon": faDatabase},
            {"name": "TypeScript", "icon": faJs},
            {"name": "CSS3", "icon": faCss3Alt}
        ],
        "link": [
            {
                "label": "GitHub", 
                "url": "https://github.com/Vincent-Gillet/electricity-business",
                "icon": faGithub
            }
        ],
        "image": electricityImg,
        "year": 2025
    },
    {
        "id": 5,
        "slug": "portfolio-personnel",
        "name": "Portfolio Personnel",
        "description": "Ce projet est mon portfolio personnel, réalisé pour présenter mes compétences, mes projets et mon parcours professionnel en tant que développeur web. J'ai utilisé React pour le front-end, Bootstrap pour le design et la mise en page, et j'ai hébergé le site sur Netlify. Le portfolio met en avant mes réalisations, mes compétences techniques et offre un moyen de me contacter facilement.",
        "technologies": [
            {"name": "Next.js", "icon": faCode},
            {"name": "React", "icon": faReact},
            {"name": "Bootstrap", "icon": faBootstrap},
            {"name": "CSS3", "icon": faCss3Alt}
        ],
        "link": [
            {
                "label": "Site Web", 
                "url": "https://vincent-gillet-portfolio.netlify.app/",
                "icon": faGlobe
            }
        ],
        "image": portfolio,
        "year": 2026
    },
    {
        "id": 6,
        "slug": "to-do-liste",
        "name": "To Do Liste",
        "description": "Ce projet est une application de gestion de tâches simple qui permet aux utilisateurs de créer, modifier et supprimer des tâches. J'ai utilisé JavaScript pour le développement de cette application, en mettant l'accent sur une interface utilisateur intuitive et réactive. L'application permet aux utilisateurs de suivre leurs tâches quotidiennes et d'améliorer leur productivité.",
        "technologies": [
            {"name": "JavaScript", "icon": faJs},
        ],
        "link": [
            {
                "label": "GitHub",
                "url": "https://github.com/Vincent-Gillet/to_do_list",
                "icon": faGithub
            },
            {
                "label": "Site Web",
                "url": "https://vincent-gillet.github.io/to_do_list/",
                "icon": faGlobe
            }
        ],
        "image": todoList,
        "year": 2025
    },
    {
        "id": 7,
        "slug": "jeu-du-pendu",
        "name": "Jeu du Pendu",
        "description": "Ce projet est une version numérique du jeu du pendu, où les utilisateurs peuvent deviner des mots en proposant des lettres. J'ai utilisé JavaScript pour développer ce jeu, en mettant l'accent sur une interface utilisateur simple et engageante. Le jeu offre une expérience amusante tout en permettant aux utilisateurs de tester leurs compétences en vocabulaire.",
        "technologies": [
            {"name": "JavaScript", "icon": faJs},
        ],
        "link": [
            {
                "label": "GitHub",
                "url": "https://github.com/Vincent-Gillet/jeu_du_pendu",
                "icon": faGithub
            },
            {
                "label": "Site Web",
                "url": "https://vincent-gillet.github.io/jeu_du_pendu/",
                "icon": faGlobe
            }
        ],
        "image": pendu,
        "year": 2025
    },
]