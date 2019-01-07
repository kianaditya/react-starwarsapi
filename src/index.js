import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import App from "./App";

const Index = () => {
  return (
    <div>
      <Header />
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
