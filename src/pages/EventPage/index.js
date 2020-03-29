import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import EventDetail from "../../components/EventDetail";
import EventTag from "../../components/EventTag";
import Location from "../../components/Location";

export const peopleIcon = "./assets/people.svg"

export const EventPage = () => {
  return (
    <div className="event-page">
      
      <Navigation />
      
      <EventTag 
      icon={peopleIcon}
      attendeeNumber={100}
      size={"largeTag"}
      />
      <EventTag 
      icon={peopleIcon}
      attendeeNumber={100}
      size={"smallTag"}
      opacity={true}/>
      <EventTag 
      icon={peopleIcon}
      partyType={"wedding"}
      size={"smallTag"}
      opacity={false}/>
      <Location 
        name= "DJ Spinal Take Over" 
        location="Party Club Estate, Alalaba, Lagos" 
      />
      <EventDetail 
      about={"DJ Spinal shutting Down popular club in Yaba"}
      time={"8:00 PM - Dawn"}
      date={"28th January, 2020"}/>
      
      <Footer />
      
    </div>
  );
};

export default EventPage;
