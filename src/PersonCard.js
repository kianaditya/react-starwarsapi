import React,{Component} from "react"

class PersonCard extends Component{

    constructor(){
        super();
    }
    render(){
        let character = this.props.character
        let homeworld = this.props.homeworld
        return(
            <div>
                <h2> Name: {character.name}  </h2>
                <h2> Homeworld: {homeworld.name}  </h2>

            </div>
        )
    }
}
export default PersonCard