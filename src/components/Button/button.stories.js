import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import Button from "./";

storiesOf("Button", module)
  .addDecorator(
    withInfo({
      text: "This is a button component"
    })
  )
  .addDecorator(withKnobs())
  .add("Button", () => (
    <Button
      title={text("title", "insert a text on your button")}
    />
  ));
