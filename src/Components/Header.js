import React from 'react';

const Header = (props) => {
  return (
    <header className="masthead bg-img-smart-goals-group">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-3">
                <img src="logo.svg" alt="" height="40" className="mr-2" />
                {props.company.companyName}
              </h1>
              <h2 className="mb-3 d-none d-sm-block">{props.company.missionStatement} </h2>
              <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">
                Start Helping Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
