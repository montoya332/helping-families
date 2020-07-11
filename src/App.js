import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
  const prevScrollY = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <Router>
      <div className="App">
        <NavBar company={company} scrollY={scrollY} />
        <Switch>
          <Route>
            <Header company={company} />
            <Blog workshops={workshops} />
            <Vision company={company} />
            <Team teamInfo={teamInfo} boardMembers={boardMembers} />
            <Classroom />
            <Contacts company={company} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
