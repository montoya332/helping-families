import React from 'react';
import './team.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Blog from './components/Blog';
import Vision from './components/Vision';
import Team from './components/Team';
import Classroom from './components/Classroom';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import company, {teamInfo, boardMembers} from './data/companyInfo';
import workshops from './data/workshops';

function App() {
  return (
    <div className="App">
      <NavBar company={company} />
      <Header company={company} />
      <Blog workshops={workshops} />
      <Vision company={company} />
      <Team teamInfo={teamInfo} boardMembers={boardMembers} />
      <Classroom />
      <Contacts company={company} />
      <Footer />
    </div>
  );
}

export default App;
