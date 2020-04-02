import React from "react";
import { shallow } from "enzyme";
import Image from "./index";

describe("Image Component render", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Image />)
        expect(wrapper).toMatchSnapshot();
    });

    it("renders an image", () => {
        const wrapper = shallow(<Image />)
            const findImage = wrapper.find("img")
            expect (findImage.length).toBe(1)
    })

})