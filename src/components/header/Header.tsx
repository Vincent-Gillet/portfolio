import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header({ linkPages }: { linkPages: { name: string; href: string }[] }) {

    const listLinkPages = linkPages.map((link) => (
        <Nav.Link key={link.name} href={link.href} className='a-text'>{link.name}</Nav.Link>
    ));

    return (
    <>
      <Navbar className='fixed-top'     style={{ backgroundColor: 'var(--background-color-body)' }} collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='logo'>VG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
                {listLinkPages}
            </Nav>
            <Nav className="">
              <Button variant="" href='#contact' className='a-btn'>Embauchez-moi</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default Header
