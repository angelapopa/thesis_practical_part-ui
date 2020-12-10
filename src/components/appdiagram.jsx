import React, { Component } from "react";
import epcDataImportV100 from "../resources/app-diagram/v1-0-0/data-import.png";
import epcAppArchitectureV100 from "../resources/app-diagram/v1-0-0/app-architecture.png";
import epcDataImportV200 from "../resources/app-diagram/v2-0-0/data-import-v2.0.0.png";
import epcAppArchitectureV200 from "../resources/app-diagram/v2-0-0/app-architecture-v2.0.0.png";
import epcDataImportV300 from "../resources/app-diagram/v3-0-0/data-import-v2-0-0.png";
import epcAppArchitectureV300 from "../resources/app-diagram/v3-0-0/app-architecture-v3-0-0.png";

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
            <h3>&nbsp;</h3>
            <h3>Data Import</h3>
          </div>
          <img src={epcDataImportV300} alt="data-import" width={1050}></img>
          <div>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h3>Application Architecture</h3>
          </div>
          <img src={epcAppArchitectureV300} alt="app-diagram" width={1200}></img>
          <div>
            <h3>&nbsp;</h3>
            <span style={styleObj}>Image Sources: </span>
            <span style={styleObj}>
              MongoDB Logo (http://getdrwaings.com/mongodb-icon),
            </span>
            <span style={styleObj}>
              NodeJS Logo (https://pngimage.net/nodejs-logo-png-8)
            </span>
          </div>
        </div>
        <hr></hr>
        <div style={marginObj}>
          <div>
            <h1>&nbsp;</h1>
            <h1>Previous Versions</h1>
            <h1>&nbsp;</h1>
            <h1>v2.0.0</h1>
          </div>
          <div>
            <h1>&nbsp;</h1>
            <h3>Data Import</h3>
          </div>
          <img src={epcDataImportV200} alt="data-import" width={1050}></img>
          <div>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h3>Application Architecture</h3>
          </div>
          <img src={epcAppArchitectureV200} alt="app-diagram" width={1200}></img>
          <div>
            <h3>&nbsp;</h3>
            <span style={styleObj}>Image Sources: </span>
            <span style={styleObj}>
              MongoDB Logo (http://getdrwaings.com/mongodb-icon),
            </span>
            <span style={styleObj}>
              NodeJS Logo (https://pngimage.net/nodejs-logo-png-8)
            </span>
          </div>
        </div>
        <div style={marginObj}>
          <div>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h1>v1.0.0</h1>
          </div>
          <div>
            <h1>&nbsp;</h1>
            <h3>Data Import</h3>
          </div>
          <img src={epcDataImportV100} alt="data-import" width={650}></img>
          <div>
            <h1>&nbsp;</h1>
            <h3>Application Architecture</h3>
            <h3>&nbsp;</h3>
          </div>
          <img src={epcAppArchitectureV100} alt="app-diagram" width={1200}></img>
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
