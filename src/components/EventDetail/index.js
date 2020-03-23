import React from "react";
import PropTypes from "prop-types";
import "./EventDetail.css";
import Header from "../Header/index";
import Text from "../Text/index";

const EventDetail = ({ about, time, date }) => {
  return (
    <aside className="eventDetails">
      <Header heading="Event Details:" color="#7F8C8D" size={2} />
      <Header heading="About:" color="#7F8C8D" size={3} />
      <Text text={about} size="default" />
      <Header heading="Time:" color="#7F8C8D" size={3} />
      <Text text={time} size="default" />
      <Header heading="Date:" color="#7F8C8D" size={3} />
      <Text text={date} size="default" />
    </aside>
  );
};

EventDetail.defaultProps = {
  about: "Party information",
  time: "20th Jan, 2020",
  date: "date"
};

EventDetail.propTypes = {
  about: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string
};
export default EventDetail;
