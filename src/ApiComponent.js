import React,{Component} from 'react'
import PersonCard from './PersonCard';

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
        return(
            <PersonCard character = {this.state.person}/>
        )
    }
}
export default ApiComponent