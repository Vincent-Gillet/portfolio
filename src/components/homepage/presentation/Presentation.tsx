import './Presentation.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linkNetworks } from '../../../data/networks';
import { listStatistics } from '../../../data/statistique';
import { FormVector } from '../../../../public/assets/homepage/vector.tsx';
import LinkNetwork from '../../../components/link-network/Link-network.tsx';

function Presentation() {
    const image = '/assets/homepage/photo-perso-noir-blanc.png';

    const statistics = listStatistics.map((stat) => (
        <div className='stat-container' key={stat.label}>
            <p className='number-stat'>{stat.number}</p>
            <p className='label-stat'>{stat.label}</p>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center position-relative">
                    <p className='text-intro'>Bonjour je suis</p>
                    <p className='name'>Vincent GILLET</p>
                    <h1 className='title-h1 '>Développeur Full Stack</h1>  
                    <div className="network-container d-flex flex-row justify-content-start gap-4">
                        <LinkNetwork />
                    </div>      
                    
                    <div className="stats-container mt-3 mb-3 rounded gap-0 d-flex">
                        {statistics}
                    </div>
                    <FormVector />
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div className="photo-container">
                        <div className='circle-photo'></div>
                        <img 
                            className='img-perso' 
                            src={image} 
                            alt="Photo de Vincent GILLET" 
                            fetchPriority='high'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;