import React from "react"
import { mount, shallow } from 'enzyme';
import { facebook } from "../Footer/"

import Icon from "./"

let src = facebook; let alt="facebook";

let setUp = () =>{
    return shallow(<Icon src={src} alt={alt} />)
}

describe('Icon Component', () =>{

    let icon
    beforeEach(()=>{ icon = setUp(); })

    it('should match Icon snap shot', () =>{
        console.log(icon.debug())
        expect(icon).toMatchSnapshot();
    })
    it('should render icon image correctly', ()=>{
        const image = icon.find('img');

        expect(image.length).toBe(1)
    })
})

//check property data type
