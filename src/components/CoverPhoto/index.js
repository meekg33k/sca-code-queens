import React from "react";
import Image from "../Image";
import Text from "../Text"
import "./CoverPhoto.css"


const CoverPhoto = ({name, coverimg}) => {
    return (
        <div className="coverPhoto">
            <div className="coverText">
                <div className="coverFirst">
                    <Text text="Playing DJ:" color="greyish" size="extrasmall" />
                </div>
            <Text text={name} color="greyish" size="extrasmall" />
            </div>
            <Image source={coverimg} alt="cover photo" width= {200} height= {200} />
            
        </div>
    )

};

export default CoverPhoto;