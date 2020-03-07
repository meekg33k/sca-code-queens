import React from "react";
import { shallow } from "enzyme";
import { facebook } from "../Footer";

import Icon from ".";

const src = facebook;
const alt = "facebook";

const setUp = () => {
  return shallow(<Icon src={src} alt={alt} />);
};

describe("Icon Component", () => {
  let icon;
  beforeEach(() => {
    icon = setUp();
  });

  it("should match Icon snap shot", () => {
    expect(icon).toMatchSnapshot();
  });
  it("should render icon image correctly", () => {
    const image = icon.find("img");

    expect(image.length).toBe(1);
  });
});

// check property data type
