import React from "react";
import { shallow } from 'enzyme';

import List from "./"

let setUp = (prop) =>{
    return shallow(<List links={prop}/>)
}

describe('List Component', () =>{

    let link = ["link", "kerry"];
    let list
    beforeEach(()=>{ 
        list = setUp(link)
    })

    it('should match Icon snap shot', () =>{
        expect(list).toMatchSnapshot();
    })
    it('should render the right amount of links on list', ()=>{
        const nodes = list.find('li');

        expect(nodes.length).toBe(link.length)
    })
  
})