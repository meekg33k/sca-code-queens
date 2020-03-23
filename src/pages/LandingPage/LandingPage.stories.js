import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text } from "@storybook/addon-knobs";
import LandingPage from "./index";

storiesOf("LandingPage", module)
  .addDecorator(
    withInfo({
      text: "This is a landing page"
    })
  )
  .addDecorator(story => {
    return <div>{story()}</div>;
  })
  .add("Landing page", () => (
    <Router>
      <LandingPage text={text("Text", "Sample text")} />
    </Router>
  ));
