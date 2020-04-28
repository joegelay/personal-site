import React, { Component } from "react";


class Writing extends Component {
  
  componentDidMount() {
    try {
      const widget = document.getElementById("medium-widget");
      if (!!widget) {
        window.mediumWidget();
      }
    }
    catch(e){
      window.location.reload();
    }
  }
  
  render() {
    return (
        <div className="content">
            <header id="content-header">What I've Written</header>

            <div id="medium-widget"></div>
        </div>
    );
  }
}
 
export default Writing;