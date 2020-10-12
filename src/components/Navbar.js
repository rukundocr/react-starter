import React from 'react'
import  {NavLink,withRouter } from "react-router-dom"
 
const Navbar = () => {

    return (
        <nav className="nav-wrapper indigo darken-3">
        <div className="container">
            <a className="brand-logo">POKE' Times</a>
            <ul className="right">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}

export default withRouter(Navbar)


