import electricityImg from '../assets/projets/electricity-business.png';
import courstache from '../assets/projets/la-courstache.png';
import marretCourtage from '../assets/projets/marret-courtage.png';
import pixelSnack from '../assets/projets/pixel_snack.png';
import pendu from '../assets/projets/pendu.png';
import todoList from '../assets/projets/to_do_liste.png';
import portfolio from '../assets/projets/portfolio.png';

export const projectsList = [
    {
        "id": 1,
        "name": "Courstache",
        "description": "Ce projet est un site Vitrine pour une course pour une course contre les cancers masculin. Il a été realisé lors d'un stage en entreprise 1 mois et demi en parallèle d'autres missions dans une agence web COQPIT. Le site a pour but de présenter. J'ai utilisé WordPress pour la création de ce site, en personnalisant un thème Elementor. J'ai pu participer à toutes les étapes du projet, de la conception à la mise en ligne en passant par le développement.",
        "technologies": [
            {"name": "WordPress", "icon": "fa-brands fa-wordpress"},
            {"name": "CSS3", "icon": "fa-brands fa-css3-alt"}
        ],
        "link": [
            {
                "label": "Site Web", 
                "url": "https://aubiere.lacourstache.com",
                "icon": "fa fa-globe"
            }
        ],
        "image": courstache,
        "year": 2023
    },
    {
        "id": 2,
        "name": "Marret Courtage",
        "description": "Ce projet est un site Vitrine pour un courtier en assurance. Il a été realisé lors d'un stage en entreprise 2 mois et demi en parallèle d'autres missions dans une agence web COQPIT. Le site a pour but de présenter les services du courtier, ces employées, ainsi que de permettre aux clients potentiels de le contacter facilement via un formulaire de contact. J'ai utilisé WordPress pour la création de ce site, en créant un thème personnalisé et en développant des fonctionnalités spécifiques pour répondre aux besoins du client. J'ai pu participer à toutes les étapes du projet, de la conception à la mise en ligne, au rendez vous client en passant par le développement et les tests.",
        "technologies": [
            {"name": "WordPress", "icon": "fa-brands fa-wordpress"},
            {"name": "PHP", "icon": "fa-brands fa-php"},
            {"name": "JavaScript", "icon": "fa-brands fa-js"},
            {"name": "CSS3", "icon": "fa-brands fa-css3-alt"}
        ],
        "link": [
            {
                "label": "Site Web", 
                "url": "https://www.marret-courtage.fr",
                "icon": "fa fa-globe"
            }
        ],
        "image": marretCourtage,
        "year": 2024
    },
    {
        "id": 3,
        "name": "Pixel Snack",
        "description": "Ce projet est un site de recette de cuisine qui apparaissent dans des films, séries, animés, etc. . Je l'ai réalisé ce projet dans le cadre de mon projet de fin d'études pour obtenir mon diplôme de concepteur développeur d'application. L'application permet aux utilisateurs de rechercher des recettes, de les filtrer par catégorie, de soumettre leurs propres recettes. J'ai utilisé React pour le front-end, Laravel pour le back-end et MySQL pour la base de données. J'ai également intégré des fonctionnalités telles que l'authentification des utilisateurs et la gestion des recettes.",
        "technologies": [
            {"name": "React", "icon": "fa-brands fa-react"},
            {"name": "Laravel", "icon": "fa-brands fa-laravel"},
            {"name": "CSS3", "icon": "fa-brands fa-css3-alt"}
        ],
        "link": [
            {
                "label": "GitHub", 
                "url": "https://github.com/Vincent-Gillet/Pixel-Snack",
                "icon": "fa fa-github"
            }
        ],
        "image": pixelSnack,
        "year": 2024
    },
    {
        "id": 4,
        "name": "Electricity Business",
        "description": "Ce projet est un site de réservation de bornes de recharge pour les véhicules électriques entre particuliers. Il a été réalisé dans le cadre de mon projet de fin d'études pour obtenir mon diplôme de concepteur développeur d'application. L'application permet aux utilisateurs de rechercher et réserver la location de bornes de recharge pour véhicules électriques. J'ai utilisé Angular pour le front-end, Spring pour le back-end et MySQL pour la base de données. J'ai également intégré des fonctionnalités telles que l'authentification des utilisateurs et la géolocalisation des bornes de recharge.",
        "technologies": [
            
            {"name": "Angular", "icon": "fa-brands fa-angular"},
            {"name": "Spring", "icon": "fa-solid fa-leaf"},
            {"name": "MySQL", "icon": "fa-solid fa-database"},
            {"name": "TypeScript", "icon": "fa-brands fa-js"},
            {"name": "CSS3", "icon": "fa-brands fa-css3-alt"}
        ],
        "link": [
            {
                "label": "GitHub", 
                "url": "https://github.com/Vincent-Gillet/electricity-business",
                "icon": "fa fa-github"
            }
        ],
        "image": electricityImg,
        "year": 2025
    },
    {
        "id": 5,
        "name": "Portfolio Personnel",
        "description": "Ce projet est mon portfolio personnel, réalisé pour présenter mes compétences, mes projets et mon parcours professionnel en tant que développeur web. J'ai utilisé React pour le front-end, Bootstrap pour le design et la mise en page, et j'ai hébergé le site sur Netlify. Le portfolio met en avant mes réalisations, mes compétences techniques et offre un moyen de me contacter facilement.",
        "technologies": [
            {"name": "React", "icon": "fa-brands fa-react"},
            {"name": "Bootstrap", "icon": "fa-brands fa-bootstrap"},
            {"name": "JavaScript", "icon": "fa-brands fa-js"},
            {"name": "CSS3", "icon": "fa-brands fa-css3-alt"}
        ],
        "link": [
            {
                "label": "Site Web", 
                "url": "https://vincent-gillet-portfolio.netlify.app/",
                "icon": "fa fa-globe"
            }
        ],
        "image": portfolio,
        "year": 2026
    },
    {
        "id": 6,
        "name": "To Do Liste",
        "description": "Ce projet est une application de gestion de tâches simple qui permet aux utilisateurs de créer, modifier et supprimer des tâches. J'ai utilisé JavaScript pour le développement de cette application, en mettant l'accent sur une interface utilisateur intuitive et réactive. L'application permet aux utilisateurs de suivre leurs tâches quotidiennes et d'améliorer leur productivité.",
        "technologies": [
            {"name": "JavaScript", "icon": "fa-brands fa-js"},
        ],
        "link": [
            {
                "label": "GitHub",
                "url": "https://github.com/Vincent-Gillet/to_do_list",
                "icon": "fa fa-github"
            },
            {
                "label": "Site Web",
                "url": "https://vincent-gillet.github.io/to_do_list/",
                "icon": "fa fa-globe"
            }
        ],
        "image": todoList,
        "year": 2025
    },
    {
        "id": 7,
        "name": "Jeu du Pendu",
        "description": "Ce projet est une version numérique du jeu du pendu, où les utilisateurs peuvent deviner des mots en proposant des lettres. J'ai utilisé JavaScript pour développer ce jeu, en mettant l'accent sur une interface utilisateur simple et engageante. Le jeu offre une expérience amusante tout en permettant aux utilisateurs de tester leurs compétences en vocabulaire.",
        "technologies": [
            {"name": "JavaScript", "icon": "fa-brands fa-js"},
        ],
        "link": [
            {
                "label": "GitHub",
                "url": "https://github.com/Vincent-Gillet/jeu_du_pendu",
                "icon": "fa fa-github"
            },
            {
                "label": "Site Web",
                "url": "https://vincent-gillet.github.io/jeu_du_pendu/",
                "icon": "fa fa-globe"
            }
        ],
        "image": pendu,
        "year": 2025
    },
]