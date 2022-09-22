import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';
import projectData from '../projectData.js';

class Projects extends Component {
  generateProjectCards = () => {
    return projectData.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        image={project.image}
        description={project.description}
        stack={project.stack}
        github={project.github}
        link={project.link}
        youtube={project.youtube}
      />
    ));
  };

  render() {
    return (
      <div className='content'>
        <header id='content-header'>What I've Made.</header>
        <p id='content-description'>
          My preferred stack is a Rails backend + React on the front. That said,
          I'm quick to pick up any new language or framework needed for a
          project. Building is my favorite way to learn.
        </p>
        <div id='project-card-container'>{this.generateProjectCards()}</div>
      </div>
    );
  }
}

export default Projects;
