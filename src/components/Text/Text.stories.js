import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from "@storybook/addon-knobs";
import Text from './index';


storiesOf('Text', module)
	.addDecorator(
		//Allows you to provide information about the component
		withInfo({
			text: "This is a text component"
		})
	)
	.addDecorator(
		withKnobs() //allows you to interact with the component in Storybook
	)
	.add('Text', () => (
		<Text text={text('text', 'Sample text')} />
	));