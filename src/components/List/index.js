import React from "react";
import { Link } from "react-router-dom";

const List = ({links}) => {
    let list = links.map(link => {
        return <li key={link}><Link to={`${link}`}>{link}</Link></li>
        })
        return(
            <ul className="linkList">
                {list}
            </ul>
        )
}

export default List