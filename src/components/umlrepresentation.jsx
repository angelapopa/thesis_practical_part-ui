import React, { Component } from "react";
import epcUml from "../resources/epc-modelling.png";

class UmlRepresentation extends Component {
  render() {
    console.log("UmlRepresentation - Rendered");
    return (
      <React.Fragment>
        <img src={epcUml} alt="uml" width={1400}></img>
      </React.Fragment>
    );
  }
}

export default UmlRepresentation;
