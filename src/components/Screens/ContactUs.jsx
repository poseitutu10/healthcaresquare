import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="text-center mt-5 md:mt-16 px-5 ">
        <div className="text-content space-y-5">
          <div className="headers">
            <h2 className="md:text-4xl text-lg font-semibold">
              The Way to Contact Us
            </h2>
          </div>
          <div className="para">
            <p className="text-sm md:text-lg text-gray">
              Delivering Exceptional Care and Advanced Medical
            </p>
            <p className="text-sm md:text-lg text-gray">
              Solutions for Your Health and Well-being
            </p>
          </div>
        </div>
      </div>
      <div className="form flex items-center justify-center mt-10 mb-20 md:my-20">
        <form method="post" className="md:w-2/5 space-y-5 md:space-y-10">
          <div className="name-email w-full flex flex-col md:flex-row gap-5 md:gap-10">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-primary p-1 md:p-3 text-xs md:text-xl outline-none w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="border border-primary p-1 md:p-3 text-xs md:text-xl outline-none w-full md:w-1/2"
            />
          </div>
          <textarea
            name=""
            fixed
            id=""
            cols="30"
            rows="10"
            className="border border-primary w-full text-xs md:text-xl outline-none p-1 md:p-3"
            placeholder="Your Message"
          ></textarea>
          <button className="text-white bg-primary p-2 md:p-4 text-sm md:text-xl w-full">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
