import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import MainLogo from '../../images/main_logo.png';
import { HiMenu } from 'react-icons/hi';
import Drawer from '@material-ui/core/Drawer';
import './index.css';


function Navigation() {
    return (
        <div className="nav__container">
            <div className="nav__container__item__logo">
                <Link to="/"><img src={MainLogo} alt="" /></Link>
            </div>
            <div className="nav__container__item">
                <NavLink activeClassName="active" className="nav__link" exact to="/">Home</NavLink>
                <NavLink activeClassName="active" className="nav__link" to="/projects">Projects</NavLink>
                <NavLink activeClassName="active" className="nav__link" to="/contact">Contact</NavLink>
                <HiMenu className="nav__hamburger__menu" />
            </div>
        </div>
    )
}

export default Navigation;
