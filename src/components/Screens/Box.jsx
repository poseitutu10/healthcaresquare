import React from "react";

const Box = ({main}) => {
  return (
    <div className="border border-primary md:w-1/5 w-full h-[12vh] md:h-[18vh] flex flex-col text-sm md:text-base text-gray justify-center items-center">
      <h2 className="text-3xl font-bold text-primary md:text-6xl">{main}</h2>
      <p className="md:text-lg">Lorem ipsum dolor sit amet</p>
    </div>
  );
};

export default Box;
