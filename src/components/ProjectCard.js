import React, { Component } from 'react';

export default class ProjectCard extends Component {

  render() {
    return (
      <div className="project-card">
          <ul>
            <li>{this.props.title}</li>
            <li>{this.props.image}</li>
            <li>{this.props.description}</li>
            <li>{this.props.stack}</li>
            <li>{this.props.github}</li>
            <li>{this.props.link}</li>
          </ul>
      </div>
    )
  }
}

ProjectCard.defaultProps = {
    title: 'Unknown',
    image: 'Unknown',
	description: 'bananas',
	stack: ['HTML, CSS, Javascript'],
	github: 'https://github.com/joegelay',
	link: 'https://github.com/joegelay'
}
