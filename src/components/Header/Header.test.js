import React from "react";
import { shallow } from 'enzyme';

import Header from "./index";

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

