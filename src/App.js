import React from 'react';
import './team.css';
import NavBar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Blog from './Components/Blog.js';
import Vision from './Components/Vision.js';
import Team from './Components/Team.js';
import Classroom from './Components/Classroom.js';
import Contacts from './Components/Contacts.js';
import Footer from './Components/Footer.js';

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
