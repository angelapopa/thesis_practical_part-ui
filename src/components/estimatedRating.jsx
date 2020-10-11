import React, { Component } from "react";
import Async from "react-async";
import NeighboursTable from "./neighboursTable";

class EstimatedRating extends Component {
  render() {
    console.log("EstimatedRating - Rendered");

    const loadItems = () =>
      fetch(
        //"https://epc-modelling-estimate-rating.herokuapp.com/api/estimate-rating" +
        "http://localhost:5000/api/estimate-rating" +
          "?country=" +
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
            if (data) return (
              < div >
                <h1>  {data['estimated-rating']} </h1>
                <h1>&nbsp;</h1>
              <div>
                  <NeighboursTable neighbours={data['neighbors']}/>
              </div>
              </div>
            )}}
        </Async>
      </React.Fragment>
    );
  }
}

export default EstimatedRating;
