import React from "react";
import { mount, shallow } from 'enzyme';

import Header from "./index";

describe('Header snapshot for different level heading', () => {
    it('should match the H1 snapshot', () => {
        const wrapper = mount(
            <Header 
                heading= 'h1 heading'
                color = "blue"
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should match the H2 snapshot', () => {
        const wrapper = mount(
            <Header 
                heading= 'h2 heading'
                color = "blue"
                size = {2}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should match the H3 snapshot', () => {
        const wrapper = mount(
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
    let title;
    let component;

    const setUp = (prop={}) => {
        component = shallow(<Header {...prop} />);
        return component;   
    }

    beforeEach(() => {
        title = 'show some heading';
    })
    afterEach(() => {
        component.unmount()
    })

    it('renders the <h1> element and title correctly', () => {
        component = setUp({heading: title})
        const header = component.find('h1');

        expect(header.length).toBe(1)
        expect(header.text()).toEqual(title);

    });
    it('renders the <h2> element and title correctly', () => {
        component = setUp({heading: title, size:2})
        const header = component.find('h2');
        
        expect(header.length).toBe(1)
        expect(header.text()).toEqual(title);

    });
    it('renders the <h3> element and title correctly', () => {
        component = setUp({heading: title, size:3})
        const header = component.find('h3');
        
        expect(header.length).toBe(1)
        expect(header.text()).toEqual(title);

    });
    
})

