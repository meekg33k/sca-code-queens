import React from "react"
import Jumbotron from './index'
import {shallow} from 'enzyme'

describe ('Jumbotron Component render', () => {
    it('renders Jumbotron without breaking', () => {
        const wrapper = shallow(<Jumbotron />);
        expect(wrapper).toMatchSnapshot();
    });
});