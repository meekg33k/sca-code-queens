import React from "react";
import { shallow } from "enzyme";
import Location from "./index";
import Icon from "../Icon";
import Text from "../Text";

describe("Location Component render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Location name="The name of the event" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Location location="The location of the event" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the location icon", () => {
    const wrapper = shallow(<Location />);
    const locationImg = wrapper.find(Icon);
    expect(locationImg.length).toBe(1);
  });

  it("renders text on the page", () => {
    const wrapper = shallow(<Location />);
    const findText = wrapper.find(Text);
    expect(findText.length).toBe(2);
  });

  it("renders the name of the event correctly", () => {
    const wrapper = shallow(<Location name="The name of the event" />);
    expect(
      wrapper
        .find(Text)
        .at(0)
        .props().text
    ).toBe("The name of the event");
  });

  it("renders the location of the event correctly", () => {
    const wrapper = shallow(<Location location="The location of the event" />);
    expect(
      wrapper
        .find(Text)
        .at(1)
        .props().text
    ).toBe("The location of the event");
  });
});
