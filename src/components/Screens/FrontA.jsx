import React from "react";
import homepic from "../../assets/home.jpg";

const FrontA = () => {
  return (
    <div className="m-5 md:m-0 space-y-10 md:space-y-0 flex flex-col md:flex-row md:h-[100vh] items-center">
      <div className="left p-5 md:p-10  space-y-5 md:h-[50vh] md:mt-20 md:w-[500px]">
        <h2 className="text-2xl md:text-5xl font-semibold">
          Compassionate Care for Every Patient like you
        </h2>
        <p className="text-gray">
          Providing Exceptional and Compassionate Care with Advanced Medical
          Solutions for Every Patient's
        </p>
        <button className="text-white bg-primary w-full py-2 text-sm cursor-pointer md:text-lg font-semibold">
          Learn More
        </button>
      </div>

      <div className="right h-[50vh] md:h-full object-cover">
        <img src={homepic} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default FrontA;
