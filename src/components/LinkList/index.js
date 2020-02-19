import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LinkList extends Component {
    constructor(props){
        super(props);

        this.state = {
            links: props.link
        }
    }
    render() {
        let list = this.state.links.map(link => {
        return <li key={link} ><Link to={`${link}`} >{link}</Link></li>
        })
        return(
            <ul className="linkList">
                {list}
            </ul>
        )
    }
}