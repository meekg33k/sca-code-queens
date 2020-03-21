import React from "react";
import "./EventDetail.css"
import Header from "../Header/index";
import Text from "../Text/index";

const EventDetail = ({about, time, date}) => {
    return (
        <aside className="eventDetails">
        <Header 
        heading={"Event Details:"}
        color={"grey"}
         size= {2}/>
            <Header
            heading= {"About:"}
            color={"grey"}
            size= {3}/>
                <Text 
                 text= {about}
                 size= {"default"}/>
            <Header
            heading= {"Time:"}
            color={"grey"}
            size= {3}/>
                <Text
                text= {time}
                size= {"default"}/>
            <Header
            heading= {"Date:"}
            color={"grey"}
            size= {3}/>
                <Text
                text= {date}
                size= {"default"}/>
        </aside>        
    )
}

export default EventDetail;