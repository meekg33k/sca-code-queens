import React from "react";
import { shallow } from "enzyme";
import EventPage from "./index";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

describe("Event Page render", () => {
  const wrapper = shallow(<EventPage />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the Navigation Component", () => {
    const NavigationComponent = wrapper.find(Navigation);
    expect(NavigationComponent).toHaveLength(1);
  });

  it("renders the Footer Component", () => {
    const FooterComponent = wrapper.find(Footer);
    expect(FooterComponent).toHaveLength(1);
  });
});
