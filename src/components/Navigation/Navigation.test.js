import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import Navigation from "./index";

let nav;
const setUp = () => {
  return mount(
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
  it("renders links through the NavLink node", () => {
    const findNavLink = nav.find("NavLink");
    expect(findNavLink.length).toBe(4);
  });
  it("renders the default list of menu", () => {
    const findMenu = nav.find("li");
    expect(findMenu.at(0).text()).toBe("Home");
    expect(findMenu.at(1).text()).toBe("Organise");
    expect(findMenu.at(2).text()).toBe("How it works");
    expect(findMenu.at(3).text()).toBe("Sign in");
  });

  it("renders navItems props as menu list", () => {
    const navItems = [
      { name: "Link A", url: "/linka" },
      { name: "Link B", url: "/linkb" },
      { name: "Link C", url: "/linkc" }
    ];
    const dynamicNav = mount(
      <Router>
        <Navigation navItems={navItems} />
      </Router>
    );
    expect(dynamicNav.find("NavLink").length).toBe(3);
    const findMenu = dynamicNav.find("li");
    expect(findMenu.at(0).text()).toBe("Link A");
    expect(findMenu.at(1).text()).toBe("Link B");
    expect(findMenu.at(2).text()).toBe("Link C");
  });
});
