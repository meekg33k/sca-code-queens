import React from "react"
import Icon from "../Icon/";
import ListOfLink from "../ListOfLink";

import Header from "../Header";
import Text from "../Text"
import "./Footer.css"

const android = "./assets/android.svg"
const apple = "./assets/apple.svg"
export const facebook = "./assets/facebook.svg"
const linkedin = "./assets/linkedin.svg"
const youtube = "./assets/youtube.svg"

export const platform = [{
        item: <Icon src={apple} alt={'apple icon'}/>,
        link: "/lfdjd"
    },{
        item: <Icon src={android} alt={'android icon'}/>,
        link: "#"
    }]
export let socials = [{
        item: <Icon src={facebook} alt={'facebook icon'}/>,
        link: 'https://www.facebook.com'
    },{
        item: <Icon src={linkedin} alt={'linkedin icon'}/>,
        link: 'https://www.linkedin.com'
    },{
        item: <Icon src={youtube} alt={'youtube icon'}/>,
        link: 'https://www.youtube.com'
    }]
export let link =[{
        Categories: ["All events", "Weddings", "Birthdays", "Karoake", "Clubs", "Get togethers"],
        Resources: ["Media resources", "Terms & conditions", "Privacy policy"],
        QuickLinks: ["Blogs", "Company", "Pricing"],
    }]

const Footer = () => { 

    let group = Object.entries(link[0]).map(([key, value]) => {
        return (
            <div key={key} className="linkGroup">
                <Header heading={key} size={3} color={"white"}/>
                {<ListOfLink item={value}/>}
            </div>
        )
    })
    
    return (
        <footer>
            <div className="footerLink">
             {group}
             <span>
             <ListOfLink item={socials}/>
             </span>
             
            </div>
            <div className="download">
                <Text text="Download App" size="extrasmall"/>
                <ListOfLink item={platform}/>
            </div>
        </footer>
    )

}

export default Footer