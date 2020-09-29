import React, { Component } from "react";
import ReactJson from "react-json-view";
import Async from "react-async";

var images = require.context("../resources/epc-frequency", true);

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
    imgFrequencyPath: "",
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
    this.setState({
      imgFrequencyPath: images(
        "./" + this.state.selectedCountry + "_EPC_Plot.png"
      ),
    });
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
      imgFrequencyPath: "",
    });
  };

  render() {
    const marginObj = {
      marginLeft: 50,
    };

    const loadItems = () =>
      fetch(
        "https://epc-modelling-estimate-rating.herokuapp.com/api/estimate" +
          "?floor_area=" +
          this.state.totalFloorArea +
          "&total_energy=" +
          this.state.yearlyEnergyConsumption,
        {
          mode: "no-cors",
        }
      )
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .then((res) => res.json());

    return (
      <React.Fragment>
        <div style={marginObj}>
          <h1>&nbsp;</h1>
          <h3>EPC Rating Prediction</h3>
          <h1>&nbsp;</h1>

          <div className="container">
            <div className="row">
              <div className="col-md" style={{ marginBottom: 100 }}>
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
                  <div>
                    <h5 className="text-danger">Thank you!</h5>
                    <h5 className="text-danger">
                      The entered values for {this.state.selectedCountry} are
                      &nbsp; {this.state.totalFloorArea}, &nbsp;
                      {this.state.yearlyEnergyConsumption}.
                    </h5>
                    <h5 className="text-danger">
                      <Async promiseFn={loadItems}>
                        {({ data, err, isLoading }) => {
                          if (isLoading) return "Loading...";
                          if (err)
                            return `Something went wrong: ${err.message}`;

                          if (data)
                            return (
                              <ReactJson
                                src={data}
                                name="epcs"
                                enableClipboard={false}
                                enableAdd={false}
                                displayObjectSize={false}
                                displayDataTypes={false}
                                collapsed="6"
                                theme="monokai"
                              />
                            );
                        }}
                      </Async>
                    </h5>
                  </div>
                )}
              </div>
            </div>
            <h5>&nbsp;</h5>
            <div>
              {this.state.goClicked === 1 && (
                <div>
                  <div>
                    The predication was based on epc ratings from&nbsp;
                    {this.state.selectedCountry}.
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    The frequency distribution of the available rated buildings
                    are:
                  </div>
                  <img
                    src={this.state.imgFrequencyPath}
                    alt="Plot per Country"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EPCRating;
