import React from 'react';

const Blog = () => {
  return (
    <div className="Blog">
        <div className="container">
              <h5 className="section-title h1">Workshops</h5>
              <div className="row mb-2 justify-content-md-center">
                <div className="col-md-6">
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary">Workshop</strong>
                      <h3 className="mb-0">Helpful Tips During Social Distancing</h3>
                      <div className="mb-1 text-muted">March 24 6:30 PM PDT</div>
                      <p className="card-text mb-auto">
                        Helping Families in Silicon Valley is hosting a Q/A webinar during social distancing with guest speaker RN Lorena Torres.
                      </p>
                      <a href="https://www.eventbrite.com/e/helpful-tips-during-social-distancing-tickets-100336011712" className="stretched-link text-primary">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                      <img className="bd-placeholder-img mt-4" style={{maxWidth: "200px", maxHeight: "200px"}} alt="" src=""/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary">Workshop</strong>
                      <h3 className="mb-0">SMART GOALS</h3>
                      <div className="mb-1 text-muted">March 11</div>
                      <p className="card-text mb-auto">This workshop provides an overview of a simple but effective model ...</p>
                      <a href="https://www.eventbrite.com/e/smart-goals-setting-with-adrienne-lawson-tickets-95119604297?ref=eios" className="stretched-link text-primary">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                      <img className="bd-placeholder-img mt-4" style={{maxWidth: "200px", maxHeight: "200px"}} alt="" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F92912059%2F408932228207%2F1%2Foriginal.20200218-001752?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C890%2C445&s=bea7c2ef362449fb8ef6305721af5e80"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

export default Blog;