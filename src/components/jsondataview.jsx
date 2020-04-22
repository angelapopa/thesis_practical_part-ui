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
      { id: 5, value: "United Kingdom", label: "UK (non-domenstic)" },
      { id: 6, value: "other", label: "other" },
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
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Countries
                countries={this.state.countries}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-md">
              {this.state.selectedCountry.id !== 0 && (
                <JsonTree country={this.state.selectedCountry} />
              )}
              {this.state.selectedCountry.id === 0 && (
                <span>Please select a country.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JsonDataView;
