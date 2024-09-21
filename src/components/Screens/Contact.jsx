import React from "react";
import contactus from "../../assets/contactus.jpg";

const Contact = () => {
  return (
    <div className=" md:m-0 space-y-10 md:space-y-20 flex flex-col md:flex-row gap-5 md:gap-20 mx-5 my-5 md:mx-20 md:px-10">
      <div className="left p- md:p-10 md:mt-20 md:w-2/5 space-y-5 md:space-y-5">
        <button className="text-white bg-primary py-2 px-3 text-sm md:text-base">
          APPOINTMENT
        </button>

        <div className="header">
          <h2 className="md:text-5xl font-semibold text-base">
            Get in Touch with Us
          </h2>
          <h2 className="md:text-5xl font-semibold text-base">
            We’re Here to Help!
          </h2>
        </div>

        <p className="text-sm text-gray md:text-xl">
          Delivering Exceptional Care and Advanced Medical Solutions for Your
          Health and Well-being
        </p>
        <form action="post" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Email"
            className="border border-primary w-full p-2 text-sm md:p-4 md:text-xl"
          />

          <textarea
            placeholder="Your Message"
            className="border border-primary w-full p-2 text-sm md:p-4 md:text-xl"
          ></textarea>
          <button className="text-white bg-primary p-2 md:p-4 text-sm md:text-base">
            Submit
          </button>
        </form>
      </div>

      <div className="right object-cover md:w-3/5">
        <img
          src={contactus}
          alt="contact"
          className="h-4/5 md:w-full md:sticky top-10 -z-10 "
        />
        {/* <div className="location flex md:gap-10 md:mt-5">
          <div className="head">
            <h2 className="text-xl font-semibold text-primary">555-0198</h2>
            <h2 className="text-xl font-semibold text-primary">
              123 Maple, Spriengfield, IL 62701
            </h2>
          </div>
          <h2 className="text-xl font-semibold text-primary">
            Monday - Saturday: 9 am - 11.30 pm
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
