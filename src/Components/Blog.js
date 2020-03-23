import React from 'react';

const Blog = () => {
  return (
    <div className="Blog">
        <div class="container">
              <h5 class="section-title h1">Workshops</h5>
              <div class="row mb-2 justify-content-md-center">
                <div class="col-md-6">
                  <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <strong class="d-inline-block mb-2 text-primary">Workshop</strong>
                      <h3 class="mb-0">Helpful Tips During Social Distancing</h3>
                      <div class="mb-1 text-muted">March 24 6:30 PM PDT</div>
                      <p class="card-text mb-auto">
                        Helping Families in Silicon Valley is hosting a Q/A webinar during social distancing with guest speaker RN Lorena Torres.
                      </p>
                      <a href="https://www.eventbrite.com/e/helpful-tips-during-social-distancing-tickets-100336011712" class="stretched-link text-primary">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img class="bd-placeholder-img mt-4" style={{maxWidth: "200px", maxHeight: "200px"}} alt="" src=""/>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <strong class="d-inline-block mb-2 text-primary">Workshop</strong>
                      <h3 class="mb-0">SMART GOALS</h3>
                      <div class="mb-1 text-muted">March 11</div>
                      <p class="card-text mb-auto">This workshop provides an overview of a simple but effective model ...</p>
                      <a href="https://www.eventbrite.com/e/smart-goals-setting-with-adrienne-lawson-tickets-95119604297?ref=eios" class="stretched-link text-primary">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img class="bd-placeholder-img mt-4" style={{maxWidth: "200px", maxHeight: "200px"}} alt="" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F92912059%2F408932228207%2F1%2Foriginal.20200218-001752?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C890%2C445&s=bea7c2ef362449fb8ef6305721af5e80"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

export default Blog;