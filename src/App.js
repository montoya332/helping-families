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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Blog />
      <Vision />
      <Team />
      <Classroom />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
