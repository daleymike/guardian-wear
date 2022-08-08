import React from 'react';
import logo from '../assets/guardianwearlogo-clear-splash-fade-1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{borderBottom: 'white'}}>
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              className="d-inline-block align-top"
              alt="Guardian Wear Logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{fontSize: 'large'}}>About</Nav.Link>
            <Nav.Link href="#memes" style={{fontSize: 'large'}}>Contact</Nav.Link>
            <Nav.Link href="#memes" style={{fontSize: 'large'}}>Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default NavBar;

