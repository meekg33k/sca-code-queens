import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import EventTag from ".";
import { peopleIcon } from "../../pages/EventPage/index";


storiesOf("EventTag", module)
  .addDecorator(
    withInfo({
      text: "This is a component renders an event Tag showing the event type or attendee number. The options for size are largeTag or smallTag"
    })
  )
  .addDecorator(withKnobs())
  .add("EventTag", () => {
    return <EventTag 
    icon={peopleIcon}
    attendeeNumber={100}
    size={"largeTag"}
    opacity={false}/>;
  })
  .add("your Event tag", () => {
    const icon = text("path", peopleIcon);
    const partyType = text("partType", 'people');
    const size = text("size", "smallTag");
    const opacity = boolean('opacity', true)

    return  <EventTag 
    icon={icon}
    partyType={partyType}
    size={size}
    opacity={opacity}/> ;
  });
