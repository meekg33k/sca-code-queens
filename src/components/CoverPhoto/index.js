import React from "react";
import Image from "../Image";
import Text from "../Text";
import SingleSong from "../SingleSong";
import "./CoverPhoto.css"


const CoverPhoto = ({name, coverimg}) => {
    return (
        <div className="songDetails">
            <div className="coverText">
                <div className="firstText">
                    <Text text="Playing DJ:" color="greyish" size="extrasmall" />
                </div>
            <Text text={name} color="greyish" size="extrasmall" />
            </div>
            <div className="djImage">
                <Image source={coverimg} alt="cover photo" width= {200} height= {200} />
            </div>
            <div>
                <SingleSong albumPhoto="./assets/people-dancing-inside-dim-room.png" singer="Marley" />
            </div>
        </div>
    )
}; 




export default CoverPhoto;