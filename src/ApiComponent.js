import React,{Component} from 'react'
import PersonCard from './PersonCard';
const baseAPI ='https://swapi.co/api/';
class ApiComponent extends Component{

    constructor(){
        super();
        this.state ={
            person: 'person',
            homeworld:''
        }
    }

    PeopleAPI(number){
        fetch(baseAPI + 'people/'+number+'/')
        .then(Response => Response.json())
        .then(data => this.setState({person: data}))
        .then(() => this.HomeWorldAPI())
        
    }

    HomeWorldAPI(){
        console.log(this.state.person.homeworld)
        fetch(this.state.person.homeworld)
        .then(Response => Response.json())
        .then(data => this.setState({homeworld: data}))
    }
     
    componentDidMount(){
        this.PeopleAPI(1)       
        
    }
    render(){
        return(
            <PersonCard 
            character = {this.state.person}
            homeworld = {this.state.homeworld}
            />
        )
    }
}
export default ApiComponent