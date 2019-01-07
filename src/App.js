import React, { Component } from "react";
import ApiComponent from "./ApiComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      HomeWorld1: "",
      HomeWorld2: "",
      CompareHomeWorld: ""
    };
    this.HomeWorldCheck = this.HomeWorldCheck.bind(this);
  }

  HomeWorldCheck(HWName, id) {
    id == 1
      ? this.setState({
          HomeWorld1: HWName
        })
      : this.setState({
          HomeWorld2: HWName
        });
    if (this.state.HomeWorld1 && this.state.HomeWorld2) {
      this.HomeWorldCompare();
    }
  }

  HomeWorldCompare() {
    this.state.HomeWorld1 == this.state.HomeWorld2
      ? this.setState({
          CompareHomeWorld: "They are from Same Home World!"
        })
      : this.setState({
          CompareHomeWorld: "They are from Different Home World!"
        });
  }

  render() {
    return (
      <div>
        <div style={appStyle}>
          <ApiComponent id="1" HWCheck={this.HomeWorldCheck} />
          <ApiComponent id="2" HWCheck={this.HomeWorldCheck} />
        </div>

        <p style={comparisonStyle}>
          <h2>{this.state.CompareHomeWorld}</h2>
        </p>
      </div>
    );
  }
}

const appStyle = {
  display: "flex",
  justifyContent: "center"
};
const comparisonStyle = {
  textAlign: "center"
};
export default App;
