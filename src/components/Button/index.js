import React from "react";
import PropTypes from "prop-types";

const Button = ({ title }) => {
  return <button>{title}</button>;
};

Button.defaultProps = {
  title: "default title"
};

Button.propTypes = {
  title: PropTypes.string
};
export default Button;
