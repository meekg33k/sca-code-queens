import React from "react";
import { Link } from "react-router-dom";

const ListOfLink = ({item}) => {
    let list
     list = item.map(link=> {
            if(typeof(link) === "string"){
                return <li key={link}><Link to={`/${link}`}>{link}</Link></li>
            }else{
                return <li key={link.link}><a href={link.link}>{link.item}</a></li>
            }
            })     
    
    return(
        <ul className="listOfLink">
            {list}
        </ul>
    )
}

export default ListOfLink