import React from 'react';
import Card from 'react-bootstrap/Card';
const MemberCard = (props) => {
  return (
    <div className="card team" style={{minHeight: '400px'}}>
      <div className="front image-flip">
        <div className="cover bg-navy-blue-3"></div>
        <div className="user">
          <img className="img-circle" src={props.imgUrl} />
        </div>
        <div className="content">
          <div className="main">
            <h3 className="name">{props.fullName}</h3>
            <p className="profession">{props.title}</p>
          </div>
          <div className="footer">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href={`mailto:${props.email}`}>
                  <i className="fas fa-envelope text-white"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={props.linkedIn}>
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image-caption-wrapper">
          <div className="image-caption">
            <p>{props.bio}</p>
            <div className="footer">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href={`mailto:${props.email}`}>
                    <i className="fas fa-envelope text-white"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={props.linkedIn}>
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
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
                  <MemberCard {...person} />
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
                  <MemberCard {...person} />
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
