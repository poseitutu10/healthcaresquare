import React from "react";
import homepic from "../../assets/home.jpg";

const Front = () => {
  return (
    <div className="m-5 md:m-0 space-y-10 md:space-y-0 flex flex-col md:flex-row md:h-[100vh]">
      <div className="left bg-primary text-white p-5 md:p-10  space-y-5 md:h-[50vh] md:mt-20 md:w-[500px] md:sticky top-10 -z-10">
        <h2 className="text-2xl md:text-5xl font-semibold">
          Compassionate Care for Every Patient like you
        </h2>
        <p className="">
          Providing Exceptional and Compassionate Care with Advanced Medical
          Solutions for Every Patient's
        </p>
        <button className="text-primary bg-white w-full py-2 text-sm cursor-pointer md:text-lg font-semibold">
          Learn More
        </button>
      </div>

      <div className="right md:h-full object-cover">
        <img src={homepic} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default Front;
