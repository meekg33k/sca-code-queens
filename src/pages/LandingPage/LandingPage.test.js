import React from "react";
import { shallow } from "enzyme";
import Jumbotron from "../../components/Jumbotron";
import LandingPage from "./index";

describe("Landing Page render", () => {
  const wrapper = shallow(<LandingPage />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the Jumbotron", () => {
    const JumbotronComponent = wrapper.find(Jumbotron);
    expect(JumbotronComponent).toHaveLength(1);
  });
});
