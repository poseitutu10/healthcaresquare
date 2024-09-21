import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="sub-accordion md:w-1/2 w-full flex flex-col justify-center border p-5 border-primary cursor-pointer"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="questions flex justify-between items-center">
        <h2 className="md:text-xl text-xs font-semibold">{question}</h2>
        <MdAddCircleOutline size={25} className="text-primary" />
      </div>
      <div className={`${show ? "block" : "hidden"}`}>
        {show ? <p className="text-xs md:text-base mt-5">{answer}</p> : ""}
      </div>
    </div>
  );
};

export default Accordion;
