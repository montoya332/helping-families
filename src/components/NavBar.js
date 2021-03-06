import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = (props) => {
  let whiteBrandImg = 'logo.svg';
  let shrinkClass = '';
  if (props.scrollY > 20) {
    whiteBrandImg = 'logo_dark.svg';
    shrinkClass = 'navbar-shrink';
  }

  return (
    <Navbar expand="lg" fixed="top" id="mainNav" className={shrinkClass}>
      <Navbar.Brand href="#home">
        <span className="d-none d-lg-inline">
          <img src={whiteBrandImg} alt="" height="40" className="mr-2" id="white-brand-img" />
          {props.company.companyName}
        </span>
        <span className="d-lg-none d-xl-none">
          <img src="logo_dark.svg" alt="" height="40" className="mr-2" />
        </span>
        <Button
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VFZQL9TJ28Y52&source=url"
          className="float-right ml-3"
          variant="outline-warning"
        >
          Donate
        </Button>
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
