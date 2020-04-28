import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './styles/reset.css';
import './styles/App.css';
import About from './components/About.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <div id="main-display">

        {/* <nav className="main-nav">
          <a className="main-nav-link" href="/home.html">About</a>
          <a className="main-nav-link" href="/projects.html">Projects</a>
          <a className="main-nav-link" href="/resume.html">Resume</a>
          <a className="main-nav-link" href="/writing.html">Writing</a>
          <a className="main-nav-link" href="/reading.html">Reading</a>
        </nav> */}
        <nav className="main-nav">
          <NavLink className="main-nav-link" exact to="/">About</NavLink>
          <NavLink className="main-nav-link" to="/projects">Projects</NavLink>
          <NavLink className="main-nav-link" to="/resume">Resume</NavLink>
          <NavLink className="main-nav-link" to="/writing">Writing</NavLink>
          <NavLink className="main-nav-link" to="/reading">Reading</NavLink>
        </nav>

        <Route exact path="/" component={About}/>
        <Route path="/projects" component={Projects}/>

      </div>
    </div>
    </HashRouter>
  );
}

export default App;
