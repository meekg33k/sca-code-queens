import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";

import Navigation from "./index";
//import { render } from "@testing-library/react";

let nav;
const setUp = () => {
  return mount (
    <Router>
      <Navigation />
    </Router>
  );
};
beforeEach(() => {
  nav = setUp();
});

describe("Navigation Component render", () => {
    it("renders corectly", () => {
      expect(nav).toMatchSnapshot();
    });
    it ("renders links through the NavLink node", () => {
      const findNavLink = nav.find('NavLink');
      expect(findNavLink.length).toBe(4);
    });
    it ("renders a list of menu", () => {
      const findMenu = nav.find("ul");
      expect(findMenu.text()).toMatch("Home")

    });
})