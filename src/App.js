import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import About from './components/About.js'

function App() {
  return (
    <div className="App">
      <div id="main-display">

        <nav className="main-nav">
          <a className="main-nav-link" href="/home.html">About</a>
          <a className="main-nav-link" href="/projects.html">Projects</a>
          <a className="main-nav-link" href="/resume.html">Resume</a>
          <a className="main-nav-link" href="/writing.html">Writing</a>
          <a className="main-nav-link" href="/reading.html">Reading</a>
        </nav>

        <About />

      </div>
    </div>
  );
}

export default App;
