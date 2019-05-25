import React from 'react'

const Header = () => {
    return (
        <div>
            <h1 style = {headerStyle} >Star Wars API</h1>
        </div>
    )
}

const headerStyle = {
    textAlign: "center",
    padding: "10px",
    paddingBottom: "20px",
    textDecoration: "underline",
    borderBottom: "1px dotted darkgray",
}

export default Header
