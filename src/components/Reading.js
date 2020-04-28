import React, { Component } from "react";
import GoodreadsWidget from './GoodreadsWidget.js'
 
class Reading extends Component {

  render() {
    return (
        <div className="content">
            <header id="content-header">What I'm Reading.</header>
            <p id="content-description">I seldom miss a day of reading. Here's what I've been into as of late.</p>

            <GoodreadsWidget />
        </div>
    );
  }
}
 
export default Reading;




