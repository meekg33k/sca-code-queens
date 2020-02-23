import React from "react"

import "./Image.css"

//functional component
const Image = (props) => {
    const {source, height, width, alt, boxshadow} = props
 
    return (
        <div className={`${source} ${height} ${width} ${alt} ${boxshadow}`}>
           <img src={source} height={height} width={width} alt={alt}></img>
        </div>
    )
}

export default Image