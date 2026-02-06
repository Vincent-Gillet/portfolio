"use client";

import './A-propos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function A_propos() {

    const image = '/assets/homepage/image-code.avif';
    const cv = '/CV-Vincent-Gillet.pdf';

    const handleClickCV = () => {
        window.open(cv, '_blank');
    };

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
                    <button className='a-btn' onClick={handleClickCV}><FontAwesomeIcon icon={faDownload} /> Télécharger mon CV</button>
                </div>
            </div>
        </div>
    );
}

export default A_propos;