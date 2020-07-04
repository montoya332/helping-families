import React from 'react';
import Card from 'react-bootstrap/Card';

const Team = (props) => {
  return (
    <>
      <section id="team" className="pb-5 bg-light page-section">
        <div className="container">
          <h5 className="section-title h1">Founders</h5>
          <div className="row">
            {props.teamInfo.map((person, i) => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-6 mb-5" key={i}>
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <Card body className="text-center">
                          <br />
                          <Card.Img className="img-fluid" src={person.imgUrl} alt="card image" />
                          <br />
                          <br />
                          <br />
                          <Card.Title>{person.fullName}</Card.Title>
                          <Card.Subtitle>{person.title}</Card.Subtitle>
                        </Card>
                      </div>
                      <div className="backside">
                        <Card body className="text-center">
                          <Card.Title>{person.fullName}</Card.Title>
                          <Card.Subtitle>{person.bio}</Card.Subtitle>
                          <br></br>
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
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="team" class="pb-5 bg-light page-section" id="team">
        <div class="container">
          <h5 class="section-title h1">Board of Directors</h5>
          <div class="row">
            {props.boardMembers.map((person, i) => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-4 mb-5" key={i}>
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <Card body className="text-center">
                          <br />
                          <Card.Img className="img-fluid" src={person.imgUrl} alt="card image" />
                          <br />
                          <br />
                          <br />
                          <Card.Title>{person.fullName}</Card.Title>
                          <Card.Subtitle>{person.title}</Card.Subtitle>
                        </Card>
                      </div>
                      <div className="backside">
                        <Card body className="text-center">
                          <Card.Title>{person.fullName}</Card.Title>
                          <Card.Subtitle>{person.bio}</Card.Subtitle>
                          <br></br>
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
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
