import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Navigation from ".";

storiesOf("Navigation", module)
  .addDecorator(
    withInfo({
      text: "This is a Navigation component"
    })
  )
  .add("Navigation", () => {
    return (
      <Router>
        <Navigation />
      </Router>
    );
  });
