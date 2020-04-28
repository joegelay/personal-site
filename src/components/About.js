import React, { Component } from "react";
import profilePicture from '../images/profile-picture.jpg'
import emailIcon from '../images/003-telegram.svg'
import linkedInIcon from '../images/001-linkedin.svg'
import githubIcon from '../images/002-github.svg'
 
class About extends Component {
  render() {
    return (
        <div className="content">
            <header id="hi">Hi, I'm Joe.</header>

            <div id="blurb-and-image">

            <p id="blurb">I love to learn everything, solve problems, and connect people.
            <br></br> 
            <br></br> 
            My background in marketing analytics has shaped me into being a detail-oriented thinker 
            with an eye for the big picture. 
            As a former Peace Corps Volunteer, I know how to work with ambiguity, 
            adapt to changes with grace, and communicate effectively with any team. 
            <br></br> 
            <br></br> 
            When my eyes need a break from the screen, you can find me climbing rocks, running trails, reading books, and petting dogs. </p>
            <div id="image-cropper">
            <img src={profilePicture} alt="Joe Gelay" id="profile-picture" />
            </div>

            </div>

            <nav id="contact-nav">
            <a className="contact-icon-a" href="mailto:joegelay@gmail.com?Subject=Hello!" target="_top">        
                <img className="contact-icon" src={emailIcon} alt="email-icon"/>
            </a>
            <a className="contact-icon-a" href="https://amazon.com" rel="noopener noreferrer" target="_blank">
                <img className="contact-icon" src={linkedInIcon} alt="linkedin-icon"/>
            </a>
            <a className="contact-icon-a" href="https://github.com/joegelay" rel="noopener noreferrer" target="_blank">
                <img className="contact-icon" src={githubIcon} alt="github-icon" />
            </a>
            </nav>
        </div>
       
    );
  }
}
 
export default About;




