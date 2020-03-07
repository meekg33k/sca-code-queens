import React from "react";
import { shallow } from "enzyme";
import Text from "./index";

describe("Text Component render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Text text="It is a text" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match greenish color snapshot", () => {
    const wrapper = shallow(<Text color="greenish" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match medium fontsize snapshot", () => {
    const wrapper = shallow(<Text size="medium" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays text", () => {
    const wrapper = shallow(<Text text="It is a text" />);
    expect(wrapper.text()).toBe("It is a text");
  });
});
