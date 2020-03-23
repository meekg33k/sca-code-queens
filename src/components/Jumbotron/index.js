import React from "react";
import "./Jumbotron.css";
import Header from "../Header/index";
import Text from "../Text/index";
import SearchBox from "../SearchBox"

const Jumbotron = () => {
  const work = (value) => {
		console.log(value)
	}
  return (

    <div className="jumbotron">
      <div className="main">
        <div className="words">
        <Header
          heading="Control the vibe at events you attend"
          color="#1ABC9C"
          size={1}
        />
        <Text
          text="Take control of the party, get a clue of the DJ playing, their playlist and vote for song you wish to hear."
          size="extaSmall"
          color="greyish"
        />
        
        <SearchBox onSearch={work} buttonTitle={"search"}/>
        </div>
        </div>
      <div className="photo" />
    </div>
  );
};

export default Jumbotron;
