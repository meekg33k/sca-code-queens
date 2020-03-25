import React from "react";
import { mount } from "enzyme";
import Icon from "../Icon";
import Text from "../Text";
import CoverPhoto from "./index";


describe("Location Component render", () => {
    it("renders correctly", () => {
        const wrapper = mount(<CoverPhoto name="name of artiste" />)
        expect(wrapper).toMatchSnapshot();
    })

    it("renders image correctly", () => {
        const wrapper = mount(<CoverPhoto coverimg="name of artiste" />)
        expect(wrapper).toMatchSnapshot();
    })

    it("renders text on the page", () => {
        const wrapper = mount(<CoverPhoto />);
        const findText = wrapper.find(Text);
        expect(findText.length).toBe(2);
    });

    it("renders the name of the artiste correctly", () => {
        const wrapper = mount(<CoverPhoto name="The name of the artiste" />);
        expect(
          wrapper
            .find(Text)
            .at(1)
            .props().text
        ).toBe("The name of the artiste");
      });

    it("renders the image of the artiste", () => {
    const wrapper = mount(<CoverPhoto />);
    const artisteImg = wrapper.find(Image);
    expect(artisteImg.length).toBe(0);
    });

})