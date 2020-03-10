//this is a disorganised file that will be deleted later
const navbar = ["Home", "Organise", "How it works", "Sign in"]
<div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

<nav className="navlinks">{navname}</nav>
//const navComponent = navItem.map(menu => <Navigation key={menu.id} navname={menu} />)
const submenu = document.addquerySelector(".submenu");
onClick = {{submenu}.classList.toggle("subactive")}

const navItems = [
    {name:"Home"}, 
    {name:"Organise", subMenus: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3' ]},
    {name:"How it works", subMenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3' ]},
    {name:"Sign in", subMenus: ['Submenu 4-1', 'Submenu 4-2', 'Submenu 4-3' ]}
    ]

    const Navigation = ({navname}) => {
        //const navItems = [{name:"Home"}, {name:"Organise"}, {name:"How it works"}, {name:"Sign in"}]
        const navItems = [
            {name:"Home"}, 
            {name:"Organise", subMenus: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3' ]},
            {name:"How it works", subMenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3' ]},
            {name:"Sign in", subMenus: ['Submenu 4-1', 'Submenu 4-2', 'Submenu 4-3' ]}
            ]

            return (<li className= {nameOfClass} onClick={this.toggleSubmenu} key={subMenu.id}>{subMenu}</li>)
        
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

    ------------------------------------------------------------
    import React from "react";
import "./Navigation.css";




class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            isSubmenuVisible: false 
        }
        this.toggleSubmenu = this.toggleSubmenu.bind(this)
    }
    toggleSubmenu() {
        this.setState(prevState => {
            return {
                isSubmenuVisible: !prevState.isSubmenuVisible
            }
        })
    }
    

    render () {
        //const navItems = [{name:"Home"}, {name:"Organise"}, {name:"How it works"}, {name:"Sign in"}]
        const navItems = [
            {name:"Home"}, 
            {name:"Organise", subMenus: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3' ]},
            {name:"How it works", subMenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3' ]},
            {name:"Sign in", subMenus: ['Submenu 4-1', 'Submenu 4-2', 'Submenu 4-3' ]}
            ];

        const {isSubmenuVisible} = this.state;
        const nameOfClass = this.state.isSubmenuVisible? 'submenu' : 'subactive'
    }
        return (
            <header className="header">
                {navItems.map(menuItem => {
                    if (menuItem.subMenus !== undefined) {
                        return (
                            <ul className="menuicon" key = {menuItem.id}><i className="fas fa-caret-down" >{menuItem.name}</i>
                            {menuItem.subMenus.map(subMenu => {
                                return (<li className= {nameOfClass} onClick={this.toggleSubmenu} key={subMenu.id}>{subMenu}</li>)
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

--------------------------------------------
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";

import Navigation from "./index";

describe("Navigation Component render", () => {
    it("renders corectly", () => {
      const wrapper = mount(<Navigation />)
      expect(wrapper).toMatchSnapshot();
    });
    it ("renders links through the NavLink node", () => {
      const wrapper = mount(<Navigation />);
      const findNavlink = wrapper.find('NavLink');
      expect(findNavLink.length).toBe(4);
    });
    it ("renders a list of menu", () => {
      const wrapper = mount(<Navigation/>);
      const findMenu = wrapper.find("ul");
      expect(findMenu.text()).toMatch("Home")

    });
})