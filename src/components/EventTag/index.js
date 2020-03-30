import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Text from "../Text/index";
import "./EventTag.css";

const EventTag = ({ icon, partyType, attendeeNumber, size, opacity}) => {
  
  let attendee = attendeeNumber ?  attendeeNumber.toString() : false
  let opac = opacity === true ? "opac" : false
  let style = size==="smallTag" ? "smallTag" : "largeTag"

  return (
      <div className= {`${style} ${opac}`} >
          <Icon src={icon} alt={`${partyType} icon`} />
          <Text
          text={partyType || attendee}
          size="default"
          color="white"
          />      
        </div>
  )
};

EventTag.defaultProps = {
  icon: "",
  // // partyType: "partytype or attendee",
  // attendeeNumber: 0
};

EventTag.propTypes = {
  icon: PropTypes.string,
  attendeeNumber: PropTypes.number,
  partyType: PropTypes.string ,
  size: PropTypes.string ,
  opac: PropTypes.string ,
};

export default EventTag;
