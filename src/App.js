import React from 'react';
import './team.css';
import NavBar from './Components/NavBar.js';
import Blog from './Components/Blog.js';
import Team from './Components/Team.js';
import Classroom from './Components/Classroom.js';

function App() {
  return (
    <div className="App">

        <NavBar />

        <Blog />
        <Team />
        <Classroom />

    </div>
  );
}

export default App;
