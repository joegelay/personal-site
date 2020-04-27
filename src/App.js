import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import profilePicture from './images/profile-picture.jpg'

function App() {
  return (
    <div className="App">
      <body>

      <h1>Hi, I'm Joe.</h1>
      <div id="image-cropper">
        <img src={profilePicture} alt="Joe Gelay" id="profile-picture" />
      </div>
      <p>I love to learn new things, solve problems, and connect people. 
        My background in marketing analytics has shaped me into being a detail-oriented thinker 
        with an eye for the big picture. 
        As a former Peace Corps Volunteer, I know how to work with ambiguity, 
        adapt to changes with grace, and communicate effectively with any team or audience. 
        When my eyes need a break from the screen, I like to climb rocks, run trails, and read books. </p>

      </body>
    </div>
  );
}

export default App;
