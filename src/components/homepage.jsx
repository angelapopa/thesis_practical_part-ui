import React, { Component } from "react";

class HomePage extends Component {
  //state is created when the component is instantiated
  state = {
    //imageUrl: "https://picsum.photos/200",
    //imageUrl: "https://picsum.photos/id/109/600/400",
    //imageUrl: "https://picsum.photos/id/17/600/400",
    //imageUrl: "https://picsum.photos/id/128/600/400",
    imageUrl: "https://picsum.photos/id/397/580/400",
  };

  render() {
    console.log("Homepage - Rendered");
    return (
      <React.Fragment>
        <div style={{ height: 70 }}></div>
        <div style={{ margin: 20 }}>
          <h5>Welcome to the EPC Modelling POC</h5>
        </div>
        <div style={{ marginLeft:20, marginTop: 100 }}>
          <img src={this.state.imageUrl} alt="" />
        </div>
        <div style={{ marginLeft:20 }}>
          <span>(picsum.photos)</span>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
