import React from 'react';
import {Navbar} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="NavBar">
        <Navbar>
        <div class="container">
              <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-none d-sm-inline mr-2"><img src="logo.svg" alt="" height="40" /></span>
                Helping Families in Silicon Valley
              </a>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
        </Navbar>
    </div>
  );
}

export default NavBar;