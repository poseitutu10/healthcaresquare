import React from "react";
import Box from "./Box";
import BoxA from "./BoxA";

const EstimateA = ({ estimate }) => {
  return (
    <div className="flex items-center mx-5 my-5 justify-center md:my-40 md:mx-20 flex-col gap-5">
      <div className="boxes flex w-full flex-col md:flex-row justify-between gap-5 md:gap-20 ">
        <div className="md:w-1/2 space-y-5">
          <h2 className="md:text-5xl font-semibold">
            You’re in <span className="text-primary">Good Hands</span>
          </h2>
          <p className="md:text-xl text-gray text-xs">
            Lorem ipsum dolor sit amet consectetur. In quis aliquet leo in vel
            pharetra pellentesque convallis. Cras aliquam a faucibus
          </p>
        </div>
        <div className="md:w-1/2 space-x-5 flex justify-around">
          <BoxA main="2B+" />
          <BoxA main="2008" />
        </div>
      </div>
      <img src={estimate} alt="" className="w-full" />
    </div>
  );
};

export default EstimateA;
