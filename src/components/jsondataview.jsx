import React, { Component } from "react";
import JsonTree from "./jsonTree";
import Countries from "./countries";

class JsonDataView extends Component {
  state = {
    selectedCountry: {
      id: 0,
      value: "none",
    },
    countries: [
      { id: 1, value: "France", label: "France" },
      { id: 2, value: "Scottland", label: "Scottland" },
      { id: 3, value: "Ireland", label: "Ireland" },
      { id: 4, value: "England", label: "England" },
      { id: 5, value: "other", label: "other" },
    ],
  };

  handleClick = (country) => {
    console.log("Event handler Select", country);
    const selectedCountry = country;
    //replaces the selectedCountry in the state object
    this.setState({ selectedCountry });
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "15px" }}>
          <div>
            <span>Examples of dwelling data for each country.</span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h1>&nbsp;</h1>
              <Countries
                countries={this.state.countries}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-md">
              {this.state.selectedCountry.id !== 0 && (
                <div>
                  <h1>&nbsp;</h1>
                  <JsonTree country={this.state.selectedCountry} />
                </div>
              )}
              {this.state.selectedCountry.id === 0 && (
                <div>
                  <h1>&nbsp;</h1>
                  <h5>Please select a country.</h5>
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "15px", marginTop: "25px" }}>
            <div>
              <span>Note: This examples show the original data type (double) for the fields floor area and energy consumption.</span>
            </div>
            <div>
              <span> As of version 2.0.0 the field values used for the predictions changed from double to long values, which is not refelected in this example data.</span>
            </div>
        </div>
      </div>
    );
  }
}

export default JsonDataView;
