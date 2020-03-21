import React from 'react';
import './team.css';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <header>
            <Navbar id="mainNav" className="navbar-brand" fixed="top">
                navbar info here
            </Navbar>
        </header>

        <section>
            sections here
        </section>

        <footer>
            footer info here
        </footer>
    </div>
  );
}

export default App;
