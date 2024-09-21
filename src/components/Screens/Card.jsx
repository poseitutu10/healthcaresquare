import React from "react";

const Card = ({header}) => {
  return (
    <div className="des space-y-3">
      <h2 className="text-lg font-semibold">{header}</h2>
      <p className="text-gray text-sm md:text-base">
        Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nonmauris nulla
        tincidunt appetfermentum amet sit.
      </p>
      <button className="text-white bg-primary py-2 px-3 w-full">
        Learn More
      </button>
    </div>
  );
};

export default Card;
