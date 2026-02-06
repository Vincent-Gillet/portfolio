import { linkNetworks } from '../../data/networks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import type { LinkNetworkType } from '../../types/network';

function LinkNetworkComponent() {
    return(
        <>
            {   
                linkNetworks.map((link:LinkNetworkType) => (
                    <Nav.Link 
                        aria-label={`Ouvrir ${link.name} dans un nouvel onglet`} 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        key={link.name} 
                        href={link.href} 
                        className='circle'
                    >
                        <FontAwesomeIcon icon={link.icon} />
                    </Nav.Link>
                ))
            }              
        </>
    )
}

export default LinkNetworkComponent;