import React, { Component } from 'react';
import profilePicture from '../images/profile-picture.jpg';
import emailIcon from '../images/gmail.svg';
import linkedInIcon from '../images/linkedin.svg';
import githubIcon from '../images/github.svg';

class About extends Component {
  render() {
    return (
      <div className='content'>
        <header id='hi'>Hi, I'm Joe.</header>

        <div id='blurb-and-image'>
          <p id='blurb'>
            I'm a full stack developer driven by a passion for learning and
            solving complex problems. I thrive on building meaningful
            connections, both through code and collaboration.
            <br></br>
            <br></br>
            As a former Peace Corps Volunteer, I've honed the ability to
            navigate ambiguity, embrace change, and communicate seamlessly with
            diverse teams.
            <br></br>
            <br></br>
            Away from the screen, you'll find me outside in nature, getting lost
            in a good book, and playing games.{' '}
          </p>
          <div id='image-cropper'>
            <img src={profilePicture} alt='Joe Gelay' id='profile-picture' />
          </div>
        </div>

        <nav id='contact-nav'>
          <a
            className='contact-icon-a'
            href='mailto:joegelay@gmail.com?Subject=Hello!'
            target='_top'
          >
            <img className='contact-icon' src={emailIcon} alt='email-icon' />
          </a>
          <a
            className='contact-icon-a'
            href='https://www.linkedin.com/in/joegelay/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img
              className='contact-icon'
              src={linkedInIcon}
              alt='linkedin-icon'
            />
          </a>
          <a
            className='contact-icon-a'
            href='https://github.com/joegelay'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img className='contact-icon' src={githubIcon} alt='github-icon' />
          </a>
        </nav>
      </div>
    );
  }
}

export default About;
