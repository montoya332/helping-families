import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './team.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/homepage';
import company, {boardMembers, teamInfo} from './data/companyInfo';
import workshops from './data/workshops';
import Team from './components/Team';
const props = {
  company, boardMembers, teamInfo,workshops
}
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
          <Route path="/team">
            <Team {...props}/>
          </Route>
          <Route> <HomePage {...props}/></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
