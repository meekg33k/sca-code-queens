import React from "react";
import { mount } from "enzyme";
import Jumbotron from "./index";

describe("Jumbotron Component render", () => {
  it("renders Jumbotron without breaking", () => {
    const wrapper = mount(<Jumbotron />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders Header with heading", () => {
    const wrapper = mount(<Jumbotron />);
    const headerHeading = wrapper.find(".heading");
    expect(headerHeading.text()).toBe("Control the vibe at events you attend");
  });
  it("renders Text with text", () => {
    const wrapper = mount(<Jumbotron />);
    const textText = wrapper.find(".greyish");
    expect(textText.text()).toMatch("Take control of the party");
  });
});
