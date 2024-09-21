import React from "react";

const Appointment = ({ image, reverse, headOne, headTwo }) => {
  return (
    <div
      className={`md:pt-32 md:px-20 px-5 py-10 flex flex-col-reverse ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } md:flex-row justify-center items-center gap-10`}
    >
      <div className="left md:w-1/2">
        <img src={image} alt="" />
      </div>

      <div className="right space-y-5 md:space-y-5">
        <button className="text-white bg-primary py-2 px-3 text-sm md:text-base">
          APPOINTMENT
        </button>

        <div className="header">
          <h2 className="md:text-5xl font-semibold text-base">{headOne}</h2>
          <h2 className="md:text-5xl font-semibold text-base">{headTwo}</h2>
        </div>

        <p className="text-sm text-gray md:text-xl">
          Delivering Exceptional Care and Advanced Medical Solutions for Your
          Health and Well-being
        </p>
        <button className="text-white bg-primary py-2 px-3">Learn More</button>
      </div>
    </div>
  );
};

export default Appointment;
