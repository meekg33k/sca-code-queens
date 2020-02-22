import React from "react";


const Icon = ({ iconLinks, type }) => {  
    
    return(
        <div className={`icon ${type}`}>
        {iconLinks.map(({imgPath, url, alt}) => <a key={imgPath} href={url}><img src={imgPath} alt={alt}/></a>)}
        </div>        
    )
}

export default Icon