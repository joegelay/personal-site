import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import profilePicture from './images/profile-picture.jpg'

function App() {
  return (
    <div className="App">
      <div id="main-display">

      <body>

      <nav class="main-nav">
        <a class="main-nav-link" href="">Home</a>
        <a class="main-nav-link" href="">Projects</a>
        <a class="main-nav-link" href="">Resume</a>
        <a class="main-nav-link" href="">Writing</a>
        <a class="main-nav-link" href="">Reading</a>
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

      </body>

      </div>
    </div>
  );
}

export default App;
