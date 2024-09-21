import React from "react";
import Slide from "./Slide";

const Meet = () => {
  return (
    <div className="text-center md:mt-32 md:mb-16 px-5 ">
      <div className="text-content space-y-5">
        <div className="headers">
          <h2 className="md:text-4xl text-lg font-semibold">
            Meet Our Doctors
          </h2>
        </div>
        <div className="para">
          <p className="text-sm md:text-lg text-gray">
            Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.
          </p>
          <p className="text-sm md:text-lg text-gray">Nisi porta lorem.</p>
        </div>
      </div>
      <Slide />
    </div>
  );
};

export default Meet;
