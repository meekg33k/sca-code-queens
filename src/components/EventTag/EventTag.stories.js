import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { facebook } from "../Footer";
import EventTag from ".";
import { peopleIcon } from "../../pages/EventPage/index";


storiesOf("EventTag", module)
  .addDecorator(
    withInfo({
      text: "This is a component renders an event Tag showing the event type or attendee number"
    })
  )
  .addDecorator(withKnobs())
  .add("EventTag", () => {
    return <EventTag 
    icon={peopleIcon}
    attendeeNumber={100}/>;
  })
  .add("your Event tag", () => {
    const icon = text("path", "./link/to/icon");
    const attendeeNumber = number("attendeeNumber", 0);

    return  <EventTag 
    icon={icon}
    attendeeNumber={attendeeNumber}/> ;
  });
