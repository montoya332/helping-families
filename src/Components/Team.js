import React from 'react';

const TeamInfo = [
  {
    imgUrl: './img/avatar/julie-larios.jpeg',
    fullName: 'Julie Larios',
    title: 'CEO and Co-founder',
    bio:
      'Julie founded Helping Families in Silicon Valley in 2019. What inspired her to start the Helping Families organization was her passion for helping the community strive. In fact, prior to her profession Julie studied at San Jose State University  where she earned her undergraduate degree in Justice Studies. Julie’s vision as a non-profit leader is to uplift and strengthen families in the community.',
    email: 'julie.larios@helpingfamiliesinsv.org',
    linkedIn: 'https://www.linkedin.com/in/julie-larios-5717a0152/'
  },
  {
    imgUrl: './img/avatar/melissa-montoya.jpeg',
    fullName: 'Melissa Montoya',
    title: 'Chief Financial Officer and Co-founder',
    bio:
      'Melissa is a Bay Area native, born and raised in Redwood City. Starting Helping Families in Silicon Valley has always been a dream of hers. As the Co- Founder and Chief Financial Officer she plans to reach as many families through workshops and by providing resources. She received her undergraduate degree from SJSU with a Liberal Arts Major focusing on Child Development. She’s worked as a teacher for over eight years. Her passion is to give back to the community and return the gift of giving.',
    email: 'melissa@helpingfamiliesinsv.org',
    linkedIn: 'https://www.linkedin.com/in/melissa-montoya-82574a116/'
  }
];
const Team = () => {
  return (
    <section id="team" class="pb-5 bg-light page-section" id="team">
      <div className="container">
        <h5 className="section-title h1">Founders</h5>
        <div className="row">
          {TeamInfo.map((person) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-6 mb-5">
                <div className="image-flip">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img className="img-fluid" src={person.imgUrl} alt="card image" />
                          </p>
                          <h4 className="card-title">{person.fullName}</h4>
                          <p className="card-text">{person.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">{person.fullName}</h4>
                          <h6 className="card-text text-small">{person.bio}</h6>
                          <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                              <a href={`mailto:${person.email}`}>
                                <i className="fas fa-envelope text-white"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href={person.linkedIn}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
