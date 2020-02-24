
import React from "react";
import './Text.css';


const Text = (props) => {
  const { text, color, size } = props;
  
  
  const className = `${color} ${size}`;
  return (
    <p className={className}>{text}</p>
  )
}

export default Text;