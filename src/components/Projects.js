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
            <div id="project-card-container">
              {this.generateProjectCards()}
            </div>
        </div>
    );
  }
}
 
export default Projects;