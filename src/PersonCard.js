import React from 'react'

const PersonCard = props => {
    let character = props.character
        let homeworld = props.homeworld
        return(
            <div style = {personCardStyle}>
                <h2 id ="Name"> Name: {character.name}  </h2>
                <h2 id = {`Homeworld` + props.id}> Homeworld: {homeworld.name}  </h2>
                <button onClick = {props.PeopleAPI}>Select Random Character</button>
            </div>
        )
}

const personCardStyle = {
    textAlign: "center",
    margin: "20px",
    padding: "10px",
}

export default PersonCard
