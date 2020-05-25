import React, { Component } from 'react';
import githubIcon from '../images/github.svg'
import linkIcon from '../images/link.svg'
import youtubeIcon from '../images/youtube.svg'
import FLP from '../images/FineLinePhilosophy.png'
import CLIJournalApp from '../images/CLIJournalApp.png'
import Barterbook from '../images/Barterbook.png'
import KindCard from '../images/KindCard.png'

const imageMap = {
    'FineLinePhilosophy': FLP,
    'CLIJournalApp': CLIJournalApp,
    'Barterbook': Barterbook,
    'KindCard': KindCard
}
  
export default class ProjectCard extends Component {

    checkLink = () => {
        if (this.props.link) {
            return (
                <li>
                    <a className="project-icon-a" href={this.props.link} rel="noopener noreferrer" target="_blank">
                        <img className="project-icon" src={linkIcon} alt="link-icon" />
                    </a>
                </li>
            );
        }
    };

    render() {
        return (
            <div className="project-card">
            <ul>
                <li className="project-card-image">
                    <a href={this.props.link} rel="noopener noreferrer" target="_blank">
                        <img className="project-card-image" src={imageMap[this.props.image]} alt="Project Preview"/>
                    </a>
                </li>
                <li className="project-card-title">{this.props.title}</li>
                <li className="project-card-description">{this.props.description}</li>
                <li className="project-card-stack">{this.props.stack}</li>
                <div className="project-links">
                    {this.checkLink()}
                    <li>
                        <a className="project-icon-a" href={this.props.github} rel="noopener noreferrer" target="_blank">
                            <img className="project-icon" src={githubIcon} alt="github-icon" />
                        </a>
                    </li>
                    <li>
                        <a className="project-icon-a" href={this.props.youtube} rel="noopener noreferrer" target="_blank">
                            <img className="project-icon" src={youtubeIcon} alt="github-icon" />
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
  }
}