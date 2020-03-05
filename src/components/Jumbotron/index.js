import React from "react";
import "./Jumbotron.css";
import Header from "../Header/index";
import Text from "../Text/index";
// import Image from '../Image/index';
// import JumbotronImage from "../../../src/images/jumbotron_image.png";

const Jumbotron = () => {
  return (
    // <Image source={require("../images/jumbotron_image.png")} alt="Jumbotron Image" height="572px" width="572px" />
    // <Image source={JumbotronImage} alt="Jumbotron Image" height="400px" width="400px" boxshadow="greenshadow" />

    <div className="jumbotron">
      <div className="main">
        <div className="words" />
        <Header
          heading="Control the vibe at events you attend"
          color="#1ABC9C"
          size={1}
        />
        <Text
          text="Take control of the party, get a clue of the DJ playing, their playlist and vote for song you wish to hear."
          size="small"
          color="greyish"
        />
        <div className="search" />
      </div>
      <div className="photo" />
    </div>
  );
};

export default Jumbotron;
