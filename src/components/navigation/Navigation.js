import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


function Navigation() {
    return (
        <div className="nav__container">
            <h1>chasehoff.com</h1>
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navigation
