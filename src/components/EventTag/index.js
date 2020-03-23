import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Text from "../Text/index";
import "./EventTag.css";

const EventTag = ({ icon, partyType, attendeeNumber }) => {
  
  let attendee = attendeeNumber ?  attendeeNumber.toString() : false
  
  return (
      <div className="eventTag">
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
  partyType: PropTypes.string ,
  attendeeNumber: PropTypes.number
};

export default EventTag;
