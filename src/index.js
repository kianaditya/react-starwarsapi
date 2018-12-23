import React from "react"
import ReactDOM from "react-dom"
import Header from './Header'
import ApiComponent from "./ApiComponent";

const App = () => {
    return (
        <div>
            <Header />
            <ApiComponent />
        </div>
        
    )
};


ReactDOM.render(<App />, document.getElementById("root"))