import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {withKnobs, text } from "@storybook/addon-knobs";
import Text from './index';


storiesOf('Text', module)
	.addDecorator(
		withInfo({
			text: "This is a Text Component"
		})
	)
    .addDecorator(
        withKnobs()
    )
	.addDecorator(story => {
		return <div>{story()}</div>
	})
	.add('Text', () => (
		<Text text={text('Text', 'Demo Text')} />
	));