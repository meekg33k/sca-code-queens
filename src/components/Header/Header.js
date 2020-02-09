import React from "react"
//functional component
const Header = (props) => {
    const header = props.header
    return (
        <div>
            <h1>{header}</h1>
        </div>
    )
    
}

//class based component
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        header: props.header   //Get initial text from props 
        }
    }
    render() {
        return (
            <div>
                <h1>{header}</h1>
            </div>
        )
    }

}