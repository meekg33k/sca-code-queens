import React from "react";

const Header = ({heading, color, size}) => {
    if (size === 3) {
        return(
            <h3 className='heading' style = {{ color: color }}>{heading}</h3>
        )
    }else if (size === 2) {
        return(
            <h2 className='heading' style = {{ color: color }}>{heading}</h2>
        )
    }else 
        return(
            <h1 className='heading' style = {{ color: color }}>{heading}</h1>
        )
}

export default Header;