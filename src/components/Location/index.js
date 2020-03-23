import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Text from "../Text";
import "./Location.css";

const Location = props => {
  const { name, location } = props;

  return (
    <div className="locationName">
      <Text size="small" text={name} />
      <div className="locationText">
        <Icon src="./assets/location.png" alt="youtube icon" />
        <Text size="small" text={location} />
      </div>
    </div>
  );
};

Location.defaultProps = {
  name: "Name",
  location: "Location"
};

Location.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string
};

export default Location;
