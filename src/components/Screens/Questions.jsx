import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "../../utils";

const Questions = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-32  px-5 ">
      <div className="text-content space-y-5 text-center">
        <div className="headers">
          <h2 className="md:text-4xl text-lg font-semibold">
            Frequently asked questions
          </h2>
        </div>
        <div className="para">
          <p className="text-xs md:text-lg text-gray">
            Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.
          </p>
          <p className="text-xs md:text-lg text-gray text-center">
            Nisi porta lorem.
          </p>
        </div>
      </div>
      <div className="accordion my-5 md:my-20 w-full flex justify-center flex-col gap-5 items-center">
        {accordionData.map((cont) => (
          <Accordion
            key={cont.id}
            question={cont.question}
            answer={cont.answer}
          />
        ))}
        <div className="any-questions md:w-1/2 w-full flex flex-col md:flex-row gap-5 md:gap-20 justify-center border p-5 border-primary ">
          <div className="questions flex flex-col justify-between items-start space-y-3 mb-5 md:w-1/2">
            <h2 className="md:text-2xl  font-semibold">
              Still have questions?
            </h2>
            <p className="text-gray md:text-lg text-xs">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <button className="text-white bg-primary py-2 px-3 w-full text-sm md:text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
