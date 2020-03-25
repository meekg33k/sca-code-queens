import React from "react";
import {storiesOf} from "@storybook/react";
import {withInfo} from "@storybook/addon-info";
import {withKnobs, text} from "@storybook/addon-knobs";
import Image from "./index";

storiesOf("Image", module)
    .addDecorator(
        withInfo({
            text: "This is an Image component"
        })
    )

    .addDecorator(
        withKnobs()
    )

    .add("An image", () => (
        <Image
            source = {text("path", "./assets/smiley.jpg")}
            alt={text("alt", "DJ Spinal")}
            
        />
    ))

    .add("Image", () => (
        <Image
            source = {text("path", "./link/to/image")}
            alt={text("alt", "this is an image")}
            
        />
    ));

    