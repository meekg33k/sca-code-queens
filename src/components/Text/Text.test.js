import React from "react"
import Text from './index'
import {shallow} from 'enzyme'

describe ('Text Component render', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Text text='It is a text' />);
        expect(wrapper).toMatchSnapshot();
    });

    it('displays text', () => {
        const wrapper = shallow(<Text text='It is a text' />);
        expect(wrapper.text()).toBe('It is a text');
    });
});