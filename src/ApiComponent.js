import React,{Component} from 'react'

class ApiComponent extends Component{

    constructor(){
        super();
        this.state ={
            person: ''
        }
    }
    componentDidMount(){
        fetch('https://swapi.co/api/people/1/')
        .then(Response => Response.json())
        .then(data => this.setState({person: data}))
    }


    render(){
        let character = this.state.person
        return(
            <h1>{character.name}</h1>
        )
    }
}
export default ApiComponent