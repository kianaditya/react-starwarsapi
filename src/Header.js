import React, { Component } from "react";

class Header extends Component {
  render() {
    return <h1 style={headerStyle}>Star Wars API</h1>;
  }
}

const headerStyle = {
  textAlign: "center",
  padding: "10px",
  paddingBottom: "20px",
  textDecoration: "underline",
  borderBottom: "1px dotted darkgray"
};

export default Header;