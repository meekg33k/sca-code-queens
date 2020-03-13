import React from "react";
//import PropTypes from "prop-types";
import './Navigation.css';
import { NavLink } from "react-router-dom";



const Navigation = ({navname}) => {
    const navItems = [{name:"Home", url:"/home"}, {name:"Organise", url:"/organise"}, {name:"How it works", url:"/howitworks"}, {name:"Sign in", url:"./signin"}]
    
    return (
        <header className="header">
            <ul>
             {navItems.map(menuItem => {
                 return <li className="navList" key={menuItem.name}>
                 {<NavLink to={menuItem.url}>{menuItem.name}</NavLink>}
                 </li>;
             }
            )}
            </ul>

        </header>
    );
}



export default Navigation
