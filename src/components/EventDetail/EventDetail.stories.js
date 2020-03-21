import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import EventDetail from "./index";

storiesOf("EventDetail", module)
  .addDecorator(
    withInfo({
      text: "This is a EventDetail component"
    })
  )
  .addDecorator(withKnobs())
  .add("EventDetail", () => (
    <EventDetail 
    about={text("about", "DJ Spinal shutting Down popular club in Yaba")}
    time={text("time", "8:00 PM - Dawn")}
    date={text("date", "28th January, 2020")}/>
  ));