import React, { Component } from "react";

class HomePage extends Component {
  //state is created when the component is instantiated
  state = {
    imageUrl: "https://picsum.photos/200",
  };

  render() {
    console.log("Homepage - Rendered");
    return (
      <React.Fragment>
        <div style={{ height: 100 }}></div>
        <div style={{ margin: 20 }}>
          <h5>Welcome to the EPC Modelling POC</h5>
        </div>
        <div style={{ margin: 100 }}>
          <img src={this.state.imageUrl} alt="" />
          <div>
            <span>(random image)</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
