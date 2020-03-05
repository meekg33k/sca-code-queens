import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
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
    <LandingPage
      onClick={action("clicked")}
      text={text("Text", "Sample text")}
    />
  ));
