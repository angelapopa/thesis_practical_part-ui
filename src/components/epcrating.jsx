import React, { Component } from "react";
import EstimatedRating from "./estimatedRating";

var images = require.context("../resources/epc-frequency", true);

class EPCRating extends Component {
  state = {
    totalFloorArea: "",
    yearlyEnergyConsumption: "",
    countries: [
      { name: "", display: "Country" , energyFieldName: "", floorMeasure: "", energyMeasure:""},
      { name: "France", display: "France" , energyFieldName: "finalEnergyConsumption", floorMeasure: "&#x33A1;", energyMeasure:"kwh/year"},
      { name: "Scottland", display: "Scottland", energyFieldName: "primaryEnergyDemand", floorMeasure: "&#x33A1;", energyMeasure:"kWh/&#x33A1;/year"},
      { name: "Ireland", display: "Ireland" , energyFieldName: "finalEnergyDemand", floorMeasure: "&#x33A1;", energyMeasure:"kWh/year"},
      { name: "England", display: "England", energyFieldName: "finalEnergyDemand", floorMeasure: "&#x33A1;", energyMeasure:"kWh/&#x33A1;/year"},
    ],
    epc_methodologies: [
      { country: "France", epc_method:"unknown", epc_url:""},
      { country: "Scottland", epc_method:"RdSAP", epc_url:"https://www.bregroup.com/"},
      { country: "Ireland", epc_method:"BER, Dwelling Energy Assessment Procedure (DEAP)", epc_url:"https://www.seai.ie/home-energy/building-energy-rating-ber/"},
      { country: "England", epc_method:"unknown", epc_url:""},
    ],
    selectedCountry: "",
    selectedEnergyFieldName: "",
    selectedFloorMeasure: "",
    selectedEnergyMeasure: "",
    validationError: "",
    goClicked: 0,
    imgFrequencyPath: "",
    estimatedRating: "",
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

    //console.log(this.state.totalFloorArea);
    //console.log(this.state.yearlyEnergyConsumption);
    //console.log(this.state.selectedCountry);
    //console.log(this.state.selectedEnergyFieldName);
  };

  handleClear = (event) => {
    this.setState({
      totalFloorArea: "",
      yearlyEnergyConsumption: "",
      selectedCountry: "",
      selectedEnergyFieldName: "",
      selectedEnergyMeasure: "",
      selectedFloorMeasure: "",
      goClicked: 0,
      imgFrequencyPath: "",
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
              <div
                className="col-md"
                style={{
                  marginBottom: 100,
                  maxWidth: "400px",
                  tableLayout: "fixed",
                }}>
                <h5>Country of residence</h5>
                <h6>&nbsp;</h6>
                <h5>Floor Area</h5>
                <h5>Yearly Energy Consumption</h5>
                <h1>&nbsp;</h1>
                <h1>&nbsp;</h1>
                <h1>&nbsp;</h1>

                {this.state.goClicked === 1 && (
                  <div>
                    <h5>Predicted Rating</h5>
                    <h1>&nbsp;</h1>
                    <h5>Similar Dwellings</h5>
                    <h1>&nbsp;</h1>
                  </div>
                )}
              </div>
              <div
                className="col-md"
                style={{
                  marginBottom: 100,
                  minWidth: "700px",
                  tableLayout: "fixed",
                }}>
                 <div>
                  <select
                    value={this.state.selectedCountry}
                    onChange={(e) =>
                      this.setState({
                        selectedCountry: e.target.value,
                        selectedEnergyFieldName: this.state.countries.find(country => country.name === e.target.value).energyFieldName,
                        selectedFloorMeasure: this.state.countries.find(country => country.name === e.target.value).floorMeasure,
                        selectedEnergyMeasure: this.state.countries.find(country => country.name === e.target.value).energyMeasure,
                        imgFrequencyPath: images(
                          "./" + e.target.value + "_EPC_Plot.png"
                        ),
                        validationError:
                          e.target.value === ""
                            ? "Please select a country of residence!"
                            : "",
                      })
                    }>
                    {this.state.countries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.display}
                      </option>
                    ))}
                  </select>
                </div>
                <h5>&nbsp;</h5>
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
                  &nbsp;&nbsp;
                  <span dangerouslySetInnerHTML={{ __html: this.state.selectedFloorMeasure }}/>
                </div>
                <div>
                  <input
                    className="mb-2"
                    value={this.state.yearlyEnergyConsumption}
                    onChange={(e) =>
                      this.setState({
                        yearlyEnergyConsumption: e.target.value,
                      })
                    }>
                  </input>
                  &nbsp;&nbsp;
                  <span dangerouslySetInnerHTML={{ __html: this.state.selectedEnergyMeasure }}/>
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
                    Please fill out the above input fields and hit Go!
                  </h5>
                )}
                {this.state.goClicked === 1 && (
                  <div>
                    <div>
                      <EstimatedRating
                          energyFieldName={this.state.selectedEnergyFieldName}
                          country={this.state.selectedCountry}
                          totalFloorArea={this.state.totalFloorArea}
                          yearlyEnergyConsumption={
                            this.state.yearlyEnergyConsumption
                          }
                        />
                    </div>
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
                  <div>
                    <img
                      src={this.state.imgFrequencyPath}
                      alt="Plot per Country"
                      />
                  </div>
                  
                  {(this.state.epc_methodologies.find(methodology => methodology.country === this.state.selectedCountry).epc_method) != 'unknown' && (
                  <div>
                      The methdology used for the EPC ratings in this dataset is: &nbsp;
                      <a href={this.state.epc_methodologies.find(methodology => methodology.country === this.state.selectedCountry).epc_url}>
                        {this.state.epc_methodologies.find(methodology => methodology.country === this.state.selectedCountry).epc_method}.
                      </a>
                  </div>)}
                </div>
              )}
            </div>
            <h5>&nbsp;</h5>
            <h5>&nbsp;</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EPCRating;
