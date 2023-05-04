import React from "react";
import logo from"../assets/Logo.svg"

const Nav = () => {
    const navStyle = {
        // paddingTop: "10px",
        paddingLeft: "300px",
        paddingRight: "300px",
        // paddingBottom: "10px",
    }
    const ulStyle = {
        alignItems: "center",
        display: 'flex',
        flexWrap: "wrap",
        flexDirection: 'row',
        listStyleType: "none",
        justifyContent: "space-between"
    }
    const linksStyle = {
        fontStyle: "Karla",
        textColor: "#000"
    }
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={linksStyle}><a href="/"><img src={logo}/></a></li>
                <li style={linksStyle}><a href="/">Home</a></li>
                <li style={linksStyle}><a href="">About</a></li>
                <li style={linksStyle}><a href="">Menu</a></li>
                <li style={linksStyle}><a href="/bookings">Reservation</a></li>
                <li style={linksStyle}><a href="">Order Online</a></li>
                <li style={linksStyle}><a href="">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav