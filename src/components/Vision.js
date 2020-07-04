import React from 'react';

const Vision = (props) => {
  return (
    <section className="download bg-navy-blue-3 text-white text-center" id="download">
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
