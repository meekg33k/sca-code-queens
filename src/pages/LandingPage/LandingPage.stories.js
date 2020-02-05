import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import LandingPage from './index';


storiesOf('LandingPage', module)
	.addDecorator(
		withInfo({
			text: "This is a landing page"
		})
	)
	.addDecorator(story => {
		return <div>{story()}</div>
	})
	.add('Landing page', () => (
		<LandingPage />
	));