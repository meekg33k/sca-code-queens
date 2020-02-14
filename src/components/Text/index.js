import React from "react"

//functional component

const Text = (props) => {
   //const { text } = props
   const text = props.text

    return (
        <p>{text}</p>

    )
}

export default Text


