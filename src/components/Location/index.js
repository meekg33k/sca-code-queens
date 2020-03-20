import React from "react";
import "./Location.css";
import PropTypes from "prop-types";


const Location = (props) => {
    const {name, location} = props;

    return (
        <div className = "locationName">
            <p className="nameClass">{name}</p>
            <p className="locationClass"><i className="fas fa-map-marker"></i>{location}</p>
        </div>
    )
};

Location.defaultProps = {
    name: "Name",
    location: "Location"
};

Location.PropTypes = {
    name: PropTypes.string,
    location: PropTypes.string
};


export default Location;