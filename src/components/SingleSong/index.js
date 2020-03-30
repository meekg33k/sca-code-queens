import React from "react";
import Image from "../Image";
import Text from "../Text";
import LikeUnlike from "../LikeUnlike";
//import PlayPause from "../PlayPause";
import "./SingleSong.css";

const SingleSong = ({albumPhoto, singer}) => {
    return (
        <div className="addBorder">
            <div className="singleSong">
                <Image source={albumPhoto} height = {100} width = {100} alt="Photo of this album"  />
                <div className="albumSinger">
                    <div className="songSinger">
                        <Text text="Song Singer - " color = "greyish" size="extrasmall" />
                    </div>
                    <div className ="singerName">
                        <Text text= {singer} color= "greyish" size="extrasmall" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SingleSong;