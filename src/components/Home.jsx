import React from "react";
import Active from "./Screens/Active";
import Header from "./Screens/Header";
import Front from "./Screens/Front";
import Discover from "./Screens/Discover";
import Sections from "./Screens/Sections";
import Appointment from "./Screens/Appointment";
import appointOne from "../assets/appointmentOne.jpg";
import appointTwo from "../assets/appointmentTwo.jpg";
import estimate from "../assets/discover_two.jpg";
import Estimate from "./Screens/Estimate";
import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";

const Home = () => {
  return (
    <>
      <Active />
      <Header />
      <Front />
      <Discover />
      <Sections />
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
      <Discover />
      <Estimate estimate={estimate} />
      <Contact />
      <Footer />
     
    </>
  );
};

export default Home;
