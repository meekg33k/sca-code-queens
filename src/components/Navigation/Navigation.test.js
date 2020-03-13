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
      const findMenu = nav.find("li");
      expect(findMenu.at(0).text()).toBe("Home");
      expect(findMenu.at(1).text()).toBe("Organise");
      expect(findMenu.at(2).text()).toBe("How it works");
      expect(findMenu.at(3).text()).toBe("Sign in");

    });
})