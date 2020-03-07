import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = props => {
  const { source, height, width, alt, boxshadow } = props;
  return (
    <div className={`${source} ${height} ${width} ${alt} ${boxshadow}`}>
      <img src={source} height={height} width={width} alt={alt} />
    </div>
  );
};

Image.defaultProps = {
  alt: "image",
  boxshadow: "greenshadow",
  source: "someimage",
  height: 300,
  width: 300
};

Image.propTypes = {
  alt: PropTypes.string,
  boxshadow: PropTypes.string,
  source: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

export default Image;
