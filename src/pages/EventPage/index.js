import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Location from "../../components/Location";

export const EventPage = () => {
  return (
    <div className="event-page">
      <Navigation />
      <Location 
        name= "DJ Spinal Take Over" 
        location="Party Club Estate, Alalaba, Lagos" 
      />
      <Footer />
    </div>
  );
};

export default EventPage;
