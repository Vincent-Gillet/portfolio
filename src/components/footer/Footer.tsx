import './Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer({ linkPages }: { linkPages: { name: string; href: string }[] }) {

    const linkNetworks = [
        { name: 'Linkdin', href: 'https://www.linkedin.com/in/vincent-cda', icon: 'fa-brands fa-linkedin' },
        { name: 'Github', href: 'https://github.com/Vincent-Gillet', icon: 'fa-brands fa-github' },
        { name: 'Mail', href: 'mailto:vincent-gillet@neuf.fr', icon: 'fa-solid fa-envelope' },
    ];

    const listLinkPages = linkPages.map((link) => (
        <Nav.Link key={link.name} href={link.href} className='a-text'>{link.name}</Nav.Link>
    ));

    const listLinkNetworks = linkNetworks.map((link) => (
        <Nav.Link  target="_blank" key={link.name} href={link.href} className='circle'><i className={link.icon}></i></Nav.Link>
    ));

    return (
    <>
      <Navbar className="footer-navbar" collapseOnSelect expand="" data-bs-theme="dark">
        <Container className='d-flex flex-column justify-content-center align-items-center'>
          <Navbar.Brand href="#home" className='logo'>VG</Navbar.Brand>
            <Nav className="flex-sm-row justify-content-center column-gap-4">
                {listLinkPages}
                <Nav.Link href="#legal" className='a-text'>Mentions Légales</Nav.Link>
            </Nav>
            <Nav className="flex-row justify-content-center gap-4">
                {listLinkNetworks}
            </Nav>
            <hr className='footer-barre'/>
            <p className="text-center copyright">© 2026 VG. Tout droits réservés.</p>
        </Container>
      </Navbar>
    </>
    )
}

export default Footer
