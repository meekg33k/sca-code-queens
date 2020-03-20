import React from "react";
import {shallow} from "enzyme";
import Location from "./index";



describe ("Location Component render", () => {
   it("renders correctly", () => {
       const wrapper = shallow(<Location name="The name of the event" />);
       expect(wrapper).toMatchSnapshot();
    })

    it("renders correctly", () => {
        const wrapper = shallow(<Location location="The location of the event" />);
        expect(wrapper).toMatchSnapshot();
     })

     it ("renders font awesome icon", () => {
         const wrapper = shallow(<Location />);
            const faIcon = wrapper.find("i");
            expect(faIcon.length).toBe(1);
     })
});