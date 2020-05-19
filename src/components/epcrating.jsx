import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { isConditionalExpression } from "typescript";

class EPCRating extends Component {
  state = {
    totalFloorArea: "",
    yearlyEnergyConsumption: "",
    countries: [
      { value: "", display: "Country" },
      { value: "France", display: "France" },
      { value: "Scottland", display: "Scottland" },
      { value: "Ireland", display: "Ireland" },
      { value: "England", display: "England" },
    ],
    selectedCountry: "",
    validationError: "",
    goClicked: 0,
  };

  handleCalculation = (event) => {
    if (
      this.state.selectedCountry === "" ||
      this.state.totalFloorArea === "" ||
      this.state.yearlyEnergyConsumption === ""
    ) {
      this.setState({ validationError: "Please fill out all form data!" });
      return;
    }
    this.setState({ goClicked: 1 });
    console.log(this.state.totalFloorArea);
    console.log(this.state.yearlyEnergyConsumption);
    console.log(this.state.selectedCountry);
  };

  handleClear = (event) => {
    this.setState({
      totalFloorArea: "",
      yearlyEnergyConsumption: "",
      selectedCountry: "",
      goClicked: 0,
    });
  };

  render() {
    const marginObj = {
      marginLeft: 50,
    };

    return (
      <React.Fragment>
        <div style={marginObj}>
          <h1>&nbsp;</h1>
          <h3>EPC Rating Prediction</h3>
          <h1>&nbsp;</h1>

          <div className="container">
            <div className="row">
              <div className="col-md">
                <h5>Floor Area</h5>
                <h5>Yearly Energy Consumption</h5>
                <h5>Country of resindence</h5>
                <h1>&nbsp;</h1>
                <h1>&nbsp;</h1>
                <h1>&nbsp;</h1>
                <h5>Predicted Rating</h5>
              </div>
              <div className="col-md">
                <div>
                  <input
                    className="mb-2"
                    value={this.state.totalFloorArea}
                    onChange={(e) =>
                      this.setState({
                        totalFloorArea: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <input
                    className="mb-2"
                    value={this.state.yearlyEnergyConsumption}
                    onChange={(e) =>
                      this.setState({
                        yearlyEnergyConsumption: e.target.value,
                      })
                    }></input>
                </div>
                <div>
                  <select
                    value={this.state.selectedCountry}
                    onChange={(e) =>
                      this.setState({
                        selectedCountry: e.target.value,
                        validationError:
                          e.target.value === ""
                            ? "Please select a country of residence!"
                            : "",
                      })
                    }>
                    {this.state.countries.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.display}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ color: "red", marginTop: "5px" }}>
                  {this.state.validationError}
                </div>
                <h1>&nbsp;</h1>
                <button
                  className="btn btn-outline-info btn-sm mr-2"
                  title="Calculate"
                  onClick={this.handleCalculation}>
                  Go!
                </button>
                <button
                  className="btn btn-outline-info btn-sm ml-2"
                  title="Reset"
                  onClick={this.handleClear}>
                  Clear
                </button>
                <h1>&nbsp;</h1>
                {this.state.goClicked === 0 && (
                  <h5 className="text-danger">
                    Please fill out the above data and hit Go!
                  </h5>
                )}
                {this.state.goClicked === 1 && (
                  <h5 className="text-danger">
                    Thank you! The entered values are
                    {this.state.totalFloorArea},
                    {this.state.yearlyEnergyConsumption},
                    {this.state.selectedCountry}! The Calculation is yet to be
                    implemented!
                  </h5>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EPCRating;
