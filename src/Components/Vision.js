import React from 'react';
import company from '../data/companyInfo';

const Vision = () => {
  return (
    <section className="download bg-navy-blue-3 text-white text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">{company.vision}</h2>
            <p>Contact Us to get started!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
