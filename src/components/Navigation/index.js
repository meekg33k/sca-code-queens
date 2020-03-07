import React from "react";
import './Navigation.css';



const Navigation = ({navname}) => {
    //const navItems = [{name:"Home"}, {name:"Organise"}, {name:"How it works"}, {name:"Sign in"}]
    const navItems = [
        {name:"Home"}, 
        {name:"Organise", subMenus: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3' ]},
        {name:"How it works", subMenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3' ]},
        {name:"Sign in", subMenus: ['Submenu 4-1', 'Submenu 4-2', 'Submenu 4-3' ]}
        ]

    
    return (
        <header className="header">
             {navItems.map(menuItem => {
                 if (menuItem.subMenus !== undefined) {
                    return (
                        <ul className="menuicon" key = {menuItem.id}><i className="fas fa-caret-down" >{menuItem.name}</i>
                        {menuItem.subMenus.map(subMenu => {
                            return (<li className="submenu" key={subMenu.id}>{subMenu}</li>)
                            
                        })}
                        </ul>
                    );
             } else {
                 return <ul key={menuItem.id}>{menuItem.name}</ul>;
             }
            })}

        </header>
    );
}



export default Navigation
