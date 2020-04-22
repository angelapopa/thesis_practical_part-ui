import React, { Component } from "react";
import Country from "./country";

class Countries extends Component {
  render() {
    console.log("Countries - Rendered");
    //object destructuring
    const { onClick, countries } = this.props;
    return (
      <div>
        {countries.map((country) => (
          <Country
            key={country.id}
            onClick={onClick}
            country={country}></Country>
        ))}
      </div>
    );
  }
}

export default Countries;
