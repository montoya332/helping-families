import React from 'react';
import {teamInfo} from '../data/companyInfo';

const Team = () => {
  return (
    <section id="team" class="pb-5 bg-light page-section">
      <div className="container">
        <h5 className="section-title h1">Founders</h5>
        <div className="row">
          {teamInfo.map((person) => {
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
