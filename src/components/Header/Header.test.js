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

describe('Header output', () =>{

    it('renders the title in <h1> tags', () => {
        const header = shallow(<Header heading='show some heading' />);
        const title = <h1>show some heading</h1>;
    
        expect(header.contains(title)).toEqual(true);
    });
    it('renders the title in <h2> tags', () => {
        const header = shallow(<Header heading='show some heading' size={2}/>);
        const title = <h2>show some heading</h2>;
    
        expect(header.contains(title)).toEqual(true);
    });
    it('renders the title in <h3> tags', () => {
        const header = shallow(<Header heading='show some heading' size={3}/>);
        const title = <h3>show some heading</h3>;
    
        expect(header.contains(title)).toEqual(true);
    });
    // it('renders a heading element', () =>{
    //     const header = shallow(<Header heading='try this to see'/>)
    //     expect(header.text()).toBe('try this to see')
    // })    
})

