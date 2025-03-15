import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CONTACTUS() {



  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" id="bakd" className='d-flex justify-content-end align-items-center ' variant="dark">
      <Container className='px-3'>
        <Navbar.Brand> <img className=" img1" src="/hem.png" alt="hem"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav d-flex align-items-center ">
          <Nav className=" nav-links ">
            <Nav.Link href="/">Home</Nav.Link>
           

            <NavDropdown title="About " id="collasible-nav-dropdown" >

              <NavDropdown.Item href="/About" style={{ backgroundColor: 'transparent' }}>
                About The Company
              </NavDropdown.Item>
             

              <NavDropdown.Item href="/About" style={{ backgroundColor: 'transparent' }}>
              Our Vision
              </NavDropdown.Item>

              <NavDropdown.Item href="/About" style={{ backgroundColor: 'transparent' }}>
           Our Mission
              </NavDropdown.Item>
                   <NavDropdown.Item href="/About" style={{ backgroundColor: 'transparent' }}>
           Our Core Values
              </NavDropdown.Item>
              <NavDropdown.Item href="/Team" style={{ backgroundColor: 'transparent' }}>
                The Management Team
              </NavDropdown.Item>
              <NavDropdown.Item href="/ur9lin" style={{ backgroundColor: 'transparent' }}>
            UR9 LIN
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/Ourbusiness">Our Businesses</Nav.Link>
            <Nav.Link href="/Project">Projects</Nav.Link>
            <Nav.Link href="/sustainability">Sustainability</Nav.Link>
            <Nav.Link href="/partners">Partners</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Contact" className=' w-auto fw-bold  '>Contact</Nav.Link>



          
        
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CONTACTUS;