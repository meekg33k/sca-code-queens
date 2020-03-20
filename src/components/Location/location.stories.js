import React from "react";
import {storiesOf} from "@storybook/react";
import {withInfo} from "@storybook/addon-info";
import {withKnobs, text} from "@storybook/addon-knobs";
import Location from "./index";

storiesOf("Location", module)
    .addDecorator(
        withInfo({
            text: "This is a Location component"
        })
    )

    .addDecorator(
        withKnobs()
    )

    .add("Location", () => (
        <Location
            name={text("name", "Event venue")}
            location={text("location","event location")} 
        />
    ));