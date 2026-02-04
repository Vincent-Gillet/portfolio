import { Button } from 'react-bootstrap';
import './A-propos.css';
import image from '../../../assets/homepage/image-code.jpg';
import cv from '../../../assets/homepage/CV-Vincent-Gillet.pdf';
import { skillsList } from '../../../data/skills.tsx';
import { toolsList } from '../../../data/tools.tsx';
import { schoolsList } from '../../../data/schools.tsx';
import { experiencesList } from '../../../data/experiences.tsx';

function A_propos() {

    const listSkills = skillsList;
    const listTools = toolsList;
    const listSchool = schoolsList;
    const listExperiences = experiencesList;

    const skills = listSkills.map((skill) => (
        <div className='skill-container col-5 col-sm-2 d-flex flex-column align-items-center' key={skill.name}>
            <div className='icon-skill'>
                <i className={skill.icon}></i>
            </div>
            <p className='label-skill'>{skill.name}</p>
        </div>
    ));

    const tools = listTools.map((tool) => (
        <div className='skill-container col-5 col-sm-2 d-flex flex-column align-items-center' key={tool.name}>
            <div className='icon-skill'>
                <i className={tool.icon}></i>
            </div>
            <p className='label-skill'>{tool.name}</p>
        </div>
    ));

    const school = listSchool.map((schoolItem) => (
        <li key={schoolItem.diplome}>
            <p><strong>{schoolItem.date} :</strong> {schoolItem.diplome} - {schoolItem.etablissement}</p>
        </li>
    ));

    const experiences = listExperiences.map((exp) => (
        <li key={exp.poste}>
            <p><strong>{exp.date} :</strong> {exp.poste} chez {exp.entreprise} <br></br>
            <em>{exp.description}</em></p>
            <div className='d-flex mb-3'><p className='mb-0'><strong>Technologies utilisées :</strong></p> <div className='d-flex gap-1 ms-2'>{exp.technologies.map(tech => {
                return <span key={tech} className='badge technology-used'>{tech}</span>;
             })
            }</div></div>
        </li>
    ));


    return (
        <div className="container" id="about">
            <h2 className='title-h2 text-center m-4'>À Propos de Moi</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className='image-about-me-container mb-3'>
                        <img src={image} alt="Photo de Vincent GILLET" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <p className='text-about-me'>
                        Après plusieurs années d'expérience dans le secteur de l'environnement (BTS Métiers de l'Eau), 
                        j'ai décidé en 2023 de me réorienter vers ma véritable passion : le développement web. Depuis, 
                        j'ai suivi un parcours de formation intensif et progressif : d'abord Objectif Numérique avec Simplon (WordPress), 
                        puis Développeur Web et Web Mobile (React, Laravel, JavaScript), et actuellement en formation Concepteur 
                        Développeur d'Applications chez Human Booster (jusqu'en janvier 2026), où je me spécialise en Java/Spring, 
                        Angular et Docker.

                        <br></br>
                        <br></br>
                        
                        J'ai consolidé mes compétences lors de stages chez COQPIT et IWIOS, me permettant d'acquérir une expérience 
                        concrète en environnement professionnel. Aujourd'hui, je recherche un CDI en tant que développeur full 
                        stack pour mettre à profit mes compétences techniques, ma capacité d'adaptation et ma motivation à créer 
                        des applications web performantes et intuitives.
                    </p>
                    <Button variant="" className='a-btn' href={cv} target="_blank"><i className="fa-solid fa-download"></i> Télécharger mon CV</Button>
                </div>
            </div>
            <h3 className='title-h3 text-center m-4'>Parcours</h3>
            <div className="row justify-content-center">
                <div className='col-12 col-md-8 col-lg-6'>
                    <ul>
                        {school}
                    </ul>
                </div>
            </div>
            <h3 className='title-h3 text-center m-4'>Expériences professionnelles</h3>
            <div className="row justify-content-center">
                <div className='col-12 col-md-10 col-lg-8'>
                    <ul>
                        {experiences}
                    </ul>                       
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