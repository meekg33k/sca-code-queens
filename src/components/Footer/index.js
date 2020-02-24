import React from "react";

import List from "../List";
import Header from "../Header";
import Icon from "../Icon"
import Text from "../Text"
import "./Footer.css"

const android = "./assets/android.svg"
const apple = "./assets/apple.svg"
const facebook = "./assets/facebook.svg"
const linkedin = "./assets/linkedin.svg"
const youtube = "./assets/youtube.svg"

const Footer = () => {
    let links = {
        Categories: ["All events", "Weddings", "Birthdays", "Karoake", "Clubs", "Get togethers"],
        Resources: ["Media resources", "Terms & conditions", "Privacy policy"],
        QuickLinks: ["Blogs", "Company", "Pricing"]
    }
    let platform =[
        {imgPath: apple, url: '#', alt: 'apple icon'},
        {imgPath: android, url: '#', alt: 'android icon'}];
    let socials = [
        {imgPath: facebook, url: 'https://www.facebook.com', alt: 'facebook icon'}, 
        {imgPath: linkedin, url: 'https://www.linkedin.com', alt: 'linkedin icon'},
        {imgPath: youtube, url: 'https://www.youtube.com', alt: 'youtube icon'}
        ]

    let group = Object.entries(links).map(([key, value]) => {
        return (
            <div key={key} className="linkGroup">
                <Header heading={key} size={3} />
                {<List links={value} />}
            </div>
        )
    })
    return (
        <footer>
            <div className="footerLink">
            {group}
            <Icon iconLinks={socials} type={"socials"}/>

            </div>
            <Text text="Download App"/>
            <Icon iconLinks={platform} type={"platform"}/>

        </footer>
    )

}

export default Footer