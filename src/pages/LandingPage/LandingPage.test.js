import React from 'react';
import LandingPage from './index';
import { render } from 'enzyme';

describe('Landing Page render', () => {
	it('renders correctly', () => {
		const wrapper = render(<LandingPage />);
		expect(wrapper).toMatchSnapshot();
	});

	it('displays the landing page', () => {
		const wrapper = render(<LandingPage />);
		expect(wrapper.text()).toBe('This is the landing page');
	});
});