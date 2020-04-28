import React, { Component } from "react";
import ProjectCard from './ProjectCard.js'
import projectData from '../projectData.js'

class Projects extends Component {

  generateProjectCards = () => {
    return projectData.map(project => 
      <ProjectCard 
        title={project.title} 
        image={project.image} 
        description={project.description} 
        stack={project.stack} 
        github={project.github} 
        link={project.link}
      />
    )
  }

  render() {
    return (
        <div className="content">
            <header id="content-header">What I've Made</header>
            <p id="content-description">Rails is my backend framework of choice, and I love working with React up front. That said, I can pick up a new framework or language quick. Building is my favorite way to learn.</p>
            <div id="project-card-container">
              {this.generateProjectCards()}
            </div>
        </div>
    );
  }
}
 
export default Projects;