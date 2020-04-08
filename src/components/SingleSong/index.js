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
            isCompleted: false
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }

    startTimer = () => {
        this.timer = setInterval(() =>
         this.setState({
             isPlaying: true,
             time: this.state.time + 1
         }),1000);
    }

    stopTimer = () => {
        this.setState({isPlaying: false})
        clearInterval(this.timer)
    }
    

    render() {
        let duration
        if (this.state.isCompleted === true) {
            duration = this.state.time;
            this.setState({isPlaying: false})
        }

        let start = (this.state.time === 0 || this.state.isPlaying === false) ?
        <button className="iconStop" onClick={this.startTimer}>
            <Icon src="./assets/play.png" alt="play button" />
            <div className="playStop">
                <Text text="Play" color="greyish" size="default"/>
            </div>
        </button> : null

        let stop = (this.state.time !== 0 && this.state.isPlaying === true) ?
        <button className="iconStop" onClick={this.stopTimer}>
            <Icon src="./assets/stop.png" alt="stop button" />
            <div className="playStop">
                <Text className="playStop" text="Stop" color="greyish" size="default"/>
            </div>
        </button> : null

        return (
            <div className="addBorder">
                <div className="singleSong">
                    <div className="partyImage">
                        <Image source={this.props.albumPhoto} height = {100} width = {100} alt="Photo of this album"  />
                    </div>    
                    <div className="songTimer">
                        <div className="albumSinger">
                            <div className="songSinger">
                                <Text text="Song Singer  - " color = "greyish" size="extrasmall" />
                            </div>
                            <div className ="singerName">
                                <Text text= {this.props.singer} color= "greyish" size="extrasmall" />
                            </div>
                            <div className="timer">{this.state.time} {duration} </div>
                        </div>
                    
                        <div className="buttonAndIcon">
                            <div className="buttonIcon"> {start} {stop} </div>
                            <div className="likeOrUnlike">
                                <LikeUnlike source="./assets/thumbsup.png" alternate="like" />
                                <div className = "unlike">
                                    <LikeUnlike source="./assets/thumbsdown.png" alternate="unlike" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleSong;