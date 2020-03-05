import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array } from "@storybook/addon-knobs";

import ListOfLink from ".";

storiesOf("ListOfLink", module)
  .addDecorator(
    withInfo({
      title: "The is component renders a list of any item supplied"
    })
  )
  .addDecorator(withKnobs())
  .add("ListOfLink", () => (
    <Router>
      <ListOfLink item={array("create link", ["link1"])} />
    </Router>
  ));
