import React, { Component } from "react";
import PDF from '../images/JGelayResume.pdf';
import ResumeImg from '../images/JGelayResume.png'
import '../styles/resume.css';

 
class Resume extends Component {
  render() {
    return (
        <div className="content">
            <div className="resume">
            <div className="resume-download-container">
            <img className="resume-image" src={ResumeImg} alt="Joe-Gelay-Resume"/>
            <div className="button-container">
            <a href={PDF} rel="noopener noreferrer" target="_blank"><button class="download-resume-button">Download PDF</button></a>      
            </div> 
            </div> 
        </div>

           
        </div>
    );
  }
}
 
export default Resume;