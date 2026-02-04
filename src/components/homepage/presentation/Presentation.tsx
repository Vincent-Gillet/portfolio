import './Presentation.css';
import image from '../../../assets/homepage/photo-perso-noir-blanc.png';
import Nav from 'react-bootstrap/Nav';

function Presentation() {
    const linkNetworks = [
        { name: 'Linkdin', href: 'https://www.linkedin.com/in/vincent-cda', icon: 'fa-brands fa-linkedin' },
        { name: 'Github', href: 'https://github.com/Vincent-Gillet', icon: 'fa-brands fa-github' },
        { name: 'Mail', href: 'mailto:vincent-gillet@neuf.fr', icon: 'fa-solid fa-envelope' },
    ];

    const listLinkNetworks = linkNetworks.map((link) => (
        <Nav.Link  target="_blank" key={link.name} href={link.href} className='circle'><i className={link.icon}></i></Nav.Link>
    ));

    const listStatistics = [
        { number: '1', label: 'Expériences' },
        { number: '5+', label: 'Projets Réalisés' },
        { number: '2', label: 'Diplômes' },
    ];

    const statistics = listStatistics.map((stat) => (
        <div className='stat-container' key={stat.label}>
            <p className='number-stat'>{stat.number}</p>
            <p className='label-stat'>{stat.label}</p>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 d-flex flex-column justify-content-center align-items-sm-start align-items-center">
                    <p className='text-intro'>Bonjour je suis</p>
                    <p className='name'>Vincent GILLET</p>
                    <h1 className='title-h1 '>Développeur Full Stack</h1>  
                    <Nav className="network-container flex-row justify-content-start gap-4">
                        {listLinkNetworks}
                    </Nav>      
                    
                    <div className="stats-container m-2 rounded gap-0 d-flex flex-column flex-lg-row">
                        {statistics}
                    </div>
                </div>
                <div className="col-sm-6 d-flex justify-content-center">
                    <div className="photo-container">
                        <div className='circle-photo'></div>
                        <img className='img-perso' src={image} alt="Photo de Vincent GILLET" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;