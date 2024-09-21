import React from "react";

const Slidecard = ({ pic }) => {
  return (
    <div className="slide w-2/3 md:w-1/5 h-full">
      <img src={pic} alt="docPic"  className="h-4/5 w-full"/>
      <div className="details h-1/5 flex flex-col my-5">
        <h2 className="flex md:text-xl text-sm font-semibold">Luke Voiles</h2>
        <p className="flex text-xs">Chief Executive Officer</p>
      </div>
    </div>
  );
};

export default Slidecard;
