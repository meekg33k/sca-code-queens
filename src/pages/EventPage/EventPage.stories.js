import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
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
  .add("EventPage", () => (
    <Router>
      <EventPage />
    </Router>
  ));
