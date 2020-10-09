import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './styles/reset.css';
import './styles/App.css';
import './styles/goodreads.css';
import About from './components/About.js';
import Projects from './components/Projects.js';
import PDF from './images/JGelayResume.pdf';
import Writing from './components/Writing.js';
import Reading from './components/Reading.js';

function toggleMenu() {
  const mainNav = document.querySelector('.main-nav');
  mainNav.classList.toggle('open');

  const hamburger = document.querySelectorAll('.line');
  hamburger.forEach((line) => {
    line.classList.toggle('open');
  });
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div id="main-display">
          <nav className="main-nav">
            <NavLink
              onClick={() => toggleMenu()}
              className="main-nav-link"
              exact
              to="/"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => toggleMenu()}
              className="main-nav-link"
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              onClick={() => toggleMenu()}
              className="main-nav-link"
              to="/writing"
            >
              Writing
            </NavLink>
            <NavLink
              onClick={() => toggleMenu()}
              className="main-nav-link"
              to="/reading"
            >
              Reading
            </NavLink>
            <a
              onClick={() => toggleMenu()}
              className="main-nav-link"
              href={PDF}
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </nav>

          <div id="hamburger" onClick={() => toggleMenu()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/writing" component={Writing} />
          <Route path="/reading" component={Reading} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
