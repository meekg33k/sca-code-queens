import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import Header from "./index";

storiesOf("Header", module)
  .addDecorator(
    withInfo({
      text: "This is a header component"
    })
  )
  .addDecorator(withKnobs())
  .add("Header", () => (
    <Header
      heading={text("heading", "Sample text")}
      size={number("size", "2")}
      color={text("color", "green")}
    />
  ));
