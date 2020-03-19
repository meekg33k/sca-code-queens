import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import EventPage from "./index";

storiesOf("EventPage", module)
  .addDecorator(
    withInfo({
      text: "This is the app's event page"
    })
  )
  .addDecorator(story => {
    return <div>{story()}</div>;
  })
  .add("EventPage page", () => <EventPage onClick={action("clicked")} />);
