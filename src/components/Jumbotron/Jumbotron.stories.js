import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {withKnobs, text } from "@storybook/addon-knobs";
import Jumbotron from './index';


storiesOf('Jumbotron', module)
	.addDecorator(
		withInfo({
			text: "This is the Jumbotron Component"
		})
	)
	.addDecorator(
		withKnobs()
	)
	.add('Jumbotron', () => <Jumbotron />)
	//.add('Jumbotron', () => <Jumbotron showApp={linkTo('Text')} />)
	.add('Jumbotron', () => <Jumbotron />);