import React, { Component } from 'react';
import githubIcon from '../images/002-github.svg'
import linkIcon from '../images/link.svg'
import FLP from '../images/FineLinePhilosophy.png'
import CLIJournal from '../images/CLIJournalApp.png'

const imageMap = {
    'FineLinePhilosophy': FLP,
    'CLIJournalApp': CLIJournal
}
  

export default class ProjectCard extends Component {

  render() {
    return (
      <div className="project-card">
          <ul>
            <li>
                <a href={this.props.link} rel="noopener noreferrer" target="_blank">
                    <img src={imageMap[this.props.image]} alt="Project Preview"/>
                </a>
            </li>
            <li>{this.props.title}</li>
            <li>{this.props.description}</li>
            <li>{this.props.stack}</li>
            <div className="project-links">
                <li>
                    <a className="contact-icon-a" href={this.props.link} rel="noopener noreferrer" target="_blank">
                        <img className="contact-icon" src={linkIcon} alt="link-icon" />
                    </a>
                </li>
                <li>
                    <a className="contact-icon-a" href={this.props.github} rel="noopener noreferrer" target="_blank">
                        <img className="contact-icon" src={githubIcon} alt="github-icon" />
                    </a>
                </li>
            </div>
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
