import React,{Component} from 'react'
import PersonCard from './PersonCard';
const baseAPI ='https://swapi.co/api/';
class ApiComponent extends Component{

    constructor(){
        super();
        this.state ={
            person: 'person',
            homeworld:''
        };
        this.PeopleAPI = this.PeopleAPI.bind(this);
        this.HomeWorldAPI = this.HomeWorldAPI.bind(this);
    }

    PeopleAPI(){
        let number = Math.floor(Math.random() *90)+1
        fetch(baseAPI + 'people/'+number+'/')
        .then(Response => Response.json())
        .then(data => this.setState({person: data}))
        .then(() => this.HomeWorldAPI())
        
    }

    HomeWorldAPI(){
        fetch(this.state.person.homeworld)
        .then(Response => Response.json())
        .then(data => this.setState({homeworld: data}))
    }
     
    render(){
        return(
            <PersonCard 
            character = {this.state.person}
            homeworld = {this.state.homeworld}
            PeopleAPI = {this.PeopleAPI}
            />
        )
    }
}
export default ApiComponent