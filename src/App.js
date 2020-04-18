import React from 'react';
import './team.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Blog from './Components/Blog';
import Vision from './Components/Vision';
import Team from './Components/Team';
import Classroom from './Components/Classroom';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import company,{teamInfo} from './data/companyInfo';
import workshops from './data/workshops';

function App() {
  return (
    <div className="App">
      <NavBar company={company}/>
      <Header company={company}/>
      <Blog workshops={workshops}/>
      <Vision company={company}/>
      <Team teamInfo={teamInfo}/>
      <Classroom />
      <Contacts company={company}/>
      <Footer />
    </div>
  );
}

export default App;
