import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {
  return (
    <Navbar expanded="lg" fixed="top" variant="light" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-none d-sm-inline mr-2">
            <img src="logo.svg" alt="" height="40" />
          </span>
          {props.company.companyName}
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
