import React from "react"
import Text from './index'
import {shallow} from 'enzyme'


describe ('Text Component render', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Text text='It is a text' />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should match greenish color snapshot', () => {
        const wrapper = shallow(<Text color='greenish' />);
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should match medium fontsize snapshot', () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 it('should match medium font-size snapshot', () => {
        const wrapper = shallow(<Text size="medium" />);
        expect(wrapper).toMatchSnapshot();
    });
        
    it('displays text', () => {
        const wrapper = shallow(<Text text='It is a text' />);
        expect(wrapper.text()).toBe('It is a text');
    });
    
})
