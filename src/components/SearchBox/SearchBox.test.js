import React from "react";
import { mount } from "enzyme";

import SearchBox from "./index";
// check the button is rendered with the right title if title is passed 
// input renderes
const search = (value) => {
    console.log(value)
}

const setUp = (search, title) => {
    return mount(<SearchBox onSearch={search} buttonTitle={title}/>)
}
describe("SearchBox Component", () => {
  let searchBox;
  beforeEach(() => {
    searchBox = setUp(search, "button title");
  });

  it("should match snap shot", () => {

    expect(searchBox).toMatchSnapshot();
  });

  it("renders button with the correct title", () => {
    const button = searchBox.find("button");
    button.simulate("click", search("clicked"))

    expect(button.length).toBe(1);
    expect(button.text()).toEqual("button title");
  });

  it("renders input field", () => {
    const input = searchBox.find("input");

    expect(input.length).toBe(1);
  });
});