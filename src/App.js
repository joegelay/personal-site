import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import profilePicture from './images/profile-picture.jpg'
import emailIcon from './images/003-telegram.svg'
import linkedInIcon from './images/001-linkedin.svg'
import githubIcon from './images/002-github.svg'

function App() {
  return (
    <div className="App">
      <div id="main-display">

       <section>

        <nav className="main-nav">
          <a className="main-nav-link" href="/home.html">Home</a>
          <a className="main-nav-link" href="/projects.html">Projects</a>
          <a className="main-nav-link" href="/resume.html">Resume</a>
          <a className="main-nav-link" href="/writing.html">Writing</a>
          <a className="main-nav-link" href="/reading.html">Reading</a>
        </nav>

        <header id="hi">Hi, I'm Joe.</header>


        <div id="blurb-and-image">

        <p>I love to learn things, solve problems, and connect people.
          <br></br> 
          <br></br> 
          My background in marketing analytics has shaped me into being a detail-oriented thinker 
          with an eye for the big picture. 
          As a former Peace Corps Volunteer, I know how to work with ambiguity, 
          adapt to changes with grace, and communicate effectively with any team. 
          <br></br> 
          <br></br> 
          When my eyes need a break from the screen, I like to climb rocks, run trails, and read books. </p>
        <div id="image-cropper">
          <img src={profilePicture} alt="Joe Gelay" id="profile-picture" />
        </div>

        </div>

        <nav id="contact-nav">
          <a href="mailto:joegelay@gmail.com?Subject=Hello!" target="_top">        
            <img style={{width: "100%"}} src={emailIcon} alt="email-icon"/>
          </a>
          <a href="https://amazon.com" rel="noopener noreferrer" target="_blank">
            <img style={{width: "100%"}} src={linkedInIcon} alt="linkedin-icon"/>
          </a>
          <a href="https://github.com/joegelay" rel="noopener noreferrer" target="_blank">
            <img style={{width: "100%"}} src={githubIcon} alt="github-icon" />
          </a>
        </nav>

      </section>

      </div>
    </div>
  );
}

export default App;
