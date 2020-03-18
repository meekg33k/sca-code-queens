import React from "react";
import PropTypes from "prop-types";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", url: "/home" },
  { name: "Organise", url: "/organise" },
  { name: "How it works", url: "/howitworks" },
  { name: "Sign in", url: "./signin" }
];

const Navigation = ({ navItems }) => {
  return (
    <header className="header">
      <ul>
        {navItems.map(menuItem => {
          return (
            <li className="navList" key={menuItem.name}>
              <NavLink to={menuItem.url}>{menuItem.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

Navigation.defaultProps = { navItems: items };

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  )
};

export default Navigation;
