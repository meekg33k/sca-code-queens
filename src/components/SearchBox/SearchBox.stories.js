import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import SearchBox from "./index";

storiesOf("SearchBox", module)
  .addDecorator(
    withInfo({
      text: "This is a SearchBox component that renders an input field and a button"
    })
  )
  .addDecorator(withKnobs())
  .add("SearchBox", () => (
    // write stories for functions
    <SearchBox onSearch={work} buttonTitle={text("buttonTitle", "button title")}/>

  ));
