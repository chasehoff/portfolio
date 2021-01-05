import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


function Navigation() {
    return (
        <div className="nav__container">
            <NavLink activeClassName="active" className="nav__link" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" className="nav__link" to="/projects">Projects</NavLink>
            <NavLink activeClassName="active" className="nav__link" to="/contact">Contact</NavLink>
        </div>
    )
}

export default Navigation;
