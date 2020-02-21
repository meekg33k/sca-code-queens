import React, { Component } from "react";

import List from "../List";
import Header from "../header";

const Footer = () => {
    let links = {
        Categories: ["All events", "Weddings", "Birthdays", "Karoake", "Clubs", "Get togethers"],
        Resources: ["Media resources", "Terms & conditions", "Privacy policy"],
        QuickLinks: ["Blogs", "Company", "Pricing"]
    }

        let group = Object.entries(links).forEach(([key, value]) =>{
            console.log(key, value);
           

        // let linkGroup = group.forEach(group => {
        //     console.log(group)
        //     // return(
        //     // // <h3>{group}</h3>
        //     // // // <LinkList link={group.value}/>
        //     // )
        })
        return(
            <footer>
                {group}
                <List links={links.Categories}/>
            </footer>
        )

}

export default Footer