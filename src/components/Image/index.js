import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = props => {
  const { source, height, width, alt } = props;
  return (
    //<div className={`${source} ${height} ${width} ${alt}`}>
    <div className="imageDiv">
      <img className="imageClass" src={source} height={height} width={width} alt={alt} />
    </div>
  );
};

Image.defaultProps = {
  alt: "image",
  source: "someimage",
  height: 300,
  width: 300
};

Image.propTypes = {
  alt: PropTypes.string,
  source: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

export default Image;
