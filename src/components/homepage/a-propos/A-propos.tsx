import { Button } from 'react-bootstrap';
import './A-propos.css';
import image from '../../../assets/homepage/image-code.jpg';
import cv from '../../../assets/homepage/CV-Vincent-Gillet.pdf';

function A_propos() {

    const listSkills = [
        { skill: 'HTML5', icon:'fa-brands fa-html5' },
        { skill: 'CSS3', icon:'fa-brands fa-css3-alt' },
        { skill: 'JavaScript', icon:'fa-brands fa-js' },
        { skill: 'React', icon:'fa-brands fa-react' },
        { skill: 'Angular', icon:'fa-brands fa-angular' },
        { skill: 'PHP', icon:'fa-brands fa-php' },
        { skill: 'Symfony', icon:'fa-brands fa-symfony' },
        { skill: 'Laravel', icon:'fa-brands fa-laravel' },
        { skill: 'Java SE', icon:'fa-brands fa-java' },
        { skill: 'Spring', icon:'fa-solid fa-leaf' },
        { skill: 'MySQL', icon:'fa-solid fa-database' },
        { skill: 'Git', icon:'fa-brands fa-git-alt' },
    ];

    const listTools = [
        { tool: 'GitHub', icon:'fa-brands fa-github' },
        { tool: 'Docker', icon:'fa-brands fa-docker' },
        { tool: 'Postman', icon:'fa-solid fa-envelope' },
        { tool: 'Visual Studio Code', icon:'fa-solid fa-code' },
        { tool: 'IntelliJ IDEA', icon:'fa-solid fa-code' },
        { tool: 'Figma', icon:'fa-brands fa-figma' },
    ];

    const skills = listSkills.map((skill) => (
        <div className='skill-container col-5 col-sm-2 d-flex flex-column align-items-center' key={skill.skill}>
            <div className='icon-skill'>
                <i className={skill.icon}></i>
            </div>
            <p className='label-skill'>{skill.skill}</p>
        </div>
    ));

    const tools = listTools.map((tool) => (
        <div className='skill-container col-5 col-sm-2 d-flex flex-column align-items-center' key={tool.tool}>
            <div className='icon-skill'>
                <i className={tool.icon}></i>
            </div>
            <p className='label-skill'>{tool.tool}</p>
        </div>
    ));


    return (
        <div className="container" id="about">
            <h2 className='title-h2 text-center m-4'>À Propos de Moi</h2>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div className='image-about-me-container mb-3'>
                        <img src={image} alt="Photo de Vincent GILLET" />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <p className='text-about-me'>
                        Passionné par le développement web, je suis constamment à la recherche de nouvelles 
                        opportunités pour apprendre et évoluer dans ce domaine en perpétuelle évolution. 
                        Mon objectif est de créer des applications web performantes, intuitives et esthétiques 
                        qui répondent aux besoins des utilisateurs tout en respectant les meilleures pratiques de développement.
                    </p>
                    <Button variant="" className='a-btn' href={cv} target="_blank"><i className="fa-solid fa-download"></i> Télécharger mon CV</Button>
                </div>

            </div>
            <h3 className='title-h3 text-center m-4'>Compétences</h3>
            <div className="row gap-auto justify-content-center justify-content-sm-start mt-4 mb-5 skills-container">
                {skills}
            </div>
            <h3 className='title-h3 text-center m-4'>Outils</h3>
            <div className="row gap-auto justify-content-center justify-content-sm-start mt-4 mb-5 skills-container">
                {tools}
            </div>
        </div>
    );
}

export default A_propos;