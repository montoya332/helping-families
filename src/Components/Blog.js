import React from 'react';
import Workshops from '../data/workshops';

const Blog = () => {
  return (
    <section id="blog" className="pb-5 bg-light page-section">
      <div className="container">
        <h5 className="section-title h1">Workshops</h5>
        <div className="row mb-2 justify-content-md-center">
          {Workshops.map((workshop, i) => {
            return (
              <div className="col-md-6" key={i}>
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{workshop.header}</strong>
                    <h3 className="mb-0">{workshop.title}</h3>
                    <div className="mb-1 text-muted">{workshop.date}</div>
                    <p className="card-text mb-auto">{workshop.summary}</p>
                    <a href={workshop.url} className="stretched-link text-primary">
                      Continue reading
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img
                      className="bd-placeholder-img mt-4 mr-3"
                      style={{maxWidth: '150px', maxHeight: '200px'}}
                      alt=""
                      src={workshop.imgUrl}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
