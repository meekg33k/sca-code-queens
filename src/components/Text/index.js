
import React from "react";
import './Text.css';

//<Text text='Sample text' color='green' size="small" />
const Text = (props) => {
  const { text, color, size } = props;
  //size=['small', 'medium', 'large']
  //        20px      32px      40px
  
  const className = `${color} ${size}`; // 'green small'
  return (
    <p className={className}>{text}</p>
  )
}

export default Text;