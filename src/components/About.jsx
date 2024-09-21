import React from "react";
import Active from "./Screens/Active";
import Header from "./Screens/Header";
import Footer from "./Screens/Footer";
import FrontA from "./Screens/FrontA";
import Appointment from "./Screens/Appointment";
import appointOne from "../assets/appointmentOne.jpg";
import appointTwo from "../assets/appointmentTwo.jpg";
import EstimateA from "./Screens/EstimateA";
import estimate from "../assets/discover_two.jpg";
import Contact from "./Screens/Contact";
import Meet from "./Screens/Meet";
import Questions from "./Screens/Questions";

const About = () => {
  return (
    <>
      <Active />
      <Header />
      <FrontA />
      <EstimateA estimate={estimate} />
      <Appointment
        image={appointOne}
        reverse={false}
        headOne="Meet Our Expert Team of"
        headTwo="Specialized Doctors"
      />
      <Appointment
        image={appointTwo}
        reverse={true}
        headOne="Our Dedicated Medical"
        headTwo="and Support Staff"
      />
      <Meet />
      <Questions />
      <Contact />
      <Footer />
    </>
  );
};

export default About;
