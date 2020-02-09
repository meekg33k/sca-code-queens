import React from "react"

// //functional component
//const Text = (props) => {
//    //const {text} = props
//    const text = props.text
//    return (
//        <div>
//            <h1>{text}</h1>
//        </div>
//    )  
//}
//export default Text

//class based component
class Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        text: props.text   //Get initial text from props 
        }
    }
    render() {
        return (
            <div>
               <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Text