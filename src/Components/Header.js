import React from 'react';

const Header = () => {
  return (
        <header className="masthead bg-img-smart-goals-group">
          <div className="container h-100">
              <div className="row h-100">
                  <div className="col my-auto">
                      <div className="header-content mx-auto">
                          <h1 className="mb-3"><img src="logo.svg" alt="" height="40" className="mr-2" />Helping Families in Silicon Valley</h1>
                          <h2 className="mb-3 d-none d-sm-block">We are a  multi service organization that offers
                              inspirational workshops, mentoring and resources to help families. </h2>
                          <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Start Helping Today</a>
                      </div>
                  </div>
              </div>
          </div>
        </header>
    );
}

export default Header;