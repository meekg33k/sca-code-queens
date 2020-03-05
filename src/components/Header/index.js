import React from "react";
import PropTypes from "prop-types";

const Header = ({ heading, color, size }) => {
  if (size === 3) {
    return (
      <h3 className="heading" style={{ color }}>
        {heading}
      </h3>
    );
  }
  if (size === 2) {
    return (
      <h2 className="heading" style={{ color }}>
        {heading}
      </h2>
    );
  }
  return (
    <h1 className="heading" style={{ color }}>
      {heading}
    </h1>
  );
};

Header.defaultProps = {
  heading: "Heading",
  color: "black",
  size: 1
};

Header.propTypes = {
  heading: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Header;
