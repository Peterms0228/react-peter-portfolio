import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles.css'


function Header() {
  return (// fixed="top"
    <Navbar bg="light" variant="light" expand="lg" fixed="top"> 
      <Container>
      <Navbar.Brand href="#home">
        <div className='navName'>
          <span>Chua Meng Sin</span>
        </div>
        </Navbar.Brand>     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link className="navItems" href="#experience">Experience</Nav.Link>
          <Nav.Link className="navItems" href="#education">Education</Nav.Link>
          <Nav.Link className="navItems" href="#projects">Projects</Nav.Link>
          <Nav.Link className="navItems" href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;