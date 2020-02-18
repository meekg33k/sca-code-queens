import React, { Component } from "react";

import LinkList from "../LinkList";

export default class Footer extends Component {
    constructor(props){
        super(props);

        this.state = {
            categories: ["All events", "Weddings", "Birthdays", "Karoake", "Clubs", "Get togethers"],
            resources: [],
            quickLinks: []
        }
    }
    render(){
        return(
            <footer>
                <LinkList link={this.state.categories}/>
            </footer>
        )
    }

}