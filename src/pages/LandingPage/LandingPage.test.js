import React from "react";
import { render } from "enzyme";
import LandingPage from "./index";

describe("Landing Page render", () => {
  it("renders correctly", () => {
    const wrapper = render(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the landing page", () => {
    const wrapper = render(<LandingPage />);
    expect(wrapper.text()).toBe("This is the landing page");
  });
});
