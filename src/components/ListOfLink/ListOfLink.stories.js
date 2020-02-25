import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, array} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import ListOfLink from '.';


storiesOf('List', module)
	.addDecorator(
		withInfo({
			title: "The List component coverts and array of strings to a list of links"
		})
	)
	.addDecorator(
		withKnobs() 
	)
	.add('List', () => ( 
		<Router>
			<List links={array('create link', ['link1'])}  />
	  	</Router>))

// onClick={action('Clicked-Link')}