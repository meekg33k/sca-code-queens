import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Navigation from './components/Navigation/index';

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navigation />
      <Jumbotron />
      <Footer />
    </div>
  );
};

export default LandingPage;
