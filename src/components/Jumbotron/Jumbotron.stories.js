import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Jumbotron from "./index";

storiesOf("Jumbotron", module)
  .addDecorator(
    withInfo({
      text: "This is the Jumbotron Component"
    })
  )
  .add("Jumbotron", () => <Jumbotron />);
