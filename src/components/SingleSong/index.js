import React from "react";
import Image from "../Image";
import Text from "../Text";
import LikeUnlike from "../LikeUnlike";
import Icon from "../Icon";
import "./SingleSong.css";


class SingleSong extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false,
            time: 0,
            duration: ""
        }

        this.startTimer = this.startTimer.bind(this)
    }

    startTimer = () => {
        this.timer = setInterval(() =>
         this.setState({
             isPlaying: true,
             time: this.state.time + 1
         }),1000);
    }
    
   /* startTimer = () => {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1)
    }*/

    stopTimer = () => {
        this.setState({isPlaying: false})
        clearInterval(this.timer)
      }

    /*resetTimer = () => {
    this.setState({time:0})
    }*/

    render() {
        
        let start = (this.state.time === 0 || this.state.isPlaying === false) ? 
        <button onClick={this.startTimer}>
            <Icon src="./assets/play.png" alt="play button" />
        </button> : null

        let stop = (this.state.time !== 0 && this.state.isPlaying === true) ?
        <button onClick={this.stopTimer}>
            <Icon src="./assets/play.png" alt="play button" />
        </button> : null

        return (
            <div className="addBorder">
                <div className="singleSong">
                    <Image source={this.props.albumPhoto} height = {100} width = {100} alt="Photo of this album"  />
                    <div className="albumSinger">
                        <div className="songSinger">
                            <Text text="Song Singer - " color = "greyish" size="extrasmall" />
                        </div>
                        <div className ="singerName">
                            <Text text= {this.props.singer} color= "greyish" size="extrasmall" />
                        </div>
                        <div>timer: {this.state.time}</div>
                        <div className="buttonTimer"> {start} {stop} </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
/*<button onClick={this.startTimer}>
                            <Icon src="./assets/play.png" alt="play button" />
                        </button>
                        <button onClick={this.stopTimer}>
                            <Icon src="./assets/play.png" alt="stop button" />
                        </button>
                        
                        </div> */

export default SingleSong;