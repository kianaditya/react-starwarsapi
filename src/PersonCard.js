import React,{Component} from "react"

class PersonCard extends Component{

    constructor(){
        super();
    }
    render(){
        let character = this.props.character
        let homeworld = this.props.homeworld
        return(
            <div style = {personCardStyle}>
                <h2 id ="Name"> Name: {character.name}  </h2>
                <h2 id = {`Homeworld` + this.props.id}> Homeworld: {homeworld.name}  </h2>
                <button onClick = {this.props.PeopleAPI}>Select Random Character</button>
            </div>
        )
    }
}

const personCardStyle = {
    textAlign: "center",
    margin: "20px",
    padding: "10px",
}

export default PersonCard