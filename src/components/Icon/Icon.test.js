import React from "react"
import { mount, shallow } from 'enzyme';

import Icon from "./"

let iconLinks = [{imgPath: "./assets/apple.svg", url: '#', alt: 'apple icon'}];
let type = "platform";


let setUp = (prop= {}) =>{
    return shallow(<Icon {...prop}/>)
}

describe('Icon Component', () =>{

    let icon
    beforeEach(()=>{ icon = setUp({iconLinks, type}); })

    it('should match Icon snap shot', () =>{
        expect(icon).toMatchSnapshot();
    })
    it('should render icon image correctly', ()=>{
        const image = icon.find('img');

        expect(image.length).toBe(1)
    })
    it('checkes that the node with className exists', () =>{
        const nodeClass = icon.find('.icon')
        const typeClass = icon.find(`.${type}`)

        expect(nodeClass.length).toBe(1)
        expect(typeClass.length).toBe(1)
    })
})

//check property data type
