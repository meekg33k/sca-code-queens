import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";



const Navigation = ({navname}) => {
    const navItems = [{name:"Home", url:"/home"}, {name:"Organise", url:"/organise"}, {name:"How it works", url:"/howitworks"}, {name:"Sign in", url:"./signin"}]
    
    return (
        <header className="header">
             {navItems.map(menuItem => {
                 return <ul className="navList" key={menuItem.id}>
                 {<NavLink to={menuItem.url}>{menuItem.name}</NavLink>}
                 </ul>;
             }
            )}

        </header>
    );
}



export default Navigation
