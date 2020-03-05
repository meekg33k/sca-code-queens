import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListOfLink = ({ item }) => {
  const list = item.map(link => {
    if (typeof link === "string") {
      return (
        <li key={link}>
          <Link to={`/${link}`}>{link}</Link>
        </li>
      );
    }
    return (
      <li key={link.link}>
        <a href={link.link}>{link.item}</a>
      </li>
    );
  });

  return <ul className="listOfLink">{list}</ul>;
};

ListOfLink.defaultProps = {
  item: []
};

ListOfLink.propTypes = {
  item: PropTypes.instanceOf(Array)
};

export default ListOfLink;
