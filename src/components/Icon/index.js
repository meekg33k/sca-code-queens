import React from "react";
import PropTypes from "prop-types";
import "./Icon.css";

const Icon = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

Icon.defaultProps = {
  src: "",
  alt: "image"
};

Icon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Icon;
