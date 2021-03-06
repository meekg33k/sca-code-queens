import React from "react";
import { shallow } from "enzyme";
import { socials } from "../Footer";

import ListOfLink from ".";

const icon = socials;
const link = ["Blogs", "Company"];

const setUp = (prop = {}) => {
  return shallow(<ListOfLink item={prop} />);
};

describe("List Component", () => {
  it("should match Icon snap shot", () => {
    const listSnap = setUp(icon);
    expect(listSnap).toMatchSnapshot();
  });
});
describe("renders a list of icons", () => {
  let listOfIcon;
  beforeEach(() => {
    listOfIcon = setUp(icon);
  });
  it("and find the Icon node", () => {
    const listIcon = listOfIcon.find("Icon");

    expect(listIcon.length).toBe(3);
  });
});
describe("renders a list of link", () => {
  let listOfLink;
  beforeEach(() => {
    listOfLink = setUp(link);
  });
  it("and find the list of Links node", () => {
    const list = listOfLink.find("Link");

    expect(list.length).toBe(2);
  });
});
