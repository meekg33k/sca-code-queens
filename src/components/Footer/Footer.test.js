import React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import { render } from 'enzyme';


import Footer from "./"

let footer
let setUp = () =>{
    return render(
        <Router>
            <Footer />
        </Router>);  
}
beforeEach(()=>{
    footer = setUp();
})

describe('Footer Component', () =>{
    it('takes Footer snapShots', () => {
		expect(footer).toMatchSnapshot();
	});
    it('test if link component is rendered correctly', ()=>{
        const links = footer.find("ul")
            expect(links.length).toBe(3)
    })
    it('test if Icon component is rendered correctly', ()=>{
        const icon = footer.find("ul")
            expect(icon.length).toBe(3)
    })
    it('test if Header component is rendered correctly', ()=>{
        const header = footer.find(".icon")
            expect(header.length).toBe(2)
    })
})