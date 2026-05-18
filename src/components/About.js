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
            I’m a product-minded technologist and engineering leader who enjoys
            building systems, tools, and experiences that help people navigate
            complexity and do their best work.
            <br></br>
            <br></br>
            My background spans software engineering, developer experience,
            engineering management, and internal product development. I’m
            especially drawn to ambiguous problems that require a mix of
            technical thinking, communication, strategy, and collaboration.
            <br></br>
            <br></br>
            As a former Peace Corps Volunteer, I learned to adapt quickly,
            communicate across perspectives, and approach difficult problems
            with curiosity, empathy, and pragmatism.
            <br></br>
            <br></br>
            Outside of work, I spend a lot of time climbing, cycling, reading,
            and working on creative projects exploring technology, meaning, and
            personal growth.
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
