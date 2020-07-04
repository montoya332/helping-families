import React from 'react';

const Vision = (props) => {
  return (
    <section className="download bg-navy-blue-3 text-white text-center" id="download">
      <div className="bg-triangle bg-triangle-light bg-triangle-top bg-triangle-left"></div>
      <div className="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">{props.company.vision}</h2>
            <p>Contact Us to get started!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
