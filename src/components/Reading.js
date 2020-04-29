import React, { Component } from "react";
import GoodreadsWidget from './GoodreadsWidget.js'
 
class Reading extends Component {

  render() {
    return (
        <div className="content">
            <header id="content-header">What I'm Reading.</header>
            <p id="content-description">I seldom miss a day of reading. Here's what I've read most recently.</p>

            <GoodreadsWidget />
        </div>
    );
  }
}
 
export default Reading;




