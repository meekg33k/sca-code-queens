import React from "react";
import {storiesOf} from "@storybook/react";
import {withInfo} from "@storybook/addon-info";
import {withKnobs, text} from "@storybook/addon-knobs";
import CoverPhoto from "./index";

storiesOf("CoverPhoto", module)
    .addDecorator(
        withInfo({
            text: "This is a CoverPhoto component"
        })
    )

    .addDecorator(withKnobs()
    )

    .add("CoverPhoto", () => (
        <CoverPhoto
            name={text("name", "name of artiste")}
        />
    ));