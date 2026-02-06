'use client';

import './Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkNetworkComponent from '../link-network/Link-network'

function Footer({ linkPages }: { linkPages: { name: string; href: string }[] }) {

    const listLinkPages = linkPages.map((link) => (
        <Nav.Link 
            key={link.name} 
            href={link.href} 
            className='a-text'
        >
            {link.name}
        </Nav.Link>
    ));



    return (
    <>
      <Navbar className="footer-navbar" collapseOnSelect expand="" data-bs-theme="dark">
        <Container className='d-flex flex-column justify-content-center align-items-center'>
          <Navbar.Brand href="#home" className='logo'>VG</Navbar.Brand>
            <Nav className="flex-sm-row justify-content-center column-gap-4">
                {listLinkPages}
                <Nav.Link href="/mentions-legales" className='a-text'>Mentions Légales</Nav.Link>
            </Nav>
            <Nav className="network-container flex-row justify-content-center gap-4">              
                <LinkNetworkComponent />
            </Nav>
            <hr className='footer-barre'/>
            <p className="text-center copyright">© Copyright 2026 VG - Tout droits réservés.</p>
        </Container>
      </Navbar>
    </>
    )
}

export default Footer
