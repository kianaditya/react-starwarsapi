import React,{Component} from "react"

class PersonCard extends Component{

    constructor(){
        super();
    }
    render(){
        let character = this.props.character
        return(
            <div>
                <h2> Name: {character.name}  </h2>

            </div>
        )
    }
}
export default PersonCard