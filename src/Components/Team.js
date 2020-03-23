import React from 'react';

const Team = () => {
  return (
    <div className="Team">
        <div class="container">
            <h5 class="section-title h1">Founders</h5>
            <div class="row">

              <div class="col-xs-12 col-sm-6 col-md-6 mb-5">
                <div class="image-flip">
                  <div class="mainflip">
                    <div class="frontside">
                      <div class="card">
                        <div class="card-body text-center">
                          <p><img class="img-fluid" src="./img/avatar/julie-larios.jpeg" alt="card image" /></p>
                          <h4 class="card-title">Julie Larios</h4>
                          <p class="card-text">CEO and Co-founder</p>

                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Julie Larios</h4>
                          <h6 class="card-text text-small">
                            Julie founded Helping Families in Silicon Valley in 2019. What inspired her to start the Helping Families organization was her passion for helping the community strive. In fact, prior to her profession Julie studied at San Jose State University  where she earned her undergraduate degree in Justice Studies. Julie’s vision as a non-profit leader is to uplift and strengthen families in the community.
                          </h6>
                          <ul class="list-inline social-buttons">
                            <li class="list-inline-item">
                              <a href="mailto:julie.larios@helpingfamiliesinsv.org">
                                <i class="fas fa-envelope text-white"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="https://www.linkedin.com/in/julie-larios-5717a0152/">
                                <i class="fab fa-linkedin-in text-white"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-6 mb-5">
                <div class="image-flip">
                  <div class="mainflip">
                    <div class="frontside">
                      <div class="card">
                        <div class="card-body text-center">
                          <p><img class="img-fluid" src="./img/avatar/melissa-montoya.jpeg" alt="card image" /></p>
                          <h4 class="card-title">Melissa Montoya</h4>
                          <p class="card-text">Chief Financial Officer and Co-founder</p>

                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">Melissa Montoya</h4>
                          <h6 class="card-text">
                            Melissa is a Bay Area native, born and raised in Redwood City. Starting Helping Families in Silicon Valley has always been a dream of hers. As the Co- Founder and Chief Financial Officer she plans to reach as many families through workshops and by providing resources. She received her undergraduate degree from SJSU with a Liberal Arts Major focusing on Child Development. She’s worked as a teacher for over eight years. Her passion is to give back to the community and return the gift of giving.
                          </h6>
                          <ul class="list-inline social-buttons">
                            <li class="list-inline-item">
                              <a href="mailto:melissa@helpingfamiliesinsv.org">
                                <i class="fas fa-envelope text-white"></i>
                              </a>
                            </li>

                            <li class="list-inline-item">
                              <a href="https://www.linkedin.com/in/melissa-montoya-82574a116/">
                                <i class="fab fa-linkedin-in text-white"></i>
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