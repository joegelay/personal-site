import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './styles/reset.css';
import './styles/App.css';
import './styles/goodreads.css';
import './styles/blog.css';
import About from './components/About.js';
import Projects from './components/Projects.js';
import PDF from './images/JGelayResume.pdf';
import Reading from './components/Reading.js';
import Blog from './components/Blog.js';

const App = () => {
  const removeMobileMenu = () => {
    const mainNav = document.querySelector('.main-nav');
    mainNav.classList.remove('open');

    const hamburger = document.querySelectorAll('.line');
    hamburger.forEach((line) => {
      line.classList.remove('open');
    });
  };

  const toggleHamMenu = () => {
    const mainNav = document.querySelector('.main-nav');
    mainNav.classList.toggle('open');

    const hamburger = document.querySelectorAll('.line');
    hamburger.forEach((line) => {
      line.classList.toggle('open');
    });
  };

  return (
    <HashRouter>
      <div className='App'>
        <div id='main-display'>
          <nav className='main-nav'>
            <NavLink
              onClick={() => removeMobileMenu()}
              className='main-nav-link'
              exact
              to='/'
            >
              About
            </NavLink>
            <NavLink
              onClick={() => removeMobileMenu()}
              className='main-nav-link'
              to='/projects'
            >
              Projects
            </NavLink>
            <NavLink
              onClick={() => removeMobileMenu()}
              className='main-nav-link'
              to='/writing'
            >
              Writing
            </NavLink>
            <NavLink
              onClick={() => removeMobileMenu()}
              className='main-nav-link'
              to='/reading'
            >
              Reading
            </NavLink>
            <a
              onClick={() => removeMobileMenu()}
              className='main-nav-link'
              href={PDF}
              rel='noopener noreferrer'
              target='_blank'
            >
              Resume
            </a>
          </nav>

          <div id='hamburger' onClick={() => toggleHamMenu()}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>

          <Route exact path='/' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/writing' component={Blog} />
          <Route path='/reading' component={Reading} />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
