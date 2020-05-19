import React, { Component } from "react";
import epcDataImport from "../resources/app-diagram/data-import.png";
import epcAppArchitecture from "../resources/app-diagram/app-architecture.png";

class AppDiagram extends Component {
  render() {
    const styleObj = {
      fontSize: 10,
    };

    const marginObj = {
      marginLeft: 50,
    };

    console.log("AppDiagram - Rendered");
    return (
      <React.Fragment>
        <div style={marginObj}>
          <div>
            <h1>&nbsp;</h1>
            <h3>Data Import</h3>
          </div>
          <img src={epcDataImport} alt="data-import" width={650}></img>
          <div>
            <h1>&nbsp;</h1>
            <h3>Application Architecture</h3>
            <h3>&nbsp;</h3>
          </div>
          <img src={epcAppArchitecture} alt="app-diagram" width={1200}></img>
          <div>
            <span style={styleObj}>Image Sources: </span>
            <span style={styleObj}>
              MongoDB Logo (http://getdrwaings.com/mongodb-icon),
            </span>
            <span style={styleObj}>
              NodeJS Logo (https://pngimage.net/nodejs-logo-png-8)
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppDiagram;
