import React, { Component } from "react";
import epcAppDiagram from "../resources/app-diagram.png";

class AppDiagram extends Component {
  render() {
    console.log("AppDiagram - Rendered");
    return (
      <React.Fragment>
        <img src={epcAppDiagram} alt="app-diagram" width={1200}></img>
      </React.Fragment>
    );
  }
}

export default AppDiagram;
