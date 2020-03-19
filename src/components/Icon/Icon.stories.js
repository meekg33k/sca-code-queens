import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import { facebook } from "../Footer";
import Icon from ".";

storiesOf("Icon", module)
  .addDecorator(
    withInfo({
      text: "This is a component that renders Icon"
    })
  )
  .addDecorator(withKnobs())
  .add("Icon", () => {
    return <Icon src={facebook} alt="facebook" />;
  })
  .add("your icon", () => {
    const src = text("path", "./link/to/icon");
    const alt = text("alt", "insert alt message");

    return <Icon src={src} alt={alt} />;
  });
