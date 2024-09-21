import React from "react";
import Box from "./Box";

const Estimate = ({ estimate }) => {
  return (
    <div className="flex items-center mx-5 my-5 justify-center md:my-20 md:mx-20 flex-col gap-5">
      <img src={estimate} alt="" className="w-full" />
      <div className="boxes flex w-full flex-col md:flex-row justify-center gap-5">
        <Box main="2B+" />
        <Box main="2008" />
        <Box main="20+" />
      </div>
    </div>
  );
};

export default Estimate;
