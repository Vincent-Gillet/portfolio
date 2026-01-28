import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
/*         <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
            <div className="col-md-3 mb-2 mb-md-0"> 
                <a href="/" className="logo d-inline-flex link-body-emphasis text-decoration-none"> 
                    VG 
                </a> 
            </div> 
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
                <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li> 
                <li><a href="#" className="nav-link px-2">Features</a></li> 
                <li><a href="#" className="nav-link px-2">Pricing</a></li> 
                <li><a href="#" className="nav-link px-2">FAQs</a></li> 
                <li><a href="#" className="nav-link px-2">About</a></li> 
            </ul>
            <div className="col-md-3 text-end"> 
                <button type="button" className="btn btn-outline-primary me-2">Login</button> 
                <button type="button" className="btn btn-primary">Sign-up</button> 
            </div> 
        </header> */
            <>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className='logo'>VG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
                <Nav.Link href="#about">A propos</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Me Contacter</Nav.Link>
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
