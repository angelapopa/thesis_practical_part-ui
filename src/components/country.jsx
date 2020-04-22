import React, { Component } from "react";

class Country extends Component {
  componentWillUnmount() {
    console.log("Country - Unmount");
  }

  render() {
    //every react component has a property called props
    //which holds all values of a component, except for the key
    //console.log('props', this.props);
    console.log("Country - Rendered");
    return (
      //React.Fragment: does not generate an extra div
      //DOM events: onClick, onKeyPress etc.
      <React.Fragment>
        <h4>&nbsp;</h4>
        <button
          onClick={() => this.props.onClick(this.props.country)}
          className="btn btn-outline-info btn-sm">
          {this.props.country.label}
        </button>
      </React.Fragment>
    );
  }
}

export default Country;
