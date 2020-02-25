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
    it('test all links are rendered', ()=>{
        const links = footer.find("ul")
            expect(links.length).toBe(5)
    })
  
})