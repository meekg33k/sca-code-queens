import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListOfLink = ({item}) => {
    let list, url
     list = item.map(link=> {
            if(typeof(link) === "string"){
                url = link.replace(/\s+/g, '')
                return <li key={link}><Link to={`/${url}`}>{link}</Link></li>
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


ListOfLink.defaultProps = {
  item: []
};

ListOfLink.propTypes = {
  item: PropTypes.instanceOf(Array)
};

export default ListOfLink;
