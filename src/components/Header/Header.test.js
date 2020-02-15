import React from "react";
import { shallow } from 'enzyme';

import Header from "./index";

describe('Header snapshot for different level heading', () => {
    it('should match the H1 snapshot', () => {
        const wrapper = shallow(
            <Header 
                heading= 'h1 heading'
                color = "blue"
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should match the H2 snapshot', () => {
        const wrapper = shallow(
            <Header 
                heading= 'h2 heading'
                color = "blue"
                size = {2}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should match the H3 snapshot', () => {
        const wrapper = shallow(
            <Header 
                heading= 'h3 heading'
                color = "blue"
                size = {3}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
})
    let title;

    beforeEach(() => {
        title = 'show some heading'
    })

describe('Header output', () =>{

    it('renders the title in <h1> tags', () => {
        const header = shallow(<Header heading= {title} />);
        expect(header.text()).toEqual(title);
    });
    
})

