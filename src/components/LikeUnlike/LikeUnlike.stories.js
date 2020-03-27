import React from "react";
import {storiesOf} from "@storybook/react";
import {withInfo} from "@storybook/addon-info";
import {withKnobs, text} from "@storybook/addon-knobs";
import LikeUnlike from "./index";

storiesOf("LikeUnlike", module)
    .addDecorator(
        withInfo({
            text: "This is a component for the Like or Unlike button"
        })
    )

    .addDecorator(
        withKnobs()
    )

    .add("A like button", () => (
        <LikeUnlike
            source = {text("path", "./assets/thumbsup.png")}
            alt={text("alt", "Like button")}
            
        />
    ))

    .add("A like icon", () => (
        <LikeUnlike
            source = {text("path", "./link/to/icon")}
            alt={text("alt", "this is an icon")}
            
        />
    ));