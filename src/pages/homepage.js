import React from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Vision from '../components/Vision';
import Team from '../components/Team';
import Classroom from '../components/Classroom';
import Contacts from '../components/Contacts';

const HomePage = (props) => {
  return (
    <>
      <Header company={props.company} />
      <Blog workshops={props.workshops} />
      <Vision company={props.company} />
      <Team teamInfo={props.teamInfo} boardMembers={props.boardMembers} />
      <Classroom />
      <Contacts company={props.company} />
    </>
  );
};

export default HomePage;
