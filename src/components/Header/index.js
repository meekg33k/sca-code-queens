import React from "react";

const Header = ({heading, color, size}) => {
    if (size === 3) {
        return(
            <div className="header">
                <h3 color={color}>{heading}</h3>
            </div>
        )
    }else if (size === 2) {
        return(
            <div className="header">
                <h2 color={color}>{heading}</h2>
            </div>
        )
    }else 
        return(
            <div className="header">
                <h1 color={color}>{heading}</h1>
            </div>
        )
}

export default Header;