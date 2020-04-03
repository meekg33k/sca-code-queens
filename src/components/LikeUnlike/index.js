import React from "react";
import Icon from "../Icon";
import './LikeUnlike.css';

class LikeUnlike extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
   
    handleClick = () => {
        this.setState(prevState => {
            return {
                count: this.state.count + 1
            }
        })
    }

    render () {
        return (
                <div className= "buttonCount"> 
                    <button className= "iconButton" onClick = {this.handleClick}>
                        <Icon src={this.props.source} alt={this.props.alternate}/>
                    </button>
                    <p className="counter">{this.state.count}</p>
                </div>

        )}
}
export default LikeUnlike;