import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = (props) => {
  return (
    <Navbar expand="lg" fixed="top" id="mainNav">
      <Navbar.Brand href="#home">
        <span className="d-none d-lg-inline">
          <img src="logo.svg" alt="" height="40" className="mr-2" />
          {props.company.companyName}
        </span>
        <span className="d-lg-none d-xl-none">
          <img src="logo_dark.svg" alt="" height="40" className="mr-2" />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
