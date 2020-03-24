import React from 'react';

const Team = () => {
  return (
    <div className="Team">
        <div className="container">
            <h5 className="section-title h1">Founders</h5>
            <div className="row">

              <div className="col-xs-12 col-sm-6 col-md-6 mb-5">
                <div className="image-flip">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className="img-fluid" src="./img/avatar/julie-larios.jpeg" alt="card image" /></p>
                          <h4 className="card-title">Julie Larios</h4>
                          <p className="card-text">CEO and Co-founder</p>

                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Julie Larios</h4>
                          <h6 className="card-text text-small">
                            Julie founded Helping Families in Silicon Valley in 2019. What inspired her to start the Helping Families organization was her passion for helping the community strive. In fact, prior to her profession Julie studied at San Jose State University  where she earned her undergraduate degree in Justice Studies. Julie’s vision as a non-profit leader is to uplift and strengthen families in the community.
                          </h6>
                          <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                              <a href="mailto:julie.larios@helpingfamiliesinsv.org">
                                <i className="fas fa-envelope text-white"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="https://www.linkedin.com/in/julie-larios-5717a0152/">
                                <i className="fab fa-linkedin-in text-white"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 mb-5">
                <div className="image-flip">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className="img-fluid" src="./img/avatar/melissa-montoya.jpeg" alt="card image" /></p>
                          <h4 className="card-title">Melissa Montoya</h4>
                          <p className="card-text">Chief Financial Officer and Co-founder</p>

                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Melissa Montoya</h4>
                          <h6 className="card-text">
                            Melissa is a Bay Area native, born and raised in Redwood City. Starting Helping Families in Silicon Valley has always been a dream of hers. As the Co- Founder and Chief Financial Officer she plans to reach as many families through workshops and by providing resources. She received her undergraduate degree from SJSU with a Liberal Arts Major focusing on Child Development. She’s worked as a teacher for over eight years. Her passion is to give back to the community and return the gift of giving.
                          </h6>
                          <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                              <a href="mailto:melissa@helpingfamiliesinsv.org">
                                <i className="fas fa-envelope text-white"></i>
                              </a>
                            </li>

                            <li className="list-inline-item">
                              <a href="https://www.linkedin.com/in/melissa-montoya-82574a116/">
                                <i className="fab fa-linkedin-in text-white"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Team;