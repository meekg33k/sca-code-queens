import React from "react";
import { mount } from "enzyme";

import EventDetail from "./index";

const about = "DJ Spinal shutting Down popular club in Yaba";
const time = "8:00 PM - Dawn";
const date = "28th January, 2020";

const setUp = (about, time, date) => {
    return mount( <EventDetail 
        about={about}
        time={time}
        date={date}/>);
  };

describe("EventDetail snapshot", () => {
    it("should match snap shot", () => {
      const eventDetail = setUp(about, time, date);
      expect(eventDetail).toMatchSnapshot();
    });
});

// test the number of headers 
describe("renders header", () => {
  it("contains 4 Header component", () => {
    const eventDetail = setUp(about, time, date);
    const header = eventDetail.find("Header");

    expect(header.length).toBe(4);
  });
});

describe("renders Text", () => {

  let eventDetail, paragragh
  beforeEach(() => {
     eventDetail = setUp(about, time, date);
     paragragh = eventDetail.find("p");
  });
  afterEach(() => {
    eventDetail.unmount();
  });

  it("contains all text", () => {
    const header = eventDetail.find("Text");

    expect(header.length).toBe(3);
  });
  it("renders the about correctly", () => {
   
    expect(paragragh.at(0).text()).toEqual(about);
  });
  it("renders the date correctly", () => {

    expect(paragragh.at(1).text()).toEqual(time);
  });
  it("renders the time correctly", () => {

    expect(paragragh.at(2).text()).toEqual(date);
  });
});
