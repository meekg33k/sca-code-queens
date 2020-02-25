import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/register';
import Footer from '.';


storiesOf('Footer', module)
	.addDecorator(
		withInfo({
			text: "This is a footer component"
		})
	)
	.add('footer', () => {

        return <Router>
            <Footer />
            </Router>
    })