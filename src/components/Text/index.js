import React from "react";
import PropTypes from "prop-types";
import "./Text.css";

const Text = props => {
  const { text, color, size } = props;

  const className = `${color} ${size}`;
  return <p className={className}>{text}</p>;
};

Text.defaultProps = {
  text: "Text",
  color: "black",
  size: "default"
};

Text.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Text;
