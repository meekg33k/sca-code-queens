import React from "react";
import { shallow } from "enzyme";

import Button from "./";

// snap
describe("Button component", () => {

	let prop = "hey there!!!"

	const setUp = (prop) =>{
		const wrapper = shallow(<Button title={prop} />);
		return wrapper
	}

    let button
    beforeEach(() =>{
		 button = setUp(prop);
    })
    it("should match snapshot", () => {
      expect(button).toMatchSnapshot();
		});
		it("should render button", () => {
			const buttonElem = button.find('button')
			expect(buttonElem.length).toBe(1);
		});
		it("should have the right text", () =>{
			expect(button.text()).toEqual(prop)
		})
})

