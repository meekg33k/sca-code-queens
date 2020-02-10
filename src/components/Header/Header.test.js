import React from "react";
import { shallow } from 'enzyme';

import Header from "./index";

describe('Header component', () =>{

    it('renders a heading element', () =>{
        const header = shallow(<Header heading='try this to see'/>)
        expect(header.text()).toBe('try this to see')
    })
    
})