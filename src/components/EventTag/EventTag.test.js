import React from "react";
import { mount } from "enzyme";
import { peopleIcon } from "../../pages/EventPage/index";

import EventTag from "./index";
const setUp = () => {
    return mount( <EventTag 
        icon={peopleIcon}
        attendeeNumber={100}/>);
  };

describe("EventTag", () => {
    let Tag
  beforeEach(() => {
     Tag = setUp();
  });
  afterEach(() => {
    Tag.unmount();
  });

    it("should match snap shot", () => {
      
      expect(Tag).toMatchSnapshot();
    });
    it("contains icon ", () => {
        const icon = Tag.find("img");
    
        expect(icon.length).toBe(1);
    });
    it("contains text ", () => {
        const text = Tag.find("p");
    
        expect(text.length).toBe(1);
        expect(text.text()).toEqual("100");
      });
});
