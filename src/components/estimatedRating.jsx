import React, { Component } from "react";
import Async from "react-async";
import NeighboursTable from "./neighboursTable";

class EstimatedRating extends Component {
  render() {
    console.log("EstimatedRating - Rendered");
    console.log(this.props.energyFieldName);

    const loadItems = () =>
      fetch(
        "https://epc-modelling-estimate-rating.herokuapp.com/api/estimate-rating" +
        //"http://localhost:5000/api/estimate-rating" +
          "?energy_prop=" +
          this.props.energyFieldName + 
          "&country=" +
          this.props.country +
          "&floor_area=" +
          this.props.totalFloorArea +
          "&total_energy=" +
          this.props.yearlyEnergyConsumption
      ).then((res) => res.json());

    return (
      <React.Fragment>
        <Async promiseFn={loadItems}>
          {({ data, err, isLoading }) => {
            if (isLoading) return "Loading...";
            if (err) return `Something went wrong: ${err.message}`;
            if (data && (typeof (data['estimated-rating'] !== 'undefined')) && data['estimated-rating'] != null) {
              return (
                < div >
                  <h1>  {data['estimated-rating']} </h1>
                  <h1>&nbsp;</h1>
                  <div>
                    <NeighboursTable neighbours={data['neighbors']} />
                  </div>
                </div>
              )
            } else {
              return (
                < div >
                  <h3>{data}</h3>
                  <h5>Work in Progress</h5>
                </div>
              )
            }
          }}
        </Async>
      </React.Fragment>
    );
  }
}

export default EstimatedRating;
