import React, { Component } from "react";
import Async from "react-async";
import ReactJson from "react-json-view";

class EstimatedRating extends Component {
  render() {
    console.log("EstimatedRating - Rendered");

    const loadItems = () =>
      fetch(
        "https://epc-modelling-estimate-rating.herokuapp.com/api/estimate" +
          //"http://localhost:5000/api/estimate" +
          "?floor_area=" +
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
            if (data)
              return (
                <div>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
              );
          }}
        </Async>
      </React.Fragment>
    );
  }
}

export default EstimatedRating;
