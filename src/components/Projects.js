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
        youtube={project.youtube}
      />
    )
  }

  render() {
    return (
        <div className="content">
            <header id="content-header">What I've Made.</header>
            <p id="content-description">Rails is my backend framework of choice, and on the frontend I love working with React. I can pick up a new framework or language quick and building is my favorite way to learn.</p>
            <div id="project-card-container">
              {this.generateProjectCards()}
            </div>
        </div>
    );
  }
}
 
export default Projects;