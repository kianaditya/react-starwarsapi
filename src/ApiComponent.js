import React,{Component} from 'react'
import PersonCard from './PersonCard';
const baseAPI ='https://swapi.co/api/';
class ApiComponent extends Component{

    constructor(){
        super();
        this.state ={
            person: ''
        }
    }

    PeopleAPI(number){
        fetch(baseAPI + 'people/'+number+'/')
        .then(Response => Response.json())
        .then(data => this.setState({person: data}))
    }
     
    componentDidMount(){
        this.PeopleAPI(1)
    }


    render(){
        return(
            <PersonCard character = {this.state.person}/>
        )
    }
}
export default ApiComponent