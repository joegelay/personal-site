import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './styles/reset.css';
import './styles/App.css';
import './styles/goodreads.css';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Writing from './components/Writing.js';
import Reading from './components/Reading.js';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <div id="main-display">

        <nav className="main-nav">
          <NavLink className="main-nav-link" exact to="/">About</NavLink>
          <NavLink className="main-nav-link" to="/projects">Projects</NavLink>
          <NavLink className="main-nav-link" to="/writing">Writing</NavLink>
          <NavLink className="main-nav-link" to="/resume">Resume</NavLink>
          <NavLink className="main-nav-link" to="/reading">Reading</NavLink>
        </nav>

        <Route exact path="/" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/writing" component={Writing}/>
        <Route path="/reading" component={Reading}/>

      </div>
    </div>
    </HashRouter>
  );
}

export default App;
