import React, { Component } from "react";

export default class LinkList extends Component {
    constructor(props){
        super(props);

        this.state = {
            links: props.link
        }
    }
    render() {
        let list = this.state.links.map(link => {
        return <li  key={link} ><a href="#">{link}</a></li>
        })
        return(
            <ul className="linkList">
                {list}
            </ul>
        )
    }
}