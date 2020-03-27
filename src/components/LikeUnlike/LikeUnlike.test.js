import React from "react";
import { shallow } from "enzyme";
import LikeUnlike from "./index";
import Icon from "../Icon";

describe ("LikeUnlike component renders corectly", () => {
    it ("renders source props correctly", () => {
        const wrapper = shallow(<LikeUnlike source="source of the icon" />)
        expect (wrapper).toMatchSnapshot
    })

    it ("renders alternate props correctly", () => {
        const wrapper = shallow(<LikeUnlike alternate ="an alternate text for the icon" />)
        expect (wrapper).toMatchSnapshot
    })

    it ("renders a button", () => {
        const wrapper = shallow(<LikeUnlike />)
        const findButton = wrapper.find('button')
        expect (findButton.length).toBe(1)
    })

    it ("renders an image", () => {
        const wrapper = shallow(<LikeUnlike />)
        const findImage = wrapper.find(Icon)
        expect (findImage.length).toBe(1)
    })

    it ("renders a paragraph", () => {
        const wrapper = shallow(<LikeUnlike />)
        const findP = wrapper.find("p")
        expect (findP.length).toBe(1)
    })
})
