import React, { Component } from 'react'
import PersonCard from './PersonCard'
const baseAPI = 'https://swapi.co/api/'
class ApiComponent extends Component {
  
    state = {
    person: '',
    homeworld: '',
    id: this.props.id
  }

  PeopleAPI = () => {
    let number = Math.floor(Math.random() * 70) + 1
    fetch(baseAPI + 'people/' + number + '/')
      .then(Response => Response.json())
      .then(data => this.setState({ person: data }))
      .then(() => this.HomeWorldAPI())
  }

  HomeWorldAPI = () => {
    fetch(this.state.person.homeworld)
      .then(Response => Response.json())
      .then(data => this.setState({ homeworld: data }))
      .then(data =>
        this.props.HWCheck(this.state.homeworld.name, this.state.id)
      )
  }

  render () {
    return (
      <div id={this.state.id}>
        <PersonCard
          character={this.state.person}
          homeworld={this.state.homeworld}
          PeopleAPI={this.PeopleAPI}
          id={this.state.id}
        />
      </div>
    )
  }
}
export default ApiComponent
