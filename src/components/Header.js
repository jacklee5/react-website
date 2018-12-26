import { NavLink } from 'react-router-dom'
import React from "react";

import '../css/Header.css';
import logo from '../img/logo.png';

class Header extends React.Component{

    openNav(){
        document.getElementById("nav-primary").style.position = "absolute";
        document.getElementById("nav-primary").style.left = "0%";
        document.getElementById("darken").style.display = "block";
    }

    hideNav(){
        document.getElementById("nav-primary").style.position = "absolute";
        document.getElementById("nav-primary").style.left = "-100%";
        document.getElementById("darken").style.display = "none";
    }

    render(){
        return (
            <header>
                <div style = {{position:"relative"}}>
                    <div className = "title">
                        <img className = "logo" src = {logo} alt = "logo"/>
                    </div>
                    <i className = "material-icons" onClick = {this.openNav}>menu</i>
                    <div id = "darken" onClick = {this.hideNav}></div>
                    <nav className = "font-display" id = "nav-primary">
                        <NavLink exact to="/" onClick = {this.hideNav}>Home</NavLink>
                        <NavLink exact to="/projects" onClick = {this.hideNav}>Projects</NavLink>
                        <NavLink exact to="/upcoming" onClick = {this.hideNav}>Upcoming</NavLink>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;